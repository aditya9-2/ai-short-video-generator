import type { Metadata } from "next";
import { Outfit } from "next/font/google"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "./Provider";

const outfit = Outfit({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "AI short video generator",
  description: "the cheapest way to start your short creator career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} antialiased`}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
