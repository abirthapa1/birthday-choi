import Navbar from "@/components/navbar";
import CharacterCard from "@/components/Character-Card";
import Contacts from "@/components/Contacts";
// import ImageSlider from "@/components/ImageSlider";

import QuoteSlider from "@/components/QuoteSlider";

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_1fr_200px] items-center min-h-screen p-8 pb-20 gap-24 sm:p-10 font-mono">
      <main className="flex flex-col gap-16 row-start-2 items-center">
        <Navbar />
        <CharacterCard />
        <QuoteSlider />
        <Contacts />
      </main>

      <div
        className="row-start-3 items-center text-center text-4xl text-blue"
        id="baizhu"
      >
        HAPPIEST BIRTHDAY CHOI AGAIN THIS WAS TO BE GIVEN LAST YEAR AND I AM
        SORRY FOR IT TO BE DELAYED
      </div>
    </div>
  );
}
