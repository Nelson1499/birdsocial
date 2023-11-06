import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
const classnamedefault = "hover:bg-black hover:bg-opacity-20 px-2"
export const Items = () => [
  {
    title: "Inicio",
    icon: HomeIcon,
    link: "/",
    class: classnamedefault
  },
  {
    title: "Explorar",
    icon: SearchIcon,
    link: "/explore",
    class: classnamedefault

  },
  {
    title: "Notificación",
    icon: NotificationsIcon,
    link: "/notifications",
    class: classnamedefault

  },
  {
    title: "Mensaje",
    icon: MailOutlineIcon,
    link: "/messages",
    class: classnamedefault

  },
  {
    title: "Perfil",
    icon: PersonOutlineIcon,
    link: "/profile",
    class: classnamedefault
  }
]
