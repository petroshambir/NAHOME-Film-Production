

// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';
// import Hero from "../components/Hero"
// // ============================================================
// // BACKEND URL
// // ============================================================

// const BACKEND_URL =
//   import.meta.env.VITE_BACKEND_URL ||
//   'https://habesha-film-production-server.onrender.com';

// // ============================================================
// // DEFAULT WEDDING DESCRIPTIONS
// // ============================================================

// const DEFAULT_DESCRIPTIONS = [
//   '01. The Beginning of Forever — Our First Look',
//   '02. A Tender Moment Caught in Time',
//   '03. Walking Hand in Hand Towards Tomorrow',
//   '04. Joy and Laughter Shared with Loved Ones',
//   '05. The Grand Celebration and Vows',
//   '06. Unforgettable Emotions of the Day',
//   '07. Elegance in Every Single Detail',
//   '08. Dancing Under the Evening Lights',
//   '09. Sweet Whispers and Quiet Glances',
//   '10. Cherished Memories to Last a Lifetime',
//   '11. A Magical Evening Full of Grace',
//   '12. Smiles That Brighten the Whole World',
//   '13. Embracing the Warmth of Family',
//   '14. Looking Into Each Other’s Eyes',
//   '15. The Perfect Ending to a Perfect Day',
// ];

// // ============================================================
// // DEFAULT WEDDING HEADINGS
// // ============================================================

// const DEFAULT_HEADINGS = [
//   'The Story Begins',
//   'Tender Highlight',
//   'Walking Together',
//   'Shared Laughter',
//   'Featured Memory',
//   'Pure Emotion',
//   'Elegant Detail',
//   'Evening Magic',
//   'Quiet Glance',
//   'Cherished Moment',
//   'Graceful Evening',
//   'Bright Smile',
//   'Family Warmth',
//   'Deep Connection',
//   'Grand Finale',
// ];

// // ============================================================
// // IMAGE URL FIX
// // ============================================================

// const fixImageUrl = (url) => {
//   if (!url || typeof url !== 'string') return '';

//   const cleanUrl = url.trim();

//   // Already a full URL
//   if (
//     cleanUrl.startsWith('https://') ||
//     cleanUrl.startsWith('http://')
//   ) {
//     return cleanUrl.replace(
//       'http://localhost:5000',
//       BACKEND_URL
//     );
//   }

//   // /uploads/...
//   if (cleanUrl.startsWith('/')) {
//     return `${BACKEND_URL}${cleanUrl}`;
//   }

//   // uploads/...
//   return `${BACKEND_URL}/${cleanUrl}`;
// };

// // ============================================================
// // PARSE PROJECT
// // ============================================================

// const parseProject = (section = {}) => {
//   let mainDesc =
//     section.desc ||
//     section.description ||
//     '';

//   let descriptions = [];
//   let headings = [];

//   // ==========================================================
//   // DESCRIPTION / HEADING DATA
//   // ==========================================================

//   if (
//     typeof section.description === 'string' &&
//     section.description.includes('||DESCS||')
//   ) {
//     try {
//       const parts =
//         section.description.split('||DESCS||');

//       mainDesc = parts[0] || '';

//       if (parts[1]) {
//         const headingParts =
//           parts[1].split('||HEADINGS||');

//         // DESCRIPTIONS
//         try {
//           descriptions = JSON.parse(
//             headingParts[0] || '[]'
//           );
//         } catch {
//           descriptions = [];
//         }

//         // HEADINGS
//         try {
//           headings = JSON.parse(
//             headingParts[1] || '[]'
//           );
//         } catch {
//           headings = [];
//         }
//       }

//       // OLD DATABASE FORMAT
//       if (
//         parts[2] &&
//         headings.length === 0
//       ) {
//         try {
//           headings = JSON.parse(parts[2]);
//         } catch {
//           headings = [];
//         }
//       }
//     } catch (error) {
//       console.error(
//         'Error parsing project description:',
//         error
//       );
//     }
//   }

//   // ==========================================================
//   // FIX IMAGES
//   // ==========================================================

//   const images = Array.isArray(section.images)
//     ? section.images
//         .map(fixImageUrl)
//         .filter(Boolean)
//     : [];

