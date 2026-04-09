import Hero3D from "@/components/Hero3D";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-teal-500/30">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-8 container mx-auto">
        <Hero3D />

        {/* Featured Section */}
        <section className="mt-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                Collections <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Exclusives</span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                Découvrez les modèles haute performance imaginés pour les plus grandes nations. Tissus respirants, design aérodynamique et détails holographiques.
              </p>
            </div>
            <Link href="/shop" className="mt-6 md:mt-0 flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium group">
              Voir tout le catalogue 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-500 flex flex-col">
                <div className="h-64 bg-gradient-to-br from-gray-900 to-black w-full relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                  {/* Placeholder for actual product image */}
                  <div className="text-gray-600 font-mono text-sm uppercase tracking-widest z-10">Maillot Preview {item}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1 block">Aero-Knit V{item}</span>
                      <h3 className="text-xl font-bold text-white">Édition Domicile - Nation {item}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                    <Star size={14} className="text-gray-600" />
                    <span className="text-xs text-gray-400 ml-1">(42 avis)</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold">120 €</span>
                    <button className="px-4 py-2 bg-white text-black hover:bg-teal-400 hover:text-black font-semibold rounded-lg transition-colors text-sm">
                      Acheter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
