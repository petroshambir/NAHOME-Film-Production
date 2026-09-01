

// import React, { useState } from "react";
// import Navbar from "./Navbar";

// import heroVideo from "../assets/videos/Nahom film production official logo.mp4";
// import logoAi1 from "../assets/images/nahom-logo.jpeg";

// function Hero() {
//   const [videoOpen, setVideoOpen] = useState(false);

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#030303] text-white">

//       {/* =========================================================
//           CINEMATIC ANIMATIONS
//       ========================================================= */}

//       <style>{`
//         @keyframes heroZoom {
//           0%, 100% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.055);
//           }
//         }

//         @keyframes logoFloat {
//           0%, 100% {
//             transform: translateY(0) scale(1);
//           }

//           50% {
//             transform: translateY(-7px) scale(1.015);
//           }
//         }

//         @keyframes logoGlow {
//           0%, 100% {
//             opacity: .40;
//             transform: scale(.95);
//           }

//           50% {
//             opacity: .95;
//             transform: scale(1.08);
//           }
//         }

//         @keyframes blueGlow {
//           0%, 100% {
//             opacity: .20;
//             transform: scale(.95);
//           }

//           50% {
//             opacity: .55;
//             transform: scale(1.08);
//           }
//         }

//         @keyframes orangeGlow {
//           0%, 100% {
//             opacity: .18;
//           }

//           50% {
//             opacity: .60;
//           }
//         }

//         @keyframes lightSweep {
//           0% {
//             transform: translateX(-150%) rotate(20deg);
//             opacity: 0;
//           }

//           20% {
//             opacity: .08;
//           }

//           45% {
//             opacity: .45;
//           }

//           70% {
//             opacity: .12;
//           }

//           100% {
//             transform: translateX(150%) rotate(20deg);
//             opacity: 0;
//           }
//         }

//         @keyframes textReveal {
//           from {
//             opacity: 0;
//             transform: translateY(35px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes revealLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-35px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes revealRight {
//           from {
//             opacity: 0;
//             transform: translateX(35px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes lineGrow {
//           from {
//             transform: scaleX(0);
//             transform-origin: left;
//           }

//           to {
//             transform: scaleX(1);
//             transform-origin: left;
//           }
//         }

//         @keyframes pulseDot {
//           0%, 100% {
//             opacity: .35;
//             transform: scale(.8);
//           }

//           50% {
//             opacity: 1;
//             transform: scale(1.25);
//           }
//         }

//         @keyframes scrollLine {
//           0% {
//             transform: translateY(-120%);
//             opacity: 0;
//           }

//           25% {
//             opacity: 1;
//           }

//           70% {
//             opacity: 1;
//           }

//           100% {
//             transform: translateY(250%);
//             opacity: 0;
//           }
//         }

//         @keyframes rotateSlow {
//           from {
//             transform: rotate(0deg);
//           }

//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes filmMove {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }

//         .hero-zoom {
//           animation: heroZoom 24s ease-in-out infinite;
//         }

//         .logo-float {
//           animation: logoFloat 7s ease-in-out infinite;
//         }

//         .logo-glow {
//           animation: logoGlow 5s ease-in-out infinite;
//         }

//         .blue-glow {
//           animation: blueGlow 6s ease-in-out infinite;
//         }

//         .orange-glow {
//           animation: orangeGlow 5s ease-in-out infinite;
//         }

//         .light-sweep {
//           animation: lightSweep 11s ease-in-out infinite;
//         }

//         .text-reveal {
//           animation: textReveal 1s .15s ease forwards;
//           opacity: 0;
//         }

//         .text-reveal-2 {
//           animation: textReveal 1s .35s ease forwards;
//           opacity: 0;
//         }

//         .text-reveal-3 {
//           animation: textReveal 1s .55s ease forwards;
//           opacity: 0;
//         }

//         .reveal-left {
//           animation: revealLeft 1.1s .3s ease forwards;
//           opacity: 0;
//         }

//         .reveal-right {
//           animation: revealRight 1.1s .45s ease forwards;
//           opacity: 0;
//         }

//         .line-grow {
//           animation: lineGrow 1.4s .9s ease forwards;
//           transform: scaleX(0);
//         }

//         .pulse-dot {
//           animation: pulseDot 2s ease-in-out infinite;
//         }

//         .scroll-line {
//           animation: scrollLine 2.2s ease-in-out infinite;
//         }

//         .rotate-slow {
//           animation: rotateSlow 28s linear infinite;
//         }

//         .film-move {
//           animation: filmMove 28s linear infinite;
//         }
//       `}</style>