//   return {
//     ...section,
//     images,
//     desc: mainDesc,
//     descriptions: Array.isArray(descriptions)
//       ? descriptions
//       : [],
//     headings: Array.isArray(headings)
//       ? headings
//       : [],
//   };
// };

// // ============================================================
// // DETECT PROJECT TYPE
// // ============================================================

// const getSectionType = (section = {}) => {
//   const title = String(
//     section.title ||
//       section.name ||
//       ''
//   ).toLowerCase();

//   const type = String(
//     section.type ||
//       ''
//   ).toLowerCase();

//   const category = String(
//     section.category ||
//       ''
//   ).toLowerCase();

//   const projectType = String(
//     section.projectType ||
//       ''
//   ).toLowerCase();

//   const service = String(
//     section.service ||
//       ''
//   ).toLowerCase();

//   const description = String(
//     section.desc ||
//       section.description ||
//       ''
//   ).toLowerCase();

//   const explicitType =
//     type ||
//     projectType ||
//     category ||
//     service;

//   if (
//     explicitType === 'music' ||
//     explicitType === 'music video' ||
//     explicitType === 'song' ||
//     explicitType === 'song video' ||
//     explicitType === 'musical' ||
//     explicitType === 'audio'
//   ) {
//     return 'music';
//   }

//   if (
//     explicitType === 'film' ||
//     explicitType === 'movie' ||
//     explicitType === 'cinema' ||
//     explicitType === 'cinematic'
//   ) {
//     return 'film';
//   }

//   if (
//     explicitType === 'wedding' ||
//     explicitType === 'bridal' ||
//     explicitType === 'baby shower' ||
//     explicitType === 'baby' ||
//     explicitType === 'baptism' ||
//     explicitType === 'event'
//   ) {
//     return 'wedding';
//   }

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();

//   if (
//     combined.includes('music video') ||
//     combined.includes('song video') ||
//     combined.includes('music') ||
//     combined.includes('song') ||
//     combined.includes('musical') ||
//     combined.includes('audio')
//   ) {
//     return 'music';
//   }

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }

//   if (
//     combined.includes('wedding') ||
//     combined.includes('bridal') ||
//     combined.includes('baby shower') ||
//     combined.includes('baby') ||
//     combined.includes('baptism') ||
//     combined.includes('event')
//   ) {
//     return 'wedding';
//   }

//   return 'unknown';
// };

// // ============================================================
// // HOME
// // ============================================================

// function Home() {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         setLoading(true);

//         const response = await fetch(
//           `${BACKEND_URL}/api/projects`
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to fetch projects: ${response.status}`
//           );
//         }

//         const data = await response.json();

//         const projects =
//           Array.isArray(data)
//             ? data
//             : Array.isArray(data.projects)
//             ? data.projects
//             : Array.isArray(data.data)
//             ? data.data
//             : [];

//         const processedProjects =
//           projects.map(parseProject);

//         setSections(processedProjects);

//       } catch (error) {
//         console.error(
//           'Home sections fetch error:',
//           error
//         );

//         setSections([]);

//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSections();
//   }, []);

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) === 'wedding'
//     );

//   const rawFilmSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'film'
//     );

//   const filmSection = rawFilmSection
//     ? {
//         ...rawFilmSection,
//         images: rawFilmSection.images ? rawFilmSection.images.slice(0, 5) : [],
//       }
//     : null;

//   const rawMusicSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'music'
//     );

//   const musicSection = rawMusicSection
//     ? {
//         ...rawMusicSection,
//         images: rawMusicSection.images ? rawMusicSection.images.slice(0, 5) : [],
//       }
//     : null;

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-white
//         overflow-x-hidden
//       "
//     >
//       <Navbar />
// <Hero/>
//       <main>
//         {/* ===================================================
//             WEDDING SECTION
//         =================================================== */}

//         {weddingSections.length > 0 && (
//           <section
//             id="wedding"
//             className="
//               relative
//               border-t
//               border-white/[0.04]
//             "
//           >
//             <HomeSectionIntro
//               number="01"
//               eyebrow="Wedding Stories"
//               title="Wedding"
//               description="
//                 Beautiful celebrations captured with elegance,
//                 emotion and cinematic detail.
//               "
//             />

//             <div
//               className="
//                 max-w-7xl
//                 mx-auto
//                 px-4
//                 md:px-8
//               "
//             >
//               {weddingSections.map(
//                 (section, index) => (
//                   <div
//                     key={
//                       section._id ||
//                       `wedding-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >
//                     <WeddingSection
//                       section={section}
//                       customHeadings={
//                         section.headings?.length
//                           ? section.headings
//                           : DEFAULT_HEADINGS
//                       }
//                       customDescriptions={
//                         section.descriptions?.length
//                           ? section.descriptions
//                           : DEFAULT_DESCRIPTIONS
//                       }
//                       preview={true}
//                     />
//                   </div>
//                 )
//               )}
//             </div>
//           </section>
//         )}

