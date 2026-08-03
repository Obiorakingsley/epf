import Image from "next/image";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const milestones = [
  {
    year: "2010",
    title: "The Foundation",
    description:
      "Excellent People Foundation was established with a pilot educational program serving 50 local families.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-n1_usdPdTsqWOqTESPP7-rIunCnjIqRimeULgB_DMy3hamSiFISxahyVgzxG2aK2WIaWIBFqPxLwWxQ9T-NQ4rhv6He8332sfkmsKks_0hQ_WCXYLBsn9etA53eKNOXVljSrCDjTrP5aln7oqRwLq1fXLjpTgVy_YuIVX5ny5pEXAhvJl3ZsoPDlagNw_c4UYqZxEAuC--wrtG5xM8XE0z3SHv31SGJI8zP0CD4sICxaRy_N67o4A",
  },
  {
    year: "2015",
    title: "First Community Centre",
    description:
      "Opened our flagship centre providing healthcare, vocational training and legal support under one roof.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACb6Yu-rtchm3VufSSjLXfHfxfSKQ_JpS12xkT8ANseCNv7oqjs3wJ-4dyFnc-MMdP76cUY8aWfLcbvM_Pbzdpm1Vs_5LXLC-5zHxy1cyye05JWVKbQucs_r8Orc6iq2uT3qjxblSv_ePSnn7jGG-EtCySAfRylBpWdIHycPlvh-avJtGnIpFbNXylyUMROuaogWFcquHGI1oq8yWYrb4-2D9zQFHvQnYQZFzrJO-VFPvJLEkEXP0gpg",
  },
  {
    year: "2020",
    title: "Global Reach",
    description:
      "Expanded internationally while using digital platforms to reach more communities than ever before.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEwpAXM87ROHy-hM0dTgqAHOqV7iEPGgJ1udfVu_EMSTasYikPV1a7v82hWZO9MUC1FLRj_SkeVJta4yA-n3wuZnIdF4oEXKeI0xSQ3S5eb82Hcp_KN5qQwhJUAP8w4K08ZupwlDiFD7hAgAecP87SJ5sXAI_miOLTbUUqDyaoREYSOnRJuEYK6kJHkxAp1Puy5hnQMZpU55TokyKQxBFgHzg-lg8h6rCjWY_Y6qyU4WG17de1GupVIA",
  },
];

export default function Timeline() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Our Growth Milestones"
          description="Key moments that shaped our mission and impact."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-300 lg:block" />

          <div className="space-y-20">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <div
                  className={`${
                    index % 2 === 0 ? "lg:text-right" : "lg:order-2"
                  }`}
                >
                  <span className="text-2xl font-bold text-emerald-600">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={700}
                      height={400}
                      className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-emerald-600 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
