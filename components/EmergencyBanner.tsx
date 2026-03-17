import { CLINIC } from "@/lib/constants";

export function EmergencyBanner() {
  return (
    <div
      className="sticky top-0 z-50 bg-primary py-2 px-4 text-center text-sm font-semibold text-white"
      role="banner"
      aria-label="Emergency contact"
    >
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-2 md:gap-4">
        <span className="material-symbols-outlined text-sm" aria-hidden>
          emergency
        </span>
        <span>
          Call now:{" "}
          <a
            href={`tel:${CLINIC.phonePrimaryRaw}`}
            className="underline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
          >
            {CLINIC.phonePrimary}
          </a>
        </span>
      </div>
    </div>
  );
}