//         {/* ===================================================
//             FILM SECTION
//         =================================================== */}

//         {!loading && filmSection && (
//           <section
//             id="films"
//             className="
//               relative
//               border-t
//               border-white/[0.04]
//             "
//           >
//             <HomeSectionIntro
//               number="02"
//               eyebrow="Film Production"
//               title="Films"
//               description="
//                 Cinematic productions created with vision,
//                 storytelling and unforgettable imagery.
//               "
//             />

//             <div
//               className="
//                 max-w-7xl
//                 mx-auto
//                 px-4
//                 md:px-8
//               "
//             >
//               <div
//                 className="
//                   relative
//                   border-b
//                   border-white/[0.04]
//                 "
//               >
//                 <FilmSection
//                   section={filmSection}
//                   preview={true}
//                 />
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ===================================================
//             MUSIC SECTION
//         =================================================== */}

//         {!loading && musicSection && (
//           <section
//             id="music"
//             className="
//               relative
//               border-t
//               border-white/[0.04]
//             "
//           >
//             <HomeSectionIntro
//               number="03"
//               eyebrow="Music Production"
//               title="Music"
//               description="
//                 Music videos and visual stories created to bring
//                 sound, emotion and cinema together.
//               "
//             />

//             <div
//               className="
//                 max-w-7xl
//                 mx-auto
//                 px-4
//                 md:px-8
//               "
//             >
//               <div
//                 className="
//                   relative
//                   border-b
//                   border-white/[0.04]
//                 "
//               >
//                 <MusicSection
//                   section={musicSection}
//                   preview={true}
//                 />
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ===================================================
//             FALLBACK
//         =================================================== */}

//         {!loading &&
//           !filmSection &&
//           !musicSection && (
//             <>
//               <section
//                 id="films"
//                 className="
//                   relative
//                   border-t
//                   border-white/[0.04]
//                 "
//               >
//                 <HomeSectionIntro
//                   number="02"
//                   eyebrow="Film Production"
//                   title="Films"
//                   description="
//                     Cinematic productions created with vision,
//                     storytelling and unforgettable imagery.
//                   "
//                 />

//                 <FilmSection
//                   section={{
//                     title: 'Our Films',
//                     description:
//                       'Cinematic productions created with vision, storytelling and unforgettable imagery.',
//                   }}
//                   preview={true}
//                 />
//               </section>

//               <section
//                 id="music"
//                 className="
//                   relative
//                   border-t
//                   border-white/[0.04]
//                 "
//               >
//                 <HomeSectionIntro
//                   number="03"
//                   eyebrow="Music Production"
//                   title="Music"
//                   description="
//                     Music videos and visual stories created to bring
//                     sound, emotion and cinema together.
//                   "
//                 />

//                 <MusicSection
//                   section={{
//                     title: 'Music Production',
//                     description:
//                       'Music videos and visual stories created to bring sound, emotion and cinema together.',
//                   }}
//                   preview={true}
//                 />
//               </section>
//             </>
//           )}

//         {/* ===================================================
//             LOADING
//         =================================================== */}

