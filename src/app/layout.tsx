export const metadata = {
  title: "InterGhost 👻",
  description: "Understand why you were rejected — clear, actionable feedback in 48 hours.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
