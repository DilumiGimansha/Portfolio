import { Info } from "../User";
import { Heart, ArrowUp } from "lucide-react";
import { assetUrl } from "../assets";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="font-mono border-t border-white/10 bg-bgColor">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-2">

        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3 min-w-fit">
          <img
            src={assetUrl("profile.jpeg")}
            alt={Info.fname}
            className="w-10 h-10 rounded-full object-cover border border-white/20"
          />
          {/* <span className="text-textColor text-sm italic whitespace-nowrap">
            {Info.fname}
          </span> */}
        </div>

        {/* Center: Copyright */}
        <p className="text-textColor text-sm text-center flex flex-wrap items-center justify-center gap-1 opacity-80">
          All rights reserved &copy; {new Date().getFullYear()}
          <span className="opacity-40 mx-1">|</span>
          Made with
          <Heart
            size={14}
            className="text-primaryColor fill-primaryColor mx-0.5"
          />
          by {Info.fname}
        </p>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
            bg-gradient-to-br from-cyan-400 to-teal-500
            text-white shadow-md
            hover:scale-105 hover:shadow-[0_0_16px_rgba(34,211,238,0.5)]
            transition-all duration-300 ease-in-out
          "
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>

      </div>
    </footer>
  );
};

export default Footer;