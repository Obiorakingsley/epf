import Image from "next/image";
import { ArrowDown } from "lucide-react";

import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[820px] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCig3x1ra4thHeAGIP5pAcQYD7TR0iY-wZCbg5N0bj6BixqDHHl1caKL-nja0KO9Qy_Za_AhzxgUSDc8-76OFIoDzVKHI3x4XKVRMBFTNa9dUqzipzQVhcclIYxZ1UVNWTDT-nN-eyPUmIYbH0-ftVC-tHrOcaQ4_j-QkfMqczh4zJjh2cd3qsX1kJxntNuKHz0sDO3kRq3vaYqjpyqSkqA9ydK6aD1LrTVRvr_cHq2hHQ9oI3L1l1Jfw"
          alt="Community members and volunteers"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Empowering Potential,
            <br />
            Transforming Lives
          </h1>

          <p className="mb-8 text-lg leading-8 text-white/90 md:text-xl">
            Dedicated to fostering excellence and human dignity through
            sustainable community development and strategic empowerment
            initiatives.
          </p>

          <Button href="#story">
            Learn Our Story
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
