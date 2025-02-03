import Image from "next/image"
import Link from "next/link"

type Props = {
    avatar: string,
    slug: string,
    alt: string,
    gray?: boolean
}

export const Avatar = ({ avatar, slug, alt, gray }: Props) => {
    return(
        <Link 
            className={`
                block w-[70px] h-[70px] p-1 rounded-full overflow-hidden
                ${gray ? 'bg-gradient-to-r from-gray-500 to-gray-600' : 'bg-gradient-to-r from-amber-400 to-pink-400'}
            `}
            href={slug}
        >
            <Image 
                src={avatar}
                width={70}
                height={70}
                quality={100}
                alt={"Avatar de " + alt}
                className="rounded-full"
            />
        </Link>
    )
}