import Link from "next/link";
import { Mail, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tighter text-white">TIZE<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">MAYO</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              La destination ultime pour les maillots de football de la Coupe du Monde 2026. Design futuriste, qualité premium, expérience immersive.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-500/20 hover:text-teal-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-500/20 hover:text-teal-400 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-teal-500/20 hover:text-teal-400 transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Boutique</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/shop" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Tous les maillots</Link></li>
              <li><Link href="/collections" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Éditions Limitées</Link></li>
              <li><Link href="/nations" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Par Nation</Link></li>
              <li><Link href="/promos" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Promotions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/faq" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/livraison" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Livraison & Retours</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Nous Contacter</Link></li>
              <li><Link href="/suivi" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Suivi de commande</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Tizemayo. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/terms" className="hover:text-white transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
