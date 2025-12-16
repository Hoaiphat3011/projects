'use client';

import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import App from "@/components/band/App";
import ParticleBackground from "@/components/ParticleBackground";

type Section = "home" | "tech" | "projects" | "contact";

const order: Section[] = ["home", "tech", "projects", "contact"];
const skills = [
  {
    name: "Visual Studio Code",
    desc: "Code Editor",
    icon: "/skills/vscode.svg"
  },
  {
    name: "React JS",
    desc: "Framework",
    icon: "/skills/react.png"
  },
  {
    name: "Next JS",
    desc: "Framework",
    icon: "/skills/nextjs.png"
  },
  {
    name: "Tailwind CSS",
    desc: "Framework",
    icon: "/skills/tailwind.png"
  },
  {
    name: "JavaScript",
    desc: "Language",
    icon: "/skills/javascript.svg"
  },
  {
    name: "Node JS",
    desc: "Javascript Runtime",
    icon: "/skills/nodejs.svg"
  },
  {
    name: "Github",
    desc: "Repository",
    icon: "/skills/github.svg"
  },
  {
    name: "Figma",
    desc: "Design App",
    icon: "/skills/figma.svg"
  },
  {
    name: "HTML",
    desc: "Language",
    icon: "/skills/html.svg"
  },
  {
    name: "CSS",
    desc: "Language",
    icon: "/skills/css.svg"
  },
  {
    name: "TypeScript",
    desc: "Language",
    icon: "/skills/typescript.svg"
  },
  {
    name: "Vite",
    desc: "Framework",
    icon: "/skills/vite.svg"
  }
];

const projects = [
  {
    name: "MOUSE TOWN",
    image: "/projects/myLogo2.png",
    status: "offline",
    tech: "QBCore - REACT - HTML - JS"
  },
  {
    name: "CANDY TOWN",
    image: "/projects/myLogo1.png",
    status: "offline",
    tech: "QBCore - REACT - HTML - JS"
  },
  {
    name: "FREE CITY",
    image: "/projects/myLogo.png",
    status: "offline",
    tech: "QBCore - REACT - HTML - JS"
  },
  {
    name: "JET COMUNITY",
    image: "/projects/jetcomunity.png",
    status: "offline",
    tech: "QBCore - REACT - HTML - JS"
  },
  {
    name: "MIMI TOWN",
    image: "/projects/mimitown.png",
    status: "offline",
    tech: "QBX - REACT - HTML - JS"
  },
  {
    name: "HAPPY CHILL CITY",
    image: "/projects/happychill.png",
    status: "offline",
    tech: "QBX - REACT - HTML - JS"
  }
];

