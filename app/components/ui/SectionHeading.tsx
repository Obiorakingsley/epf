interface Props {
  eyebrow: string;
  title: string;
  center?: boolean;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div className={center ? "text-center mb-14" : "mb-14"}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-4xl font-bold text-black">{title}</h2>
    </div>
  );
}
