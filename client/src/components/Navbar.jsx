

// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// import logo from "../assets/images/";

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
//     fetch("https://nahome-film-production.onrender.com/api/projects")
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
//         ================================================_ */}

//         <div
//           className={`
//             absolute top-0 left-0 h-[1px] bg-[#cda653]
//             transition-all duration-1000
//             ${scrolled ? "w-full opacity-70" : "w-0 opacity-0"}
//           `}
//         />

//         {/* =================================================
//             MAIN NAV
//         ================================================_ */}

//         <div
//           className="
//             mx-auto flex h-[88px] max-w-[1800px]
//             items-center justify-between
//             px-5 sm:px-8 lg:px-12 xl:px-20
//           "
//         >

//           {/* =================================================
//               LOGO
//           ================================================_ */}

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
//           ================================================_ */}

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
//                 GALLERY (Fixed absolute/relative positioning)
//             ================================================_ */}

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
//                   absolute right-0 top-full pt-3
//                   w-[270px]
//                   origin-top
//                   transition-all duration-300
//                   pointer-events-auto
//                   ${
//                     workOpen
//                       ? "visible translate-y-0 opacity-100"
//                       : "invisible -translate-y-2 opacity-0 pointer-events-none"
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
//           ================================================_ */}

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
//           ================================================_ */}

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
//               overflow-y-auto
//               py-20
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
//                         onClick={() => {
//                           setWorkOpen(false);
//                           setIsOpen(false);
//                         }}
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
    fetch("https://nahome-film-production.onrender.com/api/projects")
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
      ===================================================== */}

      <nav
        className={`
          fixed top-0 left-0 z-[100] w-full
          transition-all duration-700
          ${
            scrolled
              ? "border-b border-white/10 bg-[#050505]/90 backdrop-blur-2xl"
              : "bg-transparent"
          }
        `}
      >

        {/* =================================================
            TOP GOLD LINE
        ================================================= */}

        <div
          className={`
            absolute top-0 left-0 h-[1px] bg-[#cda653]
            transition-all duration-1000
            ${
              scrolled
                ? "w-full opacity-70"
                : "w-0 opacity-0"
            }
          `}
        />

        {/* =================================================
            MAIN NAV
        ================================================= */}

        <div
          className="
            mx-auto flex h-[82px] sm:h-[88px] max-w-[1800px]
            items-center justify-between
            px-4 sm:px-8 lg:px-12 xl:px-20
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
              shrink-0
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
                  h-[52px] w-[70px]
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
                  bg-[#cda653]/10
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
              border border-white/10
              bg-black/20
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
                    ? "text-[#d8b76a]"
                    : "text-white/65 hover:text-white"
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
                    bg-[#cda653]
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
                    ? "text-[#d8b76a]"
                    : "text-white/65 hover:text-white"
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
                    bg-[#cda653]
                  "
                />
              )}
            </Link>


            {/* =================================================
                GALLERY DESKTOP
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
                  text-white/65
                  transition-all duration-300
                  hover:text-white
                "
              >
                Gallery

                <span
                  className={`
                    text-[8px]
                    text-[#cda653]
                    transition-transform duration-300
                    ${workOpen ? "rotate-180" : ""}
                  `}
                >
                  ↓
                </span>
              </button>


              {/* GALLERY DROPDOWN */}

              <div
                className={`
                  absolute right-0 top-full pt-3
                  w-[270px]
                  origin-top
                  transition-all duration-300
                  ${
                    workOpen
                      ? "visible translate-y-0 opacity-100 pointer-events-auto"
                      : "invisible -translate-y-2 opacity-0 pointer-events-none"
                  }
                `}
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    border border-white/10
                    bg-[#080808]/95
                    p-3
                    shadow-[0_25px_80px_rgba(0,0,0,.7)]
                    backdrop-blur-2xl
                  "
                >

                  {/* Gold top line */}

                  <div
                    className="
                      absolute left-0 right-0 top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#cda653]
                      to-transparent
                    "
                  />

                  <div className="px-3 pb-3 pt-2">

                    <span
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.4em]
                        text-[#cda653]
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
                        text-white/90
                      "
                    >
                      Selected Stories
                    </p>

                  </div>


                  <div className="border-t border-white/10 pt-2">

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
                              border-b border-white/5
                              px-3 py-3
                              transition-all duration-300
                              last:border-none
                              hover:bg-white/[0.04]
                            "
                          >

                            <span
                              className="
                                text-[9px]
                                uppercase
                                tracking-[0.18em]
                                text-white/55
                                transition-colors
                                group-hover:text-[#d8b76a]
                              "
                            >
                              {rawTitle}
                            </span>

                            <span
                              className="
                                text-[#cda653]
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
                          text-white/25
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
                    ? "text-[#d8b76a]"
                    : "text-white/65 hover:text-white"
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
                    ? "text-[#d8b76a]"
                    : "text-white/65 hover:text-white"
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

            {/* Small status */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-[#cda653]
                  shadow-[0_0_12px_#cda653]
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-white/35
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
                border border-[#cda653]/70
                bg-[#cda653]
                px-6 py-3.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-black
                transition-all duration-500
                hover:border-white
                hover:bg-white
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
              flex h-10 w-10
              sm:h-11 sm:w-11
              shrink-0
              items-center justify-center
              border border-white/15
              bg-black/20
              backdrop-blur-md
              lg:hidden
            "
            aria-label="Toggle navigation"
          >

            <div className="flex w-5 flex-col gap-1.5">

              <span
                className={`
                  h-px w-full
                  bg-white
                  transition-all duration-300
                  ${
                    isOpen
                      ? "translate-y-[4px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-px w-3/4
                  self-end
                  bg-[#cda653]
                  transition-all duration-300
                  ${
                    isOpen
                      ? "opacity-0"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-px w-full
                  bg-white
                  transition-all duration-300
                  ${
                    isOpen
                      ? "-translate-y-[4px] -rotate-45"
                      : ""
                  }
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
            bg-[#050505]
            transition-all duration-500
            lg:hidden
            ${
              isOpen
                ? "visible opacity-100"
                : "invisible opacity-0 pointer-events-none"
            }
          `}
        >

          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              top-20
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#cda653]/10
              blur-[130px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -left-32
              bottom-20
              h-[350px]
              w-[350px]
              rounded-full
              bg-[#cda653]/5
              blur-[120px]
            "
          />


          {/* =================================================
              MOBILE CONTENT
          ================================================= */}

          <div
            className="
              relative
              flex h-full
              flex-col
              px-6
              sm:px-10
              overflow-y-auto
              py-24
            "
          >

            {/* Small label */}

            <div className="mb-7 flex items-center gap-3 sm:mb-10">

              <span className="h-px w-8 sm:w-10 bg-[#cda653]" />

              <span
                className="
                  text-[7px]
                  sm:text-[8px]
                  uppercase
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                  text-white/35
                "
              >
                Nahom Film Production
              </span>

            </div>


            {/* =================================================
                MOBILE LINKS
            ================================================= */}

            <div className="flex flex-col">

              {/* HOME */}

              <Link
                to="/home"
                className="
                  border-b border-white/10
                  py-4
                  sm:py-5
                  font-serif
                  text-3xl
                  sm:text-4xl
                  font-light
                  text-white/85
                  transition-colors
                  hover:text-[#cda653]
                "
              >
                Home
              </Link>


              {/* ABOUT */}

              <Link
                to="/about"
                className="
                  border-b border-white/10
                  py-4
                  sm:py-5
                  font-serif
                  text-3xl
                  sm:text-4xl
                  font-light
                  text-white/85
                  transition-colors
                  hover:text-[#cda653]
                "
              >
                About
              </Link>


              {/* =================================================
                  MOBILE GALLERY
              ================================================= */}

              <button
                type="button"
                onClick={() => setWorkOpen(!workOpen)}
                className="
                  flex items-center
                  justify-between
                  border-b border-white/10
                  py-4
                  sm:py-5
                  text-left
                  font-serif
                  text-3xl
                  sm:text-4xl
                  font-light
                  text-white/85
                  transition-colors
                  hover:text-[#cda653]
                "
              >

                <span>Gallery</span>

                <span
                  className={`
                    font-sans
                    text-base
                    sm:text-lg
                    text-[#cda653]
                    transition-transform duration-300
                    ${
                      workOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                >
                  ↓
                </span>

              </button>


              {/* =================================================
                  MOBILE GALLERY SUBMENU
                  COMPACT VERSION
              ================================================= */}

              {workOpen && (

                <div
                  className="
                    mx-1
                    border-b border-white/10
                    bg-white/[0.025]
                    py-2
                  "
                >

                  {/* Small gallery label */}

                  <div
                    className="
                      flex items-center gap-2
                      px-3
                      pb-2
                      pt-1
                    "
                  >

                    <span
                      className="
                        h-px w-5
                        bg-[#cda653]/60
                      "
                    />

                    <span
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.35em]
                        text-[#cda653]/70
                      "
                    >
                      Selected Stories
                    </span>

                  </div>


                  {/* Gallery items */}

                  <div
                    className="
                      max-h-[170px]
                      overflow-y-auto
                      overscroll-contain
                      pr-1
                    "
                  >

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
                              group
                              flex
                              min-h-[38px]
                              items-center
                              justify-between
                              border-b border-white/[0.06]
                              px-3
                              py-2
                              last:border-none
                              transition-all duration-300
                              hover:bg-white/[0.04]
                            "
                          >

                            <span
                              className="
                                max-w-[85%]
                                truncate
                                text-[8px]
                                sm:text-[9px]
                                uppercase
                                tracking-[0.12em]
                                sm:tracking-[0.18em]
                                text-white/45
                                transition-colors
                                group-hover:text-[#d8b76a]
                              "
                            >
                              {rawTitle}
                            </span>

                            <span
                              className="
                                ml-2
                                shrink-0
                                text-[10px]
                                text-[#cda653]/70
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
                          block
                          px-3
                          py-3
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-white/25
                        "
                      >
                        Loading...
                      </span>

                    )}

                  </div>

                </div>

              )}


              {/* PRICE */}

              <Link
                to="/price"
                className="
                  border-b border-white/10
                  py-4
                  sm:py-5
                  font-serif
                  text-3xl
                  sm:text-4xl
                  font-light
                  text-white/85
                  transition-colors
                  hover:text-[#cda653]
                "
              >
                Price
              </Link>


              {/* CONTACT */}

              <Link
                to="/contact"
                className="
                  border-b border-white/10
                  py-4
                  sm:py-5
                  font-serif
                  text-3xl
                  sm:text-4xl
                  font-light
                  text-white/85
                  transition-colors
                  hover:text-[#cda653]
                "
              >
                Contact
              </Link>

            </div>


            {/* =================================================
                MOBILE BOTTOM CTA
            ================================================= */}

            <div className="mt-8 sm:mt-10">

              <Link
                to="/client-selection"
                className="
                  group flex
                  w-full
                  items-center
                  justify-between
                  bg-[#cda653]
                  px-5
                  py-3.5
                  sm:px-6 sm:py-4
                  text-[8px]
                  sm:text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  sm:tracking-[0.3em]
                  text-black
                "
              >

                <span>
                  Client Selection
                </span>

                <span
                  className="
                    text-base
                    sm:text-lg
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </Link>

            </div>


            {/* =================================================
                MOBILE FOOTER
            ================================================= */}

            <div
              className="
                mt-auto
                flex
                items-center
                justify-between
                gap-4
                pb-5
                pt-8
                sm:pb-8
                sm:pt-10
              "
            >

              <span
                className="
                  text-[6px]
                  sm:text-[7px]
                  uppercase
                  tracking-[0.25em]
                  sm:tracking-[0.35em]
                  text-white/25
                "
              >
                NFP / ORIGINAL PICTURES
              </span>

              <span
                className="
                  text-[6px]
                  sm:text-[7px]
                  uppercase
                  tracking-[0.25em]
                  sm:tracking-[0.35em]
                  text-[#cda653]/60
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