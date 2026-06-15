import React from 'react';

const iframeSrcs = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7274402553889529856?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7274405552519045120?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7319235511162740737?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7377047166399393792?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7253662087439081472?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7204114240675143682?collapsed=1"
];

const FeaturedPosts = () => {
  return (
    <section id="featured-posts" data-aos="fade-up" className="w-full max-w-7xl mx-auto py-24 px-6 sm:px-10 z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 tracking-tight">
          Recent Activity
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
          Featured posts, updates, and professional insights from my LinkedIn.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-10 pt-4 px-4 -mx-4 gap-6 sm:gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {iframeSrcs.map((src, index) => (
          <div 
            key={index} 
            className="snap-center shrink-0 w-[320px] sm:w-[400px] h-[550px] bg-white rounded-2xl border border-white/10 overflow-hidden shadow-[0_10px_30px_rgba(20,184,166,0.15)] hover:shadow-[0_10px_40px_rgba(20,184,166,0.3)] transition-all duration-300"
          >
            <iframe 
              src={src} 
              height="100%" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen="" 
              loading="lazy"
              title={`Embedded LinkedIn post ${index + 1}`}
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
