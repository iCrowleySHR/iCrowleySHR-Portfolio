import { profile } from "./profile";

export const footer = {
  ...profile, 

  social: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/gustavogualda",
    },
    {
      label: "GitHub", 
      href: "https://github.com/icrowleyshr",
    },
    {
      label: "Email",
      href: "mailto:gustavogualda6@gmail.com",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/5511963338067",
    },
  ],

  copyright: `© ${new Date().getFullYear()} ${profile.name}. Todos os direitos reservados.`,
};