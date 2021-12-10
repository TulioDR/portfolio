module.exports = {
   // mode: "jit",
   // purge: [
   //    "./src/pages/**/*.{js,ts,jsx,tsx}",
   //    "./src/components/**/*.{js,ts,jsx,tsx}",
   // ],
   purge: false,
   darkMode: "class",
   theme: {
      extend: {
         width: {
            xl: "1230px",
            lg: "960px",
            md: "720px",
            sm: "540px",
         },
         maxWidth: {
            xl: "1230px",
            lg: "960px",
            md: "720px",
            sm: "540px",
         },
         height: {
            150: "600px",
            125: "500px",
         },
         margin: {
            "-full": "-100%",
         },
         colors: {
            gray: {
               DEFAULT: "#191919",
            },
         },
      },
   },
   variants: {
      extend: {
         translate: ["group-hover"],
         scale: ["hover", "group-hover"],
         position: ["group-hover"],
         inset: ["group-hover"],
         transitionDelay: ["group-hover"],
         width: ["hover", "group-hover"],
         height: ["hover", "group-hover"],
         margin: ["group-hover"],
         display: ["group-hover"],
         justifyContent: ["hover"],
         rotate: ["group-hover"],
         padding: ["dark"],
      },
   },
   plugins: [require("tailwindcss-nested-groups")],
};
