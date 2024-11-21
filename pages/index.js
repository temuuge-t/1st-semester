import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="font-main scroll-smooth">
      <nav className="h-16 w-full bg-black flex justify-between px-8 border-white sticky top-0">
        <Image src="/cocacola-logo.png" width={90} height={90} className="object-contain" />
        <div className="font-extralight text-xl flex items-center justify-between texg-grbg-gray-950 w-64">
          <a href="#home">Home</a>
          <a href="">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className="w-full bg-gradient-to-b from-black to-slate-900" id="home">
        <section className="flex">
          <div className="h-screen w-3/5 pl-32 flex-col content-center">
            <p className="text-6xl font-semibold">I'm currently <span>learning</span>
              <br />NextJS!
            </p>
            <p className="w-3/5 font-extralight mt-8 mb-12">Let's go! Yahoo. orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula dui, volutpat sed placerat sit amet, scelerisque sit amet justo. Vestibulum eu consequat magna. Cras efficitur ultricies augue in feugiat.</p>
            <a href="#contact"><div className="w-32 h-12 rounded-lg bg-gradient-to-br from-blue-900 to-sky-900 p-4 font-light hover:-skew-y-3 hover:scale-110 ease-in-out duration-200 flex items-center">Read more ↓</div></a>
          </div>
          <div className="h-screen w-2/5 flex items-center">
            <Image src="/danny.jpg" width={350} height={350} className="rounded-xl" />
          </div>
        </section>
        <div className="h-screen w-full" id="contact">
          <p className="text-5xl font-semibold text-center">Contact me!</p>
          <div className="w-full h-5/6 flex justify-center pt-24 px-8">
            <div className="w-3/5 h-full bg-gray-950 border-b-4 border-blue-900 rounded-xl grid grid-cols-2 justify-items-center pt-12">
              <p className="text-3xl font-medium col-span-2">Email<br /><span className="font-light text-2xl">temuugeteluun@gmail.com</span></p>
              <p className="text-3xl font-medium">Phone<br /><span className="font-light text-2xl">+976 9876 5432</span></p>
              <p className="text-3xl font-medium">FaceBook<br /><span className="font-light text-2xl">My FaceBook</span></p>
              <p className="text-3xl font-medium">Messenger<br /><span className="font-light text-2xl">My X profile</span></p>
              <p className="text-3xl font-medium">Github<br /><span className="font-light text-2xl">My github</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
