import { IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";

export function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] flex-col items-center justify-center gap-6"
    >
      <span className="sr-only">Loading portfolio</span>

      <div className="relative flex items-center justify-center">
        <IconCloud iconSlugs={Slugs} />

        <IconHexagon
          className="absolute -z-10 animate-[spin_5s_linear_infinite]"
          size={120}
          color="#64FFDA"
          stroke={1.25}
        />

        <div className="absolute -z-10 animate-pulse font-mono text-6xl font-semibold text-primaryColor drop-shadow-[0_0_18px_rgba(100,255,218,0.55)]">
          D
        </div>
      </div>

      <div className="flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-primaryColor/70">
        <span>LOADING</span>
        <span className="flex items-end gap-1">
          <span
            className="h-1 w-1 animate-bounce rounded-full bg-primaryColor"
            style={{ animationDelay: "-0.3s" }}
          />
          <span
            className="h-1 w-1 animate-bounce rounded-full bg-primaryColor"
            style={{ animationDelay: "-0.15s" }}
          />
          <span className="h-1 w-1 animate-bounce rounded-full bg-primaryColor" />
        </span>
      </div>
    </div>
  );
}