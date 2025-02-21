import "./globals.css";
import Nav from "@/Components/Nav";
import Provider from "@/Components/Provider";
import { ProductProvider } from "@/Components/ProductProvider";
export const metadata = {
  title: "ecom",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="">
        <Provider>
          <main className=" ">
            <Nav />
            <div className=" mx-auto max-w-[1300px]">{children}</div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
