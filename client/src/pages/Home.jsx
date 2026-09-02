
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import Footer from "../components/Footer";
// import ProtectedImage from '../components/ProrectedImage'; // 🔒 መከላኸሊ ኮምፖነንት

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const DEFAULT_DESCRIPTIONS = [
//   "01. The Beginning of Forever — Our First Look", "02. A Tender Moment Caught in Time",
//   "03. Walking Hand in Hand Towards Tomorrow", "04. Joy and Laughter Shared with Loved Ones",
//   "05. The Grand Celebration and Vows", "06. Unforgettable Emotions of the Day",
//   "07. Elegance in Every Single Detail", "08. Dancing Under the Evening Lights",
//   "09. Sweet Whispers and Quiet Glances", "10. Cherished Memories to Last a Lifetime",
//   "11. A Magical Evening Full of Grace", "12. Smiles That Brighten the Whole World",
//   "13. Embracing the Warmth of Family", "14. Looking Into Each Other's Eyes",
//   "15. The Perfect Ending to a Perfect Day"
// ];

// const DEFAULT_HEADINGS = [
//   "The Story Begins", "Tender Highlight", "Walking Together", "Shared Laughter",
//   "Featured Memory", "Pure Emotion", "Elegant Detail", "Evening Magic",
//   "Quiet Glance", "Cherished Moment", "Graceful Evening", "Bright Smile",
//   "Family Warmth", "Deep Connection", "Grand Finale"
// ];

// const generateSlug = (titleText) => {
//   if (!titleText) return '';
//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-');
// };

// const fixImageUrl = (url) => {
//   if (!url) return '';
//   if (url.includes('localhost:5000')) {
//     return url.replace('http://localhost:5000', 'https://habesha-film-production-server.onrender.com');
//   }
//   return url;
// };

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages] = useState([]);
//   const [title] = useState('');
//   const [sections, setSections] = useState([]); 

//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const processedData = data.map(section => {
//           let parsedDescriptions = [];
//           let parsedHeadings = [];
//           let mainDesc = section.desc || section.description || '';

//           try {
//             if (typeof section.description === 'string' && section.description.includes('||DESCS||')) {
//               const parts = section.description.split('||DESCS||');
//               mainDesc = parts[0] || '';
              
//               try { parsedDescriptions = parts[1] ? JSON.parse(parts[1]) : []; } catch(err) { parsedDescriptions = []; }
//               try { parsedHeadings = parts[2] ? JSON.parse(parts[2]) : []; } catch(err) { parsedHeadings = []; }
//             }
//           } catch (e) {
//             console.log("Error parsing section data", e);
//           }

//           const fixedImages = Array.isArray(section.images) 
//             ? section.images.map(img => fixImageUrl(img)) 
//             : [];

//           return {
//             ...section,
//             images: fixedImages,
//             desc: mainDesc,
//             descriptions: parsedDescriptions,
//             headings: parsedHeadings
//           };
//         });

//         setSections(processedData);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden">
//       <Hero />

//       {title && <h1 className="text-center text-3xl md:text-4xl mt-10 text-zinc-100 px-4">{title}</h1>}


//       <section className="py-12 md:py-24 w-full">
//         {sections.map((section, index) => {
//           const titleLower = section.title ? section.title.toLowerCase() : '';
//           const isWedding = titleLower.includes('wedding');
//           const isBridalShower = titleLower.includes('bridal');
//           const isBabyShower = titleLower.includes('baby') || titleLower.includes('baptism');

//           const customDescriptions = section.descriptions?.length > 0 ? section.descriptions : DEFAULT_DESCRIPTIONS;
//           const customHeadings = section.headings?.length > 0 ? section.headings : DEFAULT_HEADINGS;

//           // Display title or names (whichever is available)
//           const displayHeading = section.names && section.names.trim() !== '' ? section.names : section.title;

//           return (
//             <div key={section._id || index} className="mb-20 md:mb-36 w-full border-b border-zinc-900 pb-16 md:pb-28 last:border-b-0">
              
//               {displayHeading && (
//                 <div className="mb-10 md:mb-16 text-center px-4">
//                   <span className="text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//                     Event Story & Timeline
//                   </span>
//                   <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-zinc-100 tracking-wide font-light">
//                     {displayHeading}
//                   </h3>
//                   <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto my-3"></div>
//                   <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-light">
//                     {section.date || "Featured Project"}
//                   </p>
//                 </div>
//               )}

//               {isWedding ? (
//                 <WeddingSection section={section} customHeadings={customHeadings} customDescriptions={customDescriptions} />
//               ) : isBridalShower ? (
//                 <BridalShowerSection section={section} customHeadings={customHeadings} customDescriptions={customDescriptions} />
//               ) : isBabyShower ? (
//                 <BabyShowerSection section={section} customHeadings={customHeadings} customDescriptions={customDescriptions} />
//               ) : (
//                 <DefaultSection section={section} />
//               )}
//             </div>
//           );
//         })}
//       </section>

//       <Lightbox open={open} close={() => setOpen(false)} slides={currentImages} />
//       <Footer />
//     </div>
//   );
// }

// function WeddingSection({ section, customHeadings, customDescriptions }) {
//   const images = Array.isArray(section.images) ? section.images : [];
//   const bottomGridImages = images.slice(10, 14);

//   return (
//     <div className="w-full space-y-10 md:space-y-16">
//       {images[0] && (
//         <div className="w-full max-w-4xl mx-auto px-4">
//           <div className="text-center max-w-lg mx-auto mb-6">
//             <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-1">
//               {customHeadings[0] || DEFAULT_HEADINGS[0]}
//             </span>
//             <p className="text-sm md:text-base text-zinc-300 font-light">
//               {customDescriptions[0] || DEFAULT_DESCRIPTIONS[0]}
//             </p>
//           </div>
//           <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border-2 border-[#dfb557]/40 relative">
//             <ProtectedImage src={images[0]} alt={section.title} className="w-full h-full" showLogoOnly={true} />
//           </div>
//         </div>
//       )}

