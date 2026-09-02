

// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';

// import ProtectedImage from '../components/ProrectedImage';


// // ============================================================
// // API
// // ============================================================

// const API_URL =
//   'https://nahome-film-production.onrender.com';


// // ============================================================
// // HARD-CODED FILM
// // ============================================================

// const HARD_CODED_FILM = {
//   _id: 'hardcoded-film',
//   title: 'Our Films',
//   name: 'Our Films',
//   type: 'film',
//   category: 'film',
//   projectType: 'film',
//   service: 'film',

//   description:
//     'Cinematic productions created with vision, storytelling and unforgettable imagery.',

//   images: [
//     'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85',

//     'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=85'
//   ],

//   descriptions: [
//     '01. Cinematic vision brought to life.',
//     '02. Every frame tells a story.',
//     '03. Visual storytelling with purpose.',
//     '04. Moments transformed into cinema.',
//     '05. Stories worth remembering.'
//   ]
// };


// // ============================================================
// // HARD-CODED MUSIC
// // ============================================================

// const HARD_CODED_MUSIC = {
//   _id: 'hardcoded-music',
//   title: 'Music Production',
//   name: 'Music Production',
//   type: 'music',
//   category: 'music',
//   projectType: 'music',
//   service: 'music',

//   description:
//     'Music videos and visual stories created to bring sound, emotion and cinema together.',

//   images: [
//     'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85',

//     'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85'
//   ],

//   descriptions: [
//     '01. Sound transformed into visual storytelling.',
//     '02. Music, emotion and cinematic imagery.',
//     '03. Powerful performances captured beautifully.',
//     '04. Visual stories created around music.'
//   ]
// };


// // ============================================================
// // SLUG GENERATOR
// // ============================================================

// const generateSlug = (value) => {
//   if (!value) return '';

//   return String(value)
//     .toLowerCase()
//     .trim()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .replace(/[^a-z0-9\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-');
// };


// // ============================================================
// // IMAGE URL FIX
// // ============================================================

// const fixImageUrl = (url) => {
//   if (!url || typeof url !== 'string') {
//     return '';
//   }

//   const cleanUrl = url.trim();

//   // Full URL
//   if (
//     cleanUrl.startsWith('https://') ||
//     cleanUrl.startsWith('http://')
//   ) {
//     return cleanUrl.replace(
//       'http://localhost:5000',
//       API_URL
//     );
//   }

//   // /uploads/...
//   if (cleanUrl.startsWith('/')) {
//     return `${API_URL}${cleanUrl}`;
//   }

//   // uploads/...
//   return `${API_URL}/${cleanUrl}`;
// };


// // ============================================================
// // PARSE DESCRIPTION
// // ============================================================

// const parseDescriptions = (project) => {
//   if (!project) {
//     return [];
//   }

//   // Already parsed
//   if (Array.isArray(project.descriptions)) {
//     return project.descriptions;
//   }

//   const raw =
//     project.description ||
//     project.desc ||
//     '';

//   if (
//     typeof raw !== 'string' ||
//     !raw.includes('||DESCS||')
//   ) {
//     return [];
//   }

//   try {
//     const parts = raw.split('||DESCS||');

//     if (!parts[1]) {
//       return [];
//     }

//     const descriptionPart =
//       parts[1].split('||HEADINGS||')[0];

//     const parsed = JSON.parse(
//       descriptionPart || '[]'
//     );

//     return Array.isArray(parsed)
//       ? parsed
//       : [];

//   } catch (error) {
//     console.error(
//       'DESCRIPTION PARSE ERROR:',
//       error
//     );

//     return [];
//   }
// };


// // ============================================================
// // CLEAN PROJECT
// // ============================================================

// const normalizeProject = (project) => {
//   if (!project) {
//     return null;
//   }

//   const rawDescription =
//     project.description ||
//     project.desc ||
//     '';

//   let mainDescription =
//     rawDescription;

//   if (
//     typeof rawDescription === 'string' &&
//     rawDescription.includes('||DESCS||')
//   ) {
//     mainDescription =
//       rawDescription.split('||DESCS||')[0];
//   }

//   const descriptions =
//     parseDescriptions(project);

//   const images =
//     Array.isArray(project.images)
//       ? project.images
//           .map(fixImageUrl)
//           .filter(Boolean)
//       : [];

//   return {
//     ...project,

//     title:
//       project.title ||
//       project.name ||
//       'Untitled Project',

//     description:
//       mainDescription,

//     desc:
//       mainDescription,

//     images,

//     descriptions
//   };
// };


// // ============================================================
// // GET PROJECT SLUGS
// // ============================================================

// const getProjectSlugs = (project) => {
//   if (!project) {
//     return [];
//   }

//   return [
//     project.title,
//     project.name,
//     project.category,
//     project.projectType,
//     project.service,
//     project.type,
//     project._id
//   ]
//     .filter(Boolean)
//     .map(generateSlug);
// };


// // ============================================================
// // FIND PROJECT
// // ============================================================

