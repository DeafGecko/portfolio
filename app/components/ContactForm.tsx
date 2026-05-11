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
        rows={8}
        className="min-h-[250px] resize-none rounded-xl border border-slate-800 bg-slate-900 p-4 text-white outline-none transition-colors focus:border-blue-500"
        placeholder="Tell me about your project, ideas, goals, or collaboration opportunity..."
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