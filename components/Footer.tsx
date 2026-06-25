export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ash py-12 px-6">

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">

        <img
          src="/skeletal-freak-logo.png"
          alt="Skeletal Freak"
          className="w-[90px] md:w-[120px] opacity-75"
        />

        <span className="text-[11px] tracking-[0.25em] uppercase text-bone font-mono">
          REGISTRO — CENA — MEMÓRIA
        </span>

        <div className="flex items-center gap-3 text-[11px] md:text-[10px] tracking-[0.25em] uppercase text-bone-dim font-mono">
          <span>SKELETAL FREAK</span>
          <span>•</span>
          <span>© {year}</span>
        </div>

      </div>

    </footer>
  );
}