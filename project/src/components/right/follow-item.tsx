import Image from "next/image"
import { Avatar } from "../ui/avatar"

type Props = {
    avatar: string,
    userName: string,
    fullName: string,
    isMe?: boolean
}

export const FollowItem = ({ avatar, userName, fullName, isMe }: Props) => {
    return(
        <div className="flex items-center">
            <div className="mr-2">
                {isMe &&
                    <Avatar 
                        avatar={avatar}
                        slug={userName}
                        alt={fullName}
                        gray
                    />
                }
                {!isMe &&
                    <Image 
                        src={avatar}
                        width={50}
                        height={50}
                        quality={100}
                        alt={fullName}
                        className="rounded-full cursor-pointer"
                    />
                }
            </div>
            
            <div className="flex-1 mr-6 overflow-hidden">
                <p className="text-[14px] text-white font-semibold cursor-pointer truncate">{userName}</p>
                <span className="mt-1 text-[13px] text-gray-600 truncate">{fullName}</span>
            </div>

            {isMe &&
                <span className="text-[14px] text-blue-400 cursor-pointer hover:opacity-90">Mudar</span>
            }
            {!isMe &&
                <span className="text-[14px] text-blue-400 cursor-pointer hover:opacity-90">Seguir</span>
            }
        </div>
    )
}