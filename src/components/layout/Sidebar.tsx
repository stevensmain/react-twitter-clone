import { BsHouseFill, BsBellFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import SidebarLogo from "./SidebarLogo"
import SidebarItem from "./SidebarItem"
import SidebarTweetButton from "./SidebarTweetButtom"

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123234",
      icon: FaUser,
    },
  ]
  return (
    <aside className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
          <SidebarTweetButton />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
