// import { Inter } from "next/font/google";

import Layout from "@/components/Layout";
import "../styles/globals.css"
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Niru | Custom Fit For Everyone",
  description: "Clothes that know you, inside and out",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      

        </head>
      
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Layout>{children}</Layout>
      </body>
      
    </html>
  );
}
