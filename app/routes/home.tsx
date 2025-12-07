import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Handicca" },
    { name: "description", content: "Welcome to my personal website" },
  ];
}

export default function Home() {
  return (
    <div>
      <article>
        <h1 className="font-bold text-3xl mb-10">Hello, world!</h1>
        <figure className="float-right size-48 mr-5 ml-3 mb-3">
          <img
            className="size-48"
            src="/handicca-circle.png"
            alt="Handika profile picture"
          />
          <figcaption className="mt-2 text-sm text-center">
            <nav aria-label="Tautan media sosial Handika">
              <ul className="flex gap-3 justify-center">
                <li>
                  <a
                    href="https://github.com/handicca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white"
                    title="GitHub — buka di tab baru"
                    aria-label="GitHub"
                  >
                    <RiGithubFill size={18} />
                    <span className="sr-only">GitHub</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com/in/handicca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white"
                    title="LinkedIn — buka di tab baru"
                    aria-label="LinkedIn"
                  >
                    <RiLinkedinBoxFill size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/handicca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-200 hover:text-white"
                    title="Twitter — buka di tab baru"
                    aria-label="Twitter"
                  >
                    <RiTwitterFill size={18} />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
              </ul>
            </nav>
          </figcaption>
        </figure>

        <p className="text-base leading-relaxed">
          Saya Handika, pengembang web sekaligus data scientist yang menikmati
          proses membangun sesuatu dari dua sisi: merancang sistem yang efisien
          di atas kode modern, dan mengubah data mentah menjadi wawasan yang
          bermakna. Saya bekerja dengan teknologi seperti React, Next.js,
          Node.js, dan berbagai alat analisis data untuk menciptakan solusi yang
          tidak hanya berfungsi, tetapi juga jelas, terukur, dan mudah
          dikembangkan.
        </p>
        <p className="text-base leading-relaxed mt-5">
          Saya terus mengeksplorasi persimpangan antara software engineering dan
          ilmu data, karena bagi saya teknologi terbaik lahir ketika keduanya
          saling melengkapi. Di sisi web development, saya fokus pada performa,
          arsitektur yang bersih, dan pengalaman pengguna yang intuitif. Di sisi
          data, saya menekankan pendekatan analitis yang kuat mulai dari
          pemodelan statistik, machine learning, hingga pemanfaatan visualisasi
          untuk membuat temuan lebih mudah dipahami. Saya percaya bahwa
          kombinasi keterampilan ini memungkinkan saya membangun produk yang
          tidak hanya modern, tetapi juga memiliki dasar keputusan yang kuat dan
          relevan.
        </p>
      </article>
    </div>
  );
}
