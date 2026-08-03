import { Globe, HeartHandshake, Users } from "lucide-react";
import Container from "../ui/Container";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "People Helped",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Communities Reached",
  },
  {
    icon: HeartHandshake,
    value: "1,200+",
    label: "Active Volunteers",
  },
];

export default function ImpactStats() {
  return (
    <section className="-mt-16 relative z-20">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-gray-400 bg-white p-8 shadow-2xl md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <Icon size={47} className="mb-4 text-emerald-600" />

                <h2 className="text-5xl font-bold text-emerald-600">
                  {stat.value}
                </h2>

                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gray-700">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
