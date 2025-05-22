"use client";
import React, { useState, useEffect } from "react";

// const wishes = [
//   "HAPPY BIRTHDAY MY FAVORITE SIMP AND BBQ",
//   "what happened",
//   "Happy Birthday Choi and i hope all your wishes come true. Abacchio's piss drink is on me",
//   "happy birthday choii, thank you for being so funny, lovely and precious ❤️ ✨✨✨I LOVE YOU 🥰",
//   "Happy Bday to our beloved, the one and oni - Chus. I'm very greatful to be friend with you for the past one year. Hope you have a great bday filled with all the loves from your friends and family, which you have given us all these time. 💙",
//   "Happy birthday chuchu my amazing friend, hope u have a great year ahead of u",
//   "happy birthday choi i hope lots of gifts come your way cuz it’s almost Christmas too ANDDD make sure to have fun always and BE FREE!! Stay happy all day and all year long, may fortune come your way and love you pookie<3",
//   "Happiest birthday to you Choi! Enjoy your day! ❤️",
// ];
// const person = [
//   "Loki",
//   "tomo",
//   "Kudo",
//   "Amber",
//   "Ayyo",
//   "Sero",
//   "Haru",
//   "Nini",
// ];
// const BulletinWishes = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % wishes.length);
//     }, 3000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="text-sky-400 fade-wishes flex flex-col gap-6 p-10 max-w-3xl">
//       <h1 className="flex-none">{wishes[index]}</h1>
//       <h3 className="flex-none justify-self-end text-right">
//         ~ {person[index]}
//       </h3>
//     </div>
//   );
// };

// export default BulletinWishes;
const quotes = [
  {
    text: "HAPPY BIRTHDAY MY FAVORITE SIMP AND BBQ",
    author: "Loki",
  },
  {
    text: "Happy Birthday Choi and i hope all your wishes come true. Abacchio's piss drink is on me",
    author: "Kudo",
  },
  {
    text: "happy birthday choii, thank you for being so funny, lovely and precious ❤️ ✨✨✨I LOVE YOU 🥰",
    author: "Amber",
  },
  {
    text: "Happy Bday to our beloved, the one and oni - Chus. I'm very greatful to be friend with you for the past one year. Hope you have a great bday filled with all the loves from your friends and family, which you have given us all these time. 💙",
    author: "Ayyo",
  },
  {
    text: "Happy birthday chuchu my amazing friend, hope u have a great year ahead of u",
    author: "Sero",
  },
  {
    text: "happy birthday choi i hope lots of gifts come your way cuz it’s almost Christmas too ANDDD make sure to have fun always and BE FREE!! Stay happy all day and all year long, may fortune come your way and love you pookie<3",
    author: "Haru",
  },
  {
    text: "Happiest birthday to you Choi! Enjoy your day! ❤️",
    author: "Nini",
  },
  {
    text: "HWHt happened",
    author: "Tomo",
  },
  {
    text: "Hello Choi, how are you, I hope you are doing well, even though we don't talk as much or we are no longer in frequent contact, I want you to know that I love you very much and that I have a lot of fun being in call with you, watching you play osu! It is one of the best things I could have witnessed, it's a shame you abandoned the little game but you had a lot of potential. Changing the subject, it's your birthday and I want to tell you that you deserve everything and more, you are a great person and don't let anyone tell you otherwise, remember that everything can be achieved with effort and dedication and you, you have plenty. Happy Birthday :3",
    author: "Elec",
  },
  {
    text: "“hopefully more years to go with each other!”",
    author: "Yae",
  },
];

const QuoteSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-10 relative  w-5/6">
      <h1 className="text-4xl text-center py-15 uppercase tracking-widest">
        Wishes billboard
      </h1>
      {/* Carousel Container */}
      <div className="relative min-h-max overflow-hidden rounded-lg md:h-96">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {quotes.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center items-center flex-col"
            >
              <h1 className="text-3xl">{slide.text}</h1>
              <h3 className="text-2xl py-8 font-semibold">~ {slide.author}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default QuoteSlider;
