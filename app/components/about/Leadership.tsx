import Image from "next/image";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const leaders = [
  {
    name: "Amina Yusof",
    role: "Chief Executive Officer",
    quote:
      "Our work is about making the invisible visible through consistent, strategic effort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe4ZSG0Gc3pSL0jfQGjACOaCG7dKj7vkO6ZgL7DpSLB5rTZvD564dPclH_iZJPuJe8azsx-DSdI7WdkiwPOy2cGHOBWL4trSMa8oj1cvVVrBeFZlHYjZ9wznch9QUK0Q_gTVi9txIcgpF01GjGz9g28IaIoPyeChD-7D_CgkWgBfcVKAeNPDEcOxwIT9MX4PHFV45cUlaNozEr-sVV0jbv-n8SQzSo5qVwXaoZ2XzFMnin_opX-glRgA",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Director of Impact",
    quote:
      "Measurable impact is the baseline of our commitment to those we serve.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBobk7bs8ZJpFyJEOolxsdZo0ZzCcYkj0-yqFT9A8DfqP8XkhukBTSpbsziX1ClXOpUx9dxCPb3ZK5aMaOX5e74jWXrnoM2RLLItfA05ReoSZxZkK3br8zans8NgXjHCucINXiQWA9rZaL25PmcDx9JtfldF4RcedUvg_1SktEHbdd3lLzwArUFxmd5NkGx1U4uLiJrDP704MOKoTPaSh4S-kjr6PO_7JoMsi81GHsmsCi9mC62GuZokw",
  },
  {
    name: "Sarah J.",
    role: "Operations Head",
    quote:
      "Operations are the engine of our empathy, turning vision into reality every day.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYr49Z527_MNj_tLDuhkpb7MsYkRLw2YwpvwxoN8Vk1dz0cV40A-kCTxtKG0-RRvaFVR8ppswAAq4UW4Mc3q7sV9oZRGJhZi5nRZPlRPF_LqOE9w4zPfEKzNnpZ1VXIFN19RzVtnX-TIGYlxtPfK5OfjCpcjOqvFHYNbmn5oyNyyOacl_2oe5kkh_0Of92kDOz_TrZpB-JXIS9TJr_8Dcy3XfMNJPvz4FYYSbOitT_7Uo7hrAF-HqOVg",
  },
];

export default function Leadership() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title="Meet Our Leadership"
          description="A team of experienced professionals committed to creating lasting social impact."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="group">
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-emerald-700/90 to-transparent p-6 opacity-0 transition group-hover:opacity-100">
                  <p className="italic text-white">"{leader.quote}"</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold">{leader.name}</h3>

              <p className="mt-1 font-medium text-emerald-600">{leader.role}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