// const findProject = (projects, requestedSlug) => {

//   const normalizedSlug =
//     generateSlug(requestedSlug);

//   console.log(
//     'GALLERY REQUESTED SLUG:',
//     normalizedSlug
//   );

//   // ----------------------------------------------------------
//   // 1. DATABASE PROJECTS
//   // ----------------------------------------------------------

//   const databaseProject =
//     projects.find((project) => {

//       const slugs =
//         getProjectSlugs(project);

//       return slugs.includes(
//         normalizedSlug
//       );
//     });

//   if (databaseProject) {

//     console.log(
//       'MATCHED DATABASE PROJECT:',
//       databaseProject
//     );

//     return normalizeProject(
//       databaseProject
//     );
//   }


//   // ----------------------------------------------------------
//   // 2. HARD-CODED FILM
//   // ----------------------------------------------------------

//   if (
//     normalizedSlug === 'our-films' ||
//     normalizedSlug === 'films' ||
//     normalizedSlug === 'film' ||
//     normalizedSlug === 'film-production'
//   ) {

//     console.log(
//       'MATCHED HARD-CODED FILM'
//     );

//     return normalizeProject(
//       HARD_CODED_FILM
//     );
//   }


//   // ----------------------------------------------------------
//   // 3. HARD-CODED MUSIC
//   // ----------------------------------------------------------

//   if (
//     normalizedSlug === 'music-production' ||
//     normalizedSlug === 'music' ||
//     normalizedSlug === 'music-video' ||
//     normalizedSlug === 'music-videos'
//   ) {

//     console.log(
//       'MATCHED HARD-CODED MUSIC'
//     );

//     return normalizeProject(
//       HARD_CODED_MUSIC
//     );
//   }


//   // ----------------------------------------------------------
//   // NOTHING FOUND
//   // ----------------------------------------------------------

//   console.warn(
//     'NO PROJECT MATCH FOUND FOR:',
//     normalizedSlug
//   );

//   return null;
// };


// // ============================================================
// // GALLERY
// // ============================================================

// function Gallery() {

//   const { category } = useParams();

//   const [projectData, setProjectData] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [open, setOpen] =
//     useState(false);

//   const [currentIndex, setCurrentIndex] =
//     useState(0);


//   // ==========================================================
//   // LOAD PROJECT
//   // ==========================================================

//   useEffect(() => {

//     let mounted = true;

//     const loadGallery = async () => {

//       setLoading(true);
//       setProjectData(null);

//       try {

//         console.log(
//           'GALLERY URL PARAM:',
//           category
//         );

//         const response =
//           await fetch(
//             `${API_URL}/api/projects`
//           );

//         if (!response.ok) {
//           throw new Error(
//             `Server returned ${response.status}`
//           );
//         }

//         const data =
//           await response.json();

//         console.log(
//           'ALL PROJECTS:',
//           data
//         );

//         const projects =
//           Array.isArray(data)
//             ? data
//             : [];

//         const found =
//           findProject(
//             projects,
//             category
//           );

//         if (mounted) {
//           setProjectData(found);
//         }

//       } catch (error) {

//         console.error(
//           'GALLERY FETCH ERROR:',
//           error
//         );

//         // ------------------------------------------------------
//         // Even if API fails, hard-coded pages still work
//         // ------------------------------------------------------

//         const fallback =
//           findProject([], category);

//         if (mounted) {
//           setProjectData(fallback);
//         }

//       } finally {

//         if (mounted) {
//           setLoading(false);
//         }

//       }
//     };

//     loadGallery();

//     return () => {
//       mounted = false;
//     };

//   }, [category]);


//   // ==========================================================
//   // LOADING
//   // ==========================================================

//   if (loading) {

//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">

//         <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">
//           Loading Gallery...
//         </p>

//       </div>
//     );
//   }


//   // ==========================================================
//   // NOT FOUND
//   // ==========================================================

//   if (!projectData) {

//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">

//         <h2 className="text-2xl font-serif text-amber-300 mb-4">
//           Gallery Not Found
//         </h2>

//         <p className="text-zinc-400 mb-8 text-center">
//           No projects were found in this gallery.
//         </p>

//         <Link
//           to="/"
//           className="text-xs uppercase tracking-[0.3em] text-zinc-300 border border-zinc-700 px-6 py-3 rounded hover:bg-white hover:text-black transition"
//         >
//           ← Back to Home
//         </Link>

//       </div>
//     );
//   }


//   // ==========================================================
//   // DESCRIPTIONS
//   // ==========================================================

//   const descriptions =
//     Array.isArray(projectData.descriptions)
//       ? projectData.descriptions
//       : [];


//   // ==========================================================
//   // LIGHTBOX SLIDES
//   // ==========================================================

//   const slides =
//     projectData.images.map(
//       (img, index) => ({
//         src: img,
//         description:
//           descriptions[index] || ''
//       })
//     );


//   // ==========================================================
//   // MAIN
//   // ==========================================================

//   return (

