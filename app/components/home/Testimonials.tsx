import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Program Beneficiary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwE9-GNf7D2qJZg6oDtvhyKZKd32wu9JbR_va1i5mA7q4NwUE-F7iWitltkuLQE1BDZnuCUhWD0_kj-PE1jnDkhewSuRfXv69Xj5aXe4COiyn5TdvNDp7XkUh8gYOjiqxIf7cqSOrjilyNKDt-iLthxpBIKLJbcqh71nf569sqwH3qS7c1BhrC1Mt28wfqHzUwZooyABoaAGxKeM9AXPHW2Cj_I99AxDkJA3bd12jPv0I73ONolEfYKg",
    quote:
      "The vocational training provided by the Excellent People Foundation didn't just give me a skill; it gave me the confidence to start my own workshop. My children are now in school thanks to this support.",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Medical Volunteer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgPMAYgnGwrzOJr5ivlYQosVgQAAzfsKdkpM7BnOVoJJFt_FD5Dtya1ZA5oqfBi7haTI4EzGrdcN1kLpMf8LSSBi6i88H3h4rKCWMspX4e63LZKNmPSsn9YaoA51CrI09jSxf9u_Q8T3J9Wn91cUtrQv-xjQ6_XvdAUr-QyRp7rk6hwD6ljj7gY4gUS9AxBEx60R8MGIbxS74bvOIvS227hQrrpgzQtONRIg5mq8BOc2EXWCqPzoGcGg",
    quote:
      "Working with this foundation has been the most fulfilling part of my career. Seeing the tangible impact of our healthcare initiatives in remote villages is incredibly moving and rewarding.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Impact Stories"
            title="Voices of our Community"
            center={false}
          />

          <div className="flex gap-3">
            <button className="rounded-full border p-3 transition hover:bg-emerald-600 hover:text-white">
              <ChevronLeft size={20} />
            </button>

            <button className="rounded-full border p-3 transition hover:bg-emerald-600 hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-3xl border bg-white p-8 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 h-16 w-16 text-emerald-100" />

              <p className="relative mb-8 text-lg italic leading-8 text-gray-600">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>

                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
