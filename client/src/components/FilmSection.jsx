


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
//  import ProtectedImage from './ProrectedImage';
// import haxurkiP from '../assets/images/ሓጹርኪፓነር.jpg'
// import haxurki1 from "../assets/images/ሓጹርኪ1.1.jpg"
// import haxurki2 from "../assets/images/HAxurki.jpg"
// import haxurki3 from "../assets/images/ሓጹርኪ1.3.jpg"
// import haxurki4 from "../assets/images/ሓጹርኪ።4.JPG"
// import bfkri from "../assets/images/ብፍቅሪባነር.jpg"
// import bfkri1 from "../assets/images/ብፍቅሪ1.1.jpg"
// import bfkri2 from "../assets/images/ብፍቅሪ1.2.jpg"
// import bfkri3 from "../assets/images/ብፍቅሪ1.3.jpg"
// import bfkri4 from "../assets/images/ብፍቅሪ1.4.jpg"
// import kstet from "../assets/images/ክስተትባነር.jpg"
// import kstet1 from "../assets/images/ክስተት1.1.jpeg"
// import kstet2 from "../assets/images/ክስተት1.2.jpeg"
// import kstet3 from "../assets/images/ክስተት1.3.jpg"
// import kstet4 from "../assets/images/ክስተት1.4.jpg"


// const MOVIES = [
//   {
//     title: 'The Last Journey',
//     description: 'A cinematic story created with vision, emotion and unforgettable moments.',
//     youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1',
//     poster: haxurkiP,
//     behindScenes: [
//       haxurki1,
//       haxurki2,
//       haxurki3,
//       haxurki4
     
//     ],
//   },
//   {
//     title: 'Beyond The Story',
//     description: 'A powerful production where every frame tells a story.',
//     youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2',
//     poster: bfkri ,
//     behindScenes: [
//       bfkri1,
//       bfkri2,
//       bfkri3,
//       bfkri4 
//     ],
//   },
//   {
//     title: 'The Director Cut',
//     description: 'A powerful production where every frame tells a story.',
//     youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3',
//     poster: kstet,
//     behindScenes: [
//        kstet1, kstet2, kstet3, kstet4
//     ],
//   }
// ];

// function FilmSection({ section = {}, preview = true }) {
//   const displayedMovies = preview ? MOVIES.slice(0, 1) : MOVIES;
  
//   // Lightbox state for viewing behind-the-scenes images larger
//   const [activeImage, setActiveImage] = useState(null);

//   return (
//     <section className="relative w-full py-16 md:py-28 overflow-hidden bg-[#050505] text-white">
//       <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-black pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        
//         {/* BACK TO HOME BUTTON (Appears only when preview is false i.e. on /movies page) */}
//         {!preview && (
//           <div className="mb-8">
//             <Link
//               to="/"
//               className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#dfb557] hover:underline"
//             >
//               <span>←</span> Back to Home
//             </Link>
//           </div>
//         )}

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <span className="w-10 h-px bg-[#dfb557]" />
//               <span className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#dfb557] font-bold">
//                 Film Production
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-7xl font-serif italic font-light">
//               {preview ? 'Featured Film' : 'Our Films'}
//             </h2>
//           </div>

//           <p className="max-w-md text-sm md:text-base text-zinc-500 leading-relaxed md:text-right">
//             {section.desc || section.description || 'Cinematic productions created with vision and unforgettable imagery.'}
//           </p>
//         </div>

//         {/* MOVIES GRID */}
//         <div className="space-y-16 md:space-y-24">
//           {displayedMovies.map((movie, movieIndex) => (
//             <div key={movie.title} className="grid lg:grid-cols-[1.35fr_0.65fr] gap-5 md:gap-7 items-center">
              
