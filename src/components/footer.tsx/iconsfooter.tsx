import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsIcon from "@mui/icons-material/Notifications"
import EmailIcon from "@mui/icons-material/Email"
import type { Iconfooter } from "@/types/typeFooter"

export const IconsFooter: Iconfooter[] = [{
  title: "home",
  icon: HomeIcon,
  link: "/"
}, {
  title: "Explorer",
  icon: SearchIcon,
  link: "/explorer"
}, {
  title: "Notification",
  icon: NotificationsIcon,
  link: "/notification"
}, {
  title: "Message",
  icon: EmailIcon,
  link: "/message"
}]
