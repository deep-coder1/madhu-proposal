import { useState } from 'react';
import Confetti from 'react-confetti';
import Head from 'next/head';

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="bg-gradient-to-br from-pink-100 to-pink-300 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <Head>
        <title>For Madhu ❤️</title>
      </Head>

      {accepted && <Confetti />}

      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 animate-bounce">
        Dear Madhu Kumari 💖
      </h1>

      <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
        I'm Deepak Thakur, and every moment with you feels magical. From the way you smile to the way you light up my day, you've become so special to me.
      </p>

      <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
        So here's something from my heart...
      </p>

      {!accepted ? (
        <>
          <p className="text-2xl font-semibold text-pink-800 mb-8">
            Will you be mine forever? 💍
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setAccepted(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all text-lg"
            >
              Yes, I will 💞
            </button>
          </div>
        </>
      ) : (
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-green-600 animate-pulse">
            You said YES! 💃💍
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            You’ve made me the happiest person alive. I can't wait to create beautiful memories with you.
          </p>
        </div>
      )}
    </div>
  );
}
