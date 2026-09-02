

// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProtectedImage from './ProrectedImage';

// const FALLBACK_WEDDING_IMAGES = [
//   'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
//   'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
//   'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1000&q=85',
//   'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85',
//   'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85',
//   'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85',
// ];

// const generateSlug = (title = '') =>
//   title
//     .toLowerCase()
//     .replace(/["']/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-');

// function WeddingSection({
//   section = {},
//   customHeadings = [],
//   customDescriptions = [],
//   preview = false
// }) {

//   const databaseImages = Array.isArray(section.images)
//     ? section.images.filter(Boolean)
//     : [];

//   /*
//    * Database images first.
//    * If no images exist, use temporary wedding images.
//    */
//   const images =
//     databaseImages.length > 0
//       ? databaseImages
//       : FALLBACK_WEDDING_IMAGES;

//   const title = section.title || 'Wedding Stories';


//   const descriptions =
//     customDescriptions.length > 0
//       ? customDescriptions
//       : [
//           'The beginning of a beautiful forever.',
//           'Tender moments captured naturally.',
//           'Two hearts walking toward tomorrow.',
//           'Joy shared with family and friends.',
//           'A celebration filled with emotion.',
//           'Beautiful memories made forever.'
//         ];


//   const headings =
//     customHeadings.length > 0
//       ? customHeadings
//       : [
//           'The Story Begins',
//           'Tender Moments',
//           'Walking Together',
//           'Shared Happiness',
//           'The Celebration',
//           'Pure Emotion'
//         ];


//   const visibleImages = preview
//     ? images.slice(0, 6)
//     : images;


//   const isBridal =
//     title.toLowerCase().includes('bridal');


//   const isBaby =
//     title.toLowerCase().includes('baby') ||
//     title.toLowerCase().includes('baptism');


//   return (
//     <section className="relative w-full overflow-hidden bg-[#050505] text-white/90">


//       {/* INTRO */}
//       <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-20">

//         <div className="relative overflow-hidden rounded-[2rem] border border-[#FF4900]/30 bg-gradient-to-br from-[#151515] via-[#0b0b0b] to-black px-6 py-12 md:px-16 md:py-16 text-center">

//           <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#FF4900]/5 blur-3xl" />

//           <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-[#FF4900]/5 blur-3xl" />

//           <div className="relative">

//             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#FF4900] font-semibold">

//               {isBridal
//                 ? 'Bridal Shower Films'
//                 : isBaby
//                 ? 'Baby Shower & Baptism'
//                 : 'Wedding Cinematography'}

//             </span>


//             <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-serif italic font-light text-[#FF4900]">
//               {title}
//             </h2>


//             <div className="flex items-center justify-center gap-3 my-6">

//               <span className="w-14 md:w-20 h-px bg-[#FF4900]/40" />

//               <span className="w-1.5 h-1.5 rounded-full bg-[#FF4900]" />

//               <span className="w-14 md:w-20 h-px bg-[#FF4900]/40" />

//             </div>


//             <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-400 leading-relaxed">

//               {section.desc ||
//                 'Every celebration deserves to be remembered as beautifully as it was lived.'}

//             </p>

//           </div>

//         </div>

//       </div>


//       {/* GALLERY */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8">

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

//           {visibleImages.map((img, index) => {

//             const large =
//               index === 0 ||
//               (!preview && index === 5);


//             return (

//               <div
//                 key={index}
//                 className={
//                   large
//                     ? 'md:col-span-7'
//                     : 'md:col-span-5'
//                 }
//               >

//                 <div className="group relative overflow-hidden rounded-2xl border border-[#FF4900]/30 bg-zinc-900">

//                   <ProtectedImage
//                     src={img}
//                     alt={`${title} ${index + 1}`}
//                     className={`w-full object-cover transition-transform duration-1000 group-hover:scale-105 ${
//                       large
//                         ? 'aspect-[16/10]'
//                         : 'aspect-[4/3]'
//                     }`}
//                     showLogoOnly={true}
//                   />


//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />


//                   <div className="absolute left-5 right-5 bottom-5">

//                     <span className="text-[8px] uppercase tracking-[0.35em] text-[#FF4900]">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>


//                     <h3 className="mt-2 text-xl md:text-2xl font-serif italic text-[#FF4900]">
//                       {headings[index] || 'Wedding Moment'}
//                     </h3>


//                     {!preview && (
//                       <p className="mt-2 text-xs md:text-sm text-zinc-400 max-w-md">
//                         {descriptions[index] ||
//                           'A beautiful moment captured forever.'}
//                       </p>
//                     )}

//                   </div>

//                 </div>

//               </div>

//             );
//           })}

//         </div>

//       </div>


//       {/* VIEW MORE */}
//       <div className="flex justify-center py-12 md:py-16">

//         <Link
//           to={`/gallery/${generateSlug(title)}`}
//           className="group inline-flex items-center gap-5 rounded-full border border-[#FF4900]/60 px-8 md:px-12 py-4 text-[9px] md:text-[10px] uppercase tracking-[0.35em] font-bold text-[#FF4900] transition-all duration-500 hover:bg-[#FF4900] hover:text-black"
//         >

