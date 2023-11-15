import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const localFontWoff = localFont({
  src: "../public/fonts/font.woff2",
});

export const poppinsFont = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
