import Link from "next/link";
import { CLINIC } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <Link
      href={CLINIC.whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 focus-visible:ring-4 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <svg
        fill="currentColor"
        height="32"
        viewBox="0 0 24 24"
        width="32"
        aria-hidden
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207l-.695 2.54 2.599-.682c.884.581 1.908.967 2.839.967 3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.586-5.767-5.768-5.767zm3.387 8.263c-.147.412-.852.793-1.177.844-.325.051-.645.088-1.854-.393-1.458-.58-2.397-2.051-2.47-2.148-.072-.097-.597-.793-.597-1.513 0-.719.375-1.073.509-1.219.135-.146.294-.183.393-.183.097 0 .196.001.282.005.088.004.208-.033.325.247.117.28.4.975.435 1.047.035.073.058.158.01.254-.048.096-.073.158-.147.243-.074.086-.154.192-.22.273-.073.085-.15.177-.065.325.085.147.375.618.805 1.001.554.492 1.022.645 1.17.719.146.073.232.06.317-.037.085-.097.368-.426.467-.573.097-.147.196-.122.324-.074.129.049.817.385.958.455.142.071.236.106.27.165.035.058.035.339-.113.751z" />
      </svg>
    </Link>
  );
}
