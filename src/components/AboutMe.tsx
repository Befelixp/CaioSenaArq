import Image from "next/image";
import caiopassos from "@/lib/caiosena.jpg";

export function AboutMe() {
  return (
    <div className="shadow-2xl rounded-lg bg-slate-50 grid grid-cols-2 w-3/5">
      <Image className="flex" alt="CaioPassos" src={caiopassos} />
      <div className="flex flex-col justify-start">
        <h1 className=" mt-2 font-bold leading-none tracking-tight text-gray-900 md:text-5xl self-center ">
          About Me
        </h1>
        <p className=""></p>
      </div>
    </div>
  );
}

export default AboutMe;
