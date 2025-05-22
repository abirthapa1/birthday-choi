import Image from "next/image";

const Contacts = () => {
  return (
    <footer className="flex flex-col gap-16 flex-wrap items-center justify-center py-15">
      <h1 className="text-6xl">Special Thanks To</h1>
      <div className="flex gap-10 ">
        <a
          className="flex items-center gap-2"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/"
            alt=""
            width={100}
            height={100}
            className="rounded-full aiu outline outline-offset-2 outline-orange-500 hover:outline-4"
          />
          AIU
        </a>
        <a
          className="flex items-center gap-2"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/"
            alt=""
            width={100}
            height={100}
            className="rounded-full ayyo outline outline-offset-2 outline-blue-500 hover:outline-4"
          />
          Ayyo
        </a>
        <a
          className="flex items-center gap-2"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/"
            alt=""
            width={100}
            height={100}
            className="rounded-full sadii outline outline-offset-2 outline-pink-500 hover:outline-4"
          />
          Sadii
        </a>
        <a
          className="flex items-center gap-2"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/"
            alt=""
            width={100}
            height={100}
            className="rounded-full kudo outline outline-offset-2 outline-green-500 hover:outline-4"
          />
          Kudo
        </a>
      </div>

      <h1 className="text-3xl uppercase">
        and to everyone who contributed to this project
      </h1>
    </footer>
  );
};

export default Contacts;
