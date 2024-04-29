import "../scss/main.scss"


import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import BootstrapClient from "./Components/BootstrapClient";

export const metadata = {
  title: "iVogue",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
      <BootstrapClient/>
    </html>
  );
}
