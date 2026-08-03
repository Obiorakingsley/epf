import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export default function ProgramsCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-emerald-600 px-8 py-16 text-center shadow-2xl md:px-16 md:py-20">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Empower Human Potential?
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-white/80">
            Your support is the catalyst for change. Join us today and help us
            build stronger communities through education, healthcare, and
            sustainable development.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/donate">Donate Now</Button>

            <button className="border-white text-white hover:bg-white hover:text-emerald-600">
              Become a Volunteer
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
