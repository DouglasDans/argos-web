import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata = {
  title: "Login - Argos Security",
  description: "Argos Security - Segurança para seu Apto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <ThemeRegistry>
          {children}  
        </ThemeRegistry> 
      </body>
    </html>
  );
}
