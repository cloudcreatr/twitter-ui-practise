import Avatar from "../Avatar"
import Link from "next/link";

// import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

const BlockItem = ({name, username}) => {
  return (
    <div className="flex flex-1 items-center gap-x-2 px-4 py-3 hover:bg-slate-200">
      <div className="flex items-center gap-x-2 flex-1">
        <div className="flex flex-1 xl:flex-none justify-center xl:justify-start">
          <Avatar src="https://pbs.twimg.com/profile_images/1489998205236527108/q2REh8nW_400x400.jpg" alt="Roy Quilor" />
        </div>  
        <div className="hidden xl:flex flex-col ">
          <p className="text-base">{name}</p>  
          <p className="text-xs text-slate-500">@{username}</p>  
        </div>
      </div>  
      <div className="">
        <Link className="bg-slate-900 font-bold text-white px-4 py-2 text-sm rounded-full" href="/">
          Follow
        </Link>
      </div>  
    </div>
  )
}

export default BlockItem