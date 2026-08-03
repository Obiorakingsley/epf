import { Flag, Eye } from "lucide-react";

import Container from "@/app/components/ui/Container";

const items = [
  {
    title: "Our Mission",
    description:
      "To catalyze systemic change by providing underserved communities with the tools, knowledge, and support systems necessary to break cycles of poverty and achieve lasting excellence.",
    icon: Flag,
    featured: false,
  },
  {
    title: "Our Vision",
    description:
      "A world where every individual, regardless of their background, has the opportunity to realize their full potential and contribute meaningfully to society.",
    icon: Eye,
    featured: true,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`rounded-2xl p-10 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.featured
                    ? "bg-emerald-600 text-white"
                    : "border bg-white"
                }`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
                    item.featured
                      ? "bg-white/20"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-3xl font-bold">{item.title}</h3>

                <p
                  className={`leading-8 ${
                    item.featured ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
