import React from 'react'

export const ContactSection = () => {
  return (
    <section className="relative min-h-screen w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center">
      <div className="w-full mb-12 flex justify-center">
        <h2
          className="text-7xl font-anek md:text-[10rem] font-bold tracking-tighter
          bg-clip-text text-transparent select-none filter contrast-125 text-center leading-none"
          style={{
            backgroundImage: `linear-gradient(
              135deg, 
              #999999 0%, 
              #ffffff 20%, 
              #999999 40%, 
              #ffffff 50%, 
              #999999 70%, 
              #ffffff 100%
            )`,
          }}
        >
          LET'S GET IN CONTACT
        </h2>
      </div>
    </section>
  );
};