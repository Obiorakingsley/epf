import Link from "next/link";
import { ArrowRight, GraduationCap, HeartPulse, Leaf } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const programs = [
  {
    title: "Education for All",
    description:
      "Providing accessible learning resources, vocational training, and scholarships to children and adults in underserved regions.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Access",
    description:
      "Bridging the gap in healthcare through mobile clinics, hygiene education, and sustainable medical infrastructure development.",
    icon: HeartPulse,
  },
  {
    title: "Sustainable Living",
    description:
      "Empowering families with clean water solutions, renewable energy, and modern agricultural techniques for long-term stability.",
    icon: Leaf,
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-24 py-stack-lg max-w-container-max mx-auto px-margin-desktop">
      <Container>
        <SectionHeading eyebrow="What We Do" title="Transformative Programs" />

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="group rounded-3xl border border-gray-400 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 transition group-hover:bg-emerald-600">
                  <Icon className="h-8 w-8 text-emerald-600 group-hover:text-white" />
                </div>

                <h3 className="mb-3 text-2xl font-semibold">{program.title}</h3>

                <p className="mb-6 leading-7 text-gray-600">
                  {program.description}
                </p>

                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
