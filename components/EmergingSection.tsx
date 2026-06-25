"use client";

const signals = [
  {
    id: "01",
    title: "MEMÓRIA QUE NÃO DESAPARECE",
    body: "Eventos que continuam existindo depois da noite. Não terminam quando acabam.",
  },
  {
    id: "02",
    title: "PRESENÇA REGISTRADA",
    body: "Bandas, DJs, fotógrafos e organizadores deixam de desaparecer depois da postagem.",
  },
  {
    id: "03",
    title: "ARQUIVO EM FORMAÇÃO",
    body: "Algo que cresce sozinho. feito pela cena. feito para a cena.",
  },
  {
    id: "04",
    title: "CONEXÕES INVISÍVEIS",
    body: "o que hoje está espalhado começa a se encontrar.",
  },
];

export default function EmergingSection() {
  return (
    <section className="relative py-32 md:py-40 px-6 border-t border-ash overflow-hidden">

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right, rgba(204,27,27,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-4 mb-4">
          <span className="divider-red" />
          <span className="text-[11px] tracking-[0.5em] uppercase text-bone-dim font-mono">
            O QUE ESTÁ SURGINDO
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl mb-20 leading-tight font-bold text-bone">
          Um sistema em <span className="text-arterial">formação.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ash">

          {signals.map((item) => (
            <div key={item.id} className="bg-void p-8 md:p-10">

              <div className="flex items-start gap-6">

                <span className="text-[11px] text-arterial font-mono">
                  {item.id}
                </span>

                <div>
                  <h3 className="text-sm uppercase text-bone mb-3 font-mono tracking-widest">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-relaxed text-bone-dim font-mono">
                    {item.body}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        <p className="text-[11px] tracking-widest uppercase text-center mt-16 text-bone-dim font-mono">
          — isso ainda está sendo escrito —
        </p>

      </div>
    </section>
  );
}