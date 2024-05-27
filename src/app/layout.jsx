import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import VLibrasClientContainer from "@/ui/VLibrasClientContainer";

export const metadata = {
  title: "Login - Argos Security",
  description: "Argos Security - Segurança para seu Apto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased" style={{fontSize: '24px'}}>
        <ThemeRegistry>
           {children}
        </ThemeRegistry>
        <VLibrasClientContainer/>
      </body>
    </html>
  );
}