//       {/* =========================================================
//           BACKGROUND
//       ========================================================= */}

//       <div className="absolute inset-0 overflow-hidden">

//         {/* Main Background */}
//         <div
//           className="hero-zoom absolute inset-[-5%] bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${logoAi1})`,
//           }}
//         />

//         {/* Brighter cinematic layer */}
//         <div className="absolute inset-0 bg-black/30" />

//         {/* Left text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

//         {/* Bottom cinematic darkness */}
//         <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

//         {/* Top cinematic darkness */}
//         <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/55 to-transparent" />


//         {/* =====================================================
//             BLUE CINEMATIC LIGHT
//         ===================================================== */}

//         <div className="blue-glow absolute -right-[12%] top-[15%] h-[700px] w-[700px] rounded-full bg-[#001595]/30 blur-[150px]" />

//         <div className="blue-glow absolute -left-[18%] bottom-[-5%] h-[600px] w-[600px] rounded-full bg-[#001595]/20 blur-[150px]" />


//         {/* =====================================================
//             ORANGE CINEMATIC LIGHT
//         ===================================================== */}

//         <div className="orange-glow absolute right-[8%] top-[25%] h-[420px] w-[420px] rounded-full bg-[#FF4900]/20 blur-[130px]" />

//         <div className="orange-glow absolute left-[20%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-[#FF4900]/10 blur-[110px]" />


//         {/* Moving cinematic light */}
//         <div className="light-sweep absolute left-[20%] top-[-40%] h-[180%] w-[16%] bg-gradient-to-r from-transparent via-[#ffffff]/30 to-transparent blur-[65px]" />


//         {/* =====================================================
//             CENTER LOGO LIGHT
//         ===================================================== */}

//         <div className="absolute right-[7%] top-[20%] hidden h-[600px] w-[600px] lg:block">

//           {/* Blue aura */}
//           <div className="blue-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#001595]/25 blur-[120px]" />

//           {/* Orange aura */}
//           <div className="orange-glow absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4900]/20 blur-[90px]" />

//           {/* White cinematic light */}
//           <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[80px]" />

//         </div>


//         {/* Vignette */}
//         <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,.65)]" />


//         {/* Film grain */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.8'/%3E%3C/svg%3E\")",
//           }}
//         />

//       </div>


//       {/* =========================================================
//           NAVBAR
//       ========================================================= */}

//       <div className="absolute left-0 top-0 z-50 w-full">
//         <Navbar />
//       </div>


//       {/* =========================================================
//           TOP CINEMATIC DATA
//       ========================================================= */}

//       <div className="absolute left-0 right-0 top-[78px] z-30 hidden lg:block">

//         <div className="mx-auto flex max-w-[1800px] items-center justify-between px-12 xl:px-20">

//           <div className="flex items-center gap-3">

//             <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#FF4900]" />

//             <span className="font-mono text-[8px] uppercase tracking-[.4em] text-white/45">
//               NAHOM / ORIGINAL PICTURES
//             </span>

//           </div>

//           <span className="font-mono text-[8px] tracking-[.3em] text-white/35">
//             CINEMATIC PRODUCTION
//           </span>

//         </div>

//       </div>


//       {/* =========================================================
//           MAIN CONTENT
//       ========================================================= */}

//       <div className="relative z-20 mx-auto flex min-h-screen max-w-[1800px] items-center px-5 pb-28 pt-32 sm:px-8 lg:px-12 xl:px-20">

//         <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr] xl:gap-20">


//           {/* =====================================================
//               LEFT SIDE
//           ===================================================== */}

//           <div className="reveal-left max-w-[850px]">

//             {/* Small heading */}

//             <div className="mb-7 flex items-center gap-4">

//               <span className="h-px w-14 bg-[#FF4900]" />

//               <span className="text-[8px] font-medium uppercase tracking-[.5em] text-[#FF4900] sm:text-[9px]">
//                 Nahom Film Production
//               </span>

//             </div>


//             {/* Main typography */}

//             <h1 className="font-serif text-[57px] font-light leading-[.82] tracking-[-.055em] sm:text-[78px] md:text-[100px] lg:text-[112px] xl:text-[145px]">

//               <span className="text-reveal block text-white">
//                 WE
//               </span>

//               <span className="text-reveal-2 block text-[#001595] drop-shadow-[0_0_25px_rgba(0,21,149,.35)]">
//                 CREATE
//               </span>

//               <span className="text-reveal-3 block italic text-[#FF4900] drop-shadow-[0_0_25px_rgba(255,73,0,.35)]">
//                 STORIES.
//               </span>

