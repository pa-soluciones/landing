import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="legal-header">
        <div className="container">
          <Link href="/" aria-label="Volver al inicio">
            <Image src="/logo-alt.svg" alt="PAS Piedra Angular Solutions" width={200} height={60} priority />
          </Link>
        </div>
      </header>
      <main className="legal-main">
        <article className="container legal-content">{children}</article>
      </main>
      <Footer />
    </>
  );
}
