import Container from "@/app/components/ui/Container";

const stats = [
  {
    value: "10,000+",
    label: "Lives Impacted",
  },
  {
    value: "150+",
    label: "Community Projects",
  },
  {
    value: "500+",
    label: "Active Volunteers",
  },
  {
    value: "20+",
    label: "Partner Organizations",
  },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-emerald-600 py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid h-full grid-cols-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="border-r border-white" />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Measurable Impact
          </h2>

          <p className="text-white/80">
            Transparency and measurable results are at the heart of our mission.
            Together we continue creating lasting change.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <h3 className="mb-2 text-5xl font-bold text-yellow-400">
                {stat.value}
              </h3>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
