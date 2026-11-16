import type { APIRoute } from "astro";

export const prerender = false;

// Where contact messages are delivered.
const RECIPIENT = "dwirog@gmail.com";

// Sender shown on the email. Use a verified domain address once it is set up in Resend.
const FROM = process.env.CONTACT_FROM || "onboarding@resend.dev";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? "").trim().slice(0, max);
}

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ ok: false, error: "Email is not set up yet." }, 500);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "Could not read the message." }, 400);
  }

  // Honeypot: real visitors never fill this hidden field, bots often do.
  if (clean(form.get("website"), 200) !== "") {
    return json({ ok: true });
  }

  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 200);
  const subject = clean(form.get("subject"), 150).replace(/[\r\n]+/g, " ");
  const message = clean(form.get("message"), 5000);

  if (!name || !subject || !message || !EMAIL_PATTERN.test(email)) {
    return json({ ok: false, error: "Please check the name, email, subject and message." }, 400);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [RECIPIENT],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    }),
  });

  if (!response.ok) {
    return json({ ok: false, error: "The message could not be sent. Please try again." }, 502);
  }

  return json({ ok: true });
};
