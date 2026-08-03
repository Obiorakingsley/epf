import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Home,
  Users,
  Venus,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const programs = [
  {
    title: "Education & Scholarships",
    description:
      "Unlocking potential through access to quality education and financial support for bright, underprivileged students.",
    image: "IMAGE_1",
    icon: GraduationCap,
  },
  {
    title: "Youth Empowerment",
    description:
      "Mentoring future leaders through leadership training, civic engagement and personal development.",
    image: "IMAGE_2",
    icon: Users,
  },
  {
    title: "Women Empowerment",
    description:
      "Providing vocational training, mentorship and economic opportunities for women.",
    image: "IMAGE_3",
    icon: Venus,
  },
  {
    title: "Healthcare Outreach",
    description:
      "Delivering healthcare services, medical outreach and health education to underserved communities.",
    image: "IMAGE_4",
    icon: HeartPulse,
  },
  {
    title: "Community Development",
    description:
      "Building stronger communities through collaborative infrastructure and social development projects.",
    image: "IMAGE_5",
    icon: Home,
  },
  {
    title: "Skills & Entrepreneurship",
    description:
      "Equipping individuals with vocational skills and entrepreneurial support to build sustainable businesses.",
    image: "IMAGE_6",
    icon: Briefcase,
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Programs"
            title="Strategic Pillars of Empowerment"
            center={false}
          />

          <p className="max-w-xl text-gray-600">
            Each program is a cornerstone in our mission to build resilient,
            self-sufficient communities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-60">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <Icon className="mb-5 h-10 w-10 text-emerald-600" />

                  <h3 className="mb-4 text-2xl font-semibold">
                    {program.title}
                  </h3>

                  <p className="mb-6 leading-7 text-gray-600">
                    {program.description}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