//             </h1>


//             {/* Divider */}

//             <div className="text-reveal-2 mt-8 flex items-center gap-4">

//               <div className="h-px w-20 bg-[#FF4900]" />

//               <span className="text-[8px] uppercase tracking-[.35em] text-white/50">
//                 Film • Photography • Production
//               </span>

//             </div>


//             {/* Description */}

//             <p className="text-reveal-3 mt-7 max-w-[610px] text-sm font-light leading-7 tracking-wide text-white/70 sm:text-[15px] sm:leading-8">

//               We transform ideas, emotions and real moments into
//               powerful cinematic experiences designed to be seen,
//               felt and remembered.

//             </p>


//             {/* Buttons */}

//             <div className="text-reveal-3 mt-9 flex flex-wrap items-center gap-3">

//               <a
//                 href="#portfolio"
//                 className="group inline-flex items-center gap-6 border border-[#FF4900] bg-[#FF4900] px-7 py-4 text-[8px] font-semibold uppercase tracking-[.32em] text-black shadow-[0_0_30px_rgba(255,73,0,.15)] transition-all duration-500 hover:border-white hover:bg-white"
//               >

//                 <span>
//                   Explore Our Films
//                 </span>

//                 <span className="text-base transition-transform duration-500 group-hover:translate-x-2">
//                   →
//                 </span>

//               </a>


//               <button
//                 type="button"
//                 onClick={() => setVideoOpen(true)}
//                 className="group inline-flex items-center gap-4 border border-white/25 bg-black/25 px-6 py-4 text-[8px] uppercase tracking-[.32em] text-white/85 backdrop-blur-md transition-all duration-500 hover:border-[#FF4900] hover:text-[#FF4900]"
//               >

//                 <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-[8px] transition-all duration-500 group-hover:border-[#FF4900]">
//                   ▶
//                 </span>

//                 Watch Showreel

//               </button>

//             </div>


//             {/* Production information */}

//             <div className="fade-in mt-12 grid max-w-[850px] grid-cols-2 gap-6 border-t border-white/15 pt-5 sm:grid-cols-4">

//               <div>

//                 <span className="font-mono text-[7px] uppercase tracking-[.3em] text-white/35">
//                   Studio
//                 </span>

//                 <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/75">
//                 NAHOM FILM PRODUCTION
//                 </p>

//               </div>


//               <div>

//                 <span className="font-mono text-[7px] uppercase tracking-[.3em] text-white/35">
//                   Production
//                 </span>

//                 <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/75">
//                   Film / Photo
//                 </p>

//               </div>


//               <div>

//                 <span className="font-mono text-[7px] uppercase tracking-[.3em] text-white/35">
//                   Direction
//                 </span>

//                 <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/75">
//                   Creative
//                 </p>

//               </div>


//               <div>

//                 <span className="font-mono text-[7px] uppercase tracking-[.3em] text-white/35">
//                   Reach
//                 </span>

//                 <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/75">
//                   Worldwide
//                 </p>

//               </div>

//             </div>

//           </div>


//           {/* =====================================================
//               RIGHT LOGO / CINEMATIC AREA
//           ===================================================== */}

//           <div className="reveal-right relative mx-auto flex w-full max-w-[650px] items-center justify-center lg:min-h-[600px]">

//             {/* Outer cinematic ring */}

//             <div className="rotate-slow absolute h-[430px] w-[430px] rounded-full border border-[#001595]/25 sm:h-[500px] sm:w-[500px] lg:h-[570px] lg:w-[570px]">

//               <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#FF4900] shadow-[0_0_25px_rgba(255,73,0,.9)]" />

//             </div>


//             {/* Second cinematic ring */}

//             <div className="absolute h-[390px] w-[390px] rounded-full border border-[#FF4900]/15 sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px]" />


//             {/* Inner ring */}

//             <div className="absolute h-[350px] w-[350px] rounded-full border border-white/10 sm:h-[410px] sm:w-[410px] lg:h-[470px] lg:w-[470px]" />


//             {/* Logo glow */}

//             <div className="blue-glow absolute h-[420px] w-[420px] rounded-full bg-[#001595]/25 blur-[100px] sm:h-[500px] sm:w-[500px]" />

//             <div className="orange-glow absolute h-[260px] w-[260px] rounded-full bg-[#FF4900]/20 blur-[90px]" />


//             {/* Logo container */}

//             <div className="logo-float relative z-10 flex h-[330px] w-[330px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">

//               {/* Blue aura */}

