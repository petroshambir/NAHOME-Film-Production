


// import React from "react";
// import { Link } from "react-router-dom";

// import tiktokImg from "../assets/images/tiktok.jpeg";
// import instagramImg from "../assets/images/instagram.jpeg";
// import youtubeImg from "../assets/images/youtube.jpeg";
// import facebookImg from "../assets/images/facebook.jpeg";

// function Footer() {
//   const socials = [
//     {
//       name: "TikTok",
//       image: tiktokImg,
//       href: "https://www.tiktok.com/@habshapicture?_r=1&_t=ZS-98RLvYscrdH",
//     },
//     {
//       name: "Instagram",
//       image: instagramImg,
//       href: "https://www.instagram.com/habesha_pictuer?igsh=anF1OXc4dnB4bGs1",
//     },
//     {
//       name: "YouTube",
//       image: youtubeImg,
//       href: "#",
//     },
//     {
//       name: "Facebook",
//       image: facebookImg,
//       href: "https://www.facebook.com/share/1BbUufnsKQ/",
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#050505] text-white">

//       {/* =====================================================
//           CINEMATIC EFFECTS
//       ===================================================== */}
//       <style>{`
//         @keyframes footerReveal {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes goldMove {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(300%);
//           }
//         }

//         @keyframes softPulse {
//           0%, 100% {
//             opacity: .25;
//           }
//           50% {
//             opacity: .8;
//           }
//         }

//         @keyframes filmScroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }

//         .footer-reveal {
//           animation: footerReveal 1s ease forwards;
//         }

//         .gold-move {
//           animation: goldMove 5s linear infinite;
//         }

//         .soft-pulse {
//           animation: softPulse 2.5s ease-in-out infinite;
//         }

//         .film-scroll {
//           animation: filmScroll 35s linear infinite;
//         }
//       `}</style>


//       {/* =====================================================
//           BACKGROUND GLOW
//       ===================================================== */}
//       <div className="pointer-events-none absolute inset-0">

//         <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#cda653]/[0.06] blur-[150px]" />

//         <div className="absolute right-[-15%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-[#cda653]/[0.05] blur-[160px]" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.45)_100%)]" />

//       </div>


//       {/* =====================================================
//           FILM STRIP
//       ===================================================== */}
//       <div className="relative overflow-hidden border-y border-white/[0.07] bg-[#080808]">

//         <div className="film-scroll flex w-max">

//           {[...Array(2)].map((_, group) => (
//             <div
//               key={group}
//               className="flex shrink-0 items-center"
//             >

//               {[...Array(10)].map((_, index) => (

//                 <div
//                   key={index}
//                   className="flex items-center gap-7 px-8 py-4"
//                 >

//                   <span className="font-mono text-[7px] tracking-[.35em] text-white/15">
//                     FRAME {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="h-1 w-1 rounded-full bg-[#cda653]/50" />

//                   <span className="font-mono text-[7px] tracking-[.35em] text-[#cda653]/40">
//                     NAHOM FILM
//                   </span>

//                   <span className="h-1 w-1 rounded-full bg-white/10" />

//                 </div>

//               ))}

//             </div>
//           ))}

//         </div>

//       </div>


//       {/* =====================================================
//           MAIN FOOTER
//       ===================================================== */}
//       <div className="relative mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 xl:px-20">

//         {/* Top Number */}
//         <div className="mb-16 flex items-center justify-between">

//           <div className="flex items-center gap-4">

//             <span className="soft-pulse h-2 w-2 rounded-full bg-[#cda653]" />

//             <span className="font-mono text-[7px] uppercase tracking-[.45em] text-white/30">
//               Nahom Film Production
//             </span>

//           </div>

//           <span className="font-mono text-[7px] tracking-[.35em] text-white/20">
//             NFP / 2026
//           </span>

//         </div>


//         {/* =====================================================
//             HUGE BRAND STATEMENT
//         ===================================================== */}
//         <div className="footer-reveal">

//           <div className="max-w-[1200px]">

//             <span className="text-[8px] uppercase tracking-[.5em] text-[#cda653]">
//               We create
//             </span>

//             <h2 className="mt-5 font-serif text-[58px] font-light leading-[.85] tracking-[-.055em] sm:text-[85px] md:text-[110px] lg:text-[135px]">

//               Stories

//               <span className="ml-3 italic text-[#cda653]">
//                 that
//               </span>

//               <br />

//               <span className="text-white/90">
//                 stay.
//               </span>

//             </h2>

//           </div>

//         </div>


//         {/* =====================================================
//             GOLD LINE
//         ===================================================== */}
//         <div className="relative mt-16 h-px w-full overflow-hidden bg-white/[0.08]">

