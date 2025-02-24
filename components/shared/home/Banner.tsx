import Image from "next/image";
import Services from "./Services";
import crousal from "@/assets/images/crousal.png";
import { Search } from "lucide-react";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Banner = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="relative mb-12 rounded-xl overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Image
            src={crousal}
            alt="Hero background"
            width={800}
            height={400}
            className="object-cover w-full h-[400px]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Hi, I am ATHARVA
          </h1>
          <p className="text-xl text-white mb-4">
            I am a freelance designer & developer
          </p>
          <div className="flex w-full max-w-md">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a service"
                className="w-full pl-10 pr-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-bold">
              Search
            </button>
          </div>
        </div>
      </section>
      <Services />
      <Featured />
      <Testimonials />
    </main>
  );
};

export default Banner;
