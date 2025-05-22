"use client";
import React, { useState, useEffect } from "react";

const greetings = [
  "Happy Birthday Choi!", // English
  "생일 축하해 최!", // Korean
  "Maligayang Kaarawan Choi!", //Filipino
  "生日快乐!", // Chinese
  "おたおめ、チョイーちゃん!", // Japanese
  "Selamat hari jadi Choi!", // Malay
  "Chúc mừng sinh nhật Choi!", // Vietnamese
  "عيد ميلاد سعيد تشوي!", // Arabic
];

const Greetings = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="greeting-container">
      <video
        autoPlay
        loop
        muted
        className="background-video shadow-2xl shadow-baizhu-color"
      >
        <source
          src="http://localhost:8000/characterDemoBaizhu (1).mp4"
          type="video/mp4"
        ></source>
      </video>

      <h1 className="fade">{greetings[index]}</h1>
    </div>
  );
};

export default Greetings;
