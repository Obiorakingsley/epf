import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition",
    {
      "bg-emerald-600 text-white hover:bg-emerald-700": variant === "primary",

      "border border-white text-white hover:bg-white hover:text-black":
        variant === "secondary",
    },
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
