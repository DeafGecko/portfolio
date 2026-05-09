"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="p-3 rounded bg-slate-900 text-white"
        placeholder="Your name"
      />

      <input
        className="p-3 rounded bg-slate-900 text-white"
        placeholder="Email"
      />

      <textarea
        className="p-3 rounded bg-slate-900 text-white"
        placeholder="Message"
      />

      <button
        type="submit"
        className="bg-blue-500 p-3 rounded text-white hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
}