//     <div
//       className="min-h-screen bg-[#0a0a0a] text-white px-3 py-12 md:px-20 select-none"
//       onContextMenu={(e) =>
//         e.preventDefault()
//       }
//     >

//       {/* =====================================================
//           BACK BUTTON
//       ===================================================== */}

//       <div className="mb-10 pt-16 md:pt-4">

//         <Link
//           to="/"
//           className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
//         >
//           ← Back to Home
//         </Link>

//       </div>


//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <div className="text-center mb-16">

//         <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">

//           {projectData.name ||
//             projectData.title}

//         </h1>


//         <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">

//           {projectData.description ||
//             `Explore the complete collection of ${projectData.title} moments captured with elegance.`}

//         </p>

//       </div>


//       {/* =====================================================
//           IMAGE GRID
//       ===================================================== */}

//       {projectData.images.length > 0 ? (

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">

//           {projectData.images.map(
//             (img, index) => (

//               <div
//                 key={`${img}-${index}`}
//                 className="aspect-[2/3] overflow-hidden bg-zinc-900 rounded-md md:rounded-lg border border-zinc-800 shadow-lg relative group"
//               >

//                 <ProtectedImage
//                   src={img}
//                   alt={`${projectData.title} ${index + 1}`}
//                   className="w-full h-full object-cover cursor-pointer"
//                   onClick={() => {
//                     setCurrentIndex(index);
//                     setOpen(true);
//                   }}
//                 />


//                 {/* HOVER VIEW */}

//                 <div
//                   onClick={() => {
//                     setCurrentIndex(index);
//                     setOpen(true);
//                   }}
//                   className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer pointer-events-auto z-30"
//                 >

//                   <span className="text-white text-[10px] md:text-xs uppercase tracking-widest bg-black/60 px-2 py-1 rounded">
//                     View
//                   </span>

//                 </div>

//               </div>

//             )
//           )}

//         </div>

//       ) : (

//         <div className="text-center py-20 text-zinc-500">

//           <p>
//             No images uploaded in this gallery yet.
//           </p>

//         </div>

//       )}


//       {/* =====================================================
//           LIGHTBOX
//       ===================================================== */}

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={slides}
//         index={currentIndex}
//         carousel={{
//           finite: false
//         }}
//         controller={{
//           closeOnBackdropClick: true
//         }}
//         render={{
//           slide: ({ slide }) => (

//             <div
//               className="relative w-full h-full flex items-center justify-center p-2 md:p-6 select-none"
//               onContextMenu={(e) =>
//                 e.preventDefault()
//               }
//             >

//               <div className="relative flex items-center justify-center w-full h-full max-w-[90vw] max-h-[85vh]">

//                 <ProtectedImage
//                   src={slide.src}
//                   alt="Protected Gallery Image"
//                   className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl mx-auto"
//                 />

//               </div>

//             </div>

//           )
//         }}
//       />

//     </div>
//   );
// }


// export default Gallery;

// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';

// import ProtectedImage from '../components/ProrectedImage';


// // ============================================================
// // NAHOME FILM PRODUCTION API
// // ============================================================

// const API_URL =
//   'https://nahome-film-production.onrender.com';


// // ============================================================
// // SLUG GENERATOR
// // ============================================================

// const generateSlug = (value) => {

//   if (!value) return '';

//   return String(value)
//     .toLowerCase()
//     .trim()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .replace(/[^a-z0-9\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-');
// };


// // ============================================================
// // IMAGE URL FIX
// //
// // Cloudinary full URLs remain untouched.
// // Server relative paths use Nahome backend.
// // ============================================================

// const fixImageUrl = (url) => {

//   if (!url || typeof url !== 'string') {
//     return '';
//   }

//   const cleanUrl = url.trim();

//   if (!cleanUrl) {
//     return '';
//   }


//   // ----------------------------------------------------------
//   // Cloudinary / other complete URL
//   // ----------------------------------------------------------

//   if (
//     cleanUrl.startsWith('https://') ||
//     cleanUrl.startsWith('http://')
//   ) {

//     // Old local backend URL → current Nahome backend
//     if (cleanUrl.startsWith('http://localhost:5000')) {

//       return cleanUrl.replace(
//         'http://localhost:5000',
//         API_URL
//       );

//     }

//     if (cleanUrl.startsWith('http://localhost:4000')) {

//       return cleanUrl.replace(
//         'http://localhost:4000',
//         API_URL
//       );

//     }

//     // Cloudinary or other remote image
//     // stays exactly as stored in database.
//     return cleanUrl;
//   }


//   // ----------------------------------------------------------
//   // Relative server path
//   // ----------------------------------------------------------

//   if (cleanUrl.startsWith('/')) {

//     return `${API_URL}${cleanUrl}`;
//   }


//   // ----------------------------------------------------------
//   // Server file path
//   // ----------------------------------------------------------

//   return `${API_URL}/${cleanUrl}`;
// };


// // ============================================================
// // PARSE DESCRIPTION
// // ============================================================

// const parseDescriptions = (project) => {

//   if (!project) {
//     return [];
//   }


