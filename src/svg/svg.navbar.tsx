import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
export const Items = () => [
  {
    title: "Inicio",
    icon: HomeIcon,
    link: "/"
  },
  {
    title: "Explorar",
    icon: SearchIcon,
    link: "/explore"
  },
  {
    title: "Notificación",
    icon: NotificationsIcon,
    link: "/notifications"
  },
  {
    title: "Mensajes",
    icon: MailOutlineIcon,
    link: "/messages"
  },
  {
    title: "Perfil",
    icon: PersonOutlineIcon,
    link: "/profile"
  }
]
