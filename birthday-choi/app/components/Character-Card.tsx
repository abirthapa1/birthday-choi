"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CharacterCard = () => {
  const [activeSection, setActiveSection] = useState("About");

  // Content for each section
  const contentMap: { [key: string]: JSX.Element } = {
    About: (
      <div>
        <h3 className="text-yellow-500 text-lg">S Rank</h3>
        <h1 className="text-3xl font-bold my-2">
          CHOI A.K.A
          <br />
          <span className="text-[#a7d0a9]">BAIZHU&lsquo;S MEDICINE</span>
        </h1>

        <p className="text-gray-300 leading-6 w-4/5">
          Choi AKA Baizhu&lsquo;s medicine is a discord mod for itspaikon, wrio
          mains and a famous discord star having connections from all over the
          world be it USA, Canada, Brazil, Germany, Vietnam, Malaysia, India and
          the 188 countries that I didn&lsquo;t mention she has a global reach
          having the title &rdquo;Mrs. Worldwide&ldquo;. Also known for her
          great edits and artistic skills, u would see it every now and then on
          her tiktok (so drop that tiktok id). Matter of fact she does YT as
          well but won&lsquo;t tell us her YT channel (sadge).
        </p>
      </div>
    ),
    Affiliation: (
      <div>
        <h3 className="text-yellow-500 text-lg">S Rank</h3>

        <h1 className="text-3xl font-bold my-2">
          CHOI
          <br />
          <span className="text-[#a7d0a9]">AFFILIATION</span>
        </h1>
        <ul className="text-gray-300 leading-6 w-4/5">
          <li>Great FRIEND!!!!! (MOST IMP)</li>
          <li>EXCEPTIONAL MODERATOR</li>
          <li>Famous Star in itspaikon</li>
          <li>
            Expert in exploration (<s>by that I mean in genshin</s>)
          </li>
          <li>
            Rich ASF (<s>information trust ~kudo</s>)
          </li>
          <li>
            IRL midorima (<s>source of trust herself</s>) as in shooting
            3&lsquo;s
          </li>
          <li>Exceptional STAND USER (gotta add JOJO SMH)</li>
        </ul>
      </div>
    ),
    Status: (
      <div>
        <h3 className="text-yellow-500 text-lg">S Rank</h3>
        <h1 className="text-3xl font-bold my-2">
          CHOI
          <br />
          <span className="text-[#a7d0a9]">STATUS</span>
        </h1>

        <ul className="text-xl font-bold text-gray-300 leading-6 w-4/5">
          <li>likes seokjin</li>
          <li>likes baizhu</li>
          <li>likes and married to zayne</li>
          <li>likes midorima</li>
          <li>all in all 2d men with glasses</li>
          <li>likes all one piece men (source ~choi)</li>
        </ul>
      </div>
    ),
    Relationships: (
      <div>
        <h3 className="text-yellow-500 text-lg">S Rank</h3>
        <h1 className="text-3xl font-bold my-2">
          CHOI A.K.A
          <br />
          <span className="text-[#a7d0a9]">RELATIONSHIPS</span>
        </h1>
        <p className="text-gray-300 leading-6 w-4/5">
          Yup u read it right, it is indeed what&lsquo;s choi&lsquo;s
          relationship as of now. Well to be honest when I was writing about
          this even I was amazed with the information provided to me. Her love
          for &rdquo;2D MEN&ldquo; is let&lsquo;s say very good. As you saw in
          status most of them wear glasses and/or a doctor. So we definitely see
          a pattern here.
        </p>
      </div>
    ),
    Skills: (
      <div>
        <h1 className="text-yellow-500 text-lg">S Rank</h1>
        <h1 className="text-3xl font-bold my-2">
          CHOI
          <br />
          <span className="text-[#a7d0a9]">SKILLS</span>
        </h1>
        <p className="text-gray-300 leading-6 w-4/5">
          Well this section was the easiest to write about. Has a lot of notable
          skills and if started naming them it won&lsquo;t stop so we will keep
          it short and simple. A &rdquo;world renowned&ldquo; artist,
          Exceptional Singer/Rapper, Top-tier gamer, Professional Yapper(
          <s>C.AI</s>), God-tier Editing skills,{" "}
          <b>ONE OF THE BEST ASSETS TO &rdquo;THE COMPANY&ldquo;</b>, and ofc
          kindest, caring, hardworking person
        </p>
      </div>
    ),
  };

  return (
    <div className="character-card shadow-2xl rounded-lg flex items-center justify-center w-full h-screen bg-center bg-cover opacity-80 text-white">
      {/* Sidebar / Navbar */}
      <div className="relative flex justify-between w-11/12 max-w-12xl p-5 bg-black/60 rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection} // Ensures the animation triggers on content change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 40 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
            className="flex-1 p-5 main-card"
          >
            {contentMap[activeSection]}
          </motion.div>
        </AnimatePresence>
        <aside className="flex-1 p-5 bg-white/10 rounded-lg text-right text-xl">
          <div className="flex flex-col items-end h-11/12 space-y-3">
            {Object.keys(contentMap).map((section) => (
              <a
                key={section}
                onClick={() => setActiveSection(section)}
                className="cursor-pointer transition-all duration-500 hover:text-yellow-500 hover:text-2xl font-bold"
              >
                {section}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CharacterCard;
