"use client";

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <main className="min-h-screen">
        <iframe
          data-tally-src="https://tally.so/r/rjy8v2?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="InterGhost Tally Form"
          style={{ minHeight: "100vh", border: "none" }}
        ></iframe>

        {/* Tally embed script */}
        <script async src="https://tally.so/widgets/embed.js"></script>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-bold mb-4">InterGhost 👻</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Get honest feedback on why you were rejected — anonymously, from real recruiters.
      </p>
      <button
        onClick={() => setShowForm(true)}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Get Started
      </button>
    </main>
  );
}
