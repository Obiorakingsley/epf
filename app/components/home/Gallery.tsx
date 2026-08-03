import Image from "next/image";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT1DN8eVG6DsBlIpmeDwIejUmR5dNUsZlzVrcNhUjax0WTTFYgmkVlsAnyEisQfIQ2So5r6HetmrhYJnoDdkWM4OsBRWeLdE7LajUbfKtcVfV2GzNf-vgwvaJ3D62auecv7JDV0JgonLFYEHuAlI-bDrpxSsS_I1f1dAWnqzxXYeqf8wrAKgVT1Sq5RV3DXTlK7gF5n9sB3kB-CBp6M0CrMRlJfe8A9-2JtJ9ESyCmkzUNyIFRLE7zjQ",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtvGR17swhgxL-gZx_TeRlLsJOzjRoUkA9xXHOLxIBSZ1R1sWqoJX8eVr3p5r27ustuVXKDv3RoDvwusY4dT2nK2udid_GUNyQLlhfa5_FYt6htT0KYH2H1TKwVrk8HsiAYXHo9glk2exanxhHA6DPlaHtOaYG9AprSni3NVJtKtnC7Sx7VNNOnbmNueZp4fNaXrswcBxtwM647dS8Dorb7Wcg0PC7aQF2CTSKlv8ticFmkcvVVxE8Uw",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4C261m_ja592q7iSvyx47k0WA-kf-IH86Fkk5sgyPMUEP6Fnryu7muNnTPaq1cKoKY-I6eJyTi4oruoUs_WVxvzEpW_uz-LLoC0XdlxMhSodUhT4YASfAfVZXQAl3xCW1SutiHfMgHBk7SOF4CZpg9bKYL4Vgqh94jotoLIg0GZBHWkQG58hFAyHUQnyGf48WnmFf3w7363jIn6gfX7tAPL7H699o0w43jNshgiw9cJRMvQk-jQXS3w",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk8zEZWcYiqor9eqLHc7rd-3HUQB61u5KJE-UA6U3Qkpa8iE47MSAkZo2Gr8h7NYWjWnE7n34ckGxV-fzJSCv3OO4tds2OkqRlnynyToh_9NmyPvPu60irB-vZfTP8WcKAu3BTPhVPbR_vZvdsaDzjxywEY2JkAU6W8OzGXyUt9eCU_FStfEuahtobUiBurdwZbeeLAA7xy3NkJHznNad19zcFJ49XIUWtfUjeh8dIMgCQKbJ8Ge-COQ",
    className: "col-span-2 md:col-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARjfLyytQugrv92XlJzTPJgIRknX40HbAiB7UF3fbpfnnhiL2cjH1dLt1o4t6VsxaFDffuUGzUQLjzJvzRuHZE0fNZtU2VihCBw07cuoHcBqXd5X3zcZ98QCYJCY3CgY1MWUGpfJk1Kyi6pgoW1ujulUtGA4OORUoPZl84g31PTkR22o4vaWwKFkkKe4rUHwjC6jOEwOtaKDjG-wkcLAJH2KRXODThGnq9k0bCkYD1oT6IGBzQCbJJIw",
    className: "col-span-2 md:col-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Our Journey" title="Moments of Impact" />

        <div className="grid grid-cols-2 gap-4 md:h-[600px] md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${image.className ?? ""}`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
