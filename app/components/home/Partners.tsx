import Image from "next/image";

import Container from "../ui/Container";

const partners = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAase8pa2A3dg85hKnFJEtPOXdoRrHwPrYsamStqN3PcuTKGUnm_-X_sDxAzrQox2P7gbw1rh0IkI2JEN56hVd0prt-q7kA63NxXbvemdOdm_IZTIqnfC-r69T0tXcURx4rP7yGNRUarlV74hMz5XJeWThI3-XBSL-ELLcLl7H7ZAThOuRuS_q9_kJgszSTxfuTKViXe8Ew7eHQd54mXWoFpQMJwBfPdU1pNWN8RN7NMTdWSMd7iWLDEw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4KmfCF-_mtk7ih4L8fofrf3Gx5KFOcbXKg4DixoBFT9hjnUCKSdTF00ou1BuM555xy6dHtRlMOSfjUeVSwOtlpc4JmscUNM3OC-OCRdXVw3Wb4Yy_X3idcN7Yy6N3uHwJIu8CpD8Kic32RGTxvzD0zbshd4z4GooIK2y9SvgkB_qsrFnKDiuRqqMcbu70IvG0S6bLr4n7mnpquabncwk1VQbENTbeEYo6mMxdDwT1EUvjT7RYflg9xA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUVWNkBiYHocdqdm4CObW76v81LCyDT48XOWexQ1O4Ent8E2Xp-HPwAYx0okv-ZXl04PVQYpGJ3hshCeQEIrlPitAzsPCJqO36HOEn3frHAg9BTO5i_rZb4dNL4nzez9CoWjWav10w5gfkwhYdZ6VZ45Y-hbOpchqiZJEu4_kE-kRBbd6PJEZggptJmhCYYfuHY8jJ-yCDNjN6syAvGoD60y-ih1_OFZykwJVdrHd4lX8W2lKTNu6qFA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBLqBmRlKGvfl7RkY1DAURtucFtkPZadACEBspczg7rWjuE6YbyBaZT0j1v-EiPTGytMwk-kYfVGZsaB58ewN0iivnFMsP8GM4XKd_uPAAxcuF0jHmHdwB56Mni1T__GVrb2D-thydaAosVOCVWKEUf_aBlTdKeLvdbkcO_yLwEs9HkMdfBKvPh2qsGrbNOX7LsOJh--YmVArJ9eWbHtbvhRLv_f94ecP3ANILP0ZJ6hZ9OJOCCtu0gaQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUq-SLXkbh3juUsKDwcWbnXb2Fp6ebs14MviPujxyYUD0OiryexmyT9XRM6IfNwf5JMltWb7hQ9_c3g-pmPyMWcZAAK1p9Fkt2QHFY1nvKelobKgbIN-yvbCpOgflMQCes4waV_WlvFjPtekQ3vHrJHGpi_CyjUaDKp00rCAVsAy5DkKmpKaqN24_GQJ2pXp5_e0DQZufBt6mE1xf05YXB8-GyR3lb2axEiY6DF9zTN_-LHcPX9T2azQ",
];

export default function Partners() {
  return (
    <section className="border-y bg-white py-12">
      <Container>
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Trusted By Global Partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100">
          {partners.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Partner logo"
              width={140}
              height={48}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
