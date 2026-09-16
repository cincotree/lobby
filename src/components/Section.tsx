type Tone = "paper" | "alt" | "ink";

const tones: Record<Tone, string> = {
  paper: "bg-white text-foreground",
  alt: "bg-gray-50 text-foreground",
  ink: "bg-primary text-white",
};

export default function Section({
  tone = "paper",
  id,
  className = "",
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${tones[tone]} px-6 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gray-600">{children}</p>
  );
}
