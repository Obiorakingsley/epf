import React from "react";

const Partners = () => {
  return (
    <section className="border-y border-outline/20 bg-surface-container-low py-stack-lg">
      <div className="mx-auto max-w-container-max px-margin-desktop text-center">
        <p className="mb-10 text-label-sm font-bold uppercase tracking-widest text-on-surface-variant/60">
          Trusted By Global Partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60 transition-all hover:grayscale-0 md:gap-24">
          <div className="font-headline-md text-2xl font-bold tracking-tighter">
            GLOBAL REACH
          </div>

          <div className="text-2xl font-bold italic tracking-wide">
            ECO TRUST
          </div>

          <div className="border-2 border-on-surface px-2 text-2xl font-bold uppercase">
            SYNERGY
          </div>

          <div className="font-serif text-2xl font-bold italic">
            Unity Partners
          </div>

          <div className="text-2xl font-black">VISIONARY</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
