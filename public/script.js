window.setActiveNav = function (key) {
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.dataset.key === key);
  });
};

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    const key = link.getAttribute("data-key");
    if (key) {
      window.goSection?.(key); 
    }
  });
});

const langData = {
  vi: {
    home: "TRANG CHỦ",
    tech: "KỸ NĂNG",
    projects: "DỰ ÁN",
    contact: "LIÊN HỆ",
    discord: "DISCORD",
    introTitle: "GIỚI THIỆU",
    intro: "Một lập trình viên ứng dụng và web đầy đam mê, tận tâm tạo ra những trải nghiệm kỹ thuật hiện đại, hiệu suất cao thông qua các giải pháp sáng tạo và thân thiện với người dùng.",
    join: "THAM GIA DISCORD",
    projectss: "THÔNG TIN DỰ ÁN",
    Proficient: "THÔNG THẠO CÁC KỸ NĂNG",
    kynang: "THESE ARE THE SKILLS I HAVE LEARNED DURING MY WORKING PROCESS",
    duan: "DỰ ÁN",
    duan1: "NHỮNG SẢN PHẨM MÀ TÔI ĐÃ THỰC HIỆN VÀ PHÁT TRIỂN CỘNG ĐỒNG",
    thongtin: "THÔNG TIN LIÊN HỆ CÔNG VIỆC",
    thongtin1: "ĐÂY LÀ NHỮNG THÔNG TIN BẠN CÓ THỂ LIÊN HỆ CHO TÔI",
    lienhefb: "LIÊN HỆ"

  },
  en: {
    home: "HOME",
    tech: "SKILLS",
    projects: "PROJECTS",
    contact: "CONTACT",
    discord: "DISCORD",
    introTitle: "INTRODUCTION",
    join: "JOIN DISCORD",
    projectss: "PROJECT INFO",
    Proficient: "PROFICIENT IN SKILLS",
    kynang: "THESE ARE THE SKILLS I HAVE LEARNED DURING MY WORKING PROCESS",
    duan: "PROJECTS",
    duan1: "PROJECTS I HAVE COMPLETED AND COMMUNITY DEVELOPMENT INITIATIVES",
    thongtin: "WORK CONTACT INFORMATION",
    thongtin1: "THESE ARE THE CONTACT DETAILS YOU CAN USE TO REACH ME",
    intro: "A passionate application and web developer dedicated to creating modern, high-performance digital experiences through innovative and user-friendly solutions.",
    lienhefb: "CONTACT"
  }
};

const langBtn = document.querySelector(".lang-btn");
const langDropdown = document.querySelector(".lang-dropdown");
const langOptions = document.querySelectorAll(".lang-option");
const cornerBoxes = document.querySelectorAll(".corner-boxes .box");

langBtn.addEventListener("click", () => {
  langDropdown.classList.toggle("show");
});

langOptions.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.dataset.lang;
    if (!langData[lang]) return;

    document.querySelectorAll("[data-lang-key]").forEach(el => {
      const key = el.dataset.langKey;
      if (langData[lang][key]) {
        el.textContent = langData[lang][key];
      }
    });

    document.querySelectorAll("nav a").forEach(a => {
      const key = a.dataset.key;
      if (langData[lang][key]) {
        a.textContent = langData[lang][key];
      }
    });

    if (cornerBoxes.length >= 2) {
      cornerBoxes[0].textContent = langData[lang].join;
      cornerBoxes[1].textContent = langData[lang].projectss;
    }

    langDropdown.classList.remove("show");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-box")) {
    langDropdown.classList.remove("show");
  }
});