//       {images.length > 1 && (
//         <div className="max-w-4xl mx-auto px-4 relative">
//           <div className="space-y-6 sm:space-y-12">
//             {images.slice(1, 5).map((img, i) => {
//               const actualIdx = i + 1;
//               const isEven = i % 2 === 0;
//               return (
//                 <ChapterRow key={i} img={img} actualIdx={actualIdx} isEven={isEven} sectionTitle={section.title} customHeadings={customHeadings} customDescriptions={customDescriptions} />
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {images[5] && (
//         <div className="w-full max-w-4xl mx-auto px-4 pt-4">
//           <div className="text-center max-w-lg mx-auto mb-6">
//             <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-1">
//               {customHeadings[5] || DEFAULT_HEADINGS[5]}
//             </span>
//             <p className="text-sm md:text-base text-zinc-300 font-light">
//               {customDescriptions[5] || DEFAULT_DESCRIPTIONS[5]}
//             </p>
//           </div>
//           <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border-2 border-[#dfb557]/40 relative">
//             <ProtectedImage src={images[5]} alt={section.title} className="w-full h-full" showLogoOnly={true} />
//           </div>
//         </div>
//       )}

//       {images.length > 6 && (
//         <div className="max-w-4xl mx-auto px-4 relative pt-4">
//           <div className="space-y-6 sm:space-y-12">
//             {images.slice(6, 10).map((img, i) => {
//               const actualIdx = i + 6;
//               const isEven = i % 2 === 0;
//               return (
//                 <ChapterRow key={i} img={img} actualIdx={actualIdx} isEven={isEven} sectionTitle={section.title} customHeadings={customHeadings} customDescriptions={customDescriptions} />
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {bottomGridImages.length > 0 && (
//         <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
//           <div className="text-center max-w-lg mx-auto mb-4">
//             <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-1">
//               {customHeadings[10] || "Album Highlights"}
//             </span>
//             <p className="text-xs md:text-sm text-zinc-300 font-light">
//               {customDescriptions[10] || "A collection of beautiful moments captured in pristine detail."}
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-3 sm:gap-6">
//             {bottomGridImages.map((img, i) => {
//               const actualIdx = i + 10;
//               return (
//                 <div key={i} className="space-y-2 p-2 sm:p-3 rounded-xl bg-zinc-950/70 border border-[#dfb557]/30 shadow-xl flex flex-col justify-between">
//                   <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#dfb557]/50 bg-zinc-900 relative">
//                     <ProtectedImage src={img} alt={section.title} className="w-full h-full hover:scale-105 transition-transform duration-500" showLogoOnly={true} />
//                   </div>
//                   <div className="text-center space-y-1">
//                     <span className="text-[7px] sm:text-[8px] tracking-[0.2em] uppercase text-[#dfb557] font-bold block">
//                       Moment 0{actualIdx + 1}
//                     </span>
//                     <h4 className="text-[11px] sm:text-sm font-serif text-zinc-100 line-clamp-1">
//                       {customHeadings[actualIdx] || DEFAULT_HEADINGS[actualIdx] || "Precious Memory"}
//                     </h4>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       <div className="text-center pt-8 px-4">
//         <Link to={`/gallery/${generateSlug(section.title)}`} className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3.5 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-lg">
//           View Full Gallery
//         </Link>
//       </div>
//     </div>
//   );
// }

// function ChapterRow({ img, actualIdx, isEven, sectionTitle, customHeadings, customDescriptions }) {
//   return (
//     <div className={`flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/50 shadow-2xl ${isEven ? 'flex-row-reverse text-right sm:text-left' : 'flex-row text-left sm:text-right'}`}>
//       <div className={`flex-1 ${isEven ? 'sm:text-left text-right' : 'sm:text-right text-left'} space-y-1.5`}>
//         <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
//           Chapter 0{actualIdx}
//         </span>
//         <h4 className="text-base sm:text-2xl font-serif text-zinc-100">
//           {customHeadings[actualIdx] || DEFAULT_HEADINGS[actualIdx]}
//         </h4>
//         <p className="text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
//           {customDescriptions[actualIdx] || DEFAULT_DESCRIPTIONS[actualIdx]}
//         </p>
//       </div>
//       <div className="relative flex-shrink-0 flex justify-center">
//         <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-[#dfb557] shadow-xl bg-zinc-900 hover:scale-105 transition-transform duration-500 flex-shrink-0">
//           <ProtectedImage src={img} alt={sectionTitle} className="w-full h-full" showLogoOnly={true} />
//         </div>
//       </div>
//     </div>
//   );
// }

// function BridalShowerSection({ section, customHeadings, customDescriptions }) {
//   const images = Array.isArray(section.images) ? section.images : [];
//   const pairs = [];
//   for (let i = 0; i < images.length; i += 2) {
//     pairs.push(images.slice(i, i + 2));
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 space-y-12">
//       <div className="text-center space-y-2 mb-8">
//         <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
//           Bridal Shower Celebration
//         </span>
//         <h2 className="text-3xl sm:text-4xl font-serif text-zinc-100">{section.title}</h2>
//         <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto"></div>
//         <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">{section.desc || section.description}</p>
//       </div>

//       <div className="space-y-10">
//         {pairs.map((pair, pairIdx) => (
//           <div key={pairIdx} className="p-2 sm:p-6 rounded-2xl bg-zinc-950/75 border-2 border-[#dfb557]/40 shadow-xl space-y-4">
//             <div className="grid grid-cols-2 gap-2 sm:gap-6">
//               {pair.map((img, imgIdx) => {
//                 const absoluteIdx = (pairIdx * 2) + imgIdx;
//                 return (
//                   <div key={imgIdx} className="space-y-2 flex flex-col justify-between">
//                     <div className="w-full aspect-[3/4] sm:aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#dfb557]/60 shadow-lg bg-zinc-900">
//                       <ProtectedImage src={img} alt={section.title} className="w-full h-full hover:scale-105 transition-transform duration-500" showLogoOnly={true} />
//                     </div>
//                     <div className="text-center space-y-1 px-1">
//                       <span className="text-[7px] sm:text-[10px] tracking-[0.2em] uppercase text-[#dfb557] font-bold block">
//                         Moment 0{absoluteIdx + 1}
//                       </span>
//                       <h4 className="text-[11px] sm:text-lg font-serif text-zinc-100 line-clamp-1">
//                         {customHeadings[absoluteIdx] || `Precious Moment ${absoluteIdx + 1}`}
//                       </h4>
//                       <p className="text-[9px] sm:text-xs text-zinc-300 font-light leading-snug line-clamp-2">
//                         {customDescriptions[absoluteIdx] || `Celebrating the joy and warmth of this special bridal shower journey.`}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center pt-6">
//         <Link to={`/gallery/${generateSlug(section.title)}`} className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md">
//           View Full Gallery
//         </Link>
//       </div>
//     </div>
//   );
// }

// function BabyShowerSection({ section, customHeadings, customDescriptions }) {
//   const images = Array.isArray(section.images) ? section.images : [];

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
//       <div className="text-center space-y-2 mb-8">
//         <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
//           Baby Shower & Baptism Celebration
//         </span>
//         <h2 className="text-3xl sm:text-4xl font-serif text-zinc-100">{section.title}</h2>
//         <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto"></div>
//         <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">{section.desc || section.description}</p>
//       </div>

//       <div className="space-y-6 sm:space-y-10">
//         {images.map((img, i) => {
//           const isEven = i % 2 === 0;
//           return (
//             <div key={i} className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/40 shadow-xl ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
//               <div className="w-full sm:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-[#dfb557]/50 shadow-md bg-zinc-900 flex-shrink-0">
//                 <ProtectedImage src={img} alt={section.title} className="w-full h-full hover:scale-105 transition-transform duration-500" showLogoOnly={true} />
//               </div>
//               <div className="w-full sm:w-1/2 space-y-2 text-center sm:text-left">
//                 <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
//                   Moment 0{i + 1}
//                 </span>
//                 <h4 className="text-lg sm:text-xl font-serif text-zinc-100">
//                   {customHeadings[i] || `Precious Moment ${i + 1}`}
//                 </h4>
//                 <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
//                   {customDescriptions[i] || `Celebrating the joy and warmth of this special journey.`}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="text-center pt-6">
//         <Link to={`/gallery/${generateSlug(section.title)}`} className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md">
//           View Full Gallery
//         </Link>
//       </div>
//     </div>
//   );
// }

// function DefaultSection({ section }) {
//   const images = Array.isArray(section.images) ? section.images : [];

//   return (
//     <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center space-y-6 py-6">
//       <span className="text-[10px] tracking-[0.5em] uppercase text-[#dfb557] font-bold">
//         Curated Project
//       </span>
//       <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-100">{section.title}</h2>
//       <p className="text-sm md:text-base leading-relaxed text-zinc-400 max-w-lg font-light">
//         {section.desc || section.description}
//       </p>

//       <div className="grid grid-cols-2 gap-4 w-full pt-4 max-w-2xl">
//         {images.slice(0, 2).map((img, i) => (
//           <div key={i} className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-[#dfb557]/40 rounded-xl shadow-lg">
//             <ProtectedImage src={img} alt={section.title} className="w-full h-full" showLogoOnly={true} />
//           </div>
//         ))}
//       </div>
      
//       <div className="pt-4">
//         <Link to={`/gallery/${generateSlug(section.title)}`} className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md">
//           Explore Project
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

// src/pages/Home.jsx

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';


// // ============================================================
// // SLUG GENERATOR
// // ============================================================

// const generateSlug = (titleText) => {
//   if (!titleText) return '';

//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-');
// };


// // ============================================================
// // IMAGE URL FIX
// // ============================================================

// const fixImageUrl = (url) => {
//   if (!url) return '';

//   if (url.includes('localhost:5000')) {
//     return url.replace(
//       'http://localhost:5000',
//       'https://habesha-film-production-server.onrender.com'
//     );
//   }

//   return url;
// };


// // ============================================================
// // DEFAULT DATA
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
//   '15. The Perfect Ending to a Perfect Day'
// ];

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
//   'Grand Finale'
// ];


// // ============================================================
// // HOME
// // ============================================================

// function Home() {

//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);


//   // ============================================================
//   // FETCH PROJECTS
//   // ============================================================

//   useEffect(() => {

//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/projects'
//     )
//       .then((res) => {

//         if (!res.ok) {
//           throw new Error('Failed to fetch projects');
//         }

//         return res.json();

//       })
//       .then((data) => {

//         const processedData = Array.isArray(data)
//           ? data.map((section) => {

//               let parsedDescriptions = [];
//               let parsedHeadings = [];

//               let mainDesc =
//                 section.desc ||
//                 section.description ||
//                 '';


//               // ==================================================
//               // PARSE DESCRIPTION DATA
//               // ==================================================

//               try {

//                 if (
//                   typeof section.description === 'string' &&
//                   section.description.includes('||DESCS||')
//                 ) {

//                   const parts =
//                     section.description.split('||DESCS||');

//                   mainDesc = parts[0] || '';


//                   if (parts[1]) {

//                     const headingParts =
//                       parts[1].split('||HEADINGS||');


//                     try {

//                       parsedDescriptions =
//                         JSON.parse(
//                           headingParts[0] || '[]'
//                         );

//                     } catch {

//                       parsedDescriptions = [];

//                     }


//                     try {

//                       parsedHeadings =
//                         JSON.parse(
//                           headingParts[1] || '[]'
//                         );

//                     } catch {

//                       // Old database format

//                       try {

//                         parsedHeadings =
//                           parts[2]
//                             ? JSON.parse(parts[2])
//                             : [];

//                       } catch {

//                         parsedHeadings = [];

//                       }

//                     }

//                   }


//                   if (
//                     parts[2] &&
//                     parsedHeadings.length === 0
//                   ) {

//                     try {

//                       parsedHeadings =
//                         JSON.parse(parts[2]);

//                     } catch {

//                       parsedHeadings = [];

//                     }

//                   }

//                 }

//               } catch (error) {

//                 console.log(
//                   'Error parsing section data:',
//                   error
//                 );

//               }


//               // ==================================================
//               // FIX IMAGES
//               // ==================================================

//               const fixedImages =
//                 Array.isArray(section.images)
//                   ? section.images.map((img) =>
//                       fixImageUrl(img)
//                     )
//                   : [];


//               return {

//                 ...section,

//                 images: fixedImages,

//                 desc: mainDesc,

//                 descriptions: parsedDescriptions,

//                 headings: parsedHeadings

//               };

//             })
//           : [];


//         setSections(processedData);

//       })
//       .catch((error) => {

//         console.error(
//           'Error loading projects:',
//           error
//         );

//         setSections([]);

//       })
//       .finally(() => {

//         setLoading(false);

//       });

//   }, []);


//   // ============================================================
//   // DETECT SECTION TYPE
//   // ============================================================

//   const getSectionType = (section) => {

//     const title = (
//       section.title ||
//       section.name ||
//       ''
//     ).toLowerCase();


//     const type = (
//       section.type ||
//       section.category ||
//       section.projectType ||
//       ''
//     ).toLowerCase();


//     const combined =
//       `${title} ${type}`;


//     // MUSIC

//     if (
//       combined.includes('music') ||
//       combined.includes('song') ||
//       combined.includes('music video') ||
//       combined.includes('song video')
//     ) {

//       return 'music';

//     }


//     // FILM

//     if (
//       combined.includes('film') ||
//       combined.includes('movie') ||
//       combined.includes('cinema') ||
//       combined.includes('cinematic')
//     ) {

//       return 'film';

//     }


//     // WEDDING

//     if (
//       combined.includes('wedding') ||
//       combined.includes('bridal') ||
//       combined.includes('baby') ||
//       combined.includes('baptism')
//     ) {

//       return 'wedding';

//     }


//     return 'wedding';

//   };


//   // ============================================================
//   // RENDER
//   // ============================================================

//   return (

//     <div className="
//       min-h-screen
//       bg-[#050505]
//       text-zinc-100
//       font-sans
//       selection:bg-[#dfb557]/30
//       selection:text-[#dfb557]
//       overflow-x-hidden
//     ">


//       {/* ========================================================
//           HERO
//       ======================================================== */}

//       <Hero />


//       {/* ========================================================
//           HOME CONTENT
//       ======================================================== */}

//       <main className="relative">


//         {/* ======================================================
//             INTRO / CINEMATIC DIVIDER
//         ====================================================== */}

//         <section className="
//           max-w-7xl
//           mx-auto
//           px-6
//           py-16
//           md:py-24
//         ">

//           <div className="
//             max-w-3xl
//             mx-auto
//             text-center
//           ">

//             <span className="
//               block
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.6em]
//               text-[#dfb557]
//               mb-5
//             ">
//               Nahom Film Production
//             </span>


//             <h1 className="
//               text-3xl
//               md:text-5xl
//               lg:text-6xl
//               font-serif
//               italic
//               font-light
//               text-zinc-100
//               leading-tight
//             ">
//               Stories
//               <span className="text-[#dfb557]">
//                 {' '}Worth Remembering
//               </span>
//             </h1>


//             <p className="
//               mt-6
//               max-w-2xl
//               mx-auto
//               text-sm
//               md:text-base
//               text-zinc-500
//               font-light
//               leading-relaxed
//             ">
//               From unforgettable celebrations to cinematic films
//               and unforgettable music productions, we capture
//               moments and turn them into stories that last forever.
//             </p>


//             <div className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mt-8
//             ">

//               <span className="   w-16
//                 h-[1px]
//                 bg-[#dfb557]/30"
             
//               />

//               <span className="   w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-[#dfb557]"
             
//               />

//               <span className=" w-16
//                 h-[1px]
//                 bg-[#dfb557]/30"
               
//               />

//             </div>

//           </div>

//         </section>


//         {/* ======================================================
//             LOADING
//         ====================================================== */}

//         {loading && (

//           <div className="
//             min-h-[40vh]
//             flex
//             flex-col
//             items-center
//             justify-center
//           ">

//             <div className="
//               w-10
//               h-10
//               border
//               border-[#dfb557]/20
//               border-t-[#dfb557]
//               rounded-full
//               animate-spin
//             " />

//             <p className="
//               mt-5
//               text-[9px]
//               uppercase
//               tracking-[0.5em]
//               text-zinc-600
//             ">
//               Loading Stories
//             </p>

//           </div>

//         )}


//         {/* ======================================================
//             NO PROJECTS
//         ====================================================== */}

//         {!loading &&
//           sections.length === 0 && (

//           <section className="
//             min-h-[40vh]
//             flex
//             items-center
//             justify-center
//             text-center
//             px-6
//             pb-24
//           ">

//             <div>

//               <span className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               ">
//                 Nahom Film Production
//               </span>


//               <h2 className="
//                 mt-4
//                 text-3xl
//                 md:text-5xl
//                 font-serif
//                 italic
//                 font-light
//               ">
//                 Stories Are Coming
//               </h2>


//               <p className="
//                 mt-4
//                 text-sm
//                 text-zinc-500
//               ">
//                 Our latest productions will appear here.
//               </p>

//             </div>

//           </section>

//         )}


//         {/* ======================================================
//             PROJECTS
//         ====================================================== */}

//         {!loading &&
//           sections.length > 0 && (

//           <div className="w-full">


//             {sections.map((section, index) => {

//               const type =
//                 getSectionType(section);


//               const customDescriptions =
//                 section.descriptions?.length > 0
//                   ? section.descriptions
//                   : DEFAULT_DESCRIPTIONS;


//               const customHeadings =
//                 section.headings?.length > 0
//                   ? section.headings
//                   : DEFAULT_HEADINGS;


//               return (

//                 <section
//                   key={section._id || index}
//                   className="relative"
//                 >


//                   {/* =================================================
//                       WEDDING PREVIEW
//                   ================================================= */}

//                   {type === 'wedding' && (

//                     <HomePreviewWrapper
//                       number="01"
//                       eyebrow="Wedding Stories"
//                       title="Wedding"
//                       description="
//                         Beautiful celebrations captured with
//                         elegance, emotion and cinematic detail.
//                       "
//                       buttonText="View Wedding Stories"
//                       link={`/gallery/${generateSlug(section.title)}`}
//                     >

//                       <WeddingSection
//                         section={section}
//                         customHeadings={customHeadings}
//                         customDescriptions={customDescriptions}
//                         preview={true}
//                       />

//                     </HomePreviewWrapper>

//                   )}


//                   {/* =================================================
//                       FILM PREVIEW
//                   ================================================= */}

//                   {type === 'film' && (

//                     <HomePreviewWrapper
//                       number="02"
//                       eyebrow="Film Production"
//                       title="Films"
//                       description="
//                         Cinematic productions created with vision,
//                         storytelling and unforgettable imagery.
//                       "
//                       buttonText="View All Films"
//                       link={`/gallery/${generateSlug(section.title)}`}
//                     >

//                       <FilmSection
//                         section={section}
//                         preview={true}
//                       />

//                     </HomePreviewWrapper>

//                   )}


//                   {/* =================================================
//                       MUSIC PREVIEW
//                   ================================================= */}

//                   {type === 'music' && (

//                     <HomePreviewWrapper
//                       number="03"
//                       eyebrow="Music Production"
//                       title="Music"
//                       description="
//                         Music videos and visual stories created
//                         to bring sound, emotion and cinema together.
//                       "
//                       buttonText="View All Music"
//                       link={`/gallery/${generateSlug(section.title)}`}
//                     >

//                       <MusicSection
//                         section={section}
//                         preview={true}
//                       />

//                     </HomePreviewWrapper>

//                   )}


//                 </section>

//               );

//             })}

//           </div>

//         )}

//       </main>


//       {/* ========================================================
//           FOOTER
//       ======================================================== */}

//       <Footer />

//     </div>

//   );

// }


// // ============================================================
// // HOME SECTION WRAPPER
// // ============================================================

// function HomePreviewWrapper({
//   number,
//   eyebrow,
//   title,
//   description,
//   buttonText,
//   link,
//   children
// }) {

//   return (

//     <section className="
//       relative
//       py-20
//       md:py-32
//       px-6
//       border-t
//       border-white/[0.04]
//     ">


//       {/* ======================================================
//           BACKGROUND NUMBER
//       ====================================================== */}

//       <div className="
//         absolute
//         top-8
//         right-5
//         md:right-12
//         text-[100px]
//         md:text-[180px]
//         font-serif
//         font-light
//         text-white/[0.025]
//         leading-none
//         pointer-events-none
//         select-none
//       ">
//         {number}
//       </div>


//       <div className="
//         max-w-7xl
//         mx-auto
//       ">


//         {/* ====================================================
//             SECTION HEADER
//         ==================================================== */}

//         <div className="
//           flex
//           flex-col
//           md:flex-row
//           md:items-end
//           md:justify-between
//           gap-8
//           mb-12
//           md:mb-16
//         ">


//           <div>

//             <div className="
//               flex
//               items-center
//               gap-3
//               mb-4
//             ">

//               <span className="  w-8
//                 h-[1px]
//                 bg-[#dfb557]"
              
//               />

//               <span className="
//                 text-[9px]
//                 md:text-[10px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               ">
//                 {eyebrow}
//               </span>

//             </div>


//             <h2 className="
//               text-4xl
//               sm:text-5xl
//               md:text-7xl
//               font-serif
//               italic
//               font-light
//               tracking-tight
//               text-zinc-100
//             ">
//               {title}
//             </h2>

//           </div>


//           <p className="
//             max-w-md
//             text-sm
//             md:text-base
//             text-zinc-500
//             font-light
//             leading-relaxed
//             md:text-right
//           ">
//             {description}
//           </p>

//         </div>


//         {/* ====================================================
//             PREVIEW CONTENT
//         ==================================================== */}

//         <div className="
//           relative
//           overflow-hidden
//         ">

//           {children}

//         </div>


//         {/* ====================================================
//             VIEW MORE
//         ==================================================== */}

//         <div className="
//           flex
//           justify-center
//           pt-10
//           md:pt-14
//         ">

//           <Link
//             to={link}
//             className="
//               group
//               relative
//               inline-flex
//               items-center
//               gap-5
//               px-8
//               md:px-10
//               py-4
//               border
//               border-[#dfb557]/50
//               text-[#dfb557]
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.4em]
//               font-semibold
//               overflow-hidden
//               transition-all
//               duration-500
//               hover:border-[#dfb557]
//               hover:text-black
//             "
//           >

//             <span className="
//               absolute
//               inset-0
//               bg-[#dfb557]
//               translate-y-full
//               group-hover:translate-y-0
//               transition-transform
//               duration-500
//             " />


//             <span className="
//               relative
//               z-10
//             ">
//               {buttonText}
//             </span>


//             <span className="
//               relative
//               z-10
//               text-base
//               transition-transform
//               duration-300
//               group-hover:translate-x-1
//             ">
//               →
//             </span>

//           </Link>

//         </div>


//         {/* ====================================================
//             BOTTOM DIVIDER
//         ==================================================== */}

//         <div className="
//           mt-20
//           md:mt-28
//           flex
//           items-center
//           justify-center
//           gap-4
//         ">

//           <span className="
//             h-[1px]
//             flex-1
//             bg-gradient-to-r
//             from-transparent
//             to-white/[0.06]
//           " />

//           <span className="
//             w-1
//             h-1
//             rounded-full
//             bg-[#dfb557]/40
//           " />

//           <span className="
//             h-[1px]
//             flex-1
//             bg-gradient-to-l
//             from-transparent
//             to-white/[0.06]
//           " />

//         </div>

//       </div>

//     </section>

//   );

// }


// export default Home;


// src/pages/Home.jsx

// import React, { useEffect, useState } from 'react';

// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';


// // ============================================================
// // SLUG GENERATOR
// // ============================================================

// const generateSlug = (titleText) => {
//   if (!titleText) return '';

//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-');
// };


// // ============================================================
// // IMAGE URL FIX
// // ============================================================

// const fixImageUrl = (url) => {
//   if (!url || typeof url !== 'string') return '';

//   return url.replace(
//     'http://localhost:5000',
//     'https://habesha-film-production-server.onrender.com'
//   );
// };


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
//   '15. The Perfect Ending to a Perfect Day'
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
//   'Grand Finale'
// ];


// // ============================================================
// // PARSE PROJECT DATA
// // ============================================================

// const parseProject = (section) => {

//   let mainDesc =
//     section.desc ||
//     '';

//   let descriptions = [];
//   let headings = [];

//   // ----------------------------------------------------------
//   // DESCRIPTION / HEADING DATA
//   // ----------------------------------------------------------

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

//           descriptions =
//             JSON.parse(
//               headingParts[0] || '[]'
//             );

//         } catch {

//           descriptions = [];

//         }

//         // HEADINGS
//         try {

//           headings =
//             JSON.parse(
//               headingParts[1] || '[]'
//             );

//         } catch {

//           headings = [];

//         }
//       }

//       // Old database format
//       if (
//         parts[2] &&
//         headings.length === 0
//       ) {

//         try {

//           headings =
//             JSON.parse(parts[2]);

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


//   // ----------------------------------------------------------
//   // FIX IMAGES
//   // ----------------------------------------------------------

//   const images =
//     Array.isArray(section.images)
//       ? section.images
//           .map(fixImageUrl)
//           .filter(Boolean)
//       : [];


//   return {

//     ...section,

//     images,

//     desc: mainDesc,

//     descriptions:

//       Array.isArray(descriptions)
//         ? descriptions
//         : [],

//     headings:

//       Array.isArray(headings)
//         ? headings
//         : []

//   };
// };


// // ============================================================
// // DETECT PROJECT TYPE
// // ============================================================

// const getSectionType = (section) => {

//   const title = (
//     section.title ||
//     section.name ||
//     ''
//   ).toLowerCase();

//   const type = (
//     section.type ||
//     section.category ||
//     section.projectType ||
//     ''
//   ).toLowerCase();


//   const combined =
//     `${title} ${type}`;


//   // ----------------------------------------------------------
//   // MUSIC
//   // ----------------------------------------------------------

//   if (
//     combined.includes('music') ||
//     combined.includes('song') ||
//     combined.includes('music video') ||
//     combined.includes('song video')
//   ) {

//     return 'music';

//   }


//   // ----------------------------------------------------------
//   // FILM
//   // ----------------------------------------------------------

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {

//     return 'film';

//   }


//   // ----------------------------------------------------------
//   // WEDDING / EVENTS
//   // ----------------------------------------------------------

//   if (
//     combined.includes('wedding') ||
//     combined.includes('bridal') ||
//     combined.includes('baby') ||
//     combined.includes('baptism')
//   ) {

//     return 'wedding';

//   }


//   // Default
//   return 'wedding';
// };


// // ============================================================
// // HOME
// // ============================================================

// function Home() {

//   const [sections, setSections] = useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(false);


//   // ==========================================================
//   // FETCH PROJECTS
//   // ==========================================================

//   useEffect(() => {

//     const loadProjects = async () => {

//       try {

//         setLoading(true);
//         setError(false);


//         const response = await fetch(
//           'https://habesha-film-production-server.onrender.com/api/projects'
//         );


//         if (!response.ok) {

//           throw new Error(
//             `Server returned ${response.status}`
//           );

//         }


//         const data =
//           await response.json();


//         const processedData =
//           Array.isArray(data)
//             ? data.map(parseProject)
//             : [];


//         setSections(processedData);


//       } catch (err) {

//         console.error(
//           'Error loading projects:',
//           err
//         );

//         setSections([]);

//         setError(true);

//       } finally {

//         setLoading(false);

//       }

//     };


//     loadProjects();

//   }, []);


//   // ==========================================================
//   // GROUP PROJECTS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) === 'wedding'
//     );


//   const filmSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) === 'film'
//     );


//   const musicSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) === 'music'
//     );


//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (

//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-zinc-100
//         font-sans
//         selection:bg-[#dfb557]/30
//         selection:text-[#dfb557]
//         overflow-x-hidden
//       "
//     >

//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <Hero />


//       {/* ======================================================
//           CINEMATIC INTRO
//       ====================================================== */}

//       <section
//         className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-6
//           py-20
//           md:py-28
//         "
//       >

//         <div
//           className="
//             max-w-4xl
//             mx-auto
//             text-center
//           "
//         >

//           <span
//             className="
//               block
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.6em]
//               text-[#dfb557]
//               mb-5
//               font-semibold
//             "
//           >
//             Nahom Film Production
//           </span>


//           <h1
//             className="
//               text-4xl
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//               font-serif
//               italic
//               font-light
//               leading-tight
//             "
//           >
//             Stories

//             <span className="text-[#dfb557]">
//               {' '}Worth Remembering
//             </span>

//           </h1>


//           <p
//             className="
//               mt-6
//               max-w-2xl
//               mx-auto
//               text-sm
//               md:text-base
//               text-zinc-500
//               leading-relaxed
//               font-light
//             "
//           >
//             From unforgettable celebrations to cinematic
//             films and powerful music productions, we capture
//             moments and transform them into stories that last forever.
//           </p>


//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mt-8
//             "
//           >

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-[#dfb557]
//               "
//             />

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//           </div>

//         </div>

//       </section>


//       {/* ======================================================
//           LOADING
//       ====================================================== */}

//       {loading && (

//         <section
//           className="
//             min-h-[40vh]
//             flex
//             flex-col
//             items-center
//             justify-center
//           "
//         >

//           <div
//             className="
//               w-10
//               h-10
//               rounded-full
//               border
//               border-[#dfb557]/20
//               border-t-[#dfb557]
//               animate-spin
//             "
//           />

//           <p
//             className="
//               mt-5
//               text-[9px]
//               uppercase
//               tracking-[0.5em]
//               text-zinc-600
//             "
//           >
//             Loading Stories
//           </p>

//         </section>

//       )}


//       {/* ======================================================
//           ERROR
//       ====================================================== */}

//       {!loading && error && (

//         <section
//           className="
//             min-h-[40vh]
//             flex
//             items-center
//             justify-center
//             px-6
//             text-center
//           "
//         >

//           <div>

//             <span
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               "
//             >
//               Nahom Film Production
//             </span>


//             <h2
//               className="
//                 mt-4
//                 text-3xl
//                 md:text-5xl
//                 font-serif
//                 italic
//                 font-light
//               "
//             >
//               Unable to Load Stories
//             </h2>


//             <p
//               className="
//                 mt-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               Please try again later.
//             </p>

//           </div>

//         </section>

//       )}


//       {/* ======================================================
//           NO PROJECTS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         sections.length === 0 && (

//           <section
//             className="
//               min-h-[40vh]
//               flex
//               items-center
//               justify-center
//               text-center
//               px-6
//             "
//           >

//             <div>

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.5em]
//                   text-[#dfb557]
//                 "
//               >
//                 Nahom Film Production
//               </span>


//               <h2
//                 className="
//                   mt-4
//                   text-3xl
//                   md:text-5xl
//                   font-serif
//                   italic
//                   font-light
//                 "
//               >
//                 Stories Are Coming
//               </h2>


//               <p
//                 className="
//                   mt-4
//                   text-sm
//                   text-zinc-500
//                 "
//               >
//                 Our latest productions will appear here.
//               </p>

//             </div>

//           </section>

//         )}


//       {/* ======================================================
//           ======================================================
//           WEDDING
//           ======================================================
//           ====================================================== */}

//       {!loading &&
//         !error &&
//         weddingSections.length > 0 && (

//           <section
//             id="wedding"
//             className="relative"
//           >

//             {/* SECTION TITLE */}

//             <HomeSectionIntro
//               number="01"
//               eyebrow="Wedding Stories"
//               title="Wedding"
//               description="Beautiful celebrations captured with elegance, emotion and cinematic detail."
//             />


//             {/* ALL WEDDING PROJECTS */}

//             {weddingSections.map(
//               (section, index) => (

//                 <div
//                   key={
//                     section._id ||
//                     `wedding-${index}`
//                   }
//                   className="
//                     relative
//                     border-b
//                     border-white/[0.04]
//                   "
//                 >

//                   <WeddingSection
//                     section={section}
//                     customHeadings={
//                       section.headings?.length
//                         ? section.headings
//                         : DEFAULT_HEADINGS
//                     }
//                     customDescriptions={
//                       section.descriptions?.length
//                         ? section.descriptions
//                         : DEFAULT_DESCRIPTIONS
//                     }
//                     preview={true}
//                   />

//                 </div>

//               )
//             )}

//           </section>

//         )}


//       {/* ======================================================
//           ======================================================
//           FILM
//           ======================================================
//           ====================================================== */}

//       {!loading &&
//         !error &&
//         filmSections.length > 0 && (

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
//               description="Cinematic productions created with vision, storytelling and unforgettable imagery."
//             />


//             {filmSections.map(
//               (section, index) => (

//                 <div
//                   key={
//                     section._id ||
//                     `film-${index}`
//                   }
//                   className="
//                     relative
//                     border-b
//                     border-white/[0.04]
//                   "
//                 >

//                   <FilmSection
//                     section={section}
//                     preview={true}
//                   />

//                 </div>

//               )
//             )}

//           </section>

//         )}


//       {/* ======================================================
//           ======================================================
//           MUSIC
//           ======================================================
//           ====================================================== */}

//       {!loading &&
//         !error &&
//         musicSections.length > 0 && (

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
//               description="Music videos and visual stories created to bring sound, emotion and cinema together."
//             />


//             {musicSections.map(
//               (section, index) => (

//                 <div
//                   key={
//                     section._id ||
//                     `music-${index}`
//                   }
//                   className="
//                     relative
//                     border-b
//                     border-white/[0.04]
//                   "
//                 >

//                   <MusicSection
//                     section={section}
//                     preview={true}
//                   />

//                 </div>

//               )
//             )}

//           </section>

//         )}


//       {/* ======================================================
//           FOOTER
//       ====================================================== */}

//       <Footer />

//     </div>

//   );
// }


// // ============================================================
// // SECTION INTRO
// // ============================================================

// function HomeSectionIntro({
//   number,
//   eyebrow,
//   title,
//   description
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

//       {/* BACKGROUND NUMBER */}

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


//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';


// // ============================================================
// // SLUG GENERATOR
// // ============================================================

// const generateSlug = (titleText) => {
//   if (!titleText) return '';

//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-');
// };


// // ============================================================
// // IMAGE URL FIX
// // ============================================================

// const fixImageUrl = (url) => {
//   if (!url || typeof url !== 'string') return '';

//   return url.replace(
//     'http://localhost:5000',
//     'https://habesha-film-production-server.onrender.com'
//   );
// };


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
//   '15. The Perfect Ending to a Perfect Day'
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
//   'Grand Finale'
// ];


// // ============================================================
// // PARSE PROJECT DATA
// // ============================================================

// const parseProject = (section = {}) => {
//   let mainDesc = section.desc || '';

//   let descriptions = [];
//   let headings = [];

//   // ----------------------------------------------------------
//   // DESCRIPTION / HEADING DATA
//   // ----------------------------------------------------------

//   if (
//     typeof section.description === 'string' &&
//     section.description.includes('||DESCS||')
//   ) {
//     try {
//       const parts = section.description.split('||DESCS||');

//       mainDesc = parts[0] || '';

//       if (parts[1]) {
//         const headingParts = parts[1].split('||HEADINGS||');

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

//       // --------------------------------------------------------
//       // OLD DATABASE FORMAT
//       // --------------------------------------------------------

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

//   // ----------------------------------------------------------
//   // FIX IMAGES
//   // ----------------------------------------------------------

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
//       : []
//   };
// };


// // ============================================================
// // DETECT PROJECT TYPE
// // ============================================================

// const getSectionType = (section = {}) => {
//   const title = (
//     section.title ||
//     section.name ||
//     ''
//   ).toLowerCase();

//   const type = (
//     section.type ||
//     section.category ||
//     section.projectType ||
//     ''
//   ).toLowerCase();

//   const combined = `${title} ${type}`;


//   // ----------------------------------------------------------
//   // MUSIC
//   // ----------------------------------------------------------

//   if (
//     combined.includes('music') ||
//     combined.includes('song') ||
//     combined.includes('music video') ||
//     combined.includes('song video')
//   ) {
//     return 'music';
//   }


//   // ----------------------------------------------------------
//   // FILM
//   // ----------------------------------------------------------

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }


//   // ----------------------------------------------------------
//   // WEDDING / EVENTS
//   // ----------------------------------------------------------

//   if (
//     combined.includes('wedding') ||
//     combined.includes('bridal') ||
//     combined.includes('baby') ||
//     combined.includes('baptism')
//   ) {
//     return 'wedding';
//   }


//   // ----------------------------------------------------------
//   // DEFAULT
//   // ----------------------------------------------------------

//   return 'wedding';
// };


// // ============================================================
// // HOME
// // ============================================================

// function Home() {
//   const [sections, setSections] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState(false);


//   // ==========================================================
//   // FETCH PROJECTS
//   // ==========================================================

//   useEffect(() => {
//     const loadProjects = async () => {
//       try {
//         setLoading(true);
//         setError(false);

//         const response = await fetch(
//           'https://habesha-film-production-server.onrender.com/api/projects'
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Server returned ${response.status}`
//           );
//         }

//         const data = await response.json();

//         const processedData = Array.isArray(data)
//           ? data.map(parseProject)
//           : [];

//         setSections(processedData);
//       } catch (err) {
//         console.error(
//           'Error loading projects:',
//           err
//         );

//         setSections([]);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProjects();
//   }, []);


//   // ==========================================================
//   // GROUP PROJECTS
//   // ==========================================================

//   const weddingSections = sections.filter(
//     (section) =>
//       getSectionType(section) === 'wedding'
//   );

//   const filmSections = sections.filter(
//     (section) =>
//       getSectionType(section) === 'film'
//   );

//   const musicSections = sections.filter(
//     (section) =>
//       getSectionType(section) === 'music'
//   );


//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-zinc-100
//         font-sans
//         selection:bg-[#dfb557]/30
//         selection:text-[#dfb557]
//         overflow-x-hidden
//       "
//     >

//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <Hero />


//       {/* ======================================================
//           CINEMATIC INTRO
//       ====================================================== */}

//       <section
//         className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-6
//           py-20
//           md:py-28
//         "
//       >

//         <div
//           className="
//             max-w-4xl
//             mx-auto
//             text-center
//           "
//         >

//           <span
//             className="
//               block
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.6em]
//               text-[#dfb557]
//               mb-5
//               font-semibold
//             "
//           >
//             Nahom Film Production
//           </span>


//           <h1
//             className="
//               text-4xl
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//               font-serif
//               italic
//               font-light
//               leading-tight
//             "
//           >
//             Stories

//             <span className="text-[#dfb557]">
//               {' '}Worth Remembering
//             </span>
//           </h1>


//           <p
//             className="
//               mt-6
//               max-w-2xl
//               mx-auto
//               text-sm
//               md:text-base
//               text-zinc-500
//               leading-relaxed
//               font-light
//             "
//           >
//             From unforgettable celebrations to cinematic
//             films and powerful music productions, we capture
//             moments and transform them into stories that last forever.
//           </p>


//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mt-8
//             "
//           >

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-[#dfb557]
//               "
//             />

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//           </div>

//         </div>

//       </section>


//       {/* ======================================================
//           LOADING
//       ====================================================== */}

//       {loading && (
//         <section
//           className="
//             min-h-[40vh]
//             flex
//             flex-col
//             items-center
//             justify-center
//           "
//         >

//           <div
//             className="
//               w-10
//               h-10
//               rounded-full
//               border
//               border-[#dfb557]/20
//               border-t-[#dfb557]
//               animate-spin
//             "
//           />

//           <p
//             className="
//               mt-5
//               text-[9px]
//               uppercase
//               tracking-[0.5em]
//               text-zinc-600
//             "
//           >
//             Loading Stories
//           </p>

//         </section>
//       )}


//       {/* ======================================================
//           ERROR
//       ====================================================== */}

//       {!loading && error && (
//         <section
//           className="
//             min-h-[40vh]
//             flex
//             items-center
//             justify-center
//             px-6
//             text-center
//           "
//         >

//           <div>

//             <span
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               "
//             >
//               Nahom Film Production
//             </span>


//             <h2
//               className="
//                 mt-4
//                 text-3xl
//                 md:text-5xl
//                 font-serif
//                 italic
//                 font-light
//               "
//             >
//               Unable to Load Stories
//             </h2>


//             <p
//               className="
//                 mt-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               Please try again later.
//             </p>

//           </div>

//         </section>
//       )}


//       {/* ======================================================
//           NO PROJECTS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         sections.length === 0 && (

//           <section
//             className="
//               min-h-[40vh]
//               flex
//               items-center
//               justify-center
//               text-center
//               px-6
//             "
//           >

//             <div>

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.5em]
//                   text-[#dfb557]
//                 "
//               >
//                 Nahom Film Production
//               </span>


//               <h2
//                 className="
//                   mt-4
//                   text-3xl
//                   md:text-5xl
//                   font-serif
//                   italic
//                   font-light
//                 "
//               >
//                 Stories Are Coming
//               </h2>


//               <p
//                 className="
//                   mt-4
//                   text-sm
//                   text-zinc-500
//                 "
//               >
//                 Our latest productions will appear here.
//               </p>

//             </div>

//           </section>
//         )}


//       {/* ======================================================
//           WEDDING
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         weddingSections.length > 0 && (

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


//             {/* WEDDING PROJECTS */}

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


//       {/* ======================================================
//           FILMS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         filmSections.length > 0 && (

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


//             {/* FILM PROJECTS */}

//             <div
//               className="
//                 max-w-7xl
//                 mx-auto
//                 px-4
//                 md:px-8
//               "
//             >

//               {filmSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `film-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     <FilmSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>

//                 )
//               )}

//             </div>

//           </section>
//         )}


//       {/* ======================================================
//           MUSIC
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         musicSections.length > 0 && (

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


//             {/* MUSIC PROJECTS */}

//             <div
//               className="
//                 max-w-7xl
//                 mx-auto
//                 px-4
//                 md:px-8
//               "
//             >

//               {musicSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `music-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     <MusicSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>

//                 )
//               )}

//             </div>

//           </section>
//         )}


//       {/* ======================================================
//           FOOTER
//       ====================================================== */}

//       <Footer />

//     </div>
//   );
// }


// // ============================================================
// // SECTION INTRO
// // ============================================================

// function HomeSectionIntro({
//   number,
//   eyebrow,
//   title,
//   description
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

//       {/* BACKGROUND NUMBER */}

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


//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';


// // ============================================================
// // API URL
// // ============================================================

// const API_URL =
//   'https://habesha-film-production-server.onrender.com';


// // ============================================================
// // SLUG GENERATOR
// // ============================================================

// const generateSlug = (titleText = '') => {
//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-');
// };


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
//     // Old localhost URL
//     return cleanUrl.replace(
//       'http://localhost:5000',
//       API_URL
//     );
//   }

//   // If database contains only /uploads/...
//   if (cleanUrl.startsWith('/')) {
//     return `${API_URL}${cleanUrl}`;
//   }

//   // If database contains uploads/...
//   return `${API_URL}/${cleanUrl}`;
// };


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
//   '15. The Perfect Ending to a Perfect Day'
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
//   'Grand Finale'
// ];


// // ============================================================
// // PARSE PROJECT DATA
// // ============================================================

// const parseProject = (section = {}) => {
//   let mainDesc =
//     section.desc ||
//     section.description ||
//     '';

//   let descriptions = [];
//   let headings = [];

//   // ----------------------------------------------------------
//   // DESCRIPTION / HEADING DATA
//   // ----------------------------------------------------------

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

//   // ----------------------------------------------------------
//   // FIX IMAGES
//   // ----------------------------------------------------------

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
//       : []
//   };
// };


// // ============================================================
// // DETECT PROJECT TYPE
// // ============================================================

// const getSectionType = (section = {}) => {

//   // ----------------------------------------------------------
//   // GET ALL POSSIBLE TYPE VALUES
//   // ----------------------------------------------------------

//   const title = String(
//     section.title ||
//     section.name ||
//     ''
//   ).toLowerCase();

//   const type = String(
//     section.type ||
//     ''
//   ).toLowerCase();

//   const category = String(
//     section.category ||
//     ''
//   ).toLowerCase();

//   const projectType = String(
//     section.projectType ||
//     ''
//   ).toLowerCase();

//   const service = String(
//     section.service ||
//     ''
//   ).toLowerCase();

//   const description = String(
//     section.desc ||
//     section.description ||
//     ''
//   ).toLowerCase();


//   // ----------------------------------------------------------
//   // COMBINE EVERYTHING
//   // ----------------------------------------------------------

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();


//   // ----------------------------------------------------------
//   // MUSIC
//   // ----------------------------------------------------------

//   if (
//     combined.includes('music') ||
//     combined.includes('song') ||
//     combined.includes('music video') ||
//     combined.includes('song video') ||
//     combined.includes('musical') ||
//     combined.includes('audio')
//   ) {
//     return 'music';
//   }


//   // ----------------------------------------------------------
//   // FILM
//   // ----------------------------------------------------------

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }


//   // ----------------------------------------------------------
//   // WEDDING / EVENTS
//   // ----------------------------------------------------------

//   if (
//     combined.includes('wedding') ||
//     combined.includes('bridal') ||
//     combined.includes('baby') ||
//     combined.includes('baptism') ||
//     combined.includes('event')
//   ) {
//     return 'wedding';
//   }


//   // ----------------------------------------------------------
//   // DEFAULT
//   // ----------------------------------------------------------

//   return 'wedding';
// };


// // ============================================================
// // HOME
// // ============================================================

// function Home() {

//   const [sections, setSections] = useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(false);


//   // ==========================================================
//   // FETCH PROJECTS
//   // ==========================================================

//   useEffect(() => {

//     const loadProjects = async () => {

//       try {

//         setLoading(true);
//         setError(false);


//         const response = await fetch(
//           `${API_URL}/api/projects`
//         );


//         if (!response.ok) {

//           throw new Error(
//             `Server returned ${response.status}`
//           );

//         }


//         const data =
//           await response.json();


//         console.log(
//           'PROJECT DATA FROM SERVER:',
//           data
//         );


//         const processedData =
//           Array.isArray(data)
//             ? data.map(parseProject)
//             : [];


//         console.log(
//           'PROCESSED PROJECTS:',
//           processedData
//         );


//         // ------------------------------------------------------
//         // SHOW DETECTED TYPES IN CONSOLE
//         // ------------------------------------------------------

//         processedData.forEach(
//           (project, index) => {

//             console.log(
//               `PROJECT ${index + 1}:`,
//               {
//                 title: project.title,
//                 type: project.type,
//                 category: project.category,
//                 projectType:
//                   project.projectType,
//                 images:
//                   project.images,
//                 detectedType:
//                   getSectionType(project)
//               }
//             );

//           }
//         );


//         setSections(processedData);

//       } catch (err) {

//         console.error(
//           'Error loading projects:',
//           err
//         );

//         setSections([]);
//         setError(true);

//       } finally {

//         setLoading(false);

//       }

//     };


//     loadProjects();

//   }, []);


//   // ==========================================================
//   // GROUP PROJECTS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'wedding'
//     );


//   const filmSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'film'
//     );


//   const musicSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'music'
//     );


//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (

//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-zinc-100
//         font-sans
//         selection:bg-[#dfb557]/30
//         selection:text-[#dfb557]
//         overflow-x-hidden
//       "
//     >

//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <Hero />


//       {/* ======================================================
//           CINEMATIC INTRO
//       ====================================================== */}

//       <section
//         className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-6
//           py-20
//           md:py-28
//         "
//       >

//         <div
//           className="
//             max-w-4xl
//             mx-auto
//             text-center
//           "
//         >

//           <span
//             className="
//               block
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.6em]
//               text-[#dfb557]
//               mb-5
//               font-semibold
//             "
//           >
//             Nahom Film Production
//           </span>