//               {/* MOVIE POSTER / YOUTUBE LINK */}
//               <a
//                 href={movie.youtubeUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`Watch ${movie.title}`}
//                 className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-[#dfb557]/30 bg-black block"
//               >
//                 <div className="relative aspect-video">
//                   <ProtectedImage
//                     src={movie.poster}
//                     alt={movie.title}
//                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//                     showLogoOnly={true}
//                   />
//                   <div className="absolute inset-0 bg-black/35 pointer-events-none" />
                  
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/60 bg-black/50 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#dfb557] group-hover:border-[#dfb557]">
//                       <span className="ml-1 text-xl md:text-3xl text-white group-hover:text-black">▶</span>
//                     </div>
//                   </div>

//                   <div className="absolute left-5 md:left-8 right-5 md:right-8 bottom-5 md:bottom-8">
//                     <span className="text-[8px] uppercase tracking-[0.35em] text-[#dfb557]">
//                       Movie {String(movieIndex + 1).padStart(2, '0')}
//                     </span>
//                     <h3 className="mt-2 text-xl md:text-3xl font-serif">{movie.title}</h3>
//                   </div>
//                 </div>
//               </a>

//               {/* BEHIND THE SCENES GRID (Opens in Lightbox modal when clicked) */}
//               <div className="grid grid-cols-2 gap-3 md:gap-4">
//                 {movie.behindScenes.slice(0, 4).map((img, index) => (
//                   <button
//                     type="button"
//                     key={`${movie.title}-${index}`}
//                     onClick={() => setActiveImage({ url: img, title: `${movie.title} - BTS ${index + 1}` })}
//                     aria-label={`View ${movie.title} BTS ${index + 1} larger`}
//                     className="group relative overflow-hidden rounded-xl border border-white/10 bg-black block text-left cursor-pointer"
//                   >
//                     <ProtectedImage
//                       src={img}
//                       alt={`${movie.title} BTS ${index + 1}`}
//                       className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
//                       showLogoOnly={true}
//                     />
//                     <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
//                     <span className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.25em] text-[#dfb557]">
//                       BTS {String(index + 1).padStart(2, '0')}
//                     </span>
//                   </button>
//                 ))}
//               </div>

//             </div>
//           ))}
//         </div>

//         {/* VIEW MORE CTA */}
//         {preview && (
//           <div className="flex justify-center mt-16 md:mt-24">
//             <Link
//               to="/movies" 
//               className="group inline-flex items-center gap-5 rounded-full border border-[#dfb557]/60 px-8 md:px-12 py-4 text-[9px] md:text-[10px] uppercase tracking-[0.35em] font-bold text-[#dfb557] transition-all duration-500 hover:bg-[#dfb557] hover:text-black"
//             >
//               View More Films
//               <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
//             </Link>
//           </div>
//         )}
//       </div>

//       {/* LIGHTBOX MODAL FOR BTS IMAGES */}
//       {activeImage && (
//         <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
//           <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
//             {/* CLOSE BUTTON (*) */}
//             <button
//               type="button"
//               onClick={() => setActiveImage(null)}
//               className="absolute -top-12 right-0 text-white text-3xl font-bold bg-white/10 hover:bg-[#dfb557] hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//               aria-label="Close modal"
//             >
//               *
//             </button>

//             <img
//               src={activeImage.url}
//               alt={activeImage.title}
//               className="max-h-[75vh] w-auto object-contain rounded-xl border border-[#dfb557]/30 shadow-2xl"
//             />
//             <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#dfb557]">
//               {activeImage.title}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default FilmSection;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import haxurkiP from '../assets/images/ሓጹርኪፓነር.jpg';
import haxurki1 from "../assets/images/ሓጹርኪ1.1.jpg";
import haxurki2 from "../assets/images/HAxurki.jpg";
import haxurki3 from "../assets/images/ሓጹርኪ1.3.jpg";
import haxurki4 from "../assets/images/ሓጹርኪ።4.JPG";

import bfkri from "../assets/images/ብፍቅሪባነር.jpg";
import bfkri1 from "../assets/images/ብፍቅሪ1.1.jpg";
import bfkri2 from "../assets/images/ብፍቅሪ1.2.jpg";
import bfkri3 from "../assets/images/ብፍቅሪ1.3.jpg";
import bfkri4 from "../assets/images/ብፍቅሪ1.4.jpg";

