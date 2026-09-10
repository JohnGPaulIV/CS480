import "./globals.css";

export const metadata = {
  title: "CS 480 Digital Archive — John Gilbert Paul IV",
  description:
    "A digital archive of coursework built by John Gilbert Paul IV for CS 480.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