//         {loading && (
//           <div
//             className="
//               min-h-[40vh]
//               flex
//               items-center
//               justify-center
//               bg-[#050505]
//             "
//           >
//             <div
//               className="
//                 flex
//                 flex-col
//                 items-center
//                 gap-4
//               "
//             >
//               <div
//                 className="
//                   w-10
//                   h-10
//                   rounded-full
//                   border-2
//                   border-[#dfb557]/20
//                   border-t-[#dfb557]
//                   animate-spin
//                 "
//               />

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.4em]
//                   text-[#dfb557]
//                 "
//               >
//                 Loading
//               </span>
//             </div>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }

// // ============================================================
// // HOME SECTION INTRO
// // ============================================================

// function HomeSectionIntro({
//   number,
//   eyebrow,
//   title,
//   description,
// }) {
//   return (
//     <div
//       className="
//         relative
//         max-w-7xl
//         mx-auto
//         px-6
//         pt-20
//         md:pt-32
//         pb-10
//         md:pb-14
//       "
//     >
//       <div
//         className="
//           absolute
//           top-5
//           right-5
//           md:right-10
//           text-[100px]
//           md:text-[180px]
//           font-serif
//           font-light
//           text-white/[0.025]
//           leading-none
//           pointer-events-none
//           select-none
//         "
//       >
//         {number}
//       </div>

//       <div
//         className="
//           relative
//           flex
//           flex-col
//           md:flex-row
//           md:items-end
//           md:justify-between
//           gap-8
//         "
//       >
//         <div>
//           <div
//             className="
//               flex
//               items-center
//               gap-3
//               mb-5
//             "
//           >
//             <span
//               className="
//                 w-10
//                 h-px
//                 bg-[#dfb557]
//               "
//             />

//             <span
//               className="
//                 text-[9px]
//                 md:text-[10px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//                 font-semibold
//               "
//             >
//               {eyebrow}
//             </span>
//           </div>

//           <h2
//             className="
//               text-5xl
//               sm:text-6xl
//               md:text-8xl
//               font-serif
//               italic
//               font-light
//               tracking-tight
//               text-zinc-100
//             "
//           >
//             {title}
//           </h2>
//         </div>

//         <p
//           className="
//             max-w-md
//             text-sm
//             md:text-base
//             text-zinc-500
//             font-light
//             leading-relaxed
//             md:text-right
//           "
//         >
//           {description}
//         </p>
//       </div>

//       <div
//         className="
//           flex
//           items-center
//           gap-3
//           mt-10
//         "
//       >
//         <span
//           className="
//             h-px
//             flex-1
//             bg-gradient-to-r
//             from-[#dfb557]/30
//             to-transparent
//           "
//         />

//         <span
//           className="
//             w-1.5
//             h-1.5
//             rounded-full
//             bg-[#dfb557]/60
//           "
//         />

//         <span
//           className="
//             h-px
//             flex-1
//             bg-gradient-to-l
//             from-[#dfb557]/30
//             to-transparent
//           "
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WeddingSection from '../components/WeddingSection';
import FilmSection from '../components/FilmSection';
import MusicSection from '../components/MusicSection';
import Hero from "../components/Hero"
// ============================================================
// BACKEND URL
// ============================================================

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  'https://habesha-film-production-server.onrender.com';

// ============================================================
// DEFAULT WEDDING DESCRIPTIONS
// ============================================================

const DEFAULT_DESCRIPTIONS = [
  '01. The Beginning of Forever — Our First Look',
  '02. A Tender Moment Caught in Time',
  '03. Walking Hand in Hand Towards Tomorrow',
  '04. Joy and Laughter Shared with Loved Ones',
  '05. The Grand Celebration and Vows',
  '06. Unforgettable Emotions of the Day',
  '07. Elegance in Every Single Detail',
  '08. Dancing Under the Evening Lights',
  '09. Sweet Whispers and Quiet Glances',
  '10. Cherished Memories to Last a Lifetime',
  '11. A Magical Evening Full of Grace',
  '12. Smiles That Brighten the Whole World',
  '13. Embracing the Warmth of Family',
  '14. Looking Into Each Other’s Eyes',
  '15. The Perfect Ending to a Perfect Day',
];

// ============================================================
// DEFAULT WEDDING HEADINGS
// ============================================================

