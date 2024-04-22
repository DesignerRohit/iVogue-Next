import "../scss/main.scss"
import BootstrapClient from "./Components/BootstrapClient";

export const metadata = {
  title: "IVogue",
  description: "IVogue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
      <BootstrapClient/>
    </html>
  );
}
