import Image from "next/image"
import Link from "next/link"

type Props = {
    avatar: string,
    slug: string,
    alt: string
}

export const Avatar = ({ avatar, slug, alt }: Props) => {
    return(
        <Link 
            className="block w-[70px] h-[70px] p-1 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full overflow-hidden"
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