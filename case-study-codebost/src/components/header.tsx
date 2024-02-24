import Image from "next/image"
import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'
import { ItemMenu } from "./itemMenu"
import { Search } from "./search"
import { Container } from "./container"

export const Header = () => {

    return(

        <header className="relative flex items-center w-full h-20 bg-primary-orange  ">

            <div className="z-0 absolute top-0 right-0 bg-primary-blue h-full w-[19%]"></div>
                <Container>

                    <div className="flex flex-1 justify-between items-center">

                        <div className="flex items-center gap-14">

                            <Image src={Logo} alt="Logo do site" />

                            <ul className="items-center gap-12 flex ">
                                <li>
                                    <ItemMenu name="Para você" />
                                </li>
                                <li>
                                    <ItemMenu name="Para empresas" />
                                </li>
                                <li>
                                    <ItemMenu name="Serviços" />
                                </li>
                                <li>
                                    <ItemMenu name="Ajuda" />
                                </li>

                            </ul>

                        </div>
                        <Search />

                    </div>

                    <button className="z-10 flex items-center gap-4 bg-primary-blue h-20 pl-10 ">
                        <span className="text-white text-bold">Acessar conta</span>
                        <Image src={IconUser} alt="" />
                    </button>

                </Container>
            

        </header>

    )

}