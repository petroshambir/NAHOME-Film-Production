
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// import logo from "../assets/images/nahom-logo.jpeg";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [workOpen, setWorkOpen] = useState(false);
//   const [galleryLinks, setGalleryLinks] = useState([]);
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();

//   /* =========================================================
//      FETCH GALLERY
//   ========================================================= */

//   useEffect(() => {
//     fetch("https://habesha-film-production-server.onrender.com/api/projects")
//       .then((res) => res.json())
//       .then((data) => {
//         setGalleryLinks(data);
//       })
//       .catch((err) =>
//         console.log("Error fetching gallery categories:", err)
//       );
//   }, []);

//   /* =========================================================
//      SCROLL EFFECT
//   ========================================================= */

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* =========================================================
//      CLOSE MOBILE MENU ON ROUTE CHANGE
//   ========================================================= */

//   useEffect(() => {
//     setIsOpen(false);
//     setWorkOpen(false);
//   }, [location.pathname]);

//   /* =========================================================
//      SLUG GENERATOR
//   ========================================================= */

//   const generateSlug = (titleText) => {
//     if (!titleText) return "";

//     return titleText
//       .toLowerCase()
//       .replace(/["']/g, "")
//       .replace(/&/g, "and")
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-");
//   };

//   /* =========================================================
//      ACTIVE LINK
//   ========================================================= */

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <>
//       {/* =====================================================
//           CINEMATIC NAVBAR
//       ===================================================== */}

//       <nav
//         className={`
//           fixed top-0 left-0 z-[100] w-full
//           transition-all duration-700
//           ${
//             scrolled
//               ? "border-b border-white/10 bg-[#050505]/90 backdrop-blur-2xl"
//               : "bg-transparent"
//           }
//         `}
//       >

//         {/* =================================================
//             TOP GOLD LINE
//         ================================================= */}

//         <div
//           className={`
//             absolute top-0 left-0 h-[1px] bg-[#cda653]
//             transition-all duration-1000
//             ${scrolled ? "w-full opacity-70" : "w-0 opacity-0"}
//           `}
//         />

//         {/* =================================================
//             MAIN NAV
//         ================================================= */}

//         <div
//           className="
//             mx-auto flex h-[88px] max-w-[1800px]
//             items-center justify-between
//             px-5 sm:px-8 lg:px-12 xl:px-20
//           "
//         >

//           {/* =================================================
//               LOGO
//           ================================================= */}

//           <Link
//             to="/home"
//             className="
//               group relative z-[110]
//               flex items-center
//             "
//           >

//             <div
//               className="
//                 relative overflow-hidden
//                 transition-all duration-500
//                 group-hover:scale-[1.03]
//               "
//             >

//               <img
//                 src={logo}
//                 alt="Nahom Film Production"
//                 className="
//                   h-[58px] w-[76px]
//                   object-contain
//                   sm:h-[66px] sm:w-[88px]
//                   md:h-[72px] md:w-[96px]
//                 "
//               />

//               {/* Logo glow */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute inset-0
//                   bg-[#cda653]/10
//                   blur-xl
//                   opacity-0
//                   transition-opacity duration-500
//                   group-hover:opacity-100
//                 "
//               />

//             </div>

//           </Link>


//           {/* =================================================
//               DESKTOP NAVIGATION
//           ================================================= */}

//           <div
//             className="
//               hidden lg:flex
//               items-center
//               gap-1
//               rounded-full
//               border border-white/10
//               bg-black/20
//               px-2 py-2
//               backdrop-blur-md
//             "
//           >

//             {/* HOME */}

//             <Link
//               to="/home"
//               className={`
//                 relative px-5 py-3
//                 text-[9px]
//                 font-medium
//                 uppercase
//                 tracking-[0.28em]
//                 transition-all duration-300
//                 ${
//                   isActive("/home")
//                     ? "text-[#d8b76a]"
//                     : "text-white/65 hover:text-white"
//                 }
//               `}
//             >
//               Home

//               {isActive("/home") && (
//                 <span
//                   className="
//                     absolute bottom-1
//                     left-1/2
//                     h-px w-5
//                     -translate-x-1/2
//                     bg-[#cda653]
//                   "
//                 />
//               )}
//             </Link>


//             {/* ABOUT */}

