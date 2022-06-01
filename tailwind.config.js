module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {

        "primary": "#4B6BFB",

        "secondary": "#7B92B2",

        "accent": "#67CBA0",

        "neutral": "#181A2A",

        "base-100": "#FFFFFF",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    },
  ],
  plugins: [require("daisyui")],
}
