
// import React from 'react';
// import { Link } from 'react-router-dom';
//  import ProtectedImage from './ProrectedImage';

// // ============================================================
// // FALLBACK MUSIC DATA
// // ============================================================

// const FALLBACK_MUSIC_ITEMS = [
//   {
//     title: 'Rhythm & Soul',
//     description: 'Music videos and visual stories created to bring sound, emotion and cinema together.',
//     youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_MUSIC_VIDEO_ID_1', // ኣብዚ ናይ ባዕሉ ዩቲብ ሊንክ ትእቱ
//     poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85',
//     behindScenes: [
//       'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85',
//       'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',
//       'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85',
//       'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85',
//     ],
//   },
//   {
//     title: 'Echoes of Night',
//     description: 'A powerful musical production where every beat tells a vivid story.',
//     youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_MUSIC_VIDEO_ID_2', // ኣብዚ ናይ ባዕሉ ዩቲብ ሊንክ ትእቱ
//     poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
//     behindScenes: [
//       'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85',
//       'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85',
//       'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=85',
//       'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&w=1000&q=85',
//     ],
//   },
// ];

// // ============================================================
// // GENERATE SLUG
// // ============================================================

// const generateSlug = (title = '') =>
//   String(title)
//     .toLowerCase()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-');

// // ============================================================
// // MUSIC SECTION
// // ============================================================

// function MusicSection({ section = {}, preview = true }) {
//   // Support both single `section` props or a list if passed, matching FilmSection structure
//   const musicData = Array.isArray(section.items) && section.items.length > 0
//     ? section.items
//     : (section.title ? [section] : FALLBACK_MUSIC_ITEMS);

//   const displayedMusic = preview ? musicData.slice(0, 1) : musicData;

//   return (
//     <section className="relative w-full py-16 md:py-28 overflow-hidden bg-[#050505] text-white">
//       <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-black pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-4 md:px-8">
//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <span className="w-10 h-px bg-[#dfb557]" />
//               <span className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#dfb557] font-bold">
//                 Music Production
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-7xl font-serif italic font-light">
//               {preview ? 'Featured Music' : 'Our Music'}
//             </h2>
//           </div>

//           <p className="max-w-md text-sm md:text-base text-zinc-500 leading-relaxed md:text-right">
//             {section.desc || section.description || 'Music videos and visual stories created to bring sound, emotion and cinema together.'}
//           </p>
//         </div>

//         {/* MUSIC GRID */}
//         <div className="space-y-16 md:space-y-24">
//           {displayedMusic.map((item, musicIndex) => {
//             const title = item.title || item.name || 'Music Production';
//             const poster = item.poster || (item.images && item.images[0]) || FALLBACK_MUSIC_ITEMS[0].poster;
//             const youtubeUrl = item.youtubeUrl || item.youtube || item.videoUrl || item.video || item.link || '#';
//             const behindScenes = item.behindScenes || item.images?.slice(1) || FALLBACK_MUSIC_ITEMS[0].behindScenes;
//             const galleryUrl = `/gallery/${generateSlug(title)}`;

//             return (
//               <div key={title} className="grid lg:grid-cols-[1.35fr_0.65fr] gap-5 md:gap-7 items-center">
//                 {/* MUSIC POSTER / VIDEO BANNER (ናይ ነፍስወከፍ ሙዚቃ ባነር ናቱ ዩቲብ ሊንክ ክፉትሉ ጌረዮ) */}
//                 <a
//                   href={youtubeUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Watch ${title}`}
//                   className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-[#dfb557]/30 bg-black block"
//                 >
//                   <div className="relative aspect-video">
//                     <ProtectedImage
//                       src={poster}
//                       alt={title}
//                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//                       showLogoOnly={true}
//                     />
//                     <div className="absolute inset-0 bg-black/35 pointer-events-none" />

//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/60 bg-black/50 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#dfb557] group-hover:border-[#dfb557]">
//                         <span className="ml-1 text-xl md:text-3xl text-white group-hover:text-black">▶</span>
//                       </div>
//                     </div>

//                     <div className="absolute left-5 md:left-8 right-5 md:right-8 bottom-5 md:bottom-8">
//                       <span className="text-[8px] uppercase tracking-[0.35em] text-[#dfb557]">
//                         Music Video {String(musicIndex + 1).padStart(2, '0')}
//                       </span>
//                       <h3 className="mt-2 text-xl md:text-3xl font-serif">{title}</h3>
//                     </div>
//                   </div>
//                 </a>