//   // Already parsed from server
//   if (Array.isArray(project.descriptions)) {
//     return project.descriptions;
//   }


//   const raw =
//     project.description ||
//     project.desc ||
//     '';


//   if (
//     typeof raw !== 'string' ||
//     !raw.includes('||DESCS||')
//   ) {

//     return [];
//   }


//   try {

//     const parts =
//       raw.split('||DESCS||');


//     if (!parts[1]) {
//       return [];
//     }


//     const descriptionPart =
//       parts[1].split('||HEADINGS||')[0];


//     const parsed =
//       JSON.parse(
//         descriptionPart || '[]'
//       );


//     return Array.isArray(parsed)
//       ? parsed
//       : [];

//   } catch (error) {

//     console.error(
//       'DESCRIPTION PARSE ERROR:',
//       error
//     );

//     return [];
//   }
// };


// // ============================================================
// // PARSE HEADINGS
// // ============================================================

// const parseHeadings = (project) => {

//   if (!project) {
//     return [];
//   }


//   // Already parsed from server
//   if (Array.isArray(project.headings)) {
//     return project.headings;
//   }


//   const raw =
//     project.description ||
//     project.desc ||
//     '';


//   if (
//     typeof raw !== 'string' ||
//     !raw.includes('||HEADINGS||')
//   ) {

//     return [];
//   }


//   try {

//     const parts =
//       raw.split('||DESCS||');


//     if (!parts[1]) {
//       return [];
//     }


//     const headingPart =
//       parts[1].split('||HEADINGS||')[1];


//     const parsed =
//       JSON.parse(
//         headingPart || '[]'
//       );


//     return Array.isArray(parsed)
//       ? parsed
//       : [];

//   } catch (error) {

//     console.error(
//       'HEADING PARSE ERROR:',
//       error
//     );

//     return [];
//   }
// };


// // ============================================================
// // NORMALIZE PROJECT
// // ============================================================

// const normalizeProject = (project) => {

//   if (!project) {
//     return null;
//   }


//   const rawDescription =
//     project.description ||
//     project.desc ||
//     '';


//   let mainDescription =
//     rawDescription;


//   if (
//     typeof rawDescription === 'string' &&
//     rawDescription.includes('||DESCS||')
//   ) {

//     mainDescription =
//       rawDescription.split('||DESCS||')[0];
//   }


//   const descriptions =
//     parseDescriptions(project);


//   const headings =
//     parseHeadings(project);


//   // ----------------------------------------------------------
//   // DATABASE / CLOUDINARY IMAGES ONLY
//   // ----------------------------------------------------------

//   const images =
//     Array.isArray(project.images)
//       ? project.images
//           .map(fixImageUrl)
//           .filter(Boolean)
//       : [];


//   return {
//     ...project,

//     title:
//       project.title ||
//       project.name ||
//       '',

//     description:
//       mainDescription,

//     desc:
//       mainDescription,

//     images,

//     descriptions,

//     headings
//   };
// };


// // ============================================================
// // GET PROJECT ID
// // ============================================================

// const getProjectId = (project) => {

//   if (!project) {
//     return '';
//   }

//   return String(
//     project._id ||
//     project.id ||
//     ''
//   );
// };


// // ============================================================
// // GET PROJECT SLUGS
// // ============================================================

// const getProjectSlugs = (project) => {

//   if (!project) {
//     return [];
//   }


//   return [
//     project.title,
//     project.name,
//     project.category,
//     project.projectType,
//     project.service,
//     project.type
//   ]
//     .filter(Boolean)
//     .map(generateSlug);
// };


// // ============================================================
// // FIND PROJECT
// //
// // IMPORTANT:
// // 1. Exact MongoDB ID first
// // 2. Only then title/name slug
// // ============================================================

// const findProject = (
//   projects,
//   requestedSlug
// ) => {

//   const normalizedSlug =
//     generateSlug(requestedSlug);


//   console.log(
//     'GALLERY REQUESTED SLUG:',
//     normalizedSlug
//   );


//   // ==========================================================
//   // EXTRACT DATABASE ID FROM END OF SLUG
//   //
//   // Example:
//   // wedding-stories-68xxxxxxxxxxxxxxxxxxxxxxxx
//   // ==========================================================

//   const possibleId =
//     String(requestedSlug || '')
//       .split('-')
//       .pop();


//   // ==========================================================
//   // 1. EXACT DATABASE ID
//   // ==========================================================

//   const exactProject =
//     projects.find((project) => {

//       const projectId =
//         getProjectId(project);

//       return (
//         projectId &&
//         projectId === possibleId
//       );
//     });


//   if (exactProject) {

//     console.log(
//       'EXACT DATABASE PROJECT MATCH:',
//       exactProject
//     );

//     return normalizeProject(
//       exactProject
//     );
//   }


//   // ==========================================================
//   // 2. NORMAL SLUG MATCH
//   //
//   // Kept for existing routes.
//   // ==========================================================

//   const databaseProject =
//     projects.find((project) => {

