import "./globals.css";
import type { ReactNode } from "react";
import { NavBar } from "../components/NavBar";

export const metadata = {
  title: "Bravemarines",
  description: "Premium maritime recruitment platform"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
