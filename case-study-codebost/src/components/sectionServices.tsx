'use client'

import Image from "next/image"
import { Container } from "./container"
import PhoneIcon from '@/assets/icon-phone.svg'
import PhoneImg from "@/assets/phone.png"

export const Services = () => {

    return(

        <div className="bg-white w-full h-[965px]">
            <Container>
                <div className="flex items-center justify-between w-full md:flex-col">
                    <div className="flex-1 max-w-[594px] pt-32">

                        <span className="text-primary-orange text-sm font-bold uppercase mb-9 block">Serviços exclusivos</span>
                        <h1 className="text-primary-gray text-6xl font-bold leading-tight mb-6 ">Gerencie suas financas sem sair de casa</h1>
                        <p className="mb-16 text-second-gray max-w-[554px text-lg]">Veja como voce pode cuidar das suas fincanças pela app do itaú  de forma segura, rápida e o melhor, no conforto da sua casa.</p>
                        <ul className="flex flex-col gap-y-5">
                            <li className="flex items-center gap-10 border-b-2 pb-5">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={PhoneIcon} alt="ícone de telefone" />
                                </div>
                                <p className="text-black  ">
                                    Acompanhar sua conta, fazer transferências e pagamentos onde estiver.
                                </p>
                            </li>
                            <li className="flex items-center gap-10 border-b-2 pb-5">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={PhoneIcon} alt="ícone de telefone" />
                                </div>
                                <p className="text-black  ">
                                    Acompanhar sua conta, fazer transferências e pagamentos onde estiver.
                                </p>
                            </li>
                            <li className="flex items-center gap-10 border-b-2 pb-5">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={PhoneIcon} alt="ícone de telefone" />
                                </div>
                                <p className="text-black  ">
                                    Acompanhar sua conta, fazer transferências e pagamentos onde estiver.
                                </p>
                            </li>
                            <li className="flex items-center gap-10 border-b-2 pb-5">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={PhoneIcon} alt="ícone de telefone" />
                                </div>
                                <p className="text-black  ">
                                    Acompanhar sua conta, fazer transferências e pagamentos onde estiver.
                                </p>
                            </li>
                            <li className="flex items-center gap-10 border-b-2 pb-5">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Image src={PhoneIcon} alt="ícone de telefone" />
                                </div>
                                <p className="text-black  ">
                                    Acompanhar sua conta, fazer transferências e pagamentos onde estiver.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex mt-24">
                        <Image src={PhoneImg} alt="Imagem de telefone com banco aberto" />
                    </div>
                </div>
            </Container>
        </div>

    )

}