
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bestWeedingPic from '../assets/images/nahom-logo.jpeg';

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#ff6600]/30 selection:text-[#ff6600] overflow-x-hidden flex flex-col justify-between">
      
      {/* 1. Hero Section ምስ ናቭጌሽንን ድሕረ ባይታ ስእልን */}
      <div className="relative w-full h-[65vh] md:h-[75vh] flex flex-col justify-between">
        
        {/* Navbar ኣብ ልዕሊቲ ስእሊ ብ Absolute ተቐሚጡ ኣሎ */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Hero Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0">
         <img 
            src={bestWeedingPic} 
            alt="Habesha Film Production Hero" 
            className="w-full h-full object-cover brightness-50"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content & Habesha Pictures H2 */}
        <div className="relative z-10 mt-auto text-center px-4 pb-12 max-w-4xl mx-auto">
          <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] text-[#ff6600] block mb-3">
            About Our Studio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 text-zinc-100 drop-shadow-lg">
            About Our Film Production
          </h1>
          <div className="w-16 h-[2px] bg-[#ff6600] mx-auto mb-4"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#ff6600] tracking-wider font-light drop-shadow">
            NAHOME FILM PRODUCTION
          </h2>
        </div>
      </div>

      {/* 2. Main About Details Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[#ff6600] block mb-2">
          Our Vision & Legacy
        </span>
        <h3 className="text-3xl md:text-4xl font-serif mb-6 text-zinc-100">ሞያዊ ስነ-ጥበባዊ ጉዕዞና</h3>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light max-w-3xl mx-auto mb-12">
       ### ሞያዊ ስነ-ጥበባዊ ጉዕዞና

ንሕና **Nahom Film Production**፣ ሕብረተሰብና፣ ባህልና፣ ልምድታትናን ክቡራት ዝክርታት ብፍሉይ ስነ-ጥበባዊ መነጽር ንምስናድን ንምዕቃብን  ብዘመናዊ Film Production Studio ኢና። ንነፍስወከፍ ታሪኽ ብፍሉይ ራእይ፣ ፈጠራን ሓቀኛ ስምዒትን ንቐርጾ፣ ካብ ሓንቲ ቀላል ክሳብ ዝዓበየ ፍጻመ ድማ ዘይርሳዕ ታሪኽ ንፈጥር።

ኣብ **Wedding, Bridal, Baby Shower, Documentary,film, Drama, Music Production** ከምኡውን ኣብ ካልኦት ሞያዊ ቀረጻታት፣ ነፍሲ ወከፍ ስእሊን ፍሬምን ሓደ ትርጉም ከምዘለዎ ንኣምን። ስለዚ ካብ ምምራጽ ኣንግል ካሜራ፣ ብርሃንን ድምጽን፣ ክሳብ ኤዲቲንግ፣ ኮለር ግሬዲንግን መወዳእታ ምቕራጽን፣ ነፍሲ ወከፍ ዝርዝር ብጥንቃቐን ብልዑል ሞያዊ ደረጃን ንሰርሖ።

እቲ ዕላማና ጥራይ ስእል ምስናድ ወይ ቪድዮ ምቕራጽ ኣይኮነን። እቲ ንምስናድ ዝደልዮ ነገር **ስምዒት** እዩ። እቲ ፍሉይ ሓጎስ፣ እቲ ናይ ፍቕሪ እዋን፣ እቲ ንብዓት፣ እቲ ሳሕቲ ዘይድገም ፍጻመን እቲ ኣብ ድሕሪ ካሜራ ዝርከብ ጉዕዞን — ኩሉ ኣብ ሓደ ታሪኽ ንእክቦ።

ንነፍስወከፍ ደንበኛና ከም ሓደ ታሪኽ እምበር ከም ሓደ ፕሮጀክት ጥራይ ኣይንርእዮን። ምኽንያቱ እቲ ዝተቐረጸ ፍሬም ሎሚ ስእሊ ክኸውን ይኽእል፣ ጽባሕ ግን ክቡር ትውስታ፣ ድሕሪ ዓመታት ድማ ክትርእዮ እንከለኻ እቲ ናይ ቀደም ስምዒት እንደገና ዝመልስ ዘልኣለማዊ ታሪኽ ክኸውን ንደሊ።

ኣብ **Nahome Film Production** ቴክኖሎጂን ስነ-ጥበብን ብሓደ ንደርሶም። ዘመናዊ መሳርሒታትን ሞያዊ ክእለትን ተጠቒምና፣ ናይ ሕብረተሰብና ታሪኻት ብሓድሽ፣ ልዩን ዘይርሳዕን መንገዲ ንገልጾም። ካብ ሓሳብ ክሳብ መወዳእታ ፕሮዳክሽን፣ ኩሉ ስራሕና ብፍቕሪ፣ ፈጠራን ተወፋይነትን ይምራሕ።

**ሓደ ፍሬም። ሓደ ስምዒት። ሓደ ታሪኽ። ንዘልኣለም።**

ንሕና ትውስታታት ጥራይ ኣይንቐርጽን — **ታሪኽ ንፈጥር።**

        </p>
      </section>

      {/* 3. Professional Photo Gallery / Album Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full mb-20">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[#ff6600] block mb-2">
            Professional Portfolio
          </span>
          <h3 className="text-3xl font-serif text-zinc-100">Our Production Gallery & Album</h3>
          <div className="w-12 h-[1px] bg-[#ff6600]/40 mx-auto mt-3"></div>
        </div>

        {/* ስእሊታት በብናቱ ሽም ብጽቡቕ ግሪድ ዝተሰርዐ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Gallery Item 1 */}
          <div className="group relative bg-zinc-950 border border-[#ff6600]/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop" 
                alt="Cinematography Setup" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-left bg-gradient-to-t from-zinc-950 to-zinc-900/80">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff6600]">Cinematography</span>
              <h4 className="text-lg font-serif text-zinc-100 mt-1">Professional 4K Shooting</h4>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="group relative bg-zinc-950 border border-[#ff6600]/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" 
                alt="Wedding Production" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-left bg-gradient-to-t from-zinc-950 to-zinc-900/80">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff6600]">Wedding Stories</span>
              <h4 className="text-lg font-serif text-zinc-100 mt-1">Luxury Wedding Moments</h4>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="group relative bg-zinc-950 border border-[#ff6600]/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop" 
                alt="Studio Lighting & Production" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-left bg-gradient-to-t from-zinc-950 to-zinc-900/80">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff6600]">Studio Session</span>
              <h4 className="text-lg font-serif text-zinc-100 mt-1">Creative Lighting & Portrayal</h4>
            </div>
          </div>

          {/* Gallery Item 4 */}
          <div className="group relative bg-zinc-950 border border-[#ff6600]/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=800&auto=format&fit=crop" 
                alt="Documentary Film" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-left bg-gradient-to-t from-zinc-950 to-zinc-900/80">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff6600]">Documentary</span>
              <h4 className="text-lg font-serif text-zinc-100 mt-1">Cultural Heritage Stories</h4>
            </div>
          </div>

          {/* Gallery Item 5 */}
          <div className="group relative bg-zinc-950 border border-[#ff6600]/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop" 
                alt="Artistic Directing" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-left bg-gradient-to-t from-zinc-950 to-zinc-900/80">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff6600]">Art Direction</span>
              <h4 className="text-lg font-serif text-zinc-100 mt-1">Visual Arts & Design</h4>
            </div>
          </div>

          {/* Gallery Item 6 */}
          <div className="group relative bg-zinc-950 border border-[#ff6600]/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop" 
                alt="Post Production" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-left bg-gradient-to-t from-zinc-950 to-zinc-900/80">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff6600]">Post Production</span>
              <h4 className="text-lg font-serif text-zinc-100 mt-1">Editing & Color Grading</h4>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}