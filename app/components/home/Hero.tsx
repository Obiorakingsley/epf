import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background Image */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_3jkKuffhAWOMfZOVxx2TGzY4NcBqJUfC7btzQjCNyeJURYqukANqkfYA4RoDUwPu0jN8856rfcjxBDG5dwwN4cesSF457vaxor8Kxi1A_n3FLECRpkf5bHNsPUomIoMLWfDcgtlE_CwftWBd0NaYhCYJFaVVQtGZnsV2mWsSZi_1jfeS4s0YNOegv33r5aIzcFwrBVKRy2UTjstcOo4V29jp7XtlPXayiWu1IxU73QZj_syQnIBm8Q"
        alt="Community volunteers working together"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
            Empowering Humans,
            <br />
            Building Futures
          </h1>

          <p className="mb-8 text-lg leading-8 text-gray-200">
            We are dedicated to uplifting communities through sustainable
            education, healthcare initiatives, and professional mentorship
            programs that unlock untapped human potential.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/donate">Donate Now</Button>

            <Button href="/about" variant="secondary">
              Our Mission
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
