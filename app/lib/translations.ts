export const translations = {
      EN: {
            nav: {
                  works: "works",
                  about: "about",
                  lab: "lab",
                  contact: "contact",
            },
      },
      ES: {
            nav: {
                  works: "trabajos",
                  about: "sobre mí",
                  lab: "laboratorio",
                  contact: "contacto",
            },
      },
      FR: {
            nav: {
                  works: "travaux",
                  about: "à propos",
                  lab: "laboratoire",
                  contact: "contact",
            },
      },
      ZH: {
            nav: {
                  works: "作品",
                  about: "关于我",
                  lab: "实验室",
                  contact: "联系",
            },
      },
};

export type Language = keyof typeof translations;