//       const slugs =
//         getProjectSlugs(project);

//       return slugs.includes(
//         normalizedSlug
//       );
//     });


//   if (databaseProject) {

//     console.log(
//       'DATABASE SLUG MATCH:',
//       databaseProject
//     );

//     return normalizeProject(
//       databaseProject
//     );
//   }


//   // ==========================================================
//   // NOTHING FOUND
//   //
//   // NO OLD HABESHA FALLBACK
//   // NO LOCAL WEDDING FALLBACK
//   // NO UNSPLASH FALLBACK
//   // ==========================================================

//   console.warn(
//     'NO DATABASE PROJECT FOUND FOR:',
//     normalizedSlug
//   );

//   return null;
// };


// // ============================================================
// // GALLERY
// // ============================================================

// function Gallery() {

//   const { category } =
//     useParams();


//   const [projectData, setProjectData] =
//     useState(null);


//   const [loading, setLoading] =
//     useState(true);


//   const [open, setOpen] =
//     useState(false);


//   const [currentIndex, setCurrentIndex] =
//     useState(0);


//   // ==========================================================
//   // LOAD PROJECT
//   // ==========================================================

//   useEffect(() => {

//     let mounted = true;


//     const loadGallery = async () => {

//       setLoading(true);
//       setProjectData(null);


//       try {

//         console.log(
//           'GALLERY URL PARAM:',
//           category
//         );


//         const response =
//           await fetch(
//             `${API_URL}/api/projects`
//           );


//         if (!response.ok) {

//           throw new Error(
//             `Server returned ${response.status}`
//           );
//         }


//         const data =
//           await response.json();


//         console.log(
//           'NAHOME PROJECTS:',
//           data
//         );


//         // ------------------------------------------------------
//         // Support API response structures
//         // ------------------------------------------------------

//         let projects = [];


//         if (Array.isArray(data)) {

//           projects = data;

//         } else if (
//           Array.isArray(data.projects)
//         ) {

//           projects = data.projects;

//         } else if (
//           Array.isArray(data.data)
//         ) {

//           projects = data.data;
//         }


//         console.log(
//           'DATABASE PROJECT COUNT:',
//           projects.length
//         );


//         const found =
//           findProject(
//             projects,
//             category
//           );


//         if (mounted) {

//           setProjectData(found);
//         }

//       } catch (error) {

//         console.error(
//           'GALLERY FETCH ERROR:',
//           error
//         );


//         // ------------------------------------------------------
//         // IMPORTANT:
//         // No hard-coded fallback.
//         // If server fails, gallery stays unavailable.
//         // ------------------------------------------------------

//         if (mounted) {

//           setProjectData(null);
//         }

//       } finally {

//         if (mounted) {

//           setLoading(false);
//         }
//       }
//     };


//     loadGallery();


//     return () => {

//       mounted = false;
//     };

//   }, [category]);


//   // ==========================================================
//   // LOADING
//   // ==========================================================

//   if (loading) {

//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">

//         <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">
//           Loading Gallery...
//         </p>

//       </div>
//     );
//   }


//   // ==========================================================
//   // NOT FOUND
//   // ==========================================================

//   if (!projectData) {

//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">

//         <h2 className="text-2xl font-serif text-amber-300 mb-4">
//           Gallery Not Found
//         </h2>

//         <p className="text-zinc-400 mb-8 text-center">
//           No project was found on the Nahome server.
//         </p>

//         <Link
//           to="/home"
//           className="text-xs uppercase tracking-[0.3em] text-zinc-300 border border-zinc-700 px-6 py-3 rounded hover:bg-white hover:text-black transition"
//         >
//           ← Back to Home
//         </Link>

//       </div>
//     );
//   }


//   // ==========================================================
//   // SERVER DESCRIPTIONS
//   // ==========================================================

//   const descriptions =
//     Array.isArray(projectData.descriptions)
//       ? projectData.descriptions
//       : [];


//   // ==========================================================
//   // LIGHTBOX
//   // ==========================================================

//   const slides =
//     projectData.images.map(
//       (img, index) => ({
//         src: img,
//         description:
//           descriptions[index] || ''
//       })
//     );


//   // ==========================================================
//   // MAIN
//   // ==========================================================

//   return (

//     <div
//       className="min-h-screen bg-[#0a0a0a] text-white px-3 py-12 md:px-20 select-none"
//       onContextMenu={(e) =>
//         e.preventDefault()
//       }
//     >

//       {/* BACK */}

//       <div className="mb-10 pt-16 md:pt-4">

//         <Link
//           to="/home"
//           className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
//         >
//           ← Back to Home
//         </Link>

//       </div>


//       {/* HEADER */}

//       <div className="text-center mb-16">

//         <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">

//           {projectData.name ||
//             projectData.title}

//         </h1>


//         <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">

//           {projectData.description || ''}

//         </p>

//       </div>


//       {/* IMAGE GRID */}

//       {projectData.images.length > 0 ? (

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">

//           {projectData.images.map(
//             (img, index) => (

