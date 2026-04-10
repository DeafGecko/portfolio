'use client';
import { useState, useRef } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus('Message sent!');
      formRef.current?.reset();  // Safe reset
    } else {
      setStatus('Error');
    }
  };

  return (
    <div className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Let's Work Together</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 border rounded-lg" />
        <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 border rounded-lg" />
        <textarea name="message" placeholder="Message" rows={4} required className="w-full px-4 py-3 border rounded-lg"></textarea>
        <button type="submit" className="px-8 py-4 bg-black text-white rounded-full">Send</button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};
