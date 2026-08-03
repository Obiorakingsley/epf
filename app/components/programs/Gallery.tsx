import Image from "next/image";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDc-F8nJqDvkkeJMRDh5uEuDMbgD9lOLSnUupThBga-OpNM5CJRawIN2QJ28Fb3SciiORPZOXmymJ_qRVG179dmZ32gGtSqjz39IsIXgEgVQsIgQ7AS8IqIhv31OnqCSaaAwLL4WYz6ySs_CZxaSbAIaaFPp7Lm2xKj57URBcKpz-MAcznMcyGa6KQiM8hozrM_5BgZeeZ9At1KdDXi-0hkYVkAyiWapjSiEsTc5gCbWAbfeyUI67BXkw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2xhcJR1HfbhP7jXW6eb5gpkTQIfA1uzqZLV8aVav26_jtihr2tYfHFkdZChrS3zp3SPhlHEEEKR1opTyW2deshQ4CGccXaQTENEJvjudiG7lLIvgfhZ7uDk4K-8tfkMAs5EYvJ5DkceKwAjY-rkeNnRt10MUVf8tbHblJBaj0D6baKYyJVBddqlebQGUwK9kZ5Hu8X2eok2g_ymEV58QNR04UG6q5wxdMO9pAW4u9C4Kpnw3qRvYX0Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDA_4Xc0a5aZy9oKLVV5nMyloWCnj7oTTL67UyRyrr2qCiOnmMshm1q0BshKNVrWqLC6kGg4j7m801MrfTtDAtxkpg2zrTeVECQDgGAc1iYs2FbuL0T43OteCR_HtRXsxl6zLqrOmEadjNZtpncKcEWYLCBjEG_w3hnMWwtaVQPOuX4BVt4DhRrNxZDvai1S8dhs3Oo2cYOsyBrF8gSAgROpzwrY7LMxr6YQq2blNc0Y_zCwmxoxjc_Gw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5ilfPKJTtUi6X7s_8YxISk2wvUbJWKIfP1sofWanjLED1ccJ3ahLKROYZtkW9X141p8L5O51tY3PrD05wuNSRKrQRj3tys138WnPSCO-_v7liVYnYMf_SFKdv1lKUKd_yor4IcggINSquGb3DKiFRi2iF6gtL2ASz0bfgRPRJW5rz_UqVKtmSWr77rfSb79SUj_zqUmkMmkdsE1-huxvHYe65rOwzEVVHf0fEDsN7Wb8OUnJ08iHVXA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDkKOlvNnNADmWHzB5sES6yDNky5ksvCFwV2vuI2DFIZZdnlpAP58HBaD3FkXltSalo_SMslW7hh8MIyjSyYLOTw5uVwf_ylTXO6b21OtZiaGCfIvErp_9h5MhcX1hVATFbrs1SPFMulK1EVTFs6IKGVZHk2j0_9SqqAB-0KuhJyVJgP-yK89Ahl0xE1M_VpuGcI7maDMPQAh8iM_DPkqrKwVrmM8Eq_Ovq8L8tor861ED4M2wVtQ-Qcg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAc843Au3etMWicsDEQ4ZEDaZgQ0AEWcb_DhN7aLVCbYesDEf5iyjx56GmGIa2ZlN4yhrM1KV7OWZlDcXwdEy-qZJA1KePi3CJQAWz52h7TKlGGbGnO_5Amimqmj2yUtYSul1IBzgbVszATiB4sNTh-x7pP5-Qd-diMm3493eQvXgJezzL0xbDFk70Q5wLy8FsLWYMehJJcmsy9NuztpYd1tQe1OFmuiLm53BwTRrhGU6Lc1oKOSqWIrQ",
];

export default function Gallery() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Impact Gallery"
          description="Glimpses into the lives transformed and the smiles shared during our outreach programs."
        />

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={800}
                className="h-auto w-full transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