//           <div className="gold-move absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[#cda653] to-transparent" />

//         </div>


//         {/* =====================================================
//             INFORMATION GRID
//         ===================================================== */}
//         <div className="mt-14 grid gap-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">


//           {/* BRAND */}
//           <div>

//             <h3 className="font-serif text-2xl font-light">
//               Nahom
//               <span className="ml-2 italic text-[#cda653]">
//                 Film Production
//               </span>
//             </h3>

//             <p className="mt-5 max-w-sm text-xs leading-6 text-white/35">
//               Film. Photography. Production.
//               <br />
//               Visual stories crafted with purpose.
//             </p>

//           </div>


//           {/* NAVIGATION */}
//           <div>

//             <span className="mb-6 block font-mono text-[7px] tracking-[.4em] text-[#cda653]">
//               01 / EXPLORE
//             </span>

//             <div className="flex flex-col gap-4">

//               <a
//                 href="#portfolio"
//                 className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
//               >
//                 <span className="h-px w-0 bg-[#cda653] transition-all duration-300 group-hover:w-6" />
//                 Portfolio
//               </a>

//               <a
//                 href="#services"
//                 className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
//               >
//                 <span className="h-px w-0 bg-[#cda653] transition-all duration-300 group-hover:w-6" />
//                 Services
//               </a>

//               <a
//                 href="#about"
//                 className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
//               >
//                 <span className="h-px w-0 bg-[#cda653] transition-all duration-300 group-hover:w-6" />
//                 About
//               </a>

//               <a
//                 href="#contact"
//                 className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
//               >
//                 <span className="h-px w-0 bg-[#cda653] transition-all duration-300 group-hover:w-6" />
//                 Contact
//               </a>

//             </div>

//           </div>


//           {/* CONTACT */}
//           <div>

//             <span className="mb-6 block font-mono text-[7px] tracking-[.4em] text-[#cda653]">
//               02 / CONTACT
//             </span>

//             <div className="space-y-4">

//               <a
//                 href="mailto:Adalhambir946@gmail.com"
//                 className="block text-xs text-white/45 transition hover:text-[#cda653]"
//               >
//                 Adalhambir946@gmail.com
//               </a>

//               <a
//                 href="tel:+251976130175"
//                 className="block text-xs text-white/45 transition hover:text-[#cda653]"
//               >
//                 +251 976 130 175
//               </a>

//               <a
//                 href="tel:+251942746150"
//                 className="block text-xs text-white/45 transition hover:text-[#cda653]"
//               >
//                 +251 942 746 150
//               </a>

//               <a
//                 href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block text-xs text-white/45 transition hover:text-[#cda653]"
//               >
//                 Addis Ababa, Ethiopia
//               </a>

//             </div>

//           </div>


//           {/* SOCIAL */}
//           <div>

//             <span className="mb-6 block font-mono text-[7px] tracking-[.4em] text-[#cda653]">
//               03 / SOCIAL
//             </span>

//             <div className="grid grid-cols-4 gap-2">

//               {socials.map((social) => (

//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.name}
//                   className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-[#cda653]/50 hover:bg-[#cda653]/10"
//                 >

//                   <img
//                     src={social.image}
//                     alt={social.name}
//                     className="h-5 w-5 rounded object-contain opacity-45 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
//                   />

//                 </a>

//               ))}

//             </div>

//             <div className="mt-7 flex items-center gap-3">

//               <span className="h-px w-7 bg-[#cda653]" />

//               <span className="text-[7px] uppercase tracking-[.35em] text-white/20">
//                 Follow The Journey
//               </span>

//             </div>

//           </div>

//         </div>


//         {/* =====================================================
//             FINAL CINEMATIC SECTION
//         ===================================================== */}
//         <div className="relative mt-20 border-t border-white/[0.08] pt-12">

//           <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">


//             {/* LOGO STYLE TEXT */}
//             <div>

//               <div className="flex items-center gap-3">

//                 <div className="flex h-12 w-12 items-center justify-center border border-[#cda653]/40">

//                   <span className="font-serif text-xl italic text-[#cda653]">
//                     N
//                   </span>

//                 </div>

//                 <div>

//                   <div className="font-serif text-xl font-light tracking-wide">
//                     NAHOM
//                   </div>

//                   <div className="text-[6px] uppercase tracking-[.45em] text-white/30">
//                     Film Production
//                   </div>

//                 </div>

//               </div>

//             </div>


//             {/* TAGLINE */}
//             <div className="max-w-md md:text-right">

//               <p className="font-serif text-lg font-light italic text-white/45">
//                 “Every frame has a story.
//                 <span className="text-[#cda653]">
//                   {" "}We make it unforgettable.
//                 </span>”
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           BOTTOM BAR
//       ===================================================== */}
//       <div className="relative border-t border-white/[0.08] bg-black/50">

