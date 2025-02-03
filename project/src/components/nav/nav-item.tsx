import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type Props = {
    Icon: IconDefinition,
    label: string,
    href: string,
    active?: boolean
}

export const NavItem = ({ Icon, label, href, active }: Props) => {
    return(
        <li>
            <Link
                className={`
                    flex items-center gap-5 pb-8 text-[16px] font-semibold transition-all 
                    ${active ? 'text-white' : 'text-white/70'} 
                    hover:text-white
                `}
                href={href}
            >
                <FontAwesomeIcon 
                    icon={Icon}
                    className="size-6"
                />
                {label}
            </Link>
        </li>
    )
}