import Image from "next/image";

import Container from "@/app/components/ui/Container";

export default function ProgramsHero() {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWxbH5zilNEztNUmPcZB45XS4c4EaiXMyVMgUDNsgkIXss07C7icnt4VWVlr8-LvM7qynlioU8VJy7wtFJjVZWKz1S675YsU686XsJdZPZbCeOHcZMI8MCpnJSbqryXmhMEY521cSSVJ9QR17-xRRnwAf94gCqVj2evKq_QqdhbiDlfZLFEGhQUWtumYpnqpQ6EVPpSVSOZo99o24wjEFQup_GymnJxePrq5AGOgOFoaSD4wKJkn4XVw"
        alt="Community"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-emerald-700/70" />

      <Container className="relative z-10">
        <div className="max-w-2xl text-white">
          <span className="mb-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700">
            Our Mission in Action
          </span>

          <h1 className="mb-6 text-5xl font-bold">Our Programs</h1>

          <p className="text-lg leading-8 text-white/90">
            Through sustainable initiatives and strategic partnerships, we
            empower individuals to reach their full potential. Our programs are
            designed to address the root causes of poverty and inequality while
            building stronger communities.
          </p>
        </div>
      </Container>
    </section>
  );
}
