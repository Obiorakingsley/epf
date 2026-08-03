import Link from "next/link";
import { Handshake, HeartHandshake, Heart } from "lucide-react";

import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

const ways = [
  {
    title: "Become a Volunteer",
    description:
      "Lend your skills and time to local projects and create lasting impact in communities.",
    href: "/volunteer",
    icon: HeartHandshake,
    variant: "outline",
  },
  {
    title: "Make a Donation",
    description:
      "Support scholarships, healthcare outreach, and sustainable community projects.",
    href: "/donate",
    icon: Heart,
    variant: "primary",
    featured: true,
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with us through corporate and organizational partnerships.",
    href: "/partners",
    icon: Handshake,
    variant: "outline",
  },
];

export default function GetInvolved() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-emerald-600">
            Partner in Our Progress
          </h2>

          <p className="text-gray-600">
            Lasting change requires collective action. Choose how you'd like to
            contribute to our mission.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ways.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`rounded-2xl p-10 transition hover:-translate-y-2 ${
                  item.featured
                    ? "bg-emerald-600 text-white shadow-xl"
                    : "border bg-white"
                }`}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                    item.featured
                      ? "bg-white/20"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>

                <p
                  className={`mb-8 leading-7 ${
                    item.featured ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                {item.variant === "primary" ? (
                  <button className="w-full bg-white text-emerald-600 hover:bg-gray-100">
                    Donate Now
                  </button>
                ) : (
                  <button className="w-full">{item.title}</button>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