//               <div className="absolute inset-[5%] rounded-full bg-[#001595]/20 blur-[55px]" />

//               {/* Orange aura */}

//               <div className="orange-glow absolute inset-[18%] rounded-full bg-[#FF4900]/10 blur-[45px]" />


//               {/* Logo image */}

//               <div className="relative flex h-[82%] w-[82%] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black/20 p-5 shadow-[0_0_100px_rgba(0,21,149,.25)] backdrop-blur-sm">

//                 <img
//                   src={logoAi1}
//                   alt="Nahom Film Production"
//                   className="h-full w-full rounded-full object-cover opacity-100 mix-blend-screen"
//                 />

//                 {/* Logo light overlay */}

//                 <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-[#001595]/15 via-transparent to-[#FF4900]/15" />

//               </div>

//             </div>


//             {/* Top right metadata */}

//             <div className="absolute right-0 top-[10%] hidden xl:block">

//               <div className="flex items-center gap-3">

//                 <span className="h-px w-12 bg-[#FF4900]/70" />

//                 <span className="font-mono text-[7px] uppercase tracking-[.35em] text-white/40">
//                   NFP / 01
//                 </span>

//               </div>

//             </div>


//             {/* Left metadata */}

//             <div className="absolute left-0 top-[42%] hidden lg:block">

//               <div className="flex items-center gap-3">

//                 <span className="font-mono text-[7px] uppercase tracking-[.35em] text-white/40">
//                   VISUAL
//                 </span>

//                 <span className="h-px w-10 bg-[#001595]/70" />

//               </div>

//             </div>


//             {/* Bottom logo label */}

//             <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 text-center">

//               <span className="block text-[7px] uppercase tracking-[.5em] text-[#FF4900]">
//                 Nahom Film Production
//               </span>

//               <span className="mt-2 block font-mono text-[6px] uppercase tracking-[.35em] text-white/35">
//                 Creating beyond the frame
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* =========================================================
//           RIGHT HUD
//       ========================================================= */}

//       <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:right-8">

//         <div className="flex flex-col items-center gap-6">

//           <div className="rotate-slow relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15">

//             <div className="absolute inset-2 rounded-full border border-[#001595]/40" />

//             <div className="absolute inset-5 rounded-full border border-dashed border-[#FF4900]/25" />

//             <span className="absolute -top-2 text-[6px] tracking-[.3em] text-[#FF4900]">
//               NFP
//             </span>

//             <span className="font-mono text-[7px] text-white/40">
//               360°
//             </span>

//           </div>


//           <div className="h-24 w-px bg-gradient-to-b from-[#FF4900] to-transparent" />


//           <span
//             className="text-[7px] uppercase tracking-[.45em] text-white/30"
//             style={{ writingMode: "vertical-rl" }}
//           >
//             Cinematic Visual Storytelling
//           </span>

//         </div>

//       </div>


//       {/* =========================================================
//           FILM STRIP
//       ========================================================= */}

//       <div className="absolute bottom-[65px] left-0 right-0 z-30 overflow-hidden border-y border-white/10 bg-black/20 backdrop-blur-sm">

//         <div className="film-move flex w-[200%]">

//           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

//             <div
//               key={item}
//               className="flex w-[12.5%] shrink-0 items-center justify-between px-7 py-3"
//             >

//               <span className="font-mono text-[7px] tracking-[.25em] text-white/25">
//                 FRAME {String(item).padStart(2, "0")}
//               </span>

//               <span className="h-1 w-1 rounded-full bg-[#FF4900]/70" />

//               <span className="font-mono text-[7px] tracking-[.25em] text-white/25">
//                 NAHOM / FILM
//               </span>

//             </div>

//           ))}

//         </div>

//       </div>


//       {/* =========================================================
//           BOTTOM NAVIGATION
//       ========================================================= */}

//       <div className="absolute bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/55 backdrop-blur-md">

//         <div className="mx-auto flex h-[65px] max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-20">

//           {/* Left */}

//           <div className="hidden items-center gap-4 sm:flex">

//             <span className="font-mono text-[7px] tracking-[.35em] text-white/30">
//               NFP
//             </span>

//             <span className="h-px w-10 bg-white/20" />

//             <span className="text-[7px] uppercase tracking-[.35em] text-white/35">
//               Creating beyond the frame
//             </span>

//           </div>


//           {/* Center */}

//           <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">

//             <span className="text-[7px] uppercase tracking-[.4em] text-white/35">
//               Scroll
//             </span>

//             <div className="relative h-7 w-px overflow-hidden bg-white/15">