const DEFAULT_HEADINGS = [
  'The Story Begins',
  'Tender Highlight',
  'Walking Together',
  'Shared Laughter',
  'Featured Memory',
  'Pure Emotion',
  'Elegant Detail',
  'Evening Magic',
  'Quiet Glance',
  'Cherished Moment',
  'Graceful Evening',
  'Bright Smile',
  'Family Warmth',
  'Deep Connection',
  'Grand Finale',
];

// ============================================================
// IMAGE URL FIX
// ============================================================

const fixImageUrl = (url) => {
  if (!url || typeof url !== 'string') return '';

  const cleanUrl = url.trim();

  // Already a full URL
  if (
    cleanUrl.startsWith('https://') ||
    cleanUrl.startsWith('http://')
  ) {
    return cleanUrl.replace(
      'http://localhost:5000',
      BACKEND_URL
    );
  }

  // /uploads/...
  if (cleanUrl.startsWith('/')) {
    return `${BACKEND_URL}${cleanUrl}`;
  }

  // uploads/...
  return `${BACKEND_URL}/${cleanUrl}`;
};

// ============================================================
// PARSE PROJECT
// ============================================================

const parseProject = (section = {}) => {
  let mainDesc =
    section.desc ||
    section.description ||
    '';

  let descriptions = [];
  let headings = [];

  // ==========================================================
  // DESCRIPTION / HEADING DATA
  // ==========================================================

  if (
    typeof section.description === 'string' &&
    section.description.includes('||DESCS||')
  ) {
    try {
      const parts =
        section.description.split('||DESCS||');

      mainDesc = parts[0] || '';

      if (parts[1]) {
        const headingParts =
          parts[1].split('||HEADINGS||');

        // DESCRIPTIONS
        try {
          descriptions = JSON.parse(
            headingParts[0] || '[]'
          );
        } catch {
          descriptions = [];
        }

        // HEADINGS
        try {
          headings = JSON.parse(
            headingParts[1] || '[]'
          );
        } catch {
          headings = [];
        }
      }

      // OLD DATABASE FORMAT
      if (
        parts[2] &&
        headings.length === 0
      ) {
        try {
          headings = JSON.parse(parts[2]);
        } catch {
          headings = [];
        }
      }
    } catch (error) {
      console.error(
        'Error parsing project description:',
        error
      );
    }
  }

  // ==========================================================
  // FIX IMAGES
  // ==========================================================

  const images = Array.isArray(section.images)
    ? section.images
        .map(fixImageUrl)
        .filter(Boolean)
    : [];

  return {
    ...section,
    images,
    desc: mainDesc,
    descriptions: Array.isArray(descriptions)
      ? descriptions
      : [],
    headings: Array.isArray(headings)
      ? headings
      : [],
  };
};

// ============================================================
// DETECT PROJECT TYPE
// ============================================================

const getSectionType = (section = {}) => {
  const title = String(
    section.title ||
      section.name ||
      ''
  ).toLowerCase();

  const type = String(
    section.type ||
      ''
  ).toLowerCase();

  const category = String(
    section.category ||
      ''
  ).toLowerCase();

  const projectType = String(
    section.projectType ||
      ''
  ).toLowerCase();

  const service = String(
    section.service ||
      ''
  ).toLowerCase();

  const description = String(
    section.desc ||
      section.description ||
      ''
  ).toLowerCase();

  const explicitType =
    type ||
    projectType ||
    category ||
    service;

  if (
    explicitType === 'music' ||
    explicitType === 'music video' ||
    explicitType === 'song' ||
    explicitType === 'song video' ||
    explicitType === 'musical' ||
    explicitType === 'audio'
  ) {
    return 'music';
  }

  if (
    explicitType === 'film' ||
    explicitType === 'movie' ||
    explicitType === 'cinema' ||
    explicitType === 'cinematic'
  ) {
    return 'film';
  }

  if (
    explicitType === 'wedding' ||
    explicitType === 'bridal' ||
    explicitType === 'baby shower' ||
    explicitType === 'baby' ||
    explicitType === 'baptism' ||
    explicitType === 'event'
  ) {
    return 'wedding';
  }

  const combined = `
    ${title}
    ${type}
    ${category}
    ${projectType}
    ${service}
    ${description}
  `.toLowerCase();

  if (
    combined.includes('music video') ||
    combined.includes('song video') ||
    combined.includes('music') ||
    combined.includes('song') ||
    combined.includes('musical') ||
    combined.includes('audio')
  ) {
    return 'music';
  }

  if (
    combined.includes('film') ||
    combined.includes('movie') ||
    combined.includes('cinema') ||
    combined.includes('cinematic')
  ) {
    return 'film';
  }

  if (
    combined.includes('wedding') ||
    combined.includes('bridal') ||
    combined.includes('baby shower') ||
    combined.includes('baby') ||
    combined.includes('baptism') ||
    combined.includes('event')
  ) {
    return 'wedding';
  }

  return 'unknown';
};

