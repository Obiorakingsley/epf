import Button from "../ui/Button";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="bg-emerald-600 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Ready to Make a Difference?
          </h2>

          <p className="mb-10 text-lg leading-8 text-emerald-50">
            Your contribution, whether big or small, directly supports
            life-changing initiatives for those who need it most. Join our
            movement for a better tomorrow.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/donate">Donate Now</Button>

            <Button href="/volunteer" variant="secondary">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
