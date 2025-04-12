// import { useState } from "react";
// import Confetti from "react-confetti";
// import Head from "next/head";

// export default function Home() {
//   const [accepted, setAccepted] = useState(false);

//   return (
//     <div className="bg-gradient-to-br from-pink-100 to-pink-300 min-h-screen flex flex-col items-center justify-center text-center px-6">
//       <Head>
//         <title>For Madhu ❤️</title>
//       </Head>

//       {accepted && <Confetti />}

//       <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 animate-bounce">
//         Dear Madhu Kumari 💖
//       </h1>

//       <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
//         I&apos;m Deepak Thakur, and every moment with you feels magical. From
//         the way you smile to the way you light up my day, you&apos;ve become so
//         special to me.
//       </p>

//       <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
//         So here&apos;s something from my heart...
//       </p>

//       {!accepted ? (
//         <>
//           <p className="text-2xl font-semibold text-pink-800 mb-8">
//             Will you be mine forever? 💍
//           </p>
//           <div className="flex gap-4">
//             <button
//               onClick={() => setAccepted(true)}
//               className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all text-lg"
//             >
//               Yes, I will 💞
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className="mt-6">
//           <h2 className="text-3xl font-bold text-green-600 animate-pulse">
//             You said YES! 💃💍
//           </h2>
//           <p className="mt-4 text-lg text-gray-800">
//             You’ve made me the happiest person alive. I can&apos;t wait to
//             create beautiful memories with you.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState } from "react";
import Confetti from "react-confetti";
import Head from "next/head";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ top: "0px", left: "0px" });

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    setNoBtnPosition({
      top: `${y}px`,
      left: `${x}px`,
    });
  };

  return (
    <div className="bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden font-sans">
      <Head>
        <title>Madhu Proposal 💖</title>
      </Head>

      {accepted && <Confetti numberOfPieces={300} recycle={false} />}

      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 mb-4 animate-bounce">
        Hey Madhu Kumari 💖
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-6">
        I&apos;m Deepak Thakur, and I have something special to ask you... 💌
      </p>

      {!accepted ? (
        <>
          <p className="text-2xl md:text-3xl text-pink-800 font-semibold mb-8 animate-pulse">
            Will you be mine forever? 💍💕
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative">
            <button
              onClick={() => setAccepted(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              Yes, I will 💞
            </button>

            {/* Funny "No" button that moves away */}
            <button
              onMouseEnter={moveNoButton}
              className="absolute bg-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full text-lg transition-all duration-200 shadow-md"
              style={{
                top: noBtnPosition.top,
                left: noBtnPosition.left,
              }}
            >
              No 😅
            </button>
          </div>
        </>
      ) : (
        <div className="mt-8">
          <h2 className="text-4xl font-bold text-green-600 animate-bounce mb-4">
            You said YES! 💃💍
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-xl mx-auto">
            You&apos;ve made me the happiest person alive! Let&apos;s make beautiful,
            funny, silly, and unforgettable memories together 💖🌈✨
          </p>
        </div>
      )}

      <footer className="absolute bottom-4 text-sm text-gray-500">
        Made with 🥰 by Deep@k
      </footer>
    </div>
  );
}