//               <div className="scroll-line absolute left-0 top-0 h-3 w-px bg-[#FF4900]" />

//             </div>

//           </div>


//           {/* Right */}

//           <div className="ml-auto flex items-center gap-4">

//             <span className="font-mono text-[8px] text-[#FF4900]">
//               01
//             </span>

//             <div className="h-px w-14 bg-white/15">

//               <div className="line-grow h-px bg-[#FF4900]" />

//             </div>

//             <span className="font-mono text-[8px] text-white/30">
//               04
//             </span>

//           </div>

//         </div>

//       </div>


//       {/* =========================================================
//           SHOWREEL MODAL
//       ========================================================= */}

//       {videoOpen && (

//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8">

//           {/* Close */}

//           <button
//             type="button"
//             onClick={() => setVideoOpen(false)}
//             className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center border border-white/20 text-2xl text-white/70 transition-all duration-300 hover:border-[#FF4900] hover:text-[#FF4900]"
//             aria-label="Close showreel"
//           >
//             ×
//           </button>


//           {/* Video */}

//           <div className="relative w-full max-w-6xl overflow-hidden border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,.9)]">

//             <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent px-5 py-5">

//               <span className="font-mono text-[7px] tracking-[.3em] text-white/50">
//                 NAHOM FILM PRODUCTION
//               </span>

//               <span className="font-mono text-[7px] tracking-[.3em] text-[#FF4900]">
//                 SHOWREEL / 2026
//               </span>

//             </div>

//             <video
//               src={heroVideo}
//               autoPlay
//               controls
//               playsInline
//               className="max-h-[85vh] w-full object-contain"
//             />

//           </div>

//         </div>

//       )}

//     </section>
//   );
// }

// export default Hero;

import React, { useState } from "react";
import Navbar from "./Navbar";

import heroVideo from "../assets/videos/Nahom film production official logo.mp4";
import logoAi1 from "../assets/images/nahom-logo.jpeg";

