"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-gray-50 to-white">
      {step === 0 && (
        <>
          <h1 className="text-5xl font-bold mb-4">InterGhost 👻</h1>
          <p className="text-lg text-gray-600 mb-6 max-w-xl">
            Get honest feedback on why you were rejected — anonymously, from real recruiters.
          </p>
          <button
            onClick={() => setStep(1)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Get My Feedback
          </button>
        </>
      )}

      {step === 1 && (
        <>
          <h2 className="text-3xl font-semibold mb-3">Upload Your Rejection Email</h2>
          <p className="text-gray-600 mb-6">We’ll analyze it and send back a breakdown in under 48 hours.</p>
          <input type="file" className="mb-4 border p-2 rounded" />
          <button
            onClick={() => setStep(2)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-3xl font-semibold mb-3">All set! 🎉</h2>
          <p className="text-gray-600 mb-6">We’ll email you feedback once your report is ready.</p>
          <button
            onClick={() => setStep(0)}
            className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Back Home
          </button>
        </>
      )}
    </main>
  );
}