import kstet from "../assets/images/ክስተትባነር.jpg";
import kstet1 from "../assets/images/ክስተት1.1.jpeg";
import kstet2 from "../assets/images/ክስተት1.2.jpeg";
import kstet3 from "../assets/images/ክስተት1.3.jpg";
import kstet4 from "../assets/images/ክስተት1.4.jpg";


// ============================================================
// MOVIES
// ============================================================

const MOVIES = [
  {
    title: 'The Last Journey',
    description:
      'A cinematic story created with vision, emotion and unforgettable moments.',
    youtubeUrl:
      'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1',
    poster: haxurkiP,
    behindScenes: [
      haxurki1,
      haxurki2,
      haxurki3,
      haxurki4
    ],
  },

  {
    title: 'Beyond The Story',
    description:
      'A powerful production where every frame tells a story.',
    youtubeUrl:
      'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2',
    poster: bfkri,
    behindScenes: [
      bfkri1,
      bfkri2,
      bfkri3,
      bfkri4
    ],
  },

  {
    title: 'The Director Cut',
    description:
      'A powerful production where every frame tells a story.',
    youtubeUrl:
      'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3',
    poster: kstet,
    behindScenes: [
      kstet1,
      kstet2,
      kstet3,
      kstet4
    ],
  }
];


// ============================================================
// FILM SECTION
// ============================================================

