import { BadgeCheck, HeartHandshake, Lightbulb, BarChart3 } from "lucide-react";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with transparency, accountability, and ethical leadership in everything we do.",
    icon: BadgeCheck,
  },
  {
    title: "Compassion",
    description:
      "Empathy guides our decisions, ensuring people remain at the center of every initiative.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation",
    description:
      "We embrace creative thinking and sustainable solutions to solve complex social challenges.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    description:
      "Our success is measured by meaningful, lasting improvements in people's lives.",
    icon: BarChart3,
  },
];

export default function CoreValues() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Values"
          title="The Pillars of Our Work"
          description="Everything we do is guided by these core principles."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-2xl border bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>

                <p className="leading-7 text-gray-600">{value.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
