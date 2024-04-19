import { FaXTwitter } from "react-icons/fa6";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { RiNotificationLine, RiNotificationFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { RiFileList2Line } from "react-icons/ri";
import { RiFileList2Fill } from "react-icons/ri";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";


const NavItems = [
  {
    icon: GoHome,
    hovIcon: GoHomeFill,
    name: 'Home'
  },
  {
    icon: IoIosSearch,
    hovIcon: FaSearch,
    name: 'Explore'
  },
  {
    icon: RiNotificationLine,
    hovIcon: RiNotificationFill,
    name: 'Notifications'
  },
  {
    icon: CiMail,
    hovIcon: IoMdMail,
    name: 'Messages'
  },
  {
    icon: RiFileList2Line,
    hovIcon: RiFileList2Fill,
    name: 'Grok'
  },
  {
    icon: RiFileList2Line,
    hovIcon: RiFileList2Fill,
    name: 'Lists'
  },
  {
    icon: MdOutlineBookmarkBorder,
    hovIcon: GoBookmarkFill,
    name: 'Bookmarks'
  },
  {
    icon: FiUsers,
    hovIcon: FaUserFriends,
    name: 'Communities'
  },
  {
    icon: FaXTwitter,
    hovIcon: '',
    name: 'Premium'
  },
  {
    icon: FaRegUser,
    hovIcon: FaUser,
    name: 'Profile'
  },
  {
    icon: CgMoreO,
    hovIcon: '',
    name: 'More'
  },
]

const LeftNav = () => {
  const [nav, setNav] = useState(0);
  return (
    <div className="flex flex-col items-start justify-between w-[275px] sticky top-0 py-3 px-5">
      <div>
        <div className="h-[3rem] w-auto rounded-[10px] hover:bg-slate-700">
          <img src="https://storage.googleapis.com/ecomerceimages/Logo.jpg" alt="" className="h-[45px] w-auto" />
        </div>
        {NavItems.map((e, idx) => (
          <div key={idx} className="flex items-center my-1 cursor-pointer py-3 px-5 rounded-[50px] hover:bg-[#1d1b1b]" onClick={() => setNav(idx)}>
            {nav === idx ? (e.hovIcon !== '' ? <e.hovIcon size={30} /> : <e.icon size={30} />) : (<e.icon size={30} />)}
            <span className="pl-4 text-[20px]">{e.name}</span>
          </div>
        ))}
        <button className="my-3 font-semibold bg-[#1d9bf0] hover:bg-[#1d9cf098] hover:translate-y-[-1px] hover:shadow-2xl active:translate-y-[0.15px] py-3 px-4 rounded-3xl w-full">
          Create Alert
        </button>
      </div>
      <button className="flex justify-between w-full">
        <div className="flex">
          {/* <img src="" alt="" className="" /> */}
          <div className="border w-12 h-12 flex items-center justify-center rounded-full"><FaXTwitter size={30} /></div>
          <div className="pl-3">
            <p>Darshansiva</p>
            <p>@Darshansiva007</p>
          </div>
        </div>
        <button><IoIosMore /></button>
      </button>
    </div>
  )
}

export default LeftNav