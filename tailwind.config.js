module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        "50": '50%',
      },
      container: {
        center: true,
      },
      backgroundImage: {
        'imgpost': 'url(/images/test-img-post.WEBP)',
      },
      minHeight: {
        '20vh': '80vh',
      },
    },
  },
  plugins: [],
};
