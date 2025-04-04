import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/assets/styles/globals.css";  



const inter = Inter ({subsets: ['latin'] });

export const metadata = {
  title: "QT Jet Car Web App | Book a Ride",
  description: "Book a Ride, to have a fun experience on the water",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <main className="mx.auto.max-w-7xl px-4 py-6 sm:px-6 lg:px- 8 ">
          {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