//             <Link
//               to="/about"
//               className={`
//                 relative px-5 py-3
//                 text-[9px]
//                 font-medium
//                 uppercase
//                 tracking-[0.28em]
//                 transition-all duration-300
//                 ${
//                   isActive("/about")
//                     ? "text-[#d8b76a]"
//                     : "text-white/65 hover:text-white"
//                 }
//               `}
//             >
//               About

//               {isActive("/about") && (
//                 <span
//                   className="
//                     absolute bottom-1
//                     left-1/2
//                     h-px w-5
//                     -translate-x-1/2
//                     bg-[#cda653]
//                   "
//                 />
//               )}
//             </Link>


//             {/* =================================================
//                 GALLERY
//             ================================================= */}

//             <div
//               className="relative"
//               onMouseEnter={() => setWorkOpen(true)}
//               onMouseLeave={() => setWorkOpen(false)}
//             >

//               <button
//                 type="button"
//                 onClick={() => setWorkOpen(!workOpen)}
//                 className="
//                   group flex items-center gap-2
//                   px-5 py-3
//                   text-[9px]
//                   font-medium
//                   uppercase
//                   tracking-[0.28em]
//                   text-white/65
//                   transition-all duration-300
//                   hover:text-white
//                 "
//               >

//                 Gallery

//                 <span
//                   className={`
//                     text-[8px]
//                     text-[#cda653]
//                     transition-transform duration-300
//                     ${workOpen ? "rotate-180" : ""}
//                   `}
//                 >
//                   ↓
//                 </span>

//               </button>


//               {/* GALLERY DROPDOWN */}

//               <div
//                 className={`
//                   absolute right-0 top-[calc(100%+14px)]
//                   w-[270px]
//                   origin-top
//                   transition-all duration-300
//                   ${
//                     workOpen
//                       ? "visible translate-y-0 opacity-100"
//                       : "invisible -translate-y-2 opacity-0"
//                   }
//                 `}
//               >

//                 <div
//                   className="
//                     relative
//                     overflow-hidden
//                     border border-white/10
//                     bg-[#080808]/95
//                     p-3
//                     shadow-[0_25px_80px_rgba(0,0,0,.7)]
//                     backdrop-blur-2xl
//                   "
//                 >

//                   {/* gold top line */}

//                   <div
//                     className="
//                       absolute left-0 right-0 top-0
//                       h-px
//                       bg-gradient-to-r
//                       from-transparent
//                       via-[#cda653]
//                       to-transparent
//                     "
//                   />

//                   <div className="px-3 pb-3 pt-2">

//                     <span
//                       className="
//                         text-[7px]
//                         uppercase
//                         tracking-[0.4em]
//                         text-[#cda653]
//                       "
//                     >
//                       Our Work
//                     </span>

//                     <p
//                       className="
//                         mt-1
//                         font-serif
//                         text-lg
//                         font-light
//                         text-white/90
//                       "
//                     >
//                       Selected Stories
//                     </p>

//                   </div>


//                   <div className="border-t border-white/10 pt-2">

//                     {galleryLinks.length > 0 ? (

//                       galleryLinks.map((item, index) => {

//                         const rawTitle = item.title
//                           ? item.title.replace(/"/g, "")
//                           : "";

//                         const slug = generateSlug(item.title);

//                         return (
//                           <Link
//                             key={item._id || index}
//                             to={`/gallery/${slug}`}
//                             onClick={() => {
//                               setWorkOpen(false);
//                               setIsOpen(false);
//                             }}
//                             className="
//                               group flex items-center
//                               justify-between
//                               border-b border-white/5
//                               px-3 py-3
//                               transition-all duration-300
//                               last:border-none
//                               hover:bg-white/[0.04]
//                             "
//                           >

//                             <span
//                               className="
//                                 text-[9px]
//                                 uppercase
//                                 tracking-[0.18em]
//                                 text-white/55
//                                 transition-colors
//                                 group-hover:text-[#d8b76a]
//                               "
//                             >
//                               {rawTitle}
//                             </span>

//                             <span
//                               className="
//                                 text-[#cda653]
//                                 opacity-0
//                                 transition-all duration-300
//                                 group-hover:translate-x-1
//                                 group-hover:opacity-100
//                               "
//                             >
//                               →
//                             </span>

//                           </Link>
//                         );
//                       })

//                     ) : (

