import { Container } from "./container"
import ImgAppleStore from "@/assets/btn-apple-store.svg"
import ImgPlayStore from "@/assets/btn-google-play.svg"
import Arrow from "@/assets/arrow-down.svg"
import WomanImage from "@/assets/woman.png"
import Image from "next/image"

export const Hero = () => {

    return(

        <main className="w-full h-[704px] bg-primary-orange bg-cover">
            
            <div className="">

                <Container>

                    <div className="flex-1 max-w-[500px]">
                        <h1 className="text-white text-7xl font-bold mb-4 ">Tenha seu banco na palma da mão</h1>
                        <p className="text-white text-xl  max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simple, completo e feito pra você.</p>
                        <div className="flex gap-4 mb-24 ">
                            <button className="">
                                <Image src={ImgAppleStore} alt="Imagem da Apple Store" />
                            </button>
                            <button className="">
                                <Image src={ImgPlayStore} alt="Imagem da Google Play" />
                            </button>
                        </div>
                        <button className="flex items-center gap-2">
                            <Image src={Arrow} alt="Imagem de flecha para baixo" />
                            <span className="text-white text-sm font-bold">Continue Explorando</span>
                        </button>
                    </div>

                    <Image src={WomanImage} alt="Imagem modelo" className="mr-[-41px]" />

                </Container>

            </div>

        </main>

    )

}