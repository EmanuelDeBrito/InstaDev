import Image from "next/image"
import Link from "next/link"

type Props = {
    width: number,
    height: number
}

export const Logo = ({ width, height }: Props) => {
    return(
        <Link href={"/"}>
            <Image 
                src={"/logo/logo-white.png"}
                width={width}
                height={height}
                quality={100}
                alt="Logo InstaDev"
            />
        </Link>
    )
}