//                 {/* BEHIND THE SCENES / VISUALS GRID (እተን 4 ምስልታት ከም ቀደመን ናብ ጋለሪ ገጽ እየን ዝወስዳ) */}
//                 <div className="grid grid-cols-2 gap-3 md:gap-4">
//                   {behindScenes.slice(0, 4).map((img, index) => (
//                     <Link
//                       key={`${title}-${index}`}
//                       to={galleryUrl}
//                       aria-label={`View ${title} visual ${index + 1}`}
//                       className="group relative overflow-hidden rounded-xl border border-white/10 bg-black block"
//                     >
//                       <ProtectedImage
//                         src={img}
//                         alt={`${title} visual ${index + 1}`}
//                         className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
//                         showLogoOnly={true}
//                       />
//                       <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
//                       <span className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.25em] text-[#dfb557]">
//                         Visual {String(index + 1).padStart(2, '0')}
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* VIEW MORE CTA (Only renders on home preview view) */}
//         {preview && (
//           <div className="flex justify-center mt-16 md:mt-24">
//             <Link
//               to="/music"
//               className="group inline-flex items-center gap-5 rounded-full border border-[#dfb557]/60 px-8 md:px-12 py-4 text-[9px] md:text-[10px] uppercase tracking-[0.35em] font-bold text-[#dfb557] transition-all duration-500 hover:bg-[#dfb557] hover:text-black"
//             >
//               View More Music
//               <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
//             </Link>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default MusicSection;

import React from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// FALLBACK MUSIC DATA
// ============================================================

const FALLBACK_MUSIC_ITEMS = [
  {
    title: 'Rhythm & Soul',
    description:
      'Music videos and visual stories created to bring sound, emotion and cinema together.',
    youtubeUrl:
      'https://www.youtube.com/watch?v=YOUR_MUSIC_VIDEO_ID_1',
    poster:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85',
    behindScenes: [
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85',
    ],
  },
  {
    title: 'Echoes of Night',
    description:
      'A powerful musical production where every beat tells a vivid story.',
    youtubeUrl:
      'https://www.youtube.com/watch?v=YOUR_MUSIC_VIDEO_ID_2',
    poster:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    behindScenes: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&w=1000&q=85',
    ],
  },
];

// ============================================================
// GENERATE SLUG
// ============================================================

const generateSlug = (title = '') =>
  String(title)
    .toLowerCase()
    .replace(/["']/g, '')
    .replace(/&/g, 'and')
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

// ============================================================
// MUSIC SECTION
// ============================================================

function MusicSection({ section = {}, preview = true }) {

  // Support both single `section` props or a list if passed,
  // matching FilmSection structure

  const musicData =
    Array.isArray(section.items) &&
    section.items.length > 0
      ? section.items
      : section.title
      ? [section]
      : FALLBACK_MUSIC_ITEMS;

  const displayedMusic = preview
    ? musicData.slice(0, 1)
    : musicData;

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
                Music Production
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
                ? ' Music'
                : 'Our Music'}
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
              'Behind the Scenes — The People, Moments, and Stories Behind the Camera.'}
          </p>

        </div>


        {/* MUSIC GRID */}

        <div
          className="
            space-y-16
            md:space-y-24
          "
        >

//
          {displayedMusic.map(
            (item, musicIndex) => {

              const title =
                item.title ||
                item.name ||
                'Music Production';

              const poster =
                item.poster ||
                (item.images &&
                  item.images[0]) ||
                FALLBACK_MUSIC_ITEMS[0].poster;

              const youtubeUrl =
                item.youtubeUrl ||
                item.youtube ||
                item.videoUrl ||
                item.video ||
                item.link ||
                '#';

              const behindScenes =
                item.behindScenes ||
                item.images?.slice(1) ||
                FALLBACK_MUSIC_ITEMS[0].behindScenes;

              const galleryUrl =
                `/gallery/${generateSlug(title)}`;


              return (

                <div
                  key={title}
                  className="
                    grid
                    lg:grid-cols-[1.35fr_0.65fr]
                    gap-5
                    md:gap-7
                    items-center
                  "
                >

                  {/* MUSIC POSTER / VIDEO BANNER */}

                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${title}`}
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
                        src={poster}
                        alt={title}
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
                          Music Video{' '}
                          {String(
                            musicIndex + 1
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
                          {title}
                        </h3>

                      </div>

                    </div>

                  </a>


                  {/* BEHIND THE SCENES / VISUALS GRID */}

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-3
                      md:gap-4
                    "
                  >

                    {behindScenes
                      .slice(0, 4)
                      .map((img, index) => (

                        <Link
                          key={`${title}-${index}`}
                          to={galleryUrl}
                          aria-label={`View ${title} visual ${index + 1}`}
                          className="
                            group
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-white/10
                            bg-black
                            block
                          "
                        >

                          {/* NORMAL IMAGE */}

                          <img
                            src={img}
                            alt={`${title} visual ${index + 1}`}
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
                            Visual{' '}
                            {String(
                              index + 1
                            ).padStart(2, '0')}
                          </span>

                        </Link>

                    ))}

                  </div>

                </div>

              );

            }
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
              to="/music"
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

              View More Music

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

    </section>
  );
}

export default MusicSection;