//           <h1
//             className="
//               text-4xl
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//               font-serif
//               italic
//               font-light
//               leading-tight
//             "
//           >
//             Stories

//             <span className="text-[#dfb557]">
//               {' '}Worth Remembering
//             </span>

//           </h1>


//           <p
//             className="
//               mt-6
//               max-w-2xl
//               mx-auto
//               text-sm
//               md:text-base
//               text-zinc-500
//               leading-relaxed
//               font-light
//             "
//           >
//             From unforgettable celebrations to cinematic
//             films and powerful music productions, we capture
//             moments and transform them into stories that last forever.
//           </p>


//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mt-8
//             "
//           >

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-[#dfb557]
//               "
//             />

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//           </div>

//         </div>

//       </section>


//       {/* ======================================================
//           LOADING
//       ====================================================== */}

//       {loading && (

//         <section
//           className="
//             min-h-[40vh]
//             flex
//             flex-col
//             items-center
//             justify-center
//           "
//         >

//           <div
//             className="
//               w-10
//               h-10
//               rounded-full
//               border
//               border-[#dfb557]/20
//               border-t-[#dfb557]
//               animate-spin
//             "
//           />


//           <p
//             className="
//               mt-5
//               text-[9px]
//               uppercase
//               tracking-[0.5em]
//               text-zinc-600
//             "
//           >
//             Loading Stories
//           </p>

//         </section>

//       )}


//       {/* ======================================================
//           ERROR
//       ====================================================== */}

//       {!loading && error && (

//         <section
//           className="
//             min-h-[40vh]
//             flex
//             items-center
//             justify-center
//             px-6
//             text-center
//           "
//         >

//           <div>

//             <span
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               "
//             >
//               Nahom Film Production
//             </span>


//             <h2
//               className="
//                 mt-4
//                 text-3xl
//                 md:text-5xl
//                 font-serif
//                 italic
//                 font-light
//               "
//             >
//               Unable to Load Stories
//             </h2>


//             <p
//               className="
//                 mt-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               Please try again later.
//             </p>

//           </div>

//         </section>

//       )}


//       {/* ======================================================
//           NO PROJECTS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         sections.length === 0 && (

//           <section
//             className="
//               min-h-[40vh]
//               flex
//               items-center
//               justify-center
//               text-center
//               px-6
//             "
//           >

//             <div>

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.5em]
//                   text-[#dfb557]
//                 "
//               >
//                 Nahom Film Production
//               </span>


