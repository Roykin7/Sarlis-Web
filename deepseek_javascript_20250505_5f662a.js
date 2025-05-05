module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "eco-green": "#2E5E4E",
        "innovation-blue": "#3A6B8C",
        "data-teal": "#4CAF99",
        "solar-orange": "#FF6B35",
        "tech-purple": "#6E44FF"
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  }
}