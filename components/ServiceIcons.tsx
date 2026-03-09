import type { ReactElement } from "react";
import type { ServiceAccent } from "@/lib/constants";

const iconClass = "w-8 h-8 shrink-0";

export function ServiceIconRootCanal({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        d="M7 3C7 3 4 5 4 10C4 15 7 18 7 21M17 3C17 3 20 5 20 10C20 15 17 18 17 21M12 3V21M9 7H15M9 12H15M9 17H15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceIconLaser({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceIconWhitening({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        d="M12 3V4M12 20V21M4 12H3M21 12H20M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceIconImplant({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <rect
        height="7"
        rx="1"
        strokeLinecap="round"
        width="12"
        x="6"
        y="14"
      />
      <path
        d="M9 14V11C9 9.34315 10.3431 8 12 8V8C13.6569 8 15 9.34315 15 11V14"
        strokeLinecap="round"
      />
      <path d="M12 3V8" strokeLinecap="round" />
      <path d="M10 5H14" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceIconOrthodontics({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M4 10C4 10 6 8 12 8C18 8 20 10 20 10" strokeLinecap="round" />
      <path d="M4 14C4 14 6 16 12 16C18 16 20 14 20 14" strokeLinecap="round" />
      <rect
        fill="currentColor"
        fillOpacity="0.1"
        height="10"
        rx="1"
        width="2"
        x="7"
        y="7"
      />
      <rect
        fill="currentColor"
        fillOpacity="0.1"
        height="10"
        rx="1"
        width="2"
        x="11"
        y="7"
      />
      <rect
        fill="currentColor"
        fillOpacity="0.1"
        height="10"
        rx="1"
        width="2"
        x="15"
        y="7"
      />
    </svg>
  );
}

export function ServiceIconCosmetic({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        strokeLinecap="round"
      />
      <path
        d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
        strokeLinecap="round"
      />
      <path
        d="M15 9L19 5M5 19L9 15M19 19L15 15M5 5L9 9"
        opacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServiceIconPediatric({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10H9.01M15 10H15.01" strokeLinecap="round" strokeWidth="2" />
      <path
        d="M8 15C8 15 9 17 12 17C15 17 16 15 16 15"
        strokeLinecap="round"
      />
      <path d="M12 3C14 3 15 4 15 4" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceIconPreventive({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SERVICE_ICONS: Record<
  string,
  (props: { className?: string }) => ReactElement
> = {
  "root-canal": ServiceIconRootCanal,
  laser: ServiceIconLaser,
  whitening: ServiceIconWhitening,
  implants: ServiceIconImplant,
  orthodontics: ServiceIconOrthodontics,
  cosmetic: ServiceIconCosmetic,
  pediatric: ServiceIconPediatric,
  preventive: ServiceIconPreventive,
};

export function ServiceIcon({
  serviceId,
  accent,
}: {
  serviceId: string;
  accent: ServiceAccent;
}) {
  const Icon = SERVICE_ICONS[serviceId];
  if (!Icon) return null;
  return <Icon />;
}
