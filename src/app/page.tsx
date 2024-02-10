import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <main className="snap-y snap-proximity h-screen w-screen overflow-scroll overflow-x-hidden">
      <Navbar />
      <div className="flex min-h-screen place-items-center justify-center snap-start bg-amber-300 w-screen h-screen">
        <AboutMe />
      </div>
      <div className="flex min-h-screen place-items-center justify-center snap-start bg-violet-300 w-screen h-screen">
        <Gallery />
      </div>
      <div className="flex min-h-screen place-items-center justify-center snap-start bg-sky-300 w-screen h-screen"></div>
    </main>
  );
}