//         <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-5 px-6 py-6 sm:px-10 md:flex-row lg:px-16 xl:px-20">

//           <span className="text-center text-[7px] uppercase tracking-[.3em] text-white/20 md:text-left">
//             © 2026 Nahom Film Production — All Rights Reserved
//           </span>


//           <div className="flex items-center gap-6">

//             <span className="hidden text-[7px] uppercase tracking-[.3em] text-white/15 sm:block">
//               Africa • Europe • Worldwide
//             </span>

//             <span className="h-px w-8 bg-[#cda653]/40" />

//             <Link
//               to="/admin-login"
//               className="text-[7px] uppercase tracking-[.3em] text-white/10 transition duration-300 hover:text-[#cda653]"
//             >
//               Admin
//             </Link>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

import tiktokImg from "../assets/images/tiktok.jpeg";
import instagramImg from "../assets/images/instagram.jpeg";
import youtubeImg from "../assets/images/youtube.jpeg";
import facebookImg from "../assets/images/facebook.jpeg";

function Footer() {
  const socials = [
    {
      name: "TikTok",
      image: tiktokImg,
      href: "https://www.tiktok.com/@habshapicture?_r=1&_t=ZS-98RLvYscrdH",
    },
    {
      name: "Instagram",
      image: instagramImg,
      href: "https://www.instagram.com/habesha_pictuer?igsh=anF1OXc4dnB4bGs1",
    },
    {
      name: "YouTube",
      image: youtubeImg,
      href: "#",
    },
    {
      name: "Facebook",
      image: facebookImg,
      href: "https://www.facebook.com/share/1BbUufnsKQ/",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          CINEMATIC EFFECTS
      ===================================================== */}
      <style>{`
        @keyframes footerReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes goldMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        @keyframes softPulse {
          0%, 100% {
            opacity: .25;
          }
          50% {
            opacity: .8;
          }
        }

        @keyframes filmScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .footer-reveal {
          animation: footerReveal 1s ease forwards;
        }

        .gold-move {
          animation: goldMove 5s linear infinite;
        }

        .soft-pulse {
          animation: softPulse 2.5s ease-in-out infinite;
        }

        .film-scroll {
          animation: filmScroll 35s linear infinite;
        }
      `}</style>


      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#FF4900]/[0.06] blur-[150px]" />

        <div className="absolute right-[-15%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-[#FF4900]/[0.05] blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.45)_100%)]" />

      </div>


      {/* =====================================================
          FILM STRIP
      ===================================================== */}
      <div className="relative overflow-hidden border-y border-white/[0.07] bg-[#080808]">

        <div className="film-scroll flex w-max">

          {[...Array(2)].map((_, group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
            >

              {[...Array(10)].map((_, index) => (

                <div
                  key={index}
                  className="flex items-center gap-7 px-8 py-4"
                >

                  <span className="font-mono text-[7px] tracking-[.35em] text-white/15">
                    FRAME {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#FF4900]/50" />

                  <span className="font-mono text-[7px] tracking-[.35em] text-[#FF4900]/40">
                    HABESHA FILM
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/10" />

                </div>

              ))}

            </div>
          ))}

        </div>

      </div>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="relative mx-auto max-w-[1800px] px-6 py-20 sm:px-10 lg:px-16 xl:px-20">

        {/* Top Number */}
        <div className="mb-16 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <span className="soft-pulse h-2 w-2 rounded-full bg-[#FF4900]" />

            <span className="font-mono text-[7px] uppercase tracking-[.45em] text-white/30">
              Habesha Film Production
            </span>

          </div>

          <span className="font-mono text-[7px] tracking-[.35em] text-white/20">
            HFP / 2026
          </span>

        </div>


        {/* =====================================================
            HUGE BRAND STATEMENT
        ===================================================== */}
        <div className="footer-reveal">

          <div className="max-w-[1200px]">

            <span className="text-[8px] uppercase tracking-[.5em] text-[#FF4900]">
              We create
            </span>

            <h2 className=" text-[#2563eb] mt-5 font-serif text-[58px] font-light leading-[.85] tracking-[-.055em] sm:text-[85px] md:text-[110px] lg:text-[135px]">

              Stories

              <span className="ml-3 italic text-[#FF4900]">
                that
              </span>

              <br />

              <span className=" text-[#2563eb] ">
                stay.
              </span>

            </h2>

          </div>

        </div>


        {/* =====================================================
            GOLD LINE
        ===================================================== */}
        <div className="relative mt-16 h-px w-full overflow-hidden bg-white/[0.08]">

          <div className="gold-move absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[#FF4900] to-transparent" />

        </div>


        {/* =====================================================
            INFORMATION GRID
        ===================================================== */}
        <div className="mt-14 grid gap-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">


          {/* BRAND */}
          <div>

            <h3 className="font-serif text-2xl font-light text-[#2563eb] ">
              NAHOME
              <span className="ml-2 italic text-[#FF4900]">
                Film Production
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/35">
              Film. Photography. Production.
              <br />
              Visual stories crafted with purpose.
            </p>

          </div>


          {/* NAVIGATION */}
          <div className="text-[#2563eb] ">

            <span className="mb-6 block font-mono text-[7px] tracking-[.4em] text-[#FF4900]">
              01 / EXPLORE
            </span>

            <div className="flex flex-col gap-4">

              <a
                href="#portfolio"
                className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#FF4900] transition-all duration-300 group-hover:w-6" />
                Portfolio
              </a>

              <a
                href="#services"
                className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#FF4900] transition-all duration-300 group-hover:w-6" />
                Services
              </a>

              <a
                href="#about"
                className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#FF4900] transition-all duration-300 group-hover:w-6" />
                About
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-white/45 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#FF4900] transition-all duration-300 group-hover:w-6" />
                Contact
              </a>

            </div>

          </div>


          {/* CONTACT */}
          <div>

            <span className="mb-6 block font-mono text-[7px] tracking-[.4em] text-[#FF4900]">
              02 / CONTACT
            </span>

            <div className="space-y-4">

              <a
                href="mailto:Adalhambir946@gmail.com"
                className="block text-xs text-white/45 transition hover:text-[#FF4900]"
              >
                Adalhambir946@gmail.com
              </a>

              <a
                href="tel:+251976130175"
                className="block text-xs text-white/45 transition hover:text-[#FF4900]"
              >
                +251 976 130 175
              </a>

              <a
                href="tel:+251942746150"
                className="block text-xs text-white/45 transition hover:text-[#FF4900]"
              >
                +251 942 746 150
              </a>

              <a
                href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-white/45 transition hover:text-[#FF4900]"
              >
                Addis Ababa, Ethiopia
              </a>

            </div>

          </div>


          {/* SOCIAL */}
          <div>

            <span className="mb-6 block font-mono text-[7px] tracking-[.4em] text-[#FF4900]">
              03 / SOCIAL
            </span>

            <div className="grid grid-cols-4 gap-2">

              {socials.map((social) => (

                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-[#FF4900]/50 hover:bg-[#FF4900]/10"
                >

                  <img
                    src={social.image}
                    alt={social.name}
                    className="h-5 w-5 rounded object-contain opacity-45 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />

                </a>

              ))}

            </div>

            <div className="mt-7 flex items-center gap-3">

              <span className="h-px w-7 bg-[#FF4900]" />

              <span className="text-[7px] uppercase tracking-[.35em] text-white/20">
                Follow The Journey
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            FINAL CINEMATIC SECTION
        ===================================================== */}
        <div className="relative mt-20 border-t border-white/[0.08] pt-12">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">


            {/* LOGO STYLE TEXT */}
            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center border border-[#FF4900]/40">

                  <span className="font-serif text-xl italic text-[#2563eb] ">
                    N
                  </span>

                </div>

                <div>

                  <div className="font-serif text-xl font-light tracking-wide text-[#2563eb] ">
                    NAHOME
                  </div>

                  <div className="text-[6px] uppercase tracking-[.45em] text-white/30">
                    Film Production
                  </div>

                </div>

              </div>

            </div>


            {/* TAGLINE */}
            <div className="max-w-md md:text-right">

              <p className="font-serif text-lg font-light italic text-[#2563eb] ">
                “Every frame has a story.
                <span className="text-[#FF4900]">
                  {" "}We make it unforgettable.
                </span>”
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}
      <div className="relative border-t border-white/[0.08] bg-black/50">

        <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-5 px-6 py-6 sm:px-10 md:flex-row lg:px-16 xl:px-20">

          <span className="text-center text-[7px] uppercase tracking-[.3em] text-white/20 md:text-left">
            © 2026 NAHOME Film Production — All Rights Reserved
          </span>


          <div className="flex items-center gap-6">

            <span className="hidden text-[7px] uppercase tracking-[.3em] text-white/15 sm:block">
              Africa • Europe • Worldwide
            </span>

            <span className="h-px w-8 bg-[#FF4900]/40" />

            <Link
              to="/admin-login"
              className="text-[7px] uppercase tracking-[.3em] text-white/10 transition duration-300 hover:text-[#FF4900]"
            >
              Admin
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;