//               <h2
//                 className="
//                   mt-4
//                   text-3xl
//                   md:text-5xl
//                   font-serif
//                   italic
//                   font-light
//                 "
//               >
//                 Stories Are Coming
//               </h2>


//               <p
//                 className="
//                   mt-4
//                   text-sm
//                   text-zinc-500
//                 "
//               >
//                 Our latest productions will appear here.
//               </p>

//             </div>

//           </section>

//         )}


//       {/* ======================================================
//           WEDDING
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         weddingSections.length > 0 && (

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


//       {/* ======================================================
//           FILMS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         filmSections.length > 0 && (

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

//               {filmSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `film-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     <FilmSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>

//                 )
//               )}

//             </div>

//           </section>

//         )}


//       {/* ======================================================
//           MUSIC
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         musicSections.length > 0 && (

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

//               {musicSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `music-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     <MusicSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>

//                 )
//               )}

//             </div>

//           </section>

//         )}


//       {/* ======================================================
//           FOOTER
//       ====================================================== */}

//       <Footer />

//     </div>

//   );
// }


// // ============================================================
// // SECTION INTRO
// // ============================================================

// function HomeSectionIntro({
//   number,
//   eyebrow,
//   title,
//   description
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

//       {/* BACKGROUND NUMBER */}

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


//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';


// // ============================================================
// // API URL
// // ============================================================

// const API_URL =
//   'https://habesha-film-production-server.onrender.com';


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
//     // Replace old localhost URL
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
//   '15. The Perfect Ending to a Perfect Day'
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
//   'Grand Finale'
// ];


// // ============================================================
// // PARSE PROJECT DATA
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
//       : []
//   };
// };


// // ============================================================
// // DETECT PROJECT TYPE
// // ============================================================

// const getSectionType = (section = {}) => {

//   const title = String(
//     section.title ||
//     section.name ||
//     ''
//   ).toLowerCase();

//   const type = String(
//     section.type ||
//     ''
//   ).toLowerCase();

//   const category = String(
//     section.category ||
//     ''
//   ).toLowerCase();

//   const projectType = String(
//     section.projectType ||
//     ''
//   ).toLowerCase();

//   const service = String(
//     section.service ||
//     ''
//   ).toLowerCase();

//   const description = String(
//     section.desc ||
//     section.description ||
//     ''
//   ).toLowerCase();


//   // ==========================================================
//   // IMPORTANT:
//   // CHECK EXPLICIT DATABASE TYPE FIRST
//   // ==========================================================

//   const explicitType =
//     type ||
//     projectType ||
//     category ||
//     service;


//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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


//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     explicitType === 'film' ||
//     explicitType === 'movie' ||
//     explicitType === 'cinema' ||
//     explicitType === 'cinematic'
//   ) {
//     return 'film';
//   }


//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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


//   // ==========================================================
//   // CHECK ALL TEXT
//   // ==========================================================

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();


//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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


//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }


//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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


//   // ==========================================================
//   // UNKNOWN
//   // ==========================================================

//   // DO NOT automatically make unknown projects Wedding.
//   return 'unknown';
// };


// // ============================================================
// // HOME
// // ============================================================

// function Home() {

//   const [sections, setSections] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(false);


//   // ==========================================================
//   // FETCH PROJECTS
//   // ==========================================================

//   useEffect(() => {

//     const loadProjects = async () => {

//       try {

//         setLoading(true);
//         setError(false);


//         const response = await fetch(
//           `${API_URL}/api/projects`
//         );


//         if (!response.ok) {

//           throw new Error(
//             `Server returned ${response.status}`
//           );

//         }


//         const data =
//           await response.json();


//         console.log(
//           'PROJECT DATA FROM SERVER:',
//           data
//         );


//         const processedData =
//           Array.isArray(data)
//             ? data.map(parseProject)
//             : [];


//         // ======================================================
//         // DEBUG PROJECT TYPES
//         // ======================================================

//         processedData.forEach(
//           (project, index) => {

//             console.log(
//               `PROJECT ${index + 1}`,
//               {
//                 id: project._id,
//                 title: project.title,
//                 name: project.name,
//                 type: project.type,
//                 category: project.category,
//                 projectType:
//                   project.projectType,
//                 service: project.service,
//                 images:
//                   project.images,
//                 detectedType:
//                   getSectionType(project)
//               }
//             );

//           }
//         );


//         setSections(processedData);

//       } catch (err) {

//         console.error(
//           'Error loading projects:',
//           err
//         );

//         setSections([]);
//         setError(true);

//       } finally {

//         setLoading(false);

//       }

//     };


//     loadProjects();

//   }, []);


//   // ==========================================================
//   // GROUP PROJECTS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'wedding'
//     );


//   const filmSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'film'
//     );


//   const musicSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'music'
//     );


//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (

//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-zinc-100
//         font-sans
//         selection:bg-[#dfb557]/30
//         selection:text-[#dfb557]
//         overflow-x-hidden
//       "
//     >

//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <Hero />


//       {/* ======================================================
//           CINEMATIC INTRO
//       ====================================================== */}

//       <section
//         className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-6
//           py-20
//           md:py-28
//         "
//       >

//         <div
//           className="
//             max-w-4xl
//             mx-auto
//             text-center
//           "
//         >

//           <span
//             className="
//               block
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.6em]
//               text-[#dfb557]
//               mb-5
//               font-semibold
//             "
//           >
//             Nahom Film Production
//           </span>


//           <h1
//             className="
//               text-4xl
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//               font-serif
//               italic
//               font-light
//               leading-tight
//             "
//           >
//             Stories

//             <span className="text-[#dfb557]">
//               {' '}Worth Remembering
//             </span>

//           </h1>


//           <p
//             className="
//               mt-6
//               max-w-2xl
//               mx-auto
//               text-sm
//               md:text-base
//               text-zinc-500
//               leading-relaxed
//               font-light
//             "
//           >
//             From unforgettable celebrations to cinematic
//             films and powerful music productions, we capture
//             moments and transform them into stories that last forever.
//           </p>


//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mt-8
//             "
//           >

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-[#dfb557]
//               "
//             />

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//           </div>

//         </div>

//       </section>


//       {/* ======================================================
//           LOADING
//       ====================================================== */}

//       {loading && (

//         <section
//           className="
//             min-h-[40vh]
//             flex
//             flex-col
//             items-center
//             justify-center
//           "
//         >

//           <div
//             className="
//               w-10
//               h-10
//               rounded-full
//               border
//               border-[#dfb557]/20
//               border-t-[#dfb557]
//               animate-spin
//             "
//           />

//           <p
//             className="
//               mt-5
//               text-[9px]
//               uppercase
//               tracking-[0.5em]
//               text-zinc-600
//             "
//           >
//             Loading Stories
//           </p>

//         </section>

//       )}


//       {/* ======================================================
//           ERROR
//       ====================================================== */}

//       {!loading && error && (

//         <section
//           className="
//             min-h-[40vh]
//             flex
//             items-center
//             justify-center
//             px-6
//             text-center
//           "
//         >

//           <div>

//             <span
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               "
//             >
//               Nahom Film Production
//             </span>


//             <h2
//               className="
//                 mt-4
//                 text-3xl
//                 md:text-5xl
//                 font-serif
//                 italic
//                 font-light
//               "
//             >
//               Unable to Load Stories
//             </h2>


//             <p
//               className="
//                 mt-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               Please try again later.
//             </p>

//           </div>

//         </section>

//       )}


//       {/* ======================================================
//           NO PROJECTS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         sections.length === 0 && (

//           <section
//             className="
//               min-h-[40vh]
//               flex
//               items-center
//               justify-center
//               text-center
//               px-6
//             "
//           >

//             <div>

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.5em]
//                   text-[#dfb557]
//                 "
//               >
//                 Nahom Film Production
//               </span>


//               <h2
//                 className="
//                   mt-4
//                   text-3xl
//                   md:text-5xl
//                   font-serif
//                   italic
//                   font-light
//                 "
//               >
//                 Stories Are Coming
//               </h2>


//               <p
//                 className="
//                   mt-4
//                   text-sm
//                   text-zinc-500
//                 "
//               >
//                 Our latest productions will appear here.
//               </p>

//             </div>

//           </section>

//         )}


//       {/* ======================================================
//           WEDDING
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         weddingSections.length > 0 && (

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


//       {/* ======================================================
//           FILMS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         filmSections.length > 0 && (

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

//               {filmSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `film-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     <FilmSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>

//                 )
//               )}

//             </div>

//           </section>

//         )}


//       {/* ======================================================
//           MUSIC
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         musicSections.length > 0 && (

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

//               {musicSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `music-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     <MusicSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>

//                 )
//               )}

//             </div>

//           </section>

//         )}


//       {/* ======================================================
//           FOOTER
//       ====================================================== */}

//       <Footer />

//     </div>

//   );
// }


// // ============================================================
// // SECTION INTRO
// // ============================================================

// function HomeSectionIntro({
//   number,
//   eyebrow,
//   title,
//   description
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

//       {/* BACKGROUND NUMBER */}

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


//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';

// // ============================================================
// // API URL
// // ============================================================

// const API_URL =
//   'https://habesha-film-production-server.onrender.com';

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
//   '15. The Perfect Ending to a Perfect Day'
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
//   'Grand Finale'
// ];

// // ============================================================
// // PARSE PROJECT DATA
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
//   // FIX DATABASE IMAGES
//   // ==========================================================

//   const images = Array.isArray(section.images)
//     ? section.images
//         .map(fixImageUrl)
//         .filter(Boolean)
//     : [];

//   // ==========================================================
//   // RETURN CLEAN PROJECT
//   // ==========================================================

//   return {
//     ...section,

//     // IMPORTANT:
//     // These are the REAL DATABASE images.
//     // FilmSection and MusicSection will receive them.
//     images,

//     desc: mainDesc,

//     descriptions: Array.isArray(descriptions)
//       ? descriptions
//       : [],

//     headings: Array.isArray(headings)
//       ? headings
//       : []
//   };
// };

// // ============================================================
// // DETECT PROJECT TYPE
// // ============================================================

// const getSectionType = (section = {}) => {
//   const title = String(
//     section.title ||
//     section.name ||
//     ''
//   ).toLowerCase();

//   const type = String(
//     section.type ||
//     ''
//   ).toLowerCase();

//   const category = String(
//     section.category ||
//     ''
//   ).toLowerCase();

//   const projectType = String(
//     section.projectType ||
//     ''
//   ).toLowerCase();

//   const service = String(
//     section.service ||
//     ''
//   ).toLowerCase();

//   const description = String(
//     section.desc ||
//     section.description ||
//     ''
//   ).toLowerCase();

//   // ==========================================================
//   // EXPLICIT DATABASE TYPE
//   // ==========================================================

//   const explicitType =
//     type ||
//     projectType ||
//     category ||
//     service;

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     explicitType === 'film' ||
//     explicitType === 'movie' ||
//     explicitType === 'cinema' ||
//     explicitType === 'cinematic'
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // CHECK ALL TEXT
//   // ==========================================================

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // UNKNOWN
//   // ==========================================================

//   return 'unknown';
// };

// // ============================================================
// // HOME
// // ============================================================

// function Home() {
//   const [sections, setSections] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(false);

//   // ==========================================================
//   // FETCH PROJECTS
//   // ==========================================================

//   useEffect(() => {
//     const loadProjects = async () => {
//       try {
//         setLoading(true);
//         setError(false);

//         const response = await fetch(
//           `${API_URL}/api/projects`
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Server returned ${response.status}`
//           );
//         }

//         const data =
//           await response.json();

//         console.log(
//           'PROJECT DATA FROM SERVER:',
//           data
//         );

//         // ====================================================
//         // PROCESS DATABASE DATA
//         // ====================================================

//         const processedData =
//           Array.isArray(data)
//             ? data.map(parseProject)
//             : [];

//         // ====================================================
//         // DEBUG
//         // ====================================================

//         processedData.forEach(
//           (project, index) => {
//             console.log(
//               `PROJECT ${index + 1}`,
//               {
//                 id: project._id,
//                 title: project.title,
//                 name: project.name,

//                 type: project.type,

//                 category:
//                   project.category,

//                 projectType:
//                   project.projectType,

//                 service:
//                   project.service,

//                 images:
//                   project.images,

//                 detectedType:
//                   getSectionType(project)
//               }
//             );
//           }
//         );

//         // ====================================================
//         // SAVE DATABASE PROJECTS
//         // ====================================================

//         setSections(processedData);

//       } catch (err) {
//         console.error(
//           'Error loading projects:',
//           err
//         );

//         setSections([]);
//         setError(true);

//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProjects();
//   }, []);

//   // ==========================================================
//   // GROUP PROJECTS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'wedding'
//     );

//   const filmSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'film'
//     );

//   const musicSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'music'
//     );

//   // ==========================================================
//   // DEBUG HOME SECTIONS
//   // ==========================================================

//   console.log(
//     'HOME FILM SECTIONS:',
//     filmSections
//   );

//   console.log(
//     'HOME MUSIC SECTIONS:',
//     musicSections
//   );

//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-zinc-100
//         font-sans
//         selection:bg-[#dfb557]/30
//         selection:text-[#dfb557]
//         overflow-x-hidden
//       "
//     >

//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <Hero />

//       {/* ======================================================
//           CINEMATIC INTRO
//       ====================================================== */}

//       <section
//         className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-6
//           py-20
//           md:py-28
//         "
//       >
//         <div
//           className="
//             max-w-4xl
//             mx-auto
//             text-center
//           "
//         >

//           <span
//             className="
//               block
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.6em]
//               text-[#dfb557]
//               mb-5
//               font-semibold
//             "
//           >
//             Nahom Film Production
//           </span>

//           <h1
//             className="
//               text-4xl
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//               font-serif
//               italic
//               font-light
//               leading-tight
//             "
//           >
//             Stories

//             <span className="text-[#dfb557]">
//               {' '}Worth Remembering
//             </span>
//           </h1>

//           <p
//             className="
//               mt-6
//               max-w-2xl
//               mx-auto
//               text-sm
//               md:text-base
//               text-zinc-500
//               leading-relaxed
//               font-light
//             "
//           >
//             From unforgettable celebrations to cinematic
//             films and powerful music productions, we capture
//             moments and transform them into stories that last forever.
//           </p>

//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mt-8
//             "
//           >
//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-[#dfb557]
//               "
//             />

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />
//           </div>

//         </div>
//       </section>

//       {/* ======================================================
//           LOADING
//       ====================================================== */}

//       {loading && (
//         <section
//           className="
//             min-h-[40vh]
//             flex
//             flex-col
//             items-center
//             justify-center
//           "
//         >
//           <div
//             className="
//               w-10
//               h-10
//               rounded-full
//               border
//               border-[#dfb557]/20
//               border-t-[#dfb557]
//               animate-spin
//             "
//           />

//           <p
//             className="
//               mt-5
//               text-[9px]
//               uppercase
//               tracking-[0.5em]
//               text-zinc-600
//             "
//           >
//             Loading Stories
//           </p>
//         </section>
//       )}

//       {/* ======================================================
//           ERROR
//       ====================================================== */}

//       {!loading && error && (
//         <section
//           className="
//             min-h-[40vh]
//             flex
//             items-center
//             justify-center
//             px-6
//             text-center
//           "
//         >
//           <div>

//             <span
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               "
//             >
//               Nahom Film Production
//             </span>

//             <h2
//               className="
//                 mt-4
//                 text-3xl
//                 md:text-5xl
//                 font-serif
//                 italic
//                 font-light
//               "
//             >
//               Unable to Load Stories
//             </h2>

//             <p
//               className="
//                 mt-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               Please try again later.
//             </p>

//           </div>
//         </section>
//       )}

//       {/* ======================================================
//           NO PROJECTS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         sections.length === 0 && (
//           <section
//             className="
//               min-h-[40vh]
//               flex
//               items-center
//               justify-center
//               text-center
//               px-6
//             "
//           >
//             <div>

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.5em]
//                   text-[#dfb557]
//                 "
//               >
//                 Nahom Film Production
//               </span>

//               <h2
//                 className="
//                   mt-4
//                   text-3xl
//                   md:text-5xl
//                   font-serif
//                   italic
//                   font-light
//                 "
//               >
//                 Stories Are Coming
//               </h2>

//               <p
//                 className="
//                   mt-4
//                   text-sm
//                   text-zinc-500
//                 "
//               >
//                 Our latest productions will appear here.
//               </p>

//             </div>
//           </section>
//         )}

//       {/* ======================================================
//           WEDDING
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         weddingSections.length > 0 && (
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

//       {/* ======================================================
//           FILMS
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         filmSections.length > 0 && (
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

//               {filmSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `film-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     {/*
//                       IMPORTANT:

//                       section.images comes directly
//                       from MongoDB after parseProject().

//                       NO hardcoded Film images are added here.
//                     */}

//                     <FilmSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>
//                 )
//               )}

//             </div>
//           </section>
//         )}

//       {/* ======================================================
//           MUSIC
//       ====================================================== */}

//       {!loading &&
//         !error &&
//         musicSections.length > 0 && (
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

//               {musicSections.map(
//                 (section, index) => (

//                   <div
//                     key={
//                       section._id ||
//                       `music-${index}`
//                     }
//                     className="
//                       relative
//                       border-b
//                       border-white/[0.04]
//                       last:border-b-0
//                     "
//                   >

//                     {/*
//                       IMPORTANT:

//                       section.images comes directly
//                       from MongoDB after parseProject().

//                       NO hardcoded Music images are added here.
//                     */}

//                     <MusicSection
//                       section={section}
//                       preview={true}
//                     />

//                   </div>
//                 )
//               )}

//             </div>
//           </section>
//         )}

//       {/* ======================================================
//           FOOTER
//       ====================================================== */}

//       <Footer />

//     </div>
//   );
// }

// // ============================================================
// // SECTION INTRO
// // ============================================================

// function HomeSectionIntro({
//   number,
//   eyebrow,
//   title,
//   description
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

//       {/* BACKGROUND NUMBER */}

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

//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';


// // ============================================================
// // API URL
// // ============================================================

// const API_URL =
//   'https://habesha-film-production-server.onrender.com';


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
//     // Replace old localhost URL
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
//   '15. The Perfect Ending to a Perfect Day'
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
//   'Grand Finale'
// ];


// // ============================================================
// // HARD-CODED FILM CONTENT
// // ============================================================

// const HARD_CODED_FILM = {
//   _id: 'hardcoded-film',
//   title: 'Our Films',
//   type: 'film',
//   category: 'film',
//   projectType: 'film',
//   service: 'film',

//   desc:
//     'Cinematic productions created with vision, storytelling and unforgettable imagery.',

//   images: [
//     'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85',

//     'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=85'
//   ],

//   youtubeUrl: '#'
// };


// // ============================================================
// // HARD-CODED MUSIC CONTENT
// // ============================================================

// const HARD_CODED_MUSIC = {
//   _id: 'hardcoded-music',
//   title: 'Music Production',
//   type: 'music',
//   category: 'music',
//   projectType: 'music',
//   service: 'music',

//   desc:
//     'Music videos and visual stories created to bring sound, emotion and cinema together.',

//   images: [
//     'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85',

//     'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',

//     'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85'
//   ],

//   youtubeUrl: '#'
// };


// // ============================================================
// // PARSE PROJECT DATA
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
//       : []
//   };
// };


// // ============================================================
// // DETECT PROJECT TYPE
// // ============================================================

// const getSectionType = (section = {}) => {

//   const title = String(
//     section.title ||
//     section.name ||
//     ''
//   ).toLowerCase();

//   const type = String(
//     section.type ||
//     ''
//   ).toLowerCase();

//   const category = String(
//     section.category ||
//     ''
//   ).toLowerCase();

//   const projectType = String(
//     section.projectType ||
//     ''
//   ).toLowerCase();

//   const service = String(
//     section.service ||
//     ''
//   ).toLowerCase();

//   const description = String(
//     section.desc ||
//     section.description ||
//     ''
//   ).toLowerCase();


//   // ==========================================================
//   // IMPORTANT:
//   // CHECK EXPLICIT DATABASE TYPE FIRST
//   // ==========================================================

//   const explicitType =
//     type ||
//     projectType ||
//     category ||
//     service;


//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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


//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     explicitType === 'film' ||
//     explicitType === 'movie' ||
//     explicitType === 'cinema' ||
//     explicitType === 'cinematic'
//   ) {
//     return 'film';
//   }


//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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


//   // ==========================================================
//   // CHECK ALL TEXT
//   // ==========================================================

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();


//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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


//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }


//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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


//   // ==========================================================
//   // UNKNOWN
//   // ==========================================================

//   return 'unknown';
// };


// // ============================================================
// // HOME
// // ============================================================

// function Home() {

//   const [sections, setSections] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(false);


//   // ==========================================================
//   // FETCH PROJECTS
//   // ==========================================================

//   useEffect(() => {

//     const loadProjects = async () => {

//       try {

//         setLoading(true);
//         setError(false);


//         const response = await fetch(
//           `${API_URL}/api/projects`
//         );


//         if (!response.ok) {

//           throw new Error(
//             `Server returned ${response.status}`
//           );

//         }


//         const data =
//           await response.json();


//         console.log(
//           'PROJECT DATA FROM SERVER:',
//           data
//         );


//         const processedData =
//           Array.isArray(data)
//             ? data.map(parseProject)
//             : [];


//         // ======================================================
//         // DEBUG PROJECT TYPES
//         // ======================================================

//         processedData.forEach(
//           (project, index) => {

//             console.log(
//               `PROJECT ${index + 1}`,
//               {
//                 id: project._id,
//                 title: project.title,
//                 name: project.name,
//                 type: project.type,
//                 category: project.category,
//                 projectType:
//                   project.projectType,
//                 service: project.service,
//                 images:
//                   project.images,
//                 detectedType:
//                   getSectionType(project)
//               }
//             );

//           }
//         );


//         setSections(processedData);

//       } catch (err) {

//         console.error(
//           'Error loading projects:',
//           err
//         );

//         /*
//          * IMPORTANT:
//          * Even if API fails, keep Film and Music
//          * hardcoded content visible.
//          */

//         setSections([]);
//         setError(true);

//       } finally {

//         setLoading(false);

//       }

//     };


//     loadProjects();

//   }, []);


//   // ==========================================================
//   // GROUP DATABASE PROJECTS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'wedding'
//     );


//   const databaseFilmSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'film'
//     );


//   const databaseMusicSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) ===
//         'music'
//     );


//   // ==========================================================
//   // IMPORTANT:
//   // FILM + MUSIC ALWAYS EXIST
//   // ==========================================================

//   const filmSections =
//     databaseFilmSections.length > 0
//       ? databaseFilmSections
//       : [HARD_CODED_FILM];


//   const musicSections =
//     databaseMusicSections.length > 0
//       ? databaseMusicSections
//       : [HARD_CODED_MUSIC];


//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (

//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-zinc-100
//         font-sans
//         selection:bg-[#dfb557]/30
//         selection:text-[#dfb557]
//         overflow-x-hidden
//       "
//     >

//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <Hero />


//       {/* ======================================================
//           CINEMATIC INTRO
//       ====================================================== */}

//       <section
//         className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-6
//           py-20
//           md:py-28
//         "
//       >

//         <div
//           className="
//             max-w-4xl
//             mx-auto
//             text-center
//           "
//         >

//           <span
//             className="
//               block
//               text-[9px]
//               md:text-[10px]
//               uppercase
//               tracking-[0.6em]
//               text-[#dfb557]
//               mb-5
//               font-semibold
//             "
//           >
//             Nahom Film Production
//           </span>


//           <h1
//             className="
//               text-4xl
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//               font-serif
//               italic
//               font-light
//               leading-tight
//             "
//           >
//             Stories

//             <span className="text-[#dfb557]">
//               {' '}Worth Remembering
//             </span>

//           </h1>


//           <p
//             className="
//               mt-6
//               max-w-2xl
//               mx-auto
//               text-sm
//               md:text-base
//               text-zinc-500
//               leading-relaxed
//               font-light
//             "
//           >
//             From unforgettable celebrations to cinematic
//             films and powerful music productions, we capture
//             moments and transform them into stories that last forever.
//           </p>


//           <div
//             className="
//               flex
//               items-center
//               justify-center
//               gap-4
//               mt-8
//             "
//           >

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-[#dfb557]
//               "
//             />

//             <span
//               className="
//                 w-16
//                 md:w-24
//                 h-px
//                 bg-[#dfb557]/30
//               "
//             />

//           </div>

//         </div>

//       </section>


//       {/* ======================================================
//           LOADING
//       ====================================================== */}

//       {loading && (

//         <section
//           className="
//             min-h-[40vh]
//             flex
//             flex-col
//             items-center
//             justify-center
//           "
//         >

//           <div
//             className="
//               w-10
//               h-10
//               rounded-full
//               border
//               border-[#dfb557]/20
//               border-t-[#dfb557]
//               animate-spin
//             "
//           />

//           <p
//             className="
//               mt-5
//               text-[9px]
//               uppercase
//               tracking-[0.5em]
//               text-zinc-600
//             "
//           >
//             Loading Stories
//           </p>

//         </section>

//       )}


//       {/* ======================================================
//           ERROR
//       ====================================================== */}

//       {!loading && error && (

//         <section
//           className="
//             py-10
//             flex
//             items-center
//             justify-center
//             px-6
//             text-center
//           "
//         >

//           <div>

//             <span
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.5em]
//                 text-[#dfb557]
//               "
//             >
//               Nahom Film Production
//             </span>


//             <p
//               className="
//                 mt-3
//                 text-xs
//                 text-zinc-600
//               "
//             >
//               Showing featured productions.
//             </p>

//           </div>

//         </section>

//       )}


//       {/* ======================================================
//           WEDDING
//           ONLY DATABASE CONTENT
//       ====================================================== */}

//       {!loading &&
//         weddingSections.length > 0 && (

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


//       {/* ======================================================
//           FILMS
//           ALWAYS SHOW
//       ====================================================== */}

//       {!loading && (

//         <section
//           id="films"
//           className="
//             relative
//             border-t
//             border-white/[0.04]
//           "
//         >

//           <HomeSectionIntro
//             number="02"
//             eyebrow="Film Production"
//             title="Films"
//             description="
//               Cinematic productions created with vision,
//               storytelling and unforgettable imagery.
//             "
//           />


//           <div
//             className="
//               max-w-7xl
//               mx-auto
//               px-4
//               md:px-8
//             "
//           >

//             {filmSections.map(
//               (section, index) => (

//                 <div
//                   key={
//                     section._id ||
//                     `film-${index}`
//                   }
//                   className="
//                     relative
//                     border-b
//                     border-white/[0.04]
//                     last:border-b-0
//                   "
//                 >

//                   <FilmSection
//                     section={section}
//                     preview={true}
//                   />

//                 </div>

//               )
//             )}

//           </div>

//         </section>

//       )}


//       {/* ======================================================
//           MUSIC
//           ALWAYS SHOW
//       ====================================================== */}

//       {!loading && (

//         <section
//           id="music"
//           className="
//             relative
//             border-t
//             border-white/[0.04]
//           "
//         >

//           <HomeSectionIntro
//             number="03"
//             eyebrow="Music Production"
//             title="Music"
//             description="
//               Music videos and visual stories created to bring
//               sound, emotion and cinema together.
//             "
//           />


//           <div
//             className="
//               max-w-7xl
//               mx-auto
//               px-4
//               md:px-8
//             "
//           >

//             {musicSections.map(
//               (section, index) => (

//                 <div
//                   key={
//                     section._id ||
//                     `music-${index}`
//                   }
//                   className="
//                     relative
//                     border-b
//                     border-white/[0.04]
//                     last:border-b-0
//                   "
//                 >

//                   <MusicSection
//                     section={section}
//                     preview={true}
//                   />

//                 </div>

//               )
//             )}

//           </div>

//         </section>

//       )}


//       {/* ======================================================
//           FOOTER
//       ====================================================== */}

//       <Footer />

//     </div>
//   );
// }


// // ============================================================
// // SECTION INTRO
// // ============================================================

// function HomeSectionIntro({
//   number,
//   eyebrow,
//   title,
//   description
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

//       {/* BACKGROUND NUMBER */}

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


//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';

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

//   // ==========================================================
//   // EXPLICIT DATABASE TYPE FIRST
//   // ==========================================================

//   const explicitType =
//     type ||
//     projectType ||
//     category ||
//     service;

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     explicitType === 'film' ||
//     explicitType === 'movie' ||
//     explicitType === 'cinema' ||
//     explicitType === 'cinematic'
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // CHECK ALL TEXT
//   // ==========================================================

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // FETCH HOME SECTIONS
//   // ==========================================================

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

//         // ----------------------------------------------------
//         // SUPPORT DIFFERENT API RESPONSE STRUCTURES
//         // ----------------------------------------------------

//         const projects =
//           Array.isArray(data)
//             ? data
//             : Array.isArray(data.projects)
//             ? data.projects
//             : Array.isArray(data.data)
//             ? data.data
//             : [];

//         // ----------------------------------------------------
//         // PROCESS PROJECTS
//         // ----------------------------------------------------

//         const processedProjects =
//           projects.map(parseProject);

//         console.log(
//           'HOME PROJECTS:',
//           processedProjects
//         );

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

//   // ==========================================================
//   // FIND WEDDING SECTIONS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) === 'wedding'
//     );

//   // ==========================================================
//   // FIND FILM SECTION
//   // ==========================================================

//   const filmSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'film'
//     );

//   // ==========================================================
//   // FIND MUSIC SECTION
//   // ==========================================================

//   const musicSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'music'
//     );

//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-white
//         overflow-x-hidden
//       "
//     >

//       {/* =====================================================
//           NAVBAR
//       ===================================================== */}

//       <Navbar />

//       <main>

//         {/* ===================================================
//             WEDDING SECTION
//             DATABASE CONTENT
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
//                   last:border-b-0
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
//                   last:border-b-0
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
//             DATABASE HAS NO FILM OR MUSIC
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

//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

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

//       {/* BACKGROUND NUMBER */}

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

//       {/* CONTENT */}

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

//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';

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

//   // ==========================================================
//   // EXPLICIT DATABASE TYPE FIRST
//   // ==========================================================

//   const explicitType =
//     type ||
//     projectType ||
//     category ||
//     service;

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     explicitType === 'film' ||
//     explicitType === 'movie' ||
//     explicitType === 'cinema' ||
//     explicitType === 'cinematic'
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // CHECK ALL TEXT
//   // ==========================================================

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // FETCH HOME SECTIONS
//   // ==========================================================

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

//         // ----------------------------------------------------
//         // SUPPORT DIFFERENT API RESPONSE STRUCTURES
//         // ----------------------------------------------------

//         const projects =
//           Array.isArray(data)
//             ? data
//             : Array.isArray(data.projects)
//             ? data.projects
//             : Array.isArray(data.data)
//             ? data.data
//             : [];

//         // ----------------------------------------------------
//         // PROCESS PROJECTS
//         // ----------------------------------------------------

//         const processedProjects =
//           projects.map(parseProject);

//         console.log(
//           'HOME PROJECTS:',
//           processedProjects
//         );

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

//   // ==========================================================
//   // FIND WEDDING SECTIONS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) === 'wedding'
//     );

//   // ==========================================================
//   // FIND FILM SECTION
//   // ==========================================================

//   const filmSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'film'
//     );

//   // ==========================================================
//   // FIND MUSIC SECTION
//   // ==========================================================

//   const musicSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'music'
//     );

//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-white
//         overflow-x-hidden
//       "
//     >

//       {/* =====================================================
//           NAVBAR
//       ===================================================== */}

//       <Navbar />

//       <main>

//         {/* ===================================================
//             WEDDING SECTION
//             DATABASE CONTENT
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
//                   last:border-b-0
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
//                   last:border-b-0
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
//             DATABASE HAS NO FILM OR MUSIC
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

//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

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

//       {/* BACKGROUND NUMBER */}

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

//       {/* CONTENT */}

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

//       {/* DIVIDER */}

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

// import React, { useEffect, useState } from 'react';

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';

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

//   // ==========================================================
//   // EXPLICIT DATABASE TYPE FIRST
//   // ==========================================================

//   const explicitType =
//     type ||
//     projectType ||
//     category ||
//     service;

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     explicitType === 'film' ||
//     explicitType === 'movie' ||
//     explicitType === 'cinema' ||
//     explicitType === 'cinematic'
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // CHECK ALL TEXT
//   // ==========================================================

//   const combined = `
//     ${title}
//     ${type}
//     ${category}
//     ${projectType}
//     ${service}
//     ${description}
//   `.toLowerCase();

//   // ==========================================================
//   // MUSIC
//   // ==========================================================

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

//   // ==========================================================
//   // FILM
//   // ==========================================================

//   if (
//     combined.includes('film') ||
//     combined.includes('movie') ||
//     combined.includes('cinema') ||
//     combined.includes('cinematic')
//   ) {
//     return 'film';
//   }

//   // ==========================================================
//   // WEDDING
//   // ==========================================================

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

//   // ==========================================================
//   // FETCH HOME SECTIONS
//   // ==========================================================

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

//         // ----------------------------------------------------
//         // SUPPORT DIFFERENT API RESPONSE STRUCTURES
//         // ----------------------------------------------------

//         const projects =
//           Array.isArray(data)
//             ? data
//             : Array.isArray(data.projects)
//             ? data.projects
//             : Array.isArray(data.data)
//             ? data.data
//             : [];

//         // ----------------------------------------------------
//         // PROCESS PROJECTS
//         // ----------------------------------------------------

//         const processedProjects =
//           projects.map(parseProject);

//         console.log(
//           'HOME PROJECTS:',
//           processedProjects
//         );

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

//   // ==========================================================
//   // FIND WEDDING SECTIONS
//   // ==========================================================

//   const weddingSections =
//     sections.filter(
//       (section) =>
//         getSectionType(section) === 'wedding'
//     );

//   // ==========================================================
//   // FIND FILM SECTION
//   // ==========================================================

//   const filmSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'film'
//     );

//   // ==========================================================
//   // FIND MUSIC SECTION
//   // ==========================================================

//   const musicSection =
//     sections.find(
//       (section) =>
//         getSectionType(section) === 'music'
//     );

//   // ==========================================================
//   // RENDER
//   // ==========================================================

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[#050505]
//         text-white
//         overflow-x-hidden
//       "
//     >

//       {/* =====================================================
//           NAVBAR
//       ===================================================== */}

//       <Navbar />

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

//                 {/* =================================================
//                     IMPORTANT:
//                     preview=true
//                     means HOME SHOWS ONLY ONE FILM POSTER
//                     AND NO OTHER FILM STILLS.
//                 ================================================= */}

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

//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

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

//       {/* BACKGROUND NUMBER */}

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

//       {/* CONTENT */}

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

//       {/* DIVIDER */}

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
//         <Hero/>

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
//         <Hero/>

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

// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';
// import Hero from "../components/Hero";


// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://habesha-film-production-server.onrender.com';

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

// const DEFAULT_HEADINGS = [
//   'The Story Begins', 'Tender Highlight', 'Walking Together', 'Shared Laughter', 
//   'Featured Memory', 'Pure Emotion', 'Elegant Detail', 'Evening Magic', 
//   'Quiet Glance', 'Cherished Moment', 'Graceful Evening', 'Bright Smile', 
//   'Family Warmth', 'Deep Connection', 'Grand Finale',
// ];

// const fixImageUrl = (url) => {
//   if (!url || typeof url !== 'string') return '';
//   const cleanUrl = url.trim();

//   if (cleanUrl.startsWith('https://') || cleanUrl.startsWith('http://')) {
//     return cleanUrl.replace('http://localhost:5000', BACKEND_URL);
//   }
//   if (cleanUrl.startsWith('/')) {
//     return `${BACKEND_URL}${cleanUrl}`;
//   }
//   return `${BACKEND_URL}/${cleanUrl}`;
// };

// const parseProject = (section = {}) => {
//   let mainDesc = section.desc || section.description || '';
//   let descriptions = [];
//   let headings = [];

//   if (typeof section.description === 'string' && section.description.includes('||DESCS||')) {
//     try {
//       const parts = section.description.split('||DESCS||');
//       mainDesc = parts[0] || '';

//       if (parts[1]) {
//         const headingParts = parts[1].split('||HEADINGS||');
//         try { descriptions = JSON.parse(headingParts[0] || '[]'); } catch { descriptions = []; }
//         try { headings = JSON.parse(headingParts[1] || '[]'); } catch { headings = []; }
//       }

//       if (parts[2] && headings.length === 0) {
//         try { headings = JSON.parse(parts[2]); } catch { headings = []; }
//       }
//     } catch (error) {
//       console.error('Error parsing project description:', error);
//     }
//   }

//   const images = Array.isArray(section.images)
//     ? section.images.map(fixImageUrl).filter(Boolean)
//     : [];

//   return {
//     ...section,
//     images,
//     desc: mainDesc,
//     descriptions: Array.isArray(descriptions) ? descriptions : [],
//     headings: Array.isArray(headings) ? headings : [],
//   };
// };

// const getSectionType = (section = {}) => {
//   const title = String(section.title || section.name || '').toLowerCase();
//   const type = String(section.type || '').toLowerCase();
//   const category = String(section.category || '').toLowerCase();
//   const projectType = String(section.projectType || '').toLowerCase();
//   const service = String(section.service || '').toLowerCase();
//   const description = String(section.desc || section.description || '').toLowerCase();

//   const explicitType = type || projectType || category || service;

//   if (['music', 'music video', 'song', 'song video', 'musical', 'audio'].includes(explicitType)) {
//     return 'music';
//   }
//   if (['film', 'movie', 'cinema', 'cinematic'].includes(explicitType)) {
//     return 'film';
//   }
//   if (['wedding', 'bridal', 'baby shower', 'baby', 'baptism', 'event'].includes(explicitType)) {
//     return 'wedding';
//   }

//   const combined = `${title} ${type} ${category} ${projectType} ${service} ${description}`;
//   if (combined.includes('music') || combined.includes('song') || combined.includes('audio')) return 'music';
//   if (combined.includes('film') || combined.includes('movie') || combined.includes('cinema')) return 'film';
//   if (combined.includes('wedding') || combined.includes('bridal') || combined.includes('baby') || combined.includes('event')) return 'wedding';

//   return 'unknown';
// };

// function Home() {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BACKEND_URL}/api/projects`);
//         if (!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`);

//         const data = await response.json();
//         const projects = Array.isArray(data) ? data : Array.isArray(data.projects) ? data.projects : Array.isArray(data.data) ? data.data : [];
//         setSections(projects.map(parseProject));
//       } catch (error) {
//         console.error('Home sections fetch error:', error);
//         setSections([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSections();
//   }, []);

//   const weddingSections = sections.filter((section) => getSectionType(section) === 'wedding');
  
//   const rawFilmSection = sections.find((section) => getSectionType(section) === 'film');
//   const filmSection = rawFilmSection ? { ...rawFilmSection, images: rawFilmSection.images?.slice(0, 5) || [] } : null;

//   const rawMusicSection = sections.find((section) => getSectionType(section) === 'music');
//   const musicSection = rawMusicSection ? { ...rawMusicSection, images: rawMusicSection.images?.slice(0, 5) || [] } : null;

//   return (
//     <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
//       <Navbar />
//       <Hero />

//       <main>
//         {weddingSections.length > 0 && (
//           <section id="wedding" className=" border-t border-white/[0.04]">
//             <HomeSectionIntro
//               number="01"
//               eyebrow="Wedding Stories"
//               title="Wedding"
//               description="Beautiful celebrations captured with elegance, emotion and cinematic detail."
//             />
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//               {weddingSections.map((section, index) => (
//                 <div key={section._id || `wedding-${index}`} className="relative border-b border-white/[0.04] last:border-b-0">
//                   <WeddingSection
//                     section={section}
//                     customHeadings={section.headings?.length ? section.headings : DEFAULT_HEADINGS}
//                     customDescriptions={section.descriptions?.length ? section.descriptions : DEFAULT_DESCRIPTIONS}
//                     preview={true}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {!loading && filmSection && (
//           <section id="films" className=" border-t border-white/[0.04]">
//             <HomeSectionIntro
//               number="02"
//               eyebrow="Film Production"
//               title="Films"
//               description="Cinematic productions created with vision, storytelling and unforgettable imagery."
//             />
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//               <div className="relative border-b border-white/[0.04]">
//                 <FilmSection section={filmSection} preview={true} />
//               </div>
//             </div>
//           </section>
//         )}

//         {!loading && musicSection && (
//           <section id="music" className=" border-t border-white/[0.04]">
//             <HomeSectionIntro
//               number="03"
//               eyebrow="Music Production"
//               title="Music"
//               description="Music videos and visual stories created to bring sound, emotion and cinema together."
//             />
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//               <div className="relative border-b border-white/[0.04]">
//                 <MusicSection section={musicSection} preview={true} />
//               </div>
//             </div>
//           </section>
//         )}

//         {loading && (
//           <div className="min-h-[40vh] flex items-center justify-center bg-[#050505]">
//             <div className="flex flex-col items-center gap-4">
//               <div className="w-10 h-10 rounded-full border-2 border-[#dfb557]/20 border-t-[#dfb557] animate-spin" />
//               <span className="text-[9px] uppercase tracking-[0.4em] text-[#dfb557]">Loading</span>
//             </div>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import WeddingSection from '../components/WeddingSection';
// import FilmSection from '../components/FilmSection';
// import MusicSection from '../components/MusicSection';
// import Hero from "../components/Hero";


// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://nahome-film-production.onrender.com';

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

// const DEFAULT_HEADINGS = [
//   'The Story Begins', 'Tender Highlight', 'Walking Together', 'Shared Laughter', 
//   'Featured Memory', 'Pure Emotion', 'Elegant Detail', 'Evening Magic', 
//   'Quiet Glance', 'Cherished Moment', 'Graceful Evening', 'Bright Smile', 
//   'Family Warmth', 'Deep Connection', 'Grand Finale',
// ];

// const fixImageUrl = (url) => {
//   if (!url || typeof url !== 'string') return '';
//   const cleanUrl = url.trim();

//   if (cleanUrl.startsWith('https://') || cleanUrl.startsWith('http://')) {
//     return cleanUrl.replace('http://localhost:5000', BACKEND_URL);
//   }
//   if (cleanUrl.startsWith('/')) {
//     return `${BACKEND_URL}${cleanUrl}`;
//   }
//   return `${BACKEND_URL}/${cleanUrl}`;
// };

// const parseProject = (section = {}) => {
//   let mainDesc = section.desc || section.description || '';
//   let descriptions = [];
//   let headings = [];

//   if (typeof section.description === 'string' && section.description.includes('||DESCS||')) {
//     try {
//       const parts = section.description.split('||DESCS||');
//       mainDesc = parts[0] || '';

//       if (parts[1]) {
//         const headingParts = parts[1].split('||HEADINGS||');
//         try { descriptions = JSON.parse(headingParts[0] || '[]'); } catch { descriptions = []; }
//         try { headings = JSON.parse(headingParts[1] || '[]'); } catch { headings = []; }
//       }

//       if (parts[2] && headings.length === 0) {
//         try { headings = JSON.parse(parts[2]); } catch { headings = []; }
//       }
//     } catch (error) {
//       console.error('Error parsing project description:', error);
//     }
//   }

//   const images = Array.isArray(section.images)
//     ? section.images.map(fixImageUrl).filter(Boolean)
//     : [];

//   return {
//     ...section,
//     images,
//     desc: mainDesc,
//     descriptions: Array.isArray(descriptions) ? descriptions : [],
//     headings: Array.isArray(headings) ? headings : [],
//   };
// };

// const getSectionType = (section = {}) => {
//   const title = String(section.title || section.name || '').toLowerCase();
//   const type = String(section.type || '').toLowerCase();
//   const category = String(section.category || '').toLowerCase();
//   const projectType = String(section.projectType || '').toLowerCase();
//   const service = String(section.service || '').toLowerCase();
//   const description = String(section.desc || section.description || '').toLowerCase();

//   const explicitType = type || projectType || category || service;

//   if (['music', 'music video', 'song', 'song video', 'musical', 'audio'].includes(explicitType)) {
//     return 'music';
//   }
//   if (['film', 'movie', 'cinema', 'cinematic'].includes(explicitType)) {
//     return 'film';
//   }
//   if (['wedding', 'bridal', 'baby shower', 'baby', 'baptism', 'event'].includes(explicitType)) {
//     return 'wedding';
//   }

//   const combined = `${title} ${type} ${category} ${projectType} ${service} ${description}`;
//   if (combined.includes('music') || combined.includes('song') || combined.includes('audio')) return 'music';
//   if (combined.includes('film') || combined.includes('movie') || combined.includes('cinema')) return 'film';
//   if (combined.includes('wedding') || combined.includes('bridal') || combined.includes('baby') || combined.includes('event')) return 'wedding';

//   return 'unknown';
// };

// /* =========================================================
//    FIXED SECTION INTRO (Relative/Absolute Positioning Fixed)
// ========================================================= */
// const HomeSectionIntro = ({ number, eyebrow, title, description }) => {
//   return (
//     <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-10 md:px-8">
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
//         <div>
//           <div className="flex items-center gap-3 mb-3">
//             <span className="text-[10px] font-mono tracking-[0.3em] text-[#dfb557]">
//               {number}
//             </span>
//             <span className="h-px w-8 bg-[#dfb557]/40" />
//             <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
//               {eyebrow}
//             </span>
//           </div>
//           <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
//             {title}
//           </h2>
//         </div>
//         {description && (
//           <p className="max-w-md text-sm text-white/60 font-light leading-relaxed">
//             {description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// function Home() {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BACKEND_URL}/api/projects`);
//         if (!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`);

//         const data = await response.json();
//         const projects = Array.isArray(data) ? data : Array.isArray(data.projects) ? data.projects : Array.isArray(data.data) ? data.data : [];
//         setSections(projects.map(parseProject));
//       } catch (error) {
//         console.error('Home sections fetch error:', error);
//         setSections([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSections();
//   }, []);

//   const weddingSections = sections.filter((section) => getSectionType(section) === 'wedding');
  
//   const rawFilmSection = sections.find((section) => getSectionType(section) === 'film');
//   const filmSection = rawFilmSection ? { ...rawFilmSection, images: rawFilmSection.images?.slice(0, 5) || [] } : null;

//   const rawMusicSection = sections.find((section) => getSectionType(section) === 'music');
//   const musicSection = rawMusicSection ? { ...rawMusicSection, images: rawMusicSection.images?.slice(0, 5) || [] } : null;

//   return (
//     <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
//       {/* <Navbar /> */}
//       <Hero />

//       <main>
//         {weddingSections.length > 0 && (
//           <section id="wedding" className="border-t border-white/[0.04] relative">
//             <HomeSectionIntro
//               number="01"
//               eyebrow="Wedding Stories"
//               title="Wedding"
//               description="Beautiful celebrations captured with elegance, emotion and cinematic detail."
//             />
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//               {weddingSections.map((section, index) => (
//                 <div key={section._id || `wedding-${index}`} className="relative border-b border-white/[0.04] last:border-b-0">
//                   <WeddingSection
//                     section={section}
//                     customHeadings={section.headings?.length ? section.headings : DEFAULT_HEADINGS}
//                     customDescriptions={section.descriptions?.length ? section.descriptions : DEFAULT_DESCRIPTIONS}
//                     preview={true}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {!loading && filmSection && (
//           <section id="films" className="border-t border-white/[0.04] relative">
//             <HomeSectionIntro
//               number="02"
//               eyebrow="Film Production"
//               title="Films"
//               description="Cinematic productions created with vision, storytelling and unforgettable imagery."
//             />
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//               <div className="relative border-b border-white/[0.04]">
//                 <FilmSection section={filmSection} preview={true} />
//               </div>
//             </div>
//           </section>
//         )}

//         {!loading && musicSection && (
//           <section id="music" className="border-t border-white/[0.04] relative">
//             <HomeSectionIntro
//               number="03"
//               eyebrow="Music Production"
//               title="Music"
//               description="Music videos and visual stories created to bring sound, emotion and cinema together."
//             />
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//               <div className="relative border-b border-white/[0.04]">
//                 <MusicSection section={musicSection} preview={true} />
//               </div>
//             </div>
//           </section>
//         )}

//         {loading && (
//           <div className="min-h-[40vh] flex items-center justify-center bg-[#050505]">
//             <div className="flex flex-col items-center gap-4">
//               <div className="w-10 h-10 rounded-full border-2 border-[#dfb557]/20 border-t-[#dfb557] animate-spin" />
//               <span className="text-[9px] uppercase tracking-[0.4em] text-[#dfb557]">Loading</span>
//             </div>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

import WeddingSection from '../components/WeddingSection';
import FilmSection from '../components/FilmSection';
import MusicSection from '../components/MusicSection';
import Hero from '../components/Hero';


// ======================================================
// HABESHA PICTURES BACKEND
// Wedding / Bridal / Baby Shower data comes from here
// ======================================================

const HABESHA_BACKEND_URL =
  import.meta.env.VITE_HABESHA_BACKEND_URL ||
  'https://nahome-film-production.onrender.com';


// ======================================================
// DEFAULT DESCRIPTIONS
// ======================================================

const DEFAULT_DESCRIPTIONS = [
  "01. The Beginning of Forever — Our First Look",
  "02. A Tender Moment Caught in Time",
  "03. Walking Hand in Hand Towards Tomorrow",
  "04. Joy and Laughter Shared with Loved Ones",
  "05. The Grand Celebration and Vows",
  "06. Unforgettable Emotions of the Day",
  "07. Elegance in Every Single Detail",
  "08. Dancing Under the Evening Lights",
  "09. Sweet Whispers and Quiet Glances",
  "10. Cherished Memories to Last a Lifetime",
  "11. A Magical Evening Full of Grace",
  "12. Smiles That Brighten the Whole World",
  "13. Embracing the Warmth of Family",
  "14. Looking Into Each Other's Eyes",
  "15. The Perfect Ending to a Perfect Day"
];


// ======================================================
// DEFAULT HEADINGS
// ======================================================

const DEFAULT_HEADINGS = [
  "The Story Begins",
  "Tender Highlight",
  "Walking Together",
  "Shared Laughter",
  "Featured Memory",
  "Pure Emotion",
  "Elegant Detail",
  "Evening Magic",
  "Quiet Glance",
  "Cherished Moment",
  "Graceful Evening",
  "Bright Smile",
  "Family Warmth",
  "Deep Connection",
  "Grand Finale"
];


// ======================================================
// FIX IMAGE URL
// This is specifically for Habesha Pictures images
// ======================================================

const fixImageUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  const cleanUrl = url.trim();

  if (!cleanUrl) {
    return '';
  }

  // Already a complete URL
  if (
    cleanUrl.startsWith('https://') ||
    cleanUrl.startsWith('http://')
  ) {
    // Old localhost backend URL
    if (cleanUrl.includes('localhost:5000')) {
      return cleanUrl.replace(
        'http://localhost:5000',
        HABESHA_BACKEND_URL
      );
    }

    if (cleanUrl.includes('localhost:4000')) {
      return cleanUrl.replace(
        'http://localhost:4000',
        HABESHA_BACKEND_URL
      );
    }

    return cleanUrl;
  }

  // Relative URL
  if (cleanUrl.startsWith('/')) {
    return `${HABESHA_BACKEND_URL}${cleanUrl}`;
  }

  // File path without /
  return `${HABESHA_BACKEND_URL}/${cleanUrl}`;
};


// ======================================================
// PARSE PROJECT
// Supports the existing database description format
// ======================================================

const parseProject = (section = {}) => {
  let mainDesc =
    section.desc ||
    section.description ||
    '';

  let parsedDescriptions = [];
  let parsedHeadings = [];

  try {
    if (
      typeof section.description === 'string' &&
      section.description.includes('||DESCS||')
    ) {
      const parts = section.description.split('||DESCS||');

      // Main description
      mainDesc = parts[0] || '';

      // Everything after ||DESCS||
      const remaining = parts[1] || '';

      // -----------------------------------------------
      // New format:
      // descriptions JSON ||HEADINGS|| headings JSON
      // -----------------------------------------------

      if (remaining.includes('||HEADINGS||')) {
        const headingParts =
          remaining.split('||HEADINGS||');

        try {
          parsedDescriptions = headingParts[0]
            ? JSON.parse(headingParts[0])
            : [];
        } catch (error) {
          parsedDescriptions = [];
        }

        try {
          parsedHeadings = headingParts[1]
            ? JSON.parse(headingParts[1])
            : [];
        } catch (error) {
          parsedHeadings = [];
        }
      }

      // -----------------------------------------------
      // Old format:
      // description ||DESCS|| descriptions || headings
      // -----------------------------------------------

      else {
        try {
          parsedDescriptions = remaining
            ? JSON.parse(remaining)
            : [];
        } catch (error) {
          parsedDescriptions = [];
        }

        try {
          parsedHeadings = parts[2]
            ? JSON.parse(parts[2])
            : [];
        } catch (error) {
          parsedHeadings = [];
        }
      }
    }
  } catch (error) {
    console.log(
      'Error parsing project description:',
      error
    );
  }


  // ====================================================
  // IMAGES
  // ====================================================

  const fixedImages = Array.isArray(section.images)
    ? section.images
        .map((img) => fixImageUrl(img))
        .filter(Boolean)
    : [];


  return {
    ...section,

    images: fixedImages,

    desc: mainDesc,

    descriptions: Array.isArray(parsedDescriptions)
      ? parsedDescriptions
      : [],

    headings: Array.isArray(parsedHeadings)
      ? parsedHeadings
      : []
  };
};


// ======================================================
// CHECK WHETHER PROJECT IS WEDDING CONTENT
// ======================================================

const isWeddingContent = (section = {}) => {
  const values = [
    section.title,
    section.name,
    section.names,
    section.type,
    section.category,
    section.projectType,
    section.service,
    section.eventType,
    section.description,
    section.desc
  ];

  const combined = values
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return (
    combined.includes('wedding') ||
    combined.includes('bridal') ||
    combined.includes('baby shower') ||
    combined.includes('baby') ||
    combined.includes('baptism') ||
    combined.includes('event')
  );
};


// ======================================================
// HOME
// ======================================================

function Home() {

  const [weddingSections, setWeddingSections] =
    useState([]);

  const [loadingWedding, setLoadingWedding] =
    useState(true);

  const [weddingError, setWeddingError] =
    useState(false);


  // ====================================================
  // FETCH ONLY WEDDING DATA
  // ====================================================

  useEffect(() => {

    let isMounted = true;

    const loadWeddingProjects = async () => {

      try {

        setLoadingWedding(true);
        setWeddingError(false);

        const response = await fetch(
          `${HABESHA_BACKEND_URL}/api/projects`
        );

        if (!response.ok) {
          throw new Error(
            `Server returned ${response.status}`
          );
        }

        const data = await response.json();


        // =================================================
        // Support different API response structures
        // =================================================

        let projects = [];

        if (Array.isArray(data)) {
          projects = data;
        }

        else if (
          Array.isArray(data.projects)
        ) {
          projects = data.projects;
        }

        else if (
          Array.isArray(data.data)
        ) {
          projects = data.data;
        }


        // =================================================
        // Parse + filter wedding content
        // =================================================

        const processedProjects = projects
          .map(parseProject)
          .filter(isWeddingContent);


        if (isMounted) {
          setWeddingSections(
            processedProjects
          );
        }

      } catch (error) {

        console.error(
          'Wedding projects fetch error:',
          error
        );

        if (isMounted) {
          setWeddingSections([]);
          setWeddingError(true);
        }

      } finally {

        if (isMounted) {
          setLoadingWedding(false);
        }

      }
    };


    loadWeddingProjects();


    return () => {
      isMounted = false;
    };

  }, []);


  // ======================================================
  // RENDER
  // ======================================================

  return (

    <div
      className="
        min-h-screen
        bg-[#050505]
        text-zinc-100
        font-sans
        selection:bg-[#dfb557]/30
        selection:text-[#dfb557]
        overflow-x-hidden
      "
    >

      {/* ==================================================
          HERO
      ================================================== */}

      <Hero />


      {/* ==================================================
          WEDDING / BRIDAL / BABY SHOWER
          FROM HABESHA PICTURES SERVER
      ================================================== */}

      <section
        id="wedding"
        className="w-full bg-[#050505]"
      >

        {/* Section heading */}

        {!loadingWedding &&
          weddingSections.length > 0 && (

            <div
              className="
                pt-16
                md:pt-24
                pb-8
                md:pb-12
                text-center
                px-4
              "
            >

              <span
                className="
                  block
                  mb-3
                  text-[9px]
                  md:text-[11px]
                  tracking-[0.5em]
                  uppercase
                  text-[#dfb557]
                  font-medium
                "
              >
                01 — Wedding Stories
              </span>

              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  font-serif
                  italic
                  font-light
                  tracking-wide
                  text-zinc-100
                "
              >
                Wedding
              </h2>

              <div
                className="
                  w-12
                  h-[1px]
                  bg-[#dfb557]/50
                  mx-auto
                  mt-4
                "
              />

            </div>

          )}


        {/* Loading */}

        {loadingWedding && (

          <div
            className="
              py-20
              text-center
              text-zinc-500
              text-sm
              tracking-widest
              uppercase
            "
          >
            Loading Wedding Stories...
          </div>

        )}


        {/* Error */}

        {!loadingWedding &&
          weddingError &&
          weddingSections.length === 0 && (

            <div
              className="
                py-16
                text-center
                px-4
              "
            >

              <p
                className="
                  text-zinc-500
                  text-sm
                "
              >
                Wedding stories are currently unavailable.
              </p>

            </div>

          )}


        {/* Wedding projects */}

        {!loadingWedding &&
          weddingSections.length > 0 && (

            <div className="w-full">

              {weddingSections.map(
                (section, index) => (

                  <div
                    key={
                      section._id ||
                      section.id ||
                      index
                    }
                    className="
                      w-full
                      border-b
                      border-zinc-900
                      last:border-b-0
                    "
                  >

                    <WeddingSection

                      section={section}

                      customHeadings={
                        section.headings?.length > 0
                          ? section.headings
                          : DEFAULT_HEADINGS
                      }

                      customDescriptions={
                        section.descriptions?.length > 0
                          ? section.descriptions
                          : DEFAULT_DESCRIPTIONS
                      }

                      preview={true}

                    />

                  </div>

                )
              )}

            </div>

          )}

      </section>


      {/* ==================================================
          FILM PRODUCTION
          LOCAL DATA / LOCAL ASSETS
      ================================================== */}

      <section
        id="films"
        className="w-full bg-[#050505]"
      >

        {/* Section heading */}

        <div
          className="
            pt-16
            md:pt-24
            pb-8
            md:pb-12
            text-center
            px-4
          "
        >

          <span
            className="
              block
              mb-3
              text-[9px]
              md:text-[11px]
              tracking-[0.5em]
              uppercase
              text-[#dfb557]
              font-medium
            "
          >
            02 — Film Production
          </span>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-serif
              italic
              font-light
              tracking-wide
              text-zinc-100
            "
          >
            Films
          </h2>

          <div
            className="
              w-12
              h-[1px]
              bg-[#dfb557]/50
              mx-auto
              mt-4
            "
          />

        </div>


        {/* =================================================
            IMPORTANT:
            No backend section is passed here.
            FilmSection uses your LOCAL MOVIES array.
        ================================================= */}

        <FilmSection
          preview={true}
        />

      </section>


      {/* ==================================================
          MUSIC PRODUCTION
          LOCAL DATA / LOCAL ASSETS
      ================================================== */}

      <section
        id="music"
        className="w-full bg-[#050505]"
      >

        {/* Section heading */}

        <div
          className="
            pt-16
            md:pt-24
            pb-8
            md:pb-12
            text-center
            px-4
          "
        >

          <span
            className="
              block
              mb-3
              text-[9px]
              md:text-[11px]
              tracking-[0.5em]
              uppercase
              text-[#dfb557]
              font-medium
            "
          >
            03 — Music Production
          </span>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-serif
              italic
              font-light
              tracking-wide
              text-zinc-100
            "
          >
            Music
          </h2>

          <div
            className="
              w-12
              h-[1px]
              bg-[#dfb557]/50
              mx-auto
              mt-4
            "
          />

        </div>


        {/* =================================================
            IMPORTANT:
            No backend section is passed here.
            MusicSection will use its LOCAL data.
        ================================================= */}

        <MusicSection
          preview={true}
        />

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />

    </div>

  );
}


export default Home;