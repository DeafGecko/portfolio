import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AdminPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="border p-4 rounded-lg shadow">
            <p><strong>{msg.name}</strong> ({msg.email})</p>
            <p className="mt-2">{msg.message}</p>
            <p className="text-xs text-gray-400 mt-2">{new Date(msg.createdAt).toLocaleString()}</p>
          </div>
        ))}
        {messages.length === 0 && <p>No messages yet. Submit one from the contact form.</p>}
      </div>
    </main>
  );
}
