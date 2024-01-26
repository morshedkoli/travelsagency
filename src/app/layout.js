import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