// ============================================================
// HOME
// ============================================================

function Home() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${BACKEND_URL}/api/projects`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch projects: ${response.status}`
          );
        }

        const data = await response.json();

        const projects =
          Array.isArray(data)
            ? data
            : Array.isArray(data.projects)
            ? data.projects
            : Array.isArray(data.data)
            ? data.data
            : [];

        const processedProjects =
          projects.map(parseProject);

        setSections(processedProjects);

      } catch (error) {
        console.error(
          'Home sections fetch error:',
          error
        );

        setSections([]);

      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  const weddingSections =
    sections.filter(
      (section) =>
        getSectionType(section) === 'wedding'
    );

  const rawFilmSection =
    sections.find(
      (section) =>
        getSectionType(section) === 'film'
    );

  const filmSection = rawFilmSection
    ? {
        ...rawFilmSection,
        images: rawFilmSection.images ? rawFilmSection.images.slice(0, 5) : [],
      }
    : null;

  const rawMusicSection =
    sections.find(
      (section) =>
        getSectionType(section) === 'music'
    );

  const musicSection = rawMusicSection
    ? {
        ...rawMusicSection,
        images: rawMusicSection.images ? rawMusicSection.images.slice(0, 5) : [],
      }
    : null;

  return (
    <div
      className="
        min-h-screen
        bg-[#030303]
        text-white
        overflow-x-hidden
      "
    >
      <Navbar />
      <Hero />
      <main>
        {/* ===================================================
            WEDDING SECTION
        =================================================== */}

        {weddingSections.length > 0 && (
          <section
            id="wedding"
            className="
              relative
              border-t
              border-white/10
            "
          >
            <HomeSectionIntro
              number="01"
              eyebrow="Wedding Stories"
              title="Wedding"
              description="
                Beautiful celebrations captured with elegance,
                emotion and cinematic detail.
              "
            />

            <div
              className="
                max-w-[1800px]
                mx-auto
                px-5
                sm:px-8
                lg:px-12
                xl:px-20
              "
            >
              {weddingSections.map(
                (section, index) => (
                  <div
                    key={
                      section._id ||
                      `wedding-${index}`
                    }
                    className="
                      relative
                      border-b
                      border-white/10
                      last:border-b-0
                    "
                  >
                    <WeddingSection
                      section={section}
                      customHeadings={
                        section.headings?.length
                          ? section.headings
                          : DEFAULT_HEADINGS
                      }
                      customDescriptions={
                        section.descriptions?.length
                          ? section.descriptions
                          : DEFAULT_DESCRIPTIONS
                      }
                      preview={true}
                    />
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* ===================================================
            FILM SECTION
        =================================================== */}

        {!loading && filmSection && (
          <section
            id="films"
            className="
              relative
              border-t
              border-white/10
            "
          >
            <HomeSectionIntro
              number="02"
              eyebrow="Film Production"
              title="Films"
              description="
                Cinematic productions created with vision,
                storytelling and unforgettable imagery.
              "
            />

            <div
              className="
                max-w-[1800px]
                mx-auto
                px-5
                sm:px-8
                lg:px-12
                xl:px-20
              "
            >
              <div
                className="
                  relative
                  border-b
                  border-white/10
                "
              >
                <FilmSection
                  section={filmSection}
                  preview={true}
                />
              </div>
            </div>
          </section>
        )}

        {/* ===================================================
            MUSIC SECTION
        =================================================== */}

        {!loading && musicSection && (
          <section
            id="music"
            className="
              relative
              border-t
              border-white/10
            "
          >
            <HomeSectionIntro
              number="03"
              eyebrow="Music Production"
              title="Music"
              description="
                Music videos and visual stories created to bring
                sound, emotion and cinema together.
              "
            />

            <div
              className="
                max-w-[1800px]
                mx-auto
                px-5
                sm:px-8
                lg:px-12
                xl:px-20
              "
            >
              <div
                className="
                  relative
                  border-b
                  border-white/10
                "
              >
                <MusicSection
                  section={musicSection}
                  preview={true}
                />
              </div>
            </div>
          </section>
        )}

        {/* ===================================================
            FALLBACK
        =================================================== */}

        {!loading &&
          !filmSection &&
          !musicSection && (
            <>
              <section
                id="films"
                className="
                  relative
                  border-t
                  border-white/10
                "
              >
                <HomeSectionIntro
                  number="02"
                  eyebrow="Film Production"
                  title="Films"
                  description="
                    Cinematic productions created with vision,
                    storytelling and unforgettable imagery.
                  "
                />

                <FilmSection
                  section={{
                    title: 'Our Films',
                    description:
                      'Cinematic productions created with vision, storytelling and unforgettable imagery.',
                  }}
                  preview={true}
                />
              </section>

              <section
                id="music"
                className="
                  relative
                  border-t
                  border-white/10
                "
              >
                <HomeSectionIntro
                  number="03"
                  eyebrow="Music Production"
                  title="Music"
                  description="
                    Music videos and visual stories created to bring
                    sound, emotion and cinema together.
                  "
                />

                <MusicSection
                  section={{
                    title: 'Music Production',
                    description:
                      'Music videos and visual stories created to bring sound, emotion and cinema together.',
                  }}
                  preview={true}
                />
              </section>
            </>
          )}

        {/* ===================================================
            LOADING
        =================================================== */}

        {loading && (
          <div
            className="
              min-h-[40vh]
              flex
              items-center
              justify-center
              bg-[#030303]
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
                gap-4
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  border-2
                  border-[#FF4900]/20
                  border-t-[#FF4900]
                  animate-spin
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#FF4900]
                "
              >
                Loading
              </span>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

// ============================================================
// HOME SECTION INTRO
// ============================================================

function HomeSectionIntro({
  number,
  eyebrow,
  title,
  description,
}) {
  return (
    <div
      className="
        relative
        max-w-[1800px]
        mx-auto
        px-5
        sm:px-8
        lg:px-12
        xl:px-20
        pt-20
        md:pt-32
        pb-10
        md:pb-14
      "
    >
      <div
        className="
          absolute
          top-5
          right-5
          md:right-10
          text-[100px]
          md:text-[180px]
          font-serif
          font-light
          text-white/[0.03]
          leading-none
          pointer-events-none
          select-none
        "
      >
        {number}
      </div>

      <div
        className="
          relative
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-8
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
                bg-[#FF4900]
              "
            />

            <span
              className="
                text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.5em]
                text-[#FF4900]
                font-semibold
              "
            >
              {eyebrow}
            </span>
          </div>

          <h2
            className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              font-serif
              italic
              font-light
              tracking-tight
              text-white
            "
          >
            {title}
          </h2>
        </div>

        <p
          className="
            max-w-md
            text-sm
            md:text-base
            text-white/70
            font-light
            leading-relaxed
            md:text-right
          "
        >
          {description}
        </p>
      </div>

      <div
        className="
          flex
          items-center
          gap-3
          mt-10
        "
      >
        <span
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-[#FF4900]/40
            to-transparent
          "
        />

        <span
          className="
            w-1.5
            h-1.5
            rounded-full
            bg-[#FF4900]
          "
        />

        <span
          className="
            h-px
            flex-1
            bg-gradient-to-l
            from-[#FF4900]/40
            to-transparent
          "
        />
      </div>
    </div>
  );
}

export default Home;