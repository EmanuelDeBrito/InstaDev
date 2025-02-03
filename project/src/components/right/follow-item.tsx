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
            {isMe &&
                <Avatar 
                    avatar={avatar}
                    slug={userName}
                    alt={fullName}
                />
            }
            {!isMe &&
                <Image 
                    src={avatar}
                    width={50}
                    height={50}
                    quality={100}
                    alt={fullName}
                    className="mr-2 rounded-full cursor-pointer"
                />
            }
            
            <div>
                
            </div>
        </div>
    )
}