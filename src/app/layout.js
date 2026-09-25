import "../index.css";
import "../App.css";

export const metadata = {
  title: "Maxime Tancrède — CV",
  description: "Portfolio et CV de Maxime Tancrède, développeur informatique.",
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="App">{children}</div>
      </body>
    </html>
  );
}
