
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