//           View More Wedding Stories

//           <span className="text-lg transition-transform group-hover:translate-x-2">
//             →
//           </span>

//         </Link>

//       </div>

//     </section>
//   );
// }

// export default WeddingSection;

import React from 'react';
import { Link } from 'react-router-dom';

const FALLBACK_WEDDING_IMAGES = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85',
];

const generateSlug = (title = '') =>
  title
    .toLowerCase()
    .replace(/["']/g, '')
    .replace(/&/g, 'and')
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

function WeddingSection({
  section = {},
  customHeadings = [],
  customDescriptions = [],
  preview = false
}) {

  const databaseImages = Array.isArray(section.images)
    ? section.images.filter(Boolean)
    : [];

  /*
   * Database images first.
   * If no images exist, use temporary wedding images.
   */
  const images =
    databaseImages.length > 0
      ? databaseImages
      : FALLBACK_WEDDING_IMAGES;

  const title = section.title || 'Wedding Stories';


  const descriptions =
    customDescriptions.length > 0
      ? customDescriptions
      : [
          'The beginning of a beautiful forever.',
          'Tender moments captured naturally.',
          'Two hearts walking toward tomorrow.',
          'Joy shared with family and friends.',
          'A celebration filled with emotion.',
          'Beautiful memories made forever.'
        ];


  const headings =
    customHeadings.length > 0
      ? customHeadings
      : [
          'The Story Begins',
          'Tender Moments',
          'Walking Together',
          'Shared Happiness',
          'The Celebration',
          'Pure Emotion'
        ];


  const visibleImages = preview
    ? images.slice(0, 6)
    : images;


  const isBridal =
    title.toLowerCase().includes('bridal');


  const isBaby =
    title.toLowerCase().includes('baby') ||
    title.toLowerCase().includes('baptism');


  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white/90">


      {/* INTRO */}

      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-20">

        <div className="relative overflow-hidden rounded-[2rem] border border-[#FF4900]/30 bg-gradient-to-br from-[#151515] via-[#0b0b0b] to-black px-6 py-12 md:px-16 md:py-16 text-center">

          <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#FF4900]/5 blur-3xl" />

          <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-[#FF4900]/5 blur-3xl" />

          <div className="relative">

            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#FF4900] font-semibold">

              {isBridal
                ? 'Bridal Shower Films'
                : isBaby
                ? 'Baby Shower & Baptism'
                : 'Wedding Cinematography'}

            </span>


            <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-serif italic font-light text-[#FF4900]">

              {title}

            </h2>


            <div className="flex items-center justify-center gap-3 my-6">

              <span className="w-14 md:w-20 h-px bg-[#FF4900]/40" />

              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4900]" />

              <span className="w-14 md:w-20 h-px bg-[#FF4900]/40" />

            </div>


            <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-400 leading-relaxed">

              {section.desc ||
                'Every celebration deserves to be remembered as beautifully as it was lived.'}

            </p>

          </div>

        </div>

      </div>


      {/* GALLERY */}

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {visibleImages.map((img, index) => {

            const large =
              index === 0 ||
              (!preview && index === 5);


            return (

              <div
                key={index}
                className={
                  large
                    ? 'md:col-span-7'
                    : 'md:col-span-5'
                }
              >

                <div className="group relative overflow-hidden rounded-2xl border border-[#FF4900]/30 bg-zinc-900">

                  {/* NORMAL IMAGE — ProtectedImage removed */}

                  <img
                    src={img}
                    alt={`${title} ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-1000 group-hover:scale-105 ${
                      large
                        ? 'aspect-[16/10]'
                        : 'aspect-[4/3]'
                    }`}
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />


                  <div className="absolute left-5 right-5 bottom-5">

                    <span className="text-[8px] uppercase tracking-[0.35em] text-white">

                      {String(index + 1).padStart(2, '0')}

                    </span>


                    <h3 className="mt-2 text-xl md:text-2xl font-serif italic text-white">

                      {headings[index] || 'Wedding Moment'}

                    </h3>


                    {!preview && (

                      <p className="mt-2 text-xs md:text-sm text-zinc-400 max-w-md">

                        {descriptions[index] ||
                          'A beautiful moment captured forever.'}

                      </p>

                    )}

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>


      {/* VIEW MORE */}

      <div className="flex justify-center py-12 md:py-16">

        <Link
          to={`/gallery/${generateSlug(title)}`}
          className="group inline-flex items-center gap-5 rounded-full border border-[#FF4900]/60 px-8 md:px-12 py-4 text-[9px] md:text-[10px] uppercase tracking-[0.35em] font-bold text-[#FF4900] transition-all duration-500 hover:bg-[#FF4900] hover:text-black"
        >

          View More Wedding Stories

          <span className="text-lg transition-transform group-hover:translate-x-2">

            →

          </span>

        </Link>

      </div>

    </section>
  );
}

export default WeddingSection;