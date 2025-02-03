import { avatarList } from "@/data/avatarsList"
import { Avatar } from "../ui/avatar"

export const AvatarsCarousel = () => {
    return(
        <div className="flex items-center gap-6 w-full overflow-hidden">
            {
                avatarList.map((item, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        <Avatar 
                            avatar={item.avatar}
                            slug={item.slug}
                            alt={item.name}
                        />
                        <span className="mt-2 text-[14px] text-white/80 lowercase">
                            {item.name}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}