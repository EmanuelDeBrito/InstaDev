import { faHome, faSearch, faVideo } from "@fortawesome/free-solid-svg-icons"
import { NavItem } from "../nav/nav-item"
import { Logo } from "./logo"
import { faCompass } from "@fortawesome/free-regular-svg-icons"

export const Aside = () => {
    return(
        <aside className="fixed top-0 bottom-0 left-0 w-[250px] p-5 border-r-2 border-gray-600">
            <Logo 
                width={100}
                height={100}
            />

            <nav className="mt-10">
                <ul>
                    <NavItem 
                        Icon={faHome}
                        label="Página Inicial"
                        href="/"
                        active
                    />
                    <NavItem 
                        Icon={faSearch}
                        label="Pesquisa"
                        href="/search"
                    />
                    <NavItem 
                        Icon={faCompass}
                        label="Explorar"
                        href="/explore"
                    />
                    <NavItem 
                        Icon={faVideo}
                        label="Reels"
                        href="/reels"
                    />
                </ul>
            </nav>
        </aside>
    )
}