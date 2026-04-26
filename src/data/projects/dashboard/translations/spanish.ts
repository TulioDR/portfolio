import sidebar from "../img/features/sidebar.png";
import theme from "../img/features/theme.png";
import notifications from "../img/features/notifications.png";
import cart from "../img/features/cart.png";
import chat from "../img/features/chat.png";
import profile from "../img/features/profile.png";

import { ProjectTranslations } from "@/models/ProjectModel";

const dashboardSpanish: ProjectTranslations = {
   description: "Un Sencillo y multifuncional dashboard para administradores",
   role: "Diseño de UI / Código",
   date: "NOV 2022",
   overview:
      "Concepto para dashboard hecho con componentes de Syncfucion y react-router-dom.",
   features: [
      {
         name: "Sidebar",
         description:
            "Para navegar entre todas las páginas, aplicaciones y tablas",
         img: sidebar,
      },
      {
         name: "Cambio de Color del Tema",
         description:
            "Claro/Oscuro o cambio del color principal con ContextApi",
         img: theme,
      },
      {
         name: "Carrito",
         description: "",
         img: cart,
      },
      {
         name: "Chat",
         description: "",
         img: chat,
      },
      {
         name: "Notificaciones",
         description: "",
         img: notifications,
      },
      {
         name: "Perfil",
         description: "",
         img: profile,
      },
   ],
};
export default dashboardSpanish;