//                       <span
//                         className="
//                           block px-3 py-3
//                           text-[8px]
//                           uppercase
//                           tracking-[0.2em]
//                           text-white/25
//                         "
//                       >
//                         Loading...
//                       </span>

//                     )}

//                   </div>

//                 </div>

//               </div>

//             </div>


//             {/* PRICE */}

//             <Link
//               to="/price"
//               className={`
//                 relative px-5 py-3
//                 text-[9px]
//                 font-medium
//                 uppercase
//                 tracking-[0.28em]
//                 transition-all duration-300
//                 ${
//                   isActive("/price")
//                     ? "text-[#d8b76a]"
//                     : "text-white/65 hover:text-white"
//                 }
//               `}
//             >
//               Price
//             </Link>


//             {/* CONTACT */}

//             <Link
//               to="/contact"
//               className={`
//                 relative px-5 py-3
//                 text-[9px]
//                 font-medium
//                 uppercase
//                 tracking-[0.28em]
//                 transition-all duration-300
//                 ${
//                   isActive("/contact")
//                     ? "text-[#d8b76a]"
//                     : "text-white/65 hover:text-white"
//                 }
//               `}
//             >
//               Contact
//             </Link>

//           </div>


//           {/* =================================================
//               RIGHT CTA
//           ================================================= */}

//           <div className="hidden lg:flex items-center gap-5">

//             {/* small status */}

//             <div className="flex items-center gap-2">

//               <span
//                 className="
//                   h-1.5 w-1.5
//                   rounded-full
//                   bg-[#cda653]
//                   shadow-[0_0_12px_#cda653]
//                 "
//               />

//               <span
//                 className="
//                   text-[7px]
//                   uppercase
//                   tracking-[0.3em]
//                   text-white/35
//                 "
//               >
//                 Available
//               </span>

//             </div>


//             {/* Client Selection */}

//             <Link
//               to="/client-selection"
//               className="
//                 group relative
//                 overflow-hidden
//                 border border-[#cda653]/70
//                 bg-[#cda653]
//                 px-6 py-3.5
//                 text-[8px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.28em]
//                 text-black
//                 transition-all duration-500
//                 hover:border-white
//                 hover:bg-white
//               "
//             >

//               <span className="relative z-10">
//                 Client Selection
//               </span>

//               <span
//                 className="
//                   ml-3
//                   inline-block
//                   transition-transform duration-500
//                   group-hover:translate-x-1
//                 "
//               >
//                 →
//               </span>

//             </Link>

//           </div>


//           {/* =================================================
//               MOBILE MENU BUTTON
//           ================================================= */}

//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             className="
//               relative z-[110]
//               flex h-11 w-11
//               items-center justify-center
//               border border-white/15
//               bg-black/20
//               backdrop-blur-md
//               lg:hidden
//             "
//             aria-label="Toggle navigation"
//           >

//             <div className="flex w-5 flex-col gap-1.5">

//               <span
//                 className={`
//                   h-px w-full
//                   bg-white
//                   transition-all duration-300
//                   ${isOpen ? "translate-y-[4px] rotate-45" : ""}
//                 `}
//               />

//               <span
//                 className={`
//                   h-px w-3/4
//                   self-end
//                   bg-[#cda653]
//                   transition-all duration-300
//                   ${isOpen ? "opacity-0" : ""}
//                 `}
//               />

//               <span
//                 className={`
//                   h-px w-full
//                   bg-white
//                   transition-all duration-300
//                   ${isOpen ? "-translate-y-[4px] -rotate-45" : ""}
//                 `}
//               />

//             </div>

//           </button>

//         </div>


//         {/* =====================================================
//             MOBILE MENU
//         ===================================================== */}

//         <div
//           className={`
//             fixed inset-0 z-[105]
//             bg-[#050505]
//             transition-all duration-500
//             lg:hidden
//             ${
//               isOpen
//                 ? "visible opacity-100"
//                 : "invisible opacity-0 pointer-events-none"
//             }
//           `}
//         >

//           {/* background glow */}

//           <div
//             className="
//               absolute
//               -right-32
//               top-20
//               h-[400px]
//               w-[400px]
//               rounded-full
//               bg-[#cda653]/10
//               blur-[130px]
//             "
//           />

//           <div
//             className="
//               absolute
//               -left-32
//               bottom-20
//               h-[350px]
//               w-[350px]
//               rounded-full
//               bg-[#cda653]/5
//               blur-[120px]
//             "
//           />


