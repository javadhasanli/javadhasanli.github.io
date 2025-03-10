// مدیریت منوی همبرگری
const navLinks = document.querySelectorAll(".nav-link");
const checkbox = document.getElementById("menu-toggle");

// بستن خودکار منوی همبرگری پس از کلیک روی یک گزینه
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false; // چک‌باکس را غیرفعال می‌کند (منو بسته می‌شود)
  });
});

// ردیابی اسکرول و به‌روزرسانی نوار پیشرفت
window.onscroll = function () {
  updateScrollProgressBar();
};

function updateScrollProgressBar() {
  const scrollProgressBar = document.getElementById("scroll-progress-bar");

  // محاسبه درصد اسکرول
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // به‌روزرسانی عرض نوار پیشرفت
  scrollProgressBar.style.width = scrollPercent + "%";
}

// فعال‌سازی انیمیشن‌های AOS
AOS.init({
  duration: 1000,
  once: true,
});

// تغییر حالت شب و روز
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// بررسی حالت ذخیره‌شده در localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.checked = true;
}

// تغییر حالت با کلیک روی دکمه
themeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