//               <div
//                 key={`${img}-${index}`}
//                 className="aspect-[2/3] overflow-hidden bg-zinc-900 rounded-md md:rounded-lg border border-zinc-800 shadow-lg relative group"
//               >

//                 <ProtectedImage
//                   src={img}
//                   alt={`${projectData.title} ${index + 1}`}
//                   className="w-full h-full object-cover cursor-pointer"
//                   onClick={() => {
//                     setCurrentIndex(index);
//                     setOpen(true);
//                   }}
//                 />


//                 <div
//                   onClick={() => {
//                     setCurrentIndex(index);
//                     setOpen(true);
//                   }}
//                   className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer pointer-events-auto z-30"
//                 >

//                   <span className="text-white text-[10px] md:text-xs uppercase tracking-widest bg-black/60 px-2 py-1 rounded">
//                     View
//                   </span>

//                 </div>

//               </div>

//             )
//           )}

//         </div>

//       ) : (

//         <div className="text-center py-20 text-zinc-500">

//           <p>
//             No images uploaded in this gallery yet.
//           </p>

//         </div>

//       )}


//       {/* LIGHTBOX */}

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={slides}
//         index={currentIndex}
//         carousel={{
//           finite: false
//         }}
//         controller={{
//           closeOnBackdropClick: true
//         }}
//         render={{
//           slide: ({ slide }) => (

//             <div
//               className="relative w-full h-full flex items-center justify-center p-2 md:p-6 select-none"
//               onContextMenu={(e) =>
//                 e.preventDefault()
//               }
//             >

//               <div className="relative flex items-center justify-center w-full h-full max-w-[90vw] max-h-[85vh]">

//                 <ProtectedImage
//                   src={slide.src}
//                   alt="Protected Gallery Image"
//                   className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl mx-auto"
//                 />

//               </div>

//             </div>

//           )
//         }}
//       />

//     </div>
//   );
// }


// export default Gallery;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import ProtectedImage from '../components/ProrectedImage';


// ============================================================
// NAHOME FILM PRODUCTION API
// ============================================================

const API_URL =
  'https://nahome-film-production.onrender.com';


// ============================================================
// SLUG GENERATOR
// ============================================================