//           {/* mobile content */}

//           <div
//             className="
//               relative
//               flex h-full
//               flex-col
//               justify-center
//               px-8
//               sm:px-14
//             "
//           >

//             {/* small label */}

//             <div className="mb-10 flex items-center gap-4">

//               <span className="h-px w-10 bg-[#cda653]" />

//               <span
//                 className="
//                   text-[8px]
//                   uppercase
//                   tracking-[0.4em]
//                   text-white/35
//                 "
//               >
//                 Nahom Film Production
//               </span>

//             </div>


//             {/* mobile links */}

//             <div className="flex flex-col">

//               <Link
//                 to="/home"
//                 className="
//                   border-b border-white/10
//                   py-5
//                   font-serif
//                   text-4xl
//                   font-light
//                   text-white/85
//                   transition-colors
//                   hover:text-[#cda653]
//                 "
//               >
//                 Home
//               </Link>


//               <Link
//                 to="/about"
//                 className="
//                   border-b border-white/10
//                   py-5
//                   font-serif
//                   text-4xl
//                   font-light
//                   text-white/85
//                   transition-colors
//                   hover:text-[#cda653]
//                 "
//               >
//                 About
//               </Link>


//               {/* Mobile Gallery */}

//               <button
//                 type="button"
//                 onClick={() => setWorkOpen(!workOpen)}
//                 className="
//                   flex items-center
//                   justify-between
//                   border-b border-white/10
//                   py-5
//                   text-left
//                   font-serif
//                   text-4xl
//                   font-light
//                   text-white/85
//                 "
//               >

//                 Gallery

//                 <span
//                   className={`
//                     font-sans
//                     text-lg
//                     text-[#cda653]
//                     transition-transform
//                     ${workOpen ? "rotate-180" : ""}
//                   `}
//                 >
//                   ↓
//                 </span>

//               </button>


//               {workOpen && (

//                 <div
//                   className="
//                     max-h-[220px]
//                     overflow-y-auto
//                     border-b border-white/10
//                     py-3
//                   "
//                 >

//                   {galleryLinks.map((item, index) => {

//                     const rawTitle = item.title
//                       ? item.title.replace(/"/g, "")
//                       : "";

//                     const slug = generateSlug(item.title);

//                     return (
//                       <Link
//                         key={item._id || index}
//                         to={`/gallery/${slug}`}
//                         className="
//                           block
//                           py-3
//                           pl-4
//                           text-[9px]
//                           uppercase
//                           tracking-[0.25em]
//                           text-white/45
//                           transition-colors
//                           hover:text-[#cda653]
//                         "
//                       >
//                         {rawTitle}
//                       </Link>
//                     );
//                   })}

//                 </div>

//               )}


//               <Link
//                 to="/price"
//                 className="
//                   border-b border-white/10
//                   py-5
//                   font-serif
//                   text-4xl
//                   font-light
//                   text-white/85
//                   transition-colors
//                   hover:text-[#cda653]
//                 "
//               >
//                 Price
//               </Link>


//               <Link
//                 to="/contact"
//                 className="
//                   border-b border-white/10
//                   py-5
//                   font-serif
//                   text-4xl
//                   font-light
//                   text-white/85
//                   transition-colors
//                   hover:text-[#cda653]
//                 "
//               >
//                 Contact
//               </Link>

//             </div>


//             {/* mobile bottom */}

//             <div className="mt-10">

//               <Link
//                 to="/client-selection"
//                 className="
//                   group flex
//                   w-full
//                   items-center
//                   justify-between
//                   bg-[#cda653]
//                   px-6 py-4
//                   text-[9px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.3em]
//                   text-black
//                 "
//               >

//                 <span>
//                   Client Selection
//                 </span>

//                 <span className="text-lg transition-transform group-hover:translate-x-1">
//                   →
//                 </span>

//               </Link>

//             </div>


//             {/* mobile footer */}

//             <div className="mt-auto flex items-center justify-between pb-8 pt-10">

//               <span
//                 className="
//                   text-[7px]
//                   uppercase
//                   tracking-[0.35em]
//                   text-white/25
//                 "
//               >
//                 NFP / ORIGINAL PICTURES
//               </span>