function FilmSection({
  section = {},
  preview = true
}) {

  const displayedMovies = preview
    ? MOVIES.slice(0, 1)
    : MOVIES;


  // Lightbox state
  const [activeImage, setActiveImage] = useState(null);


  return (

    <section
      className="
        relative
        w-full
        py-16
        md:py-28
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#050505]
          via-[#0b0b0b]
          to-black
          pointer-events-none
        "
      />


      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          md:px-8
        "
      >


        {/* BACK TO HOME BUTTON */}

        {!preview && (

          <div className="mb-8">

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#dfb557]
                hover:underline
              "
            >

              <span>←</span>

              Back to Home

            </Link>

          </div>

        )}


        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-8
            mb-12
            md:mb-16
          "
        >

          <div>

            <div
              className="
                flex
                items-center
                gap-3
                mb-5
              "
            >

              <span
                className="
                  w-10
                  h-px
                  bg-[#dfb557]
                "
              />

              <span
                className="
                  text-[9px]
                  md:text-[10px]
                  uppercase
                  tracking-[0.55em]
                  text-[#dfb557]
                  font-bold
                "
              >
                Film Production
              </span>

            </div>


            <h2
              className="
                text-5xl
                md:text-7xl
                font-serif
                italic
                font-light
              "
            >
              {preview
                ? 'Featured Film'
                : 'Our Films'}
            </h2>

          </div>


          <p
            className="
              max-w-md
              text-sm
              md:text-base
              text-zinc-500
              leading-relaxed
              md:text-right
            "
          >

            {section.desc ||
              section.description ||
              'Behind the Scenes — Capturing the Moments That Bring Every Story to Life.'}

          </p>

        </div>


        {/* MOVIES GRID */}

        <div
          className="
            space-y-16
            md:space-y-24
          "
        >

          {displayedMovies.map(
            (movie, movieIndex) => (

              <div
                key={movie.title}
                className="
                  grid
                  lg:grid-cols-[1.35fr_0.65fr]
                  gap-5
                  md:gap-7
                  items-center
                "
              >


                {/* MOVIE POSTER / YOUTUBE LINK */}

                <a
                  href={movie.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${movie.title}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    md:rounded-[2rem]
                    border
                    border-[#dfb557]/30
                    bg-black
                    block
                  "
                >

                  <div
                    className="
                      relative
                      aspect-video
                    "
                  >

                    {/* NORMAL IMAGE */}

                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-1000
                        group-hover:scale-105
                      "
                    />


                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/35
                        pointer-events-none
                      "
                    />


                    {/* PLAY BUTTON */}

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <div
                        className="
                          w-16
                          h-16
                          md:w-24
                          md:h-24
                          rounded-full
                          border
                          border-white/60
                          bg-black/50
                          backdrop-blur-md
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:bg-[#dfb557]
                          group-hover:border-[#dfb557]
                        "
                      >

                        <span
                          className="
                            ml-1
                            text-xl
                            md:text-3xl
                            text-white
                            group-hover:text-black
                          "
                        >
                          ▶
                        </span>

                      </div>

                    </div>


                    {/* MOVIE TITLE */}

                    <div
                      className="
                        absolute
                        left-5
                        md:left-8
                        right-5
                        md:right-8
                        bottom-5
                        md:bottom-8
                      "
                    >

                      <span
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.35em]
                          text-[#dfb557]
                        "
                      >
                        Movie{' '}
                        {String(
                          movieIndex + 1
                        ).padStart(2, '0')}
                      </span>


                      <h3
                        className="
                          mt-2
                          text-xl
                          md:text-3xl
                          font-serif
                        "
                      >
                        {movie.title}
                      </h3>

                    </div>

                  </div>

                </a>


                {/* BEHIND THE SCENES GRID */}

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-3
                    md:gap-4
                  "
                >

                  {movie.behindScenes
                    .slice(0, 4)
                    .map((img, index) => (

                      <button
                        type="button"
                        key={`${movie.title}-${index}`}
                        onClick={() =>
                          setActiveImage({
                            url: img,
                            title: `${movie.title} - BTS ${index + 1}`
                          })
                        }
                        aria-label={`View ${movie.title} BTS ${index + 1} larger`}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-xl
                          border
                          border-white/10
                          bg-black
                          block
                          text-left
                          cursor-pointer
                        "
                      >

                        {/* NORMAL IMAGE */}

                        <img
                          src={img}
                          alt={`${movie.title} BTS ${index + 1}`}
                          className="
                            w-full
                            aspect-square
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />


                        <div
                          className="
                            absolute
                            inset-0
                            bg-black/30
                            group-hover:bg-black/10
                            transition-all
                            duration-500
                          "
                        />


                        <span
                          className="
                            absolute
                            bottom-3
                            left-3
                            text-[7px]
                            uppercase
                            tracking-[0.25em]
                            text-[#dfb557]
                          "
                        >
                          BTS{' '}
                          {String(
                            index + 1
                          ).padStart(2, '0')}
                        </span>

                      </button>

                    ))}

                </div>

              </div>

            )
          )}

        </div>


        {/* VIEW MORE CTA */}

        {preview && (

          <div
            className="
              flex
              justify-center
              mt-16
              md:mt-24
            "
          >

            <Link
              to="/movies"
              className="
                group
                inline-flex
                items-center
                gap-5
                rounded-full
                border
                border-[#dfb557]/60
                px-8
                md:px-12
                py-4
                text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.35em]
                font-bold
                text-[#dfb557]
                transition-all
                duration-500
                hover:bg-[#dfb557]
                hover:text-black
              "
            >

              View More Films

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              >
                →
              </span>

            </Link>

          </div>

        )}

      </div>


      {/* ==================================================
          LIGHTBOX MODAL FOR BTS IMAGES
      ================================================== */}

      {activeImage && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
        >

          <div
            className="
              relative
              max-w-4xl
              w-full
              max-h-[90vh]
              flex
              flex-col
              items-center
            "
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() =>
                setActiveImage(null)
              }
              className="
                absolute
                -top-12
                right-0
                text-white
                text-3xl
                font-bold
                bg-white/10
                hover:bg-[#dfb557]
                hover:text-black
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                transition-colors
              "
              aria-label="Close modal"
            >
              *
            </button>


            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="
                max-h-[75vh]
                w-auto
                object-contain
                rounded-xl
                border
                border-[#dfb557]/30
                shadow-2xl
              "
            />


            <p
              className="
                mt-4
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#dfb557]
              "
            >
              {activeImage.title}
            </p>

          </div>

        </div>

      )}

    </section>
  );
}


export default FilmSection;