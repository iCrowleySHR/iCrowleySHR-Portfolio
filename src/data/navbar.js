import { profile } from "./profile";

export const navbar = {
  name: profile.name,
  logo: "💼", // Pode ser substituído por uma imagem
  links: [
    { href: "#home", label: "Início", icon: "🏠" },
    { href: "#about", label: "Sobre", icon: "👨‍💻" },
    { href: "#projects", label: "Projetos", icon: "🚀" },
    { href: "#education", label: "Formação", icon: "🎓" },
    { href: "#certificates", label: "Certificados", icon: "📜" },
    { href: "#skills", label: "Habilidades", icon: "⚡" },
    { href: "#contact", label: "Contato", icon: "📞" },
  ],
  cta: {
    text: "Contato",
    href: "#contact",
    type: "primary"
  }
};