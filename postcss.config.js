/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./views/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./index.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem", // 預設 padding 為 1.25rem
        sm: "1.25rem", // 在 sm 以下的 padding
        md: "1.25rem", // 在 md 屏幕及以上的 padding
        lg: "1.25rem", // 在 lg 屏幕及以上的 padding
        xl: "1.25rem",
        "2xl": 0,
      },
    },
    extend: {
      screens: {
        "2xl": "1410px", // 自訂 1410px 為新的斷點
      },

      backgroundImage: {
        "light-logo": "url('images/w-logo.webp')",
        "dark-logo": "url('images/b-logo.webp')",
        "light-mobile-bg-image": "url('images/footer-menu/img-bg-footer_w.svg')",
        "dark-mobile-bg-image": "url('images/footer-menu/img-bg-footer_b.svg')",
      },
      fontFamily: {
        notoSans: ["Noto Sans", "sans-serif"],
        passion: ["Passion One", "sans-serif"],
      },
      fontSize: {
        14: "14px", // 定義一個字體大小為 14px
        13: "13px", // 定義一個字體大小為 13px
      },
    },
  },
  plugins: [],
};