const generateSlug = (value) => {

  if (!value) return '';

  return String(value)
    .toLowerCase()
    .trim()
    .replace(/["']/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};


// ============================================================
// IMAGE URL FIX
//
// Cloudinary full URLs remain untouched.
// Server relative paths use Nahome backend.
// ============================================================

const fixImageUrl = (url) => {

  if (!url || typeof url !== 'string') {
    return '';
  }

  const cleanUrl = url.trim();

  if (!cleanUrl) {
    return '';
  }


  // ----------------------------------------------------------
  // Cloudinary / other complete URL
  // ----------------------------------------------------------

  if (
    cleanUrl.startsWith('https://') ||
    cleanUrl.startsWith('http://')
  ) {

    // Old local backend URL → current Nahome backend
    if (cleanUrl.startsWith('http://localhost:5000')) {

      return cleanUrl.replace(
        'http://localhost:5000',
        API_URL
      );

    }

    if (cleanUrl.startsWith('http://localhost:4000')) {

      return cleanUrl.replace(
        'http://localhost:4000',
        API_URL
      );

    }

    // Cloudinary or other remote image
    // stays exactly as stored in database.
    return cleanUrl;
  }


  // ----------------------------------------------------------
  // Relative server path
  // ----------------------------------------------------------

  if (cleanUrl.startsWith('/')) {

    return `${API_URL}${cleanUrl}`;
  }


  // ----------------------------------------------------------
  // Server file path
  // ----------------------------------------------------------

  return `${API_URL}/${cleanUrl}`;
};


// ============================================================
// PARSE DESCRIPTION
// ============================================================

const parseDescriptions = (project) => {

  if (!project) {
    return [];
  }


  // Already parsed from server
  if (Array.isArray(project.descriptions)) {
    return project.descriptions;
  }


  const raw =
    project.description ||
    project.desc ||
    '';


  if (
    typeof raw !== 'string' ||
    !raw.includes('||DESCS||')
  ) {

    return [];
  }


  try {

    const parts =
      raw.split('||DESCS||');


    if (!parts[1]) {
      return [];
    }


    const descriptionPart =
      parts[1].split('||HEADINGS||')[0];


    const parsed =
      JSON.parse(
        descriptionPart || '[]'
      );


    return Array.isArray(parsed)
      ? parsed
      : [];

  } catch (error) {

    console.error(
      'DESCRIPTION PARSE ERROR:',
      error
    );

    return [];
  }
};


// ============================================================
// PARSE HEADINGS
// ============================================================

const parseHeadings = (project) => {

  if (!project) {
    return [];
  }


  // Already parsed from server
  if (Array.isArray(project.headings)) {
    return project.headings;
  }


  const raw =
    project.description ||
    project.desc ||
    '';


  if (
    typeof raw !== 'string' ||
    !raw.includes('||HEADINGS||')
  ) {

    return [];
  }


  try {

    const parts =
      raw.split('||DESCS||');


    if (!parts[1]) {
      return [];
    }


    const headingPart =
      parts[1].split('||HEADINGS||')[1];


    const parsed =
      JSON.parse(
        headingPart || '[]'
      );


    return Array.isArray(parsed)
      ? parsed
      : [];

  } catch (error) {

    console.error(
      'HEADING PARSE ERROR:',
      error
    );

    return [];
  }
};


// ============================================================
// NORMALIZE PROJECT
// ============================================================

const normalizeProject = (project) => {

  if (!project) {
    return null;
  }


  const rawDescription =
    project.description ||
    project.desc ||
    '';


  let mainDescription =
    rawDescription;


  if (
    typeof rawDescription === 'string' &&
    rawDescription.includes('||DESCS||')
  ) {

    mainDescription =
      rawDescription.split('||DESCS||')[0];
  }


  const descriptions =
    parseDescriptions(project);


  const headings =
    parseHeadings(project);


  // ----------------------------------------------------------
  // DATABASE / CLOUDINARY IMAGES ONLY
  // ----------------------------------------------------------

  const images =
    Array.isArray(project.images)
      ? project.images
          .map(fixImageUrl)
          .filter(Boolean)
      : [];


  return {

    ...project,

    title:
      project.title ||
      project.name ||
      '',

    description:
      mainDescription,

    desc:
      mainDescription,

    images,

    descriptions,

    headings
  };
};


// ============================================================
// GET PROJECT ID
// ============================================================

const getProjectId = (project) => {

  if (!project) {
    return '';
  }

  return String(
    project._id ||
    project.id ||
    ''
  );
};


// ============================================================
// GET PROJECT SLUGS
// ============================================================

const getProjectSlugs = (project) => {

  if (!project) {
    return [];
  }


  return [
    project.title,
    project.name,
    project.category,
    project.projectType,
    project.service,
    project.type
  ]
    .filter(Boolean)
    .map(generateSlug);
};


// ============================================================
// FIND PROJECT
//
// IMPORTANT:
// 1. Exact MongoDB ID first
// 2. Only then title/name slug
// ============================================================

const findProject = (
  projects,
  requestedSlug
) => {

  if (
    !Array.isArray(projects) ||
    !requestedSlug
  ) {

    return null;
  }


  const requested =
    String(requestedSlug).trim();


  const normalizedSlug =
    generateSlug(requested);


  console.log(
    'GALLERY REQUESTED SLUG:',
    normalizedSlug
  );


  console.log(
    'ALL PROJECTS:',
    projects
  );


  // ==========================================================
  // EXTRACT MONGODB OBJECT ID FROM END OF URL
  //
  // Example:
  //
  // weddings-6a9706ff14dcc8be4e2d6d59
  //
  // becomes:
  //
  // 6a9706ff14dcc8be4e2d6d59
  // ==========================================================

  const idMatch =
    requested.match(
      /([a-f0-9]{24})$/i
    );


  const possibleId =
    idMatch
      ? idMatch[1]
      : '';


  console.log(
    'EXTRACTED PROJECT ID:',
    possibleId
  );


  // ==========================================================
  // 1. EXACT DATABASE ID
  // ==========================================================

  const exactProject =
    projects.find((project) => {

      const projectId =
        getProjectId(project);


      console.log(
        'CHECK PROJECT ID:',
        projectId,
        'AGAINST:',
        possibleId
      );


      return (
        possibleId &&
        projectId &&
        projectId.toLowerCase() ===
          possibleId.toLowerCase()
      );
    });


  if (exactProject) {

    console.log(
      'EXACT DATABASE PROJECT MATCH:',
      exactProject
    );


    return normalizeProject(
      exactProject
    );
  }


  // ==========================================================
  // 2. NORMAL SLUG MATCH
  //
  // Kept for existing routes.
  // ==========================================================

  const databaseProject =
    projects.find((project) => {

      const slugs =
        getProjectSlugs(project);


      return slugs.includes(
        normalizedSlug
      );
    });


  if (databaseProject) {

    console.log(
      'DATABASE SLUG MATCH:',
      databaseProject
    );


    return normalizeProject(
      databaseProject
    );
  }


  // ==========================================================
  // NOTHING FOUND
  //
  // NO OLD HABESHA FALLBACK
  // NO LOCAL WEDDING FALLBACK
  // NO UNSPLASH FALLBACK
  // ==========================================================

  console.warn(
    'NO DATABASE PROJECT FOUND FOR:',
    requested
  );


  console.warn(
    'AVAILABLE PROJECT IDS:',
    projects.map(getProjectId)
  );


  return null;
};


// ============================================================
// GALLERY
// ============================================================

function Gallery() {

  const { category } =
    useParams();


  const [projectData, setProjectData] =
    useState(null);


  const [loading, setLoading] =
    useState(true);


  const [open, setOpen] =
    useState(false);


  const [currentIndex, setCurrentIndex] =
    useState(0);


  // ==========================================================
  // LOAD PROJECT
  // ==========================================================

  useEffect(() => {

    let mounted = true;


    const loadGallery = async () => {

      setLoading(true);
      setProjectData(null);


      try {

        console.log(
          'GALLERY URL PARAM:',
          category
        );


        const response =
          await fetch(
            `${API_URL}/api/projects`
          );


        if (!response.ok) {

          throw new Error(
            `Server returned ${response.status}`
          );
        }


        const data =
          await response.json();


        console.log(
          'NAHOME PROJECTS:',
          data
        );


        // ------------------------------------------------------
        // Support API response structures
        // ------------------------------------------------------

        let projects = [];


        if (Array.isArray(data)) {

          projects = data;

        } else if (
          Array.isArray(data.projects)
        ) {

          projects = data.projects;

        } else if (
          Array.isArray(data.data)
        ) {

          projects = data.data;
        }


        console.log(
          'DATABASE PROJECT COUNT:',
          projects.length
        );


        const found =
          findProject(
            projects,
            category
          );


        if (mounted) {

          setProjectData(found);
        }

      } catch (error) {

        console.error(
          'GALLERY FETCH ERROR:',
          error
        );


        // ------------------------------------------------------
        // IMPORTANT:
        // No hard-coded fallback.
        // If server fails, gallery stays unavailable.
        // ------------------------------------------------------

        if (mounted) {

          setProjectData(null);
        }

      } finally {

        if (mounted) {

          setLoading(false);
        }
      }
    };


    loadGallery();


    return () => {

      mounted = false;
    };

  }, [category]);


  // ==========================================================
  // LOADING
  // ==========================================================

  if (loading) {

    return (

      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">

        <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">
          Loading Gallery...
        </p>

      </div>
    );
  }


  // ==========================================================
  // NOT FOUND
  // ==========================================================

  if (!projectData) {

    return (

      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">

        <h2 className="text-2xl font-serif text-amber-300 mb-4">
          Gallery Not Found
        </h2>


        <p className="text-zinc-400 mb-8 text-center">
          No project was found on the Nahome server.
        </p>


        <Link
          to="/home"
          className="text-xs uppercase tracking-[0.3em] text-zinc-300 border border-zinc-700 px-6 py-3 rounded hover:bg-white hover:text-black transition"
        >
          ← Back to Home
        </Link>

      </div>
    );
  }


  // ==========================================================
  // SERVER DESCRIPTIONS
  // ==========================================================

  const descriptions =
    Array.isArray(projectData.descriptions)
      ? projectData.descriptions
      : [];


  // ==========================================================
  // LIGHTBOX
  // ==========================================================

  const slides =
    projectData.images.map(
      (img, index) => ({

        src: img,

        description:
          descriptions[index] || ''
      })
    );


  // ==========================================================
  // MAIN
  // ==========================================================

  return (

    <div
      className="min-h-screen bg-[#0a0a0a] text-white px-3 py-12 md:px-20 select-none"

      onContextMenu={(e) =>
        e.preventDefault()
      }
    >


      {/* BACK */}

      <div className="mb-10 pt-16 md:pt-4">

        <Link
          to="/home"
          className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
        >
          ← Back to Home
        </Link>

      </div>


      {/* HEADER */}

      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">

          {projectData.name ||
            projectData.title}

        </h1>


        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">

          {projectData.description || ''}

        </p>

      </div>


      {/* IMAGE GRID */}

      {projectData.images.length > 0 ? (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">

          {projectData.images.map(
            (img, index) => (

              <div
                key={`${img}-${index}`}
                className="aspect-[2/3] overflow-hidden bg-zinc-900 rounded-md md:rounded-lg border border-zinc-800 shadow-lg relative group"
              >

                <ProtectedImage
                  src={img}
                  alt={`${projectData.title} ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"

                  onClick={() => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}
                />


                <div
                  onClick={() => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}

                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer pointer-events-auto z-30"
                >

                  <span className="text-white text-[10px] md:text-xs uppercase tracking-widest bg-black/60 px-2 py-1 rounded">
                    View
                  </span>

                </div>

              </div>
            )
          )}

        </div>

      ) : (

        <div className="text-center py-20 text-zinc-500">

          <p>
            No images uploaded in this gallery yet.
          </p>

        </div>
      )}


      {/* LIGHTBOX */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}

        carousel={{
          finite: false
        }}

        controller={{
          closeOnBackdropClick: true
        }}

        render={{
          slide: ({ slide }) => (

            <div
              className="relative w-full h-full flex items-center justify-center p-2 md:p-6 select-none"

              onContextMenu={(e) =>
                e.preventDefault()
              }
            >

              <div className="relative flex items-center justify-center w-full h-full max-w-[90vw] max-h-[85vh]">

                <ProtectedImage
                  src={slide.src}
                  alt="Protected Gallery Image"
                  className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl mx-auto"
                />

              </div>

            </div>
          )
        }}
      />

    </div>
  );
}


export default Gallery;