//               <span
//                 className="
//                   text-[7px]
//                   uppercase
//                   tracking-[0.35em]
//                   text-[#cda653]/60
//                 "
//               >
//                 EST. 2014
//               </span>

//             </div>

//           </div>

//         </div>

//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/nahom-logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [galleryLinks, setGalleryLinks] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* =========================================================
     FETCH GALLERY
  ========================================================= */

  useEffect(() => {
    fetch("https://habesha-film-production-server.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setGalleryLinks(data);
      })
      .catch((err) =>
        console.log("Error fetching gallery categories:", err)
      );
  }, []);

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setIsOpen(false);
    setWorkOpen(false);
  }, [location.pathname]);

  /* =========================================================
     SLUG GENERATOR
  ========================================================= */

  const generateSlug = (titleText) => {
    if (!titleText) return "";

    return titleText
      .toLowerCase()
      .replace(/["']/g, "")
      .replace(/&/g, "and")
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  /* =========================================================
     ACTIVE LINK
  ========================================================= */

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* =====================================================
          CINEMATIC NAVBAR
      ==================================================== */}

      <nav
        className={`
          fixed top-0 left-0 z-[100] w-full
          transition-all duration-700
          ${
            scrolled
              ? "border-b border-black/10 bg-[#fcfcfc]/90 backdrop-blur-2xl"
              : "bg-transparent"
          }
        `}
      >

        {/* =================================================
            TOP GOLD LINE
        ================================================_ */}

        <div
          className={`
            absolute top-0 left-0 h-[1px] bg-[#997a33]
            transition-all duration-1000
            ${scrolled ? "w-full opacity-70" : "w-0 opacity-0"}
          `}
        />

        {/* =================================================
            MAIN NAV
        ================================================= */}

        <div
          className="
            mx-auto flex h-[88px] max-w-[1800px]
            items-center justify-between
            px-5 sm:px-8 lg:px-12 xl:px-20
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/home"
            className="
              group relative z-[110]
              flex items-center
            "
          >

            <div
              className="
                relative overflow-hidden
                transition-all duration-500
                group-hover:scale-[1.03]
              "
            >

              <img
                src={logo}
                alt="Nahom Film Production"
                className="
                  h-[58px] w-[76px]
                  object-contain
                  sm:h-[66px] sm:w-[88px]
                  md:h-[72px] md:w-[96px]
                "
              />

              {/* Logo glow */}

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-[#997a33]/10
                  blur-xl
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

            </div>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              hidden lg:flex
              items-center
              gap-1
              rounded-full
              border border-black/10
              bg-white/60
              px-2 py-2
              backdrop-blur-md
            "
          >

            {/* HOME */}

            <Link
              to="/home"
              className={`
                relative px-5 py-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                transition-all duration-300
                ${
                  isActive("/home")
                    ? "text-[#FF4900]"
                    : "text-[#2563eb] hover:text-[#FF4900]"
                }
              `}
            >
              Home

              {isActive("/home") && (
                <span
                  className="
                    absolute bottom-1
                    left-1/2
                    h-px w-5
                    -translate-x-1/2
                    bg-[#FF4900]
                  "
                />
              )}
            </Link>


            {/* ABOUT */}

            <Link
              to="/about"
              className={`
                relative px-5 py-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                transition-all duration-300
                ${
                  isActive("/about")
                    ? "text-[#FF4900]"
                    : "text-[#2563eb] hover:text-[#FF4900]"
                }
              `}
            >
              About

              {isActive("/about") && (
                <span
                  className="
                    absolute bottom-1
                    left-1/2
                    h-px w-5
                    -translate-x-1/2
                    bg-[#FF4900]
                  "
                />
              )}
            </Link>


            {/* =================================================
                GALLERY
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >

              <button
                type="button"
                onClick={() => setWorkOpen(!workOpen)}
                className="
                  group flex items-center gap-2
                  px-5 py-3
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#2563eb]
                  transition-all duration-300
                  hover:text-[#FF4900]
                "
              >

                Gallery

                <span
                  className={`
                    text-[8px]
                    transition-transform duration-300
                    ${workOpen ? "rotate-180 text-[#FF4900]" : "text-[#2563eb] group-hover:text-[#FF4900]"}
                  `}
                >
                  ↓
                </span>

              </button>


              {/* GALLERY DROPDOWN */}

              <div
                className={`
                  absolute right-0 top-[calc(100%+14px)]
                  w-[270px]
                  origin-top
                  transition-all duration-300
                  ${
                    workOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    border border-black/10
                    bg-[#f8f8f8]/95
                    p-3
                    shadow-[0_25px_80px_rgba(0,0,0,.15)]
                    backdrop-blur-2xl
                  "
                >

                  {/* gold top line */}

                  <div
                    className="
                      absolute left-0 right-0 top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#FF4900]
                      to-transparent
                    "
                  />

                  <div className="px-3 pb-3 pt-2">

                    <span
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.4em]
                        text-[#2563eb]
                      "
                    >
                      Our Work
                    </span>

                    <p
                      className="
                        mt-1
                        font-serif
                        text-lg
                        font-light
                        text-black/90
                      "
                    >
                      Selected Stories
                    </p>

                  </div>


                  <div className="border-t border-black/10 pt-2">

                    {galleryLinks.length > 0 ? (

                      galleryLinks.map((item, index) => {

                        const rawTitle = item.title
                          ? item.title.replace(/"/g, "")
                          : "";

                        const slug = generateSlug(item.title);

                        return (
                          <Link
                            key={item._id || index}
                            to={`/gallery/${slug}`}
                            onClick={() => {
                              setWorkOpen(false);
                              setIsOpen(false);
                            }}
                            className="
                              group flex items-center
                              justify-between
                              border-b border-black/5
                              px-3 py-3
                              transition-all duration-300
                              last:border-none
                              hover:bg-black/[0.04]
                            "
                          >

                            <span
                              className="
                                text-[9px]
                                uppercase
                                tracking-[0.18em]
                                text-[#2563eb]
                                transition-colors
                                group-hover:text-[#FF4900]
                              "
                            >
                              {rawTitle}
                            </span>

                            <span
                              className="
                                text-[#FF4900]
                                opacity-0
                                transition-all duration-300
                                group-hover:translate-x-1
                                group-hover:opacity-100
                              "
                            >
                              →
                            </span>

                          </Link>
                        );
                      })

                    ) : (

                      <span
                        className="
                          block px-3 py-3
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                          text-[#2563eb]/70
                        "
                      >
                        Loading...
                      </span>

                    )}

                  </div>

                </div>

              </div>

            </div>


            {/* PRICE */}

            <Link
              to="/price"
              className={`
                relative px-5 py-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                transition-all duration-300
                ${
                  isActive("/price")
                    ? "text-[#FF4900]"
                    : "text-[#2563eb] hover:text-[#FF4900]"
                }
              `}
            >
              Price
            </Link>


            {/* CONTACT */}

            <Link
              to="/contact"
              className={`
                relative px-5 py-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                transition-all duration-300
                ${
                  isActive("/contact")
                    ? "text-[#FF4900]"
                    : "text-[#2563eb] hover:text-[#FF4900]"
                }
              `}
            >
              Contact
            </Link>

          </div>


          {/* =================================================
              RIGHT CTA
          ================================================= */}

          <div className="hidden lg:flex items-center gap-5">

            {/* small status */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-[#997a33]
                  shadow-[0_0_12px_#997a33]
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-black/55
                "
              >
                Available
              </span>

            </div>


            {/* Client Selection */}

            <Link
              to="/client-selection"
              className="
                group relative
                overflow-hidden
                border border-[#2563eb]/70
                bg-[#2563eb]
                px-6 py-3.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white
                transition-all duration-500
                hover:border-[#FF4900]
                hover:bg-[#FF4900]
                hover:text-white
              "
            >

              <span className="relative z-10">
                Client Selection
              </span>

              <span
                className="
                  ml-3
                  inline-block
                  transition-transform duration-500
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              relative z-[110]
              flex h-11 w-11
              items-center justify-center
              border border-black/15
              bg-white/60
              backdrop-blur-md
              lg:hidden
            "
            aria-label="Toggle navigation"
          >

            <div className="flex w-5 flex-col gap-1.5">

              <span
                className={`
                  h-px w-full
                  bg-black
                  transition-all duration-300
                  ${isOpen ? "translate-y-[4px] rotate-45" : ""}
                `}
              />

              <span
                className={`
                  h-px w-3/4
                  self-end
                  bg-[#2563eb]
                  transition-all duration-300
                  ${isOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  h-px w-full
                  bg-black
                  transition-all duration-300
                  ${isOpen ? "-translate-y-[4px] -rotate-45" : ""}
                `}
              />

            </div>

          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`
            fixed inset-0 z-[105]
            bg-[#fcfcfc]
            transition-all duration-500
            lg:hidden
            ${
              isOpen
                ? "visible opacity-100"
                : "invisible opacity-0 pointer-events-none"
            }
          `}
        >

          {/* background glow */}

          <div
            className="
              absolute
              -right-32
              top-20
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#2563eb]/10
              blur-[130px]
            "
          />

          <div
            className="
              absolute
              -left-32
              bottom-20
              h-[350px]
              w-[350px]
              rounded-full
              bg-[#FF4900]/10
              blur-[120px]
            "
          />


          {/* mobile content */}

          <div
            className="
              relative
              flex h-full
              flex-col
              justify-center
              px-8
              sm:px-14
            "
          >

            {/* small label */}

            <div className="mb-10 flex items-center gap-4">

              <span className="h-px w-10 bg-[#2563eb]" />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-black/55
                "
              >
                Nahom Film Production
              </span>

            </div>


            {/* mobile links */}

            <div className="flex flex-col">

              <Link
                to="/home"
                className="
                  border-b border-black/10
                  py-5
                  font-serif
                  text-4xl
                  font-light
                  text-[#2563eb]
                  transition-colors
                  hover:text-[#FF4900]
                "
              >
                Home
              </Link>


              <Link
                to="/about"
                className="
                  border-b border-black/10
                  py-5
                  font-serif
                  text-4xl
                  font-light
                  text-[#2563eb]
                  transition-colors
                  hover:text-[#FF4900]
                "
              >
                About
              </Link>


              {/* Mobile Gallery */}

              <button
                type="button"
                onClick={() => setWorkOpen(!workOpen)}
                className="
                  flex items-center
                  justify-between
                  border-b border-black/10
                  py-5
                  text-left
                  font-serif
                  text-4xl
                  font-light
                  text-[#2563eb]
                  transition-colors
                  hover:text-[#FF4900]
                "
              >

                Gallery

                <span
                  className={`
                    font-sans
                    text-lg
                    transition-transform
                    ${workOpen ? "rotate-180 text-[#FF4900]" : "text-[#2563eb]"}
                  `}
                >
                  ↓
                </span>

              </button>


              {workOpen && (

                <div
                  className="
                    max-h-[220px]
                    overflow-y-auto
                    border-b border-black/10
                    py-3
                  "
                >

                  {galleryLinks.map((item, index) => {

                    const rawTitle = item.title
                      ? item.title.replace(/"/g, "")
                      : "";

                    const slug = generateSlug(item.title);

                    return (
                      <Link
                        key={item._id || index}
                        to={`/gallery/${slug}`}
                        className="
                          block
                          py-3
                          pl-4
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#2563eb]
                          transition-colors
                          hover:text-[#FF4900]
                        "
                      >
                        {rawTitle}
                      </Link>
                    );
                  })}

                </div>

              )}


              <Link
                to="/price"
                className="
                  border-b border-black/10
                  py-5
                  font-serif
                  text-4xl
                  font-light
                  text-[#2563eb]
                  transition-colors
                  hover:text-[#FF4900]
                "
              >
                Price
              </Link>


              <Link
                to="/contact"
                className="
                  border-b border-black/10
                  py-5
                  font-serif
                  text-4xl
                  font-light
                  text-[#2563eb]
                  transition-colors
                  hover:text-[#FF4900]
                "
              >
                Contact
              </Link>

            </div>


            {/* mobile bottom */}

            <div className="mt-10">

              <Link
                to="/client-selection"
                className="
                  group flex
                  w-full
                  items-center
                  justify-between
                  bg-[#2563eb]
                  px-6 py-4
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-white
                  hover:bg-[#FF4900]
                  transition-colors
                "
              >

                <span>
                  Client Selection
                </span>

                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>


            {/* mobile footer */}

            <div className="mt-auto flex items-center justify-between pb-8 pt-10">

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.35em]
                  text-[#2563eb]/70
                "
              >
                NFP / ORIGINAL PICTURES
              </span>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.35em]
                  text-[#FF4900]
                "
              >
                EST. 2014
              </span>

            </div>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;