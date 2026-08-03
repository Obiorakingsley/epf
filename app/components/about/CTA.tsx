import React from "react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-on-background py-24">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10" />

      <div className="relative z-10 mx-auto max-w-container-max px-margin-desktop text-center">
        <h2 className="mb-6 font-headline-xl text-headline-xl text-white">
          Join Our Mission
        </h2>

        <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-white/70">
          Whether through your time or your resources, you can be the catalyst
          for someone&apos;s transformation. Let&apos;s build a future of
          excellence together.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-primary px-10 py-4 font-bold text-on-primary transition-all hover:scale-105 hover:bg-secondary">
            Donate Now
          </button>

          <button className="rounded-xl border-2 border-white px-10 py-4 font-bold text-white transition-all hover:bg-white/10">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
