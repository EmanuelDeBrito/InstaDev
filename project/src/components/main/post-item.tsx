"use client"

import { faHeart, faPaperPlane, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faEllipsis, faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"

type Props = {
    avatar: string,
    userName: string,
    image: string
}

export const PostItem = ({ avatar, userName, image }: Props) => {
    const [liked, setLiked] = useState(false);

    const handleLikeButton = () => {
        setLiked(!liked);
    }

    return(
        <div className="mt-5">
            <div className="flex items-center mb-3 px-2">
                <Image 
                    src={avatar}
                    width={40}
                    height={40}
                    quality={100}
                    alt={userName}
                    className="mr-3 rounded-full cursor-pointer"
                />

                <p className="flex-1 text-[14px] text-white font-semibold">{userName}</p>

                <FontAwesomeIcon 
                    icon={faEllipsis}
                    className="size-5 text-white cursor-pointer"
                />
            </div>

            <div>
                <Image 
                    src={image}
                    width={500}
                    height={500}
                    quality={100}
                    alt="Post"
                />
            </div>

            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon 
                            icon={liked ? faHeartFilled : faHeart}
                            className="size-5 text-white transition-all cursor-pointer"
                            onClick={handleLikeButton}
                        />
                        <FontAwesomeIcon 
                            icon={faComment}
                            className="size-5 text-white cursor-pointer"       
                        />
                        <FontAwesomeIcon 
                            icon={faPaperPlane}
                            className="size-5 text-white cursor-pointer"
                        />
                    </div>

                    <div>
                        <FontAwesomeIcon 
                            icon={faBookmark}
                            className="size-5 text-white cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1 mt-2">
                    <p className="text-[15px] text-white">Curtido por <strong>Fulano</strong> e <strong>outras pessoas</strong></p>
                    <p className="text-[15px] text-white"><strong>joaosilva</strong> Texto qualquer</p>
                    <span className="text-[13px] text-gray-500">Há 2 dias</span>
                </div>
            </div>
        </div>
    )
}