const contact = [
  {
    name: "FACEBOOK",
    image: "/icon/fb.svg",
    link: "https://facebook.com/NgHoaiPhat",
    type: "facebook",
  },
  {
    name: "DISCORD",
    image: "/icon/ds.svg",
    link: "https://discord.com/users/887347263947550731",
    type: "discord"
  },
  {
    name: "ZALO",
    image: "/icon/OIP.webp",
    link: "https://zalo.me/84937665600",
    type: "zalo"
  }
];
export default function Home() {
  const introText =
    "Một lập trình viên ứng dụng và web đầy đam mê, tận tâm tạo ra những trải nghiệm kỹ thuật hiện đại, " +
    "hiệu suất cao thông qua các giải pháp sáng tạo và thân thiện với người dùng.";

  const [introSpans, setIntroSpans] = useState<JSX.Element[]>([]);
  const [section, setSection] = useState<Section>("home");
  const isScrollingRef = useRef(false);
  useEffect(() => {
    let delay = 0;
    setIntroSpans(
      introText.split(" ").map((w, i) => (
        <span
          key={i}
          className="fall-word-intro"
          style={{ animationDelay: `${delay += 0.15}s` }}
        >
          {w}&nbsp;
        </span>
      ))
    );
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return;

      const idx = order.indexOf(section);

      if (e.deltaY > 30 && idx < order.length - 1) {
        isScrollingRef.current = true;
        setSection(order[idx + 1]);
      }

      if (e.deltaY < -30 && idx > 0) {
        isScrollingRef.current = true;
        setSection(order[idx - 1]);
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800); 
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [section]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).setActiveNav?.(section);
    }
  }, [section]);


  useEffect(() => {
    (window as any).goSection = (key: Section) => {
    };
  }, []);
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => link.classList.remove("active"));
    const activeLink = document.querySelector(`nav a[data-key="${section}"]`);
    if (activeLink) activeLink.classList.add("active");
  }, [section]);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/style.css" />
      </Head>


      <div id="overlay" />
      <ParticleBackground />

      <header>
        <nav>
          <a data-key="home" data-lang-key="home">TRANG CHỦ</a>
          <a data-key="tech" data-lang-key="tech">KỸ NĂNG</a>
          <a data-key="projects" data-lang-key="projects">DỰ ÁN</a>
          <a data-key="contact" data-lang-key="contact">LIÊN HỆ</a>

          <div className="lang-box">
            <button className="lang-btn">🌐</button>
            <div className="lang-dropdown">
              <div className="lang-option" data-lang="vi">VIETNAMESE</div>
              <div className="lang-option" data-lang="en">ENGLISH</div>
            </div>
          </div>
        </nav>
      </header>
      <section className={`page ${section === "home" ? "show" : "hide"}`}>
        <div id="intro-text" data-lang-key="introTitle">GIỚI THIỆU</div>
        <div id="intro-text1"data-lang-key="intro">{introSpans}</div>
        <div className="corner-boxes">
          <div className="box" data-key="join">THAM GIA DISCORD</div>
          <div className="box" data-key="projectss">THÔNG TIN DỰ ÁN</div>
        </div>
      </section>
      <section className={`page tech ${section === "tech" ? "show" : "hide"}`}>
        <h1 className="tech-title" data-lang-key="Proficient">THÔNG THẠO CÁC KỸ NĂNG</h1>
        <p className="tech-sub" data-lang-key="kynang">
          ĐÂY LÀ NHỮNG KỸ NĂNG MÀ TÔI ĐÃ HỌC HỎI TRONG QUÁ TRÌNH LÀM VIỆC
        </p>

        <div className="tech-grid">
          {skills.map((s, i) => (
            <div className="tech-card" key={i}>
              <img src={s.icon} alt={s.name} />
              <div>
                <h3>{s.name}</h3>
                <span>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    <section className={`page projects ${section === "projects" ? "show" : "hide"}`}>
      <h1 className="project-title" data-lang-key="duan">DỰ ÁN</h1>
      <p className="project-sub" data-lang-key="duan1">
        NHỮNG SẢN PHẨM MÀ TÔI ĐÃ THỰC HIỆN VÀ PHÁT TRIỂN CỘNG ĐỒNG
      </p>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-image">
              <img src={p.image} alt={p.name} />
              <span className={`badge ${p.status}`}>
                {p.status === "offline" ? "Offline" : "Coming Soon"}
              </span>
            </div>
            <div className="project-info">
              <h3>{p.name}</h3>
              <p>{p.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        <section className={`page ${section === "contact" ? "show" : "hide"}`}>
        <h1 className="project-title1" data-lang-key="thongtin">THÔNG TIN LIÊN HỆ CÔNG VIỆC</h1>
        <p className="project-sub1" data-lang-key="thongtin1">
          ĐÂY LÀ NHỮNG THÔNG TIN BẠN CÓ THỂ LIÊN HỆ CHO TÔI
        </p>
        <div className="project-grid1">
          {contact.map((p, i) => (
            <div className="contact-item" key={i}>
              <div className="project-card1">
                <div className="project-image1">
                  <img src={p.image} alt={p.name} />
                </div>

                <div className="project-info1">
                  <h3>{p.name}</h3>
                </div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-btn"
                data-lang-key="lienhefb"
              >
                LIÊN HỆ
              </a>

            </div>
          ))}
        </div>
        </section>
      <App />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