function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] text-white">

      {/* =========================================================
          CINEMATIC ANIMATIONS
      ========================================================= */}

      <style>{`
        @keyframes heroZoom {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.055);
          }
        }

        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-7px) scale(1.015);
          }
        }

        @keyframes logoGlow {
          0%, 100% {
            opacity: .40;
            transform: scale(.95);
          }

          50% {
            opacity: .95;
            transform: scale(1.08);
          }
        }

        @keyframes blueGlow {
          0%, 100% {
            opacity: .20;
            transform: scale(.95);
          }

          50% {
            opacity: .55;
            transform: scale(1.08);
          }
        }

        @keyframes orangeGlow {
          0%, 100% {
            opacity: .18;
          }

          50% {
            opacity: .60;
          }
        }

        @keyframes lightSweep {
          0% {
            transform: translateX(-150%) rotate(20deg);
            opacity: 0;
          }

          20% {
            opacity: .08;
          }

          45% {
            opacity: .45;
          }

          70% {
            opacity: .12;
          }

          100% {
            transform: translateX(150%) rotate(20deg);
            opacity: 0;
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes revealRight {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes lineGrow {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }

          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            opacity: .35;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes scrollLine {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateY(250%);
            opacity: 0;
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes filmMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .hero-zoom {
          animation: heroZoom 24s ease-in-out infinite;
        }

        .logo-float {
          animation: logoFloat 7s ease-in-out infinite;
        }

        .logo-glow {
          animation: logoGlow 5s ease-in-out infinite;
        }

        .blue-glow {
          animation: blueGlow 6s ease-in-out infinite;
        }

        .orange-glow {
          animation: orangeGlow 5s ease-in-out infinite;
        }

        .light-sweep {
          animation: lightSweep 11s ease-in-out infinite;
        }

        .text-reveal {
          animation: textReveal 1s .15s ease forwards;
          opacity: 0;
        }

        .text-reveal-2 {
          animation: textReveal 1s .35s ease forwards;
          opacity: 0;
        }

        .text-reveal-3 {
          animation: textReveal 1s .55s ease forwards;
          opacity: 0;
        }

        .reveal-left {
          animation: revealLeft 1.1s .3s ease forwards;
          opacity: 0;
        }

        .reveal-right {
          animation: revealRight 1.1s .45s ease forwards;
          opacity: 0;
        }

        .line-grow {
          animation: lineGrow 1.4s .9s ease forwards;
          transform: scaleX(0);
        }

        .pulse-dot {
          animation: pulseDot 2s ease-in-out infinite;
        }

        .scroll-line {
          animation: scrollLine 2.2s ease-in-out infinite;
        }

        .rotate-slow {
          animation: rotateSlow 28s linear infinite;
        }

        .film-move {
          animation: filmMove 28s linear infinite;
        }
      `}</style>


      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Main Background */}
        <div
          className="hero-zoom absolute inset-[-5%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${logoAi1})`,
          }}
        />

        {/* Brighter cinematic layer */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Left text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

        {/* Bottom cinematic darkness */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

        {/* Top cinematic darkness */}
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/55 to-transparent" />


        {/* =====================================================
            BLUE CINEMATIC LIGHT
        ===================================================== */}

        <div className="blue-glow absolute -right-[12%] top-[15%] h-[700px] w-[700px] rounded-full bg-[#001595]/30 blur-[150px]" />

        <div className="blue-glow absolute -left-[18%] bottom-[-5%] h-[600px] w-[600px] rounded-full bg-[#001595]/20 blur-[150px]" />


        {/* =====================================================
            ORANGE CINEMATIC LIGHT
        ===================================================== */}

        <div className="orange-glow absolute right-[8%] top-[25%] h-[420px] w-[420px] rounded-full bg-[#FF4900]/20 blur-[130px]" />

        <div className="orange-glow absolute left-[20%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-[#FF4900]/10 blur-[110px]" />


        {/* Moving cinematic light */}
        <div className="light-sweep absolute left-[20%] top-[-40%] h-[180%] w-[16%] bg-gradient-to-r from-transparent via-[#ffffff]/30 to-transparent blur-[65px]" />


        {/* =====================================================
            CENTER LOGO LIGHT
        ===================================================== */}

        <div className="absolute right-[7%] top-[20%] hidden h-[600px] w-[600px] lg:block">

          {/* Blue aura */}
          <div className="blue-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#001595]/25 blur-[120px]" />

          {/* Orange aura */}
          <div className="orange-glow absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4900]/20 blur-[90px]" />

          {/* White cinematic light */}
          <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[80px]" />

        </div>


        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,.65)]" />


        {/* Film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.8'/%3E%3C/svg%3E\")",
          }}
        />

      </div>


      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <div className="absolute left-0 top-0 z-50 w-full">
        <Navbar />
      </div>


      {/* =========================================================
          TOP CINEMATIC DATA
      ========================================================= */}

      <div className="absolute left-0 right-0 top-[78px] z-30 hidden lg:block">

        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-12 xl:px-20">

          <div className="flex items-center gap-3">

            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#FF4900]" />

            <span className="font-mono text-[8px] uppercase tracking-[.4em] text-[#FF4900]/80">
              NAHOM / ORIGINAL PICTURES
            </span>

          </div>

          <span className="font-mono text-[8px] tracking-[.3em] text-[#FF4900]">
            CINEMATIC PRODUCTION
          </span>

        </div>

      </div>


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1800px] items-center px-5 pb-28 pt-32 sm:px-8 lg:px-12 xl:px-20">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr] xl:gap-20">


          {/* =====================================================
              LEFT SIDE
          ==================================================== */}

          <div className="reveal-left max-w-[850px]">

            {/* Small heading */}

            <div className="mb-7 flex items-center gap-4">

              <span className="h-px w-14 bg-[#FF4900]" />

              <span className="text-[8px] font-medium uppercase tracking-[.5em] text-[#FF4900] sm:text-[9px]">
                Nahom Film Production
              </span>

            </div>


            {/* Main typography */}

            <h1 className="font-serif text-[57px] font-light leading-[.82] tracking-[-.055em] sm:text-[78px] md:text-[100px] lg:text-[112px] xl:text-[145px]">

              <span className="text-reveal block text-white">
                WE
              </span>

              <span className="text-reveal-2 block text-[#001595] drop-shadow-[0_0_25px_rgba(0,21,149,.35)]">
                CREATE
              </span>

              <span className="text-reveal-3 block italic text-[#FF4900] drop-shadow-[0_0_25px_rgba(255,73,0,.35)]">
                STORIES.
              </span>

            </h1>


            {/* Divider */}

            <div className="text-reveal-2 mt-8 flex items-center gap-4">

              <div className="h-px w-20 bg-[#FF4900]" />

              <span className="text-[8px] uppercase tracking-[.35em] text-[#FF4900]/80">
                Film • Photography • Production
              </span>

            </div>


            {/* Description */}

            <p className="text-reveal-3 mt-7 max-w-[610px] text-sm font-light leading-7 tracking-wide text-white/80 sm:text-[15px] sm:leading-8">

              We transform ideas, emotions and real moments into
              powerful cinematic experiences designed to be seen,
              felt and remembered.

            </p>


            {/* Buttons */}

            <div className="text-reveal-3 mt-9 flex flex-wrap items-center gap-3">

              <a
                href="#portfolio"
                className="group inline-flex items-center gap-6 border border-[#FF4900] bg-[#FF4900] px-7 py-4 text-[8px] font-semibold uppercase tracking-[.32em] text-black shadow-[0_0_30px_rgba(255,73,0,.15)] transition-all duration-500 hover:border-white hover:bg-white"
              >

                <span>
                  Explore Our Films
                </span>

                <span className="text-base transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>

              </a>


              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group inline-flex items-center gap-4 border border-[#FF4900]/40 bg-black/25 px-6 py-4 text-[8px] uppercase tracking-[.32em] text-white/90 backdrop-blur-md transition-all duration-500 hover:border-[#FF4900] hover:text-[#FF4900]"
              >

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#FF4900]/50 text-[8px] transition-all duration-500 group-hover:border-[#FF4900]">
                  ▶
                </span>

                Watch Showreel

              </button>

            </div>


            {/* Production information */}

            <div className="fade-in mt-12 grid max-w-[850px] grid-cols-2 gap-6 border-t border-white/15 pt-5 sm:grid-cols-4">

              <div>

                <span className="font-mono text-[7px] uppercase tracking-[.3em] text-[#FF4900]/80">
                  Studio
                </span>

                <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/90">
                NAHOM FILM PRODUCTION
                </p>

              </div>


              <div>

                <span className="font-mono text-[7px] uppercase tracking-[.3em] text-[#FF4900]/80">
                  Production
                </span>

                <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/90">
                  Film / Photo
                </p>

              </div>


              <div>

                <span className="font-mono text-[7px] uppercase tracking-[.3em] text-[#FF4900]/80">
                  Direction
                </span>

                <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/90">
                  Creative
                </p>

              </div>


              <div>

                <span className="font-mono text-[7px] uppercase tracking-[.3em] text-[#FF4900]/80">
                  Reach
                </span>

                <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/90">
                  Worldwide
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT LOGO / CINEMATIC AREA
          ==================================================== */}

          <div className="reveal-right relative mx-auto flex w-full max-w-[650px] items-center justify-center lg:min-h-[600px]">

            {/* Outer cinematic ring */}

            <div className="rotate-slow absolute h-[430px] w-[430px] rounded-full border border-[#001595]/25 sm:h-[500px] sm:w-[500px] lg:h-[570px] lg:w-[570px]">

              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#FF4900] shadow-[0_0_25px_rgba(255,73,0,.9)]" />

            </div>


            {/* Second cinematic ring */}

            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#FF4900]/15 sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px]" />


            {/* Inner ring */}

            <div className="absolute h-[350px] w-[350px] rounded-full border border-white/10 sm:h-[410px] sm:w-[410px] lg:h-[470px] lg:w-[470px]" />


            {/* Logo glow */}

            <div className="blue-glow absolute h-[420px] w-[420px] rounded-full bg-[#001595]/25 blur-[100px] sm:h-[500px] sm:w-[500px]" />

            <div className="orange-glow absolute h-[260px] w-[260px] rounded-full bg-[#FF4900]/20 blur-[90px]" />


            {/* Logo container */}

            <div className="logo-float relative z-10 flex h-[330px] w-[330px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">

              {/* Blue aura */}

              <div className="absolute inset-[5%] rounded-full bg-[#001595]/20 blur-[55px]" />

              {/* Orange aura */}

              <div className="orange-glow absolute inset-[18%] rounded-full bg-[#FF4900]/10 blur-[45px]" />


              {/* Logo image */}

              <div className="relative flex h-[82%] w-[82%] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black/20 p-5 shadow-[0_0_100px_rgba(0,21,149,.25)] backdrop-blur-sm">

                <img
                  src={logoAi1}
                  alt="Nahom Film Production"
                  className="h-full w-full rounded-full object-cover opacity-100 mix-blend-screen"
                />

                {/* Logo light overlay */}

                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-[#001595]/15 via-transparent to-[#FF4900]/15" />

              </div>

            </div>


            {/* Top right metadata */}

            <div className="absolute right-0 top-[10%] hidden xl:block">

              <div className="flex items-center gap-3">

                <span className="h-px w-12 bg-[#FF4900]/70" />

                <span className="font-mono text-[7px] uppercase tracking-[.35em] text-[#FF4900]">
                  NFP / 01
                </span>

              </div>

            </div>


            {/* Left metadata */}

            <div className="absolute left-0 top-[42%] hidden lg:block">

              <div className="flex items-center gap-3">

                <span className="font-mono text-[7px] uppercase tracking-[.35em] text-[#001595]">
                  VISUAL
                </span>

                <span className="h-px w-10 bg-[#001595]/70" />

              </div>

            </div>


            {/* Bottom logo label */}

            <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 text-center">

              <span className="block text-[7px] uppercase tracking-[.5em] text-[#FF4900]">
                Nahom Film Production
              </span>

              <span className="mt-2 block font-mono text-[6px] uppercase tracking-[.35em] text-[#FF4900]/80">
                Creating beyond the frame
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          RIGHT HUD
      ========================================================= */}

      <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:right-8">

        <div className="flex flex-col items-center gap-6">

          <div className="rotate-slow relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15">

            <div className="absolute inset-2 rounded-full border border-[#001595]/40" />

            <div className="absolute inset-5 rounded-full border border-dashed border-[#FF4900]/25" />

            <span className="absolute -top-2 text-[6px] tracking-[.3em] text-[#FF4900]">
              NFP
            </span>

            <span className="font-mono text-[7px] text-[#FF4900]/80">
              360°
            </span>

          </div>


          <div className="h-24 w-px bg-gradient-to-b from-[#FF4900] to-transparent" />


          <span
            className="text-[7px] uppercase tracking-[.45em] text-[#FF4900]/80"
            style={{ writingMode: "vertical-rl" }}
          >
            Cinematic Visual Storytelling
          </span>

        </div>

      </div>


      {/* =========================================================
          FILM STRIP
      ========================================================= */}

      <div className="absolute bottom-[65px] left-0 right-0 z-30 overflow-hidden border-y border-white/10 bg-black/20 backdrop-blur-sm">

        <div className="film-move flex w-[200%]">

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

            <div
              key={item}
              className="flex w-[12.5%] shrink-0 items-center justify-between px-7 py-3"
            >

              <span className="font-mono text-[7px] tracking-[.25em] text-[#FF4900]/80">
                FRAME {String(item).padStart(2, "0")}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#FF4900]/70" />

              <span className="font-mono text-[7px] tracking-[.25em] text-[#FF4900]">
                NAHOM / FILM
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* =========================================================
          BOTTOM NAVIGATION
      ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/55 backdrop-blur-md">

        <div className="mx-auto flex h-[65px] max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-20">

          {/* Left */}

          <div className="hidden items-center gap-4 sm:flex">

            <span className="font-mono text-[7px] tracking-[.35em] text-[#FF4900]">
              NFP
            </span>

            <span className="h-px w-10 bg-[#FF4900]/40" />

            <span className="text-[7px] uppercase tracking-[.35em] text-[#FF4900]/80">
              Creating beyond the frame
            </span>

          </div>


          {/* Center */}

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">

            <span className="text-[7px] uppercase tracking-[.4em] text-[#FF4900]/90">
              Scroll
            </span>

            <div className="relative h-7 w-px overflow-hidden bg-white/15">

              <div className="scroll-line absolute left-0 top-0 h-3 w-px bg-[#FF4900]" />

            </div>

          </div>


          {/* Right */}

          <div className="ml-auto flex items-center gap-4">

            <span className="font-mono text-[8px] text-[#FF4900]">
              01
            </span>

            <div className="h-px w-14 bg-white/15">

              <div className="line-grow h-px bg-[#FF4900]" />

            </div>

            <span className="font-mono text-[8px] text-[#FF4900]/80">
              04
            </span>

          </div>

        </div>

      </div>


      {/* =========================================================
          SHOWREEL MODAL
      ========================================================= */}

      {videoOpen && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8">

          {/* Close */}

          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center border border-white/20 text-2xl text-white/70 transition-all duration-300 hover:border-[#FF4900] hover:text-[#FF4900]"
            aria-label="Close showreel"
          >
            ×
          </button>


          {/* Video */}

          <div className="relative w-full max-w-6xl overflow-hidden border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,.9)]">

            <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent px-5 py-5">

              <span className="font-mono text-[7px] tracking-[.3em] text-[#FF4900]/80">
                NAHOM FILM PRODUCTION
              </span>

              <span className="font-mono text-[7px] tracking-[.3em] text-[#FF4900]">
                SHOWREEL / 2026
              </span>

            </div>

            <video
              src={heroVideo}
              autoPlay
              controls
              playsInline
              className="max-h-[85vh] w-full object-contain"
            />

          </div>

        </div>

      )}

    </section>
  );
}

export default Hero;