

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeVideo from '../assets/videos/Nahom film production official logo.mp4'; // ከም ቫሪያብል ኢምፖርት ግበር

function Welcome() {
  const navigate = useNavigate();

  const handleEnter = () => {
    sessionStorage.setItem('hasSeenWelcome', 'true'); // ዝኽሪ ክንገብር
    navigate('/home');
  };

  useEffect(() => {
    if (sessionStorage.getItem('hasSeenWelcome')) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <video 
        autoPlay muted playsInline 
        onEnded={handleEnter}
        className="w-full h-full object-cover"
        src={welcomeVideo} // ኣብዚ ቫሪያብል ተጠቐም
      />
      <button 
        onClick={handleEnter}
        className="absolute bottom-12 text-white border border-white/50 px-8 py-3 hover:bg-white hover:text-black transition-all bg-gray-800"
      >
        Enter Website
      </button>
    </div>
  );
}

export default Welcome;

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import welcomeVideo from "../assets/videos/Nahom film production official logo.mp4";
// import logo from "../assets/images/nahom-logo.jpeg";

// function Welcome() {
//   const navigate = useNavigate();
//   const videoRef = useRef(null);

//   const [ready, setReady] = useState(false);
//   const [entering, setEntering] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const enterWebsite = () => {
//     if (entering) return;

//     setEntering(true);
//     sessionStorage.setItem("hasSeenWelcome", "true");

//     setTimeout(() => {
//       navigate("/home");
//     }, 1000);
//   };

//   useEffect(() => {
//     if (sessionStorage.getItem("hasSeenWelcome")) {
//       navigate("/home");
//     }
//   }, [navigate]);

//   const updateProgress = () => {
//     const video = videoRef.current;

//     if (!video || !video.duration) return;

//     setProgress((video.currentTime / video.duration) * 100);
//   };

//   return (
//     <main
//       className={`fixed inset-0 z-[999] overflow-hidden bg-black transition-all duration-1000 ${
//         entering ? "scale-[1.08] opacity-0" : "scale-100 opacity-100"
//       }`}
//     >
//       {/* =====================================================
//           VIDEO
//       ===================================================== */}

//       <video
//         ref={videoRef}
//         src={welcomeVideo}
//         autoPlay
//         muted
//         playsInline
//         onLoadedData={() => setReady(true)}
//         onTimeUpdate={updateProgress}
//         onEnded={enterWebsite}
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       {/* =====================================================
//           CINEMATIC OVERLAY
//       ===================================================== */}

//       <div className="absolute inset-0 bg-black/25" />

//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

//       <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

//       {/* Cinematic glow */}

//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40vh] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4aa55]/10 blur-[140px]" />

//       {/* Vignette */}

//       <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_90px_rgba(0,0,0,.95)]" />

//       {/* =====================================================
//           TOP LEFT LOGO
//       ===================================================== */}

//       <div
//         className={`absolute left-7 top-7 z-20 transition-all duration-[1400ms] md:left-12 md:top-10 ${
//           ready ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
//         }`}
//       >
//         <div className="flex items-center gap-4">
//           <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-black/40 p-1 backdrop-blur-md md:h-14 md:w-14">
//             <img
//               src={logo}
//               alt="Nahom Film Production"
//               className="h-full w-full rounded-full object-cover"
//             />
//           </div>

//           <div>
//             <p className="text-[10px] font-medium tracking-[0.45em] text-white">
//               NAHOM
//             </p>

//             <p className="mt-1 text-[7px] uppercase tracking-[0.4em] text-white/40">
//               Film Production
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           TOP RIGHT
//       ===================================================== */}

//       <div
//         className={`absolute right-7 top-8 z-20 hidden items-center gap-3 transition-all duration-[1400ms] md:right-12 md:top-11 md:flex ${
//           ready ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
//         }`}
//       >
//         <span className="h-1.5 w-1.5 rounded-full bg-[#d4aa55] shadow-[0_0_12px_#d4aa55]" />

//         <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-white/40">
//           Original Pictures
//         </span>
//       </div>

//       {/* =====================================================
//           CENTER BRAND
//       ===================================================== */}

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <div
//           className={`text-center transition-all duration-[1800ms] ${
//             ready
//               ? "translate-y-0 scale-100 opacity-100"
//               : "translate-y-6 scale-95 opacity-0"
//           }`}
//         >
//           <div className="mb-6 flex items-center justify-center gap-4">
//             <span className="h-px w-12 bg-white/30 md:w-20" />

//             <span className="text-[7px] uppercase tracking-[0.55em] text-white/50">
//               Film • Photography • Visual Arts
//             </span>

//             <span className="h-px w-12 bg-white/30 md:w-20" />
//           </div>

//           <h1 className="font-serif text-6xl font-light tracking-[-0.06em] text-white sm:text-7xl md:text-9xl">
//             NAHOM
//           </h1>

//           <div className="mt-3">
//             <span className="font-serif text-xl font-light italic tracking-[0.25em] text-[#d4aa55] md:text-3xl">
//               Film Production
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           ENTER BUTTON
//       ===================================================== */}

//       <div
//         className={`absolute bottom-24 left-1/2 z-30 -translate-x-1/2 transition-all duration-[1600ms] md:bottom-28 ${
//           ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//         }`}
//       >
//         <button
//           type="button"
//           onClick={enterWebsite}
//           className="group flex items-center gap-5 border border-white/30 bg-black/20 px-8 py-4 backdrop-blur-md transition-all duration-500 hover:border-[#d4aa55] hover:bg-[#d4aa55] hover:text-black"
//         >
//           <span className="text-[8px] uppercase tracking-[0.45em]">
//             Enter
//           </span>

//           <span className="text-sm transition-transform duration-500 group-hover:translate-x-2">
//             →
//           </span>
//         </button>
//       </div>

//       {/* =====================================================
//           BOTTOM BAR
//       ===================================================== */}

//       <div className="absolute bottom-0 left-0 right-0 z-30">
//         <div className="border-t border-white/10 bg-black/40 px-7 py-5 backdrop-blur-md md:px-12">
//           <div className="flex items-center justify-between">
//             {/* Left */}

//             <div className="hidden items-center gap-4 sm:flex">
//               <span className="font-mono text-[7px] tracking-[0.35em] text-white/25">
//                 NFP
//               </span>

//               <span className="h-px w-12 bg-white/15" />

//               <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
//                 Beyond The Frame
//               </span>
//             </div>

//             {/* Center */}

//             <div className="absolute left-1/2 -translate-x-1/2">
//               <span className="font-mono text-[7px] tracking-[0.3em] text-white/30">
//                 00:{Math.floor(progress).toString().padStart(2, "0")}
//               </span>
//             </div>

//             {/* Right */}

//             <div className="ml-auto flex items-center gap-4">
//               <span className="text-[7px] uppercase tracking-[0.3em] text-white/30">
//                 Enter Website
//               </span>

//               <div className="relative h-px w-16 bg-white/15 md:w-24">
//                 <div
//                   className="absolute left-0 top-0 h-px bg-[#d4aa55] transition-all duration-200"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>

//               <span className="font-mono text-[7px] text-[#d4aa55]">
//                 {Math.round(progress)}%
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           CINEMATIC CORNERS
//       ===================================================== */}

//       <div className="absolute left-7 top-1/2 hidden h-20 w-20 -translate-y-1/2 border-l border-t border-white/10 md:block" />

//       <div className="absolute right-7 top-1/2 hidden h-20 w-20 -translate-y-1/2 border-r border-t border-white/10 md:block" />

//       {/* =====================================================
//           LOADING SCREEN
//       ===================================================== */}

//       {!ready && (
//         <div className="absolute inset-0 z-[200] flex items-center justify-center bg-black">
//           <div className="text-center">
//             <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border border-white/10 border-t-[#d4aa55]" />

//             <p className="font-mono text-[7px] uppercase tracking-[0.5em] text-white/40">
//               Nahom Film Production
//             </p>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// export default Welcome;