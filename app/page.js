"use client";
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import OurTeam from '@/components/OurTeam';
import Gallery from '@/components/Gallery';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="p-0">
        <section id="Home" className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/Images/Mun-Pitch.jpg)' }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-20 text-white">
            <div className="mb-8 flex flex-col items-center gap-4 text-center">
              <p className="rounded-full bg-red-600/95 px-6 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-lg shadow-red-900/30">
                Red Deals
              </p>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Welcome to </p>
                    <div className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                      MUNUNCHESTER UNITED
                    </div>
              <p className="max-w-3xl text-base text-gray-200 md:text-lg lg:text-xl">
                A red dose in the center, full of passion and power.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#AboutUs"className="btn btn-outline btn-lg border-white text-white hover:bg-white/10">About Us</a>
              <a href="#Gallery" className="btn btn-outline btn-lg border-white text-white hover:bg-white/10">Gallery</a>
            </div>

            <div className="mt-auto pt-12">
              <div className="overflow-hidden border-t border-white/20 py-3">
                <div className="flex min-w-full animate-marquee whitespace-nowrap gap-14 text-sm font-semibold uppercase tracking-[0.2em] text-red-200 md:text-base">
                  <span>WE ALWAYS WIN AND WIN</span>
                  <span>WE ALWAYS WIN AND WIN</span>
                  <span>WE ALWAYS WIN AND WIN</span>
                  <span>WE ALWAYS WIN AND WIN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="AboutUs" className="scroll-mt-18 bg-white px-4 py-16 shadow-lg">
          <AboutUs />
        </section>
        <section id="OurTeam" className="scroll-mt-20 bg-white px-4 py-16 shadow-lg mt-10">
          <OurTeam />
        </section>
        <section id="Gallery" className="scroll-mt-20 bg-white px-4 py-16 shadow-lg mt-10">
          <Gallery />
        </section>
      </main>
    </>
  );
}
