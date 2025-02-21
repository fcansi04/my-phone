import "./globals.css";
import Nav from "@/Components/Nav";
import Provider from "@/Components/Provider";

export const metadata = {
  title: "MyPhone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Provider>
          <main>
            <Nav />
            <div className=" mx-auto max-w-[1300px]">{children}</div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
