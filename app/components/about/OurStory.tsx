import Image from "next/image";

import Container from "@/app/components/ui/Container";

const story = [
  "Founded in 2010 by a group of passionate educators and community leaders, the Excellent People Foundation began with a simple but powerful belief—that human potential is the world's most valuable resource.",

  "What started as a small literacy initiative has grown into a multi-faceted organization serving communities through education, healthcare, and empowerment programs.",

  "Today we continue bridging the gap between talent and opportunity by creating sustainable solutions that improve lives and strengthen communities.",
];

export default function OurStory() {
  return (
    <section id="story" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Since 2010
            </span>

            <h2 className="mt-4 mb-8 text-4xl font-bold text-gray-900">
              Our Journey of Excellence
            </h2>

            <div className="space-y-6 text-lg leading-8 text-gray-600">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image */}

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl transition duration-500 hover:rotate-0 lg:rotate-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAATqCRJ6rpmh94qwevJkjqbxyh2MpGhRFoTz5aGJx_z3N2UA1-2dPq6--gCR68La-ttRhn-8lPTw1K2mMQ9cyMO402eSOU6jiWFe5ZqWoOFG828ri9DqpTfvMnfN7pJgwlPGO4X9_MePrxo8pRRN9_PAP_W_em__Eu-2cdl9HCUVU4PQa20NsaPyHsDAU8u5C_3l8LhzNdg-JsCexVwwR0vfDgC4RPf8w5EJMyZSuiFUTsFssJp-pYhA"
                alt="Excellent People Foundation leadership"
                width={700}
                height={700}
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-emerald-600 p-8 text-white shadow-xl lg:block">
              <p className="text-4xl font-bold">14+</p>
              <p className="mt-1 text-sm uppercase tracking-wider">
                Years of Impact
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
