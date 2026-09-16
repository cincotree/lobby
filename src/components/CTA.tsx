const CAL_URL = "https://cal.com/siliconsenthil";

export default function CTA({
  label = "Book a call",
  variant = "solid",
}: {
  label?: string;
  variant?: "solid" | "outline" | "light";
}) {
  const styles = {
    solid: "bg-primary text-white hover:bg-primary-dark",
    outline: "border border-primary text-primary hover:bg-primary/5",
    light: "bg-white text-primary hover:bg-gray-100",
  }[variant];

  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-md px-6 py-3 text-sm font-medium transition-colors ${styles}`}
    >
      {label}
    </a>
  );
}
