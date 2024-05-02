import "~/styles/globals.css";
import { AppContextProvider } from "./context/state";

import { Nunito_Sans } from "next/font/google";
import { Navbar } from "./_components/Navbar";

const nunito = Nunito_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Countries app",
  description: "Generated by okori",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style></style>
      </head>
      <body className={`font-nunito ${nunito.variable}`}>
        <AppContextProvider>
          <Navbar />
          <main className="dark:bg-Primary-200 h-lvh px-8 py-8">
            {children}
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
//
