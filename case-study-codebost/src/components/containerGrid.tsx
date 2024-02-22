import { ReactNode } from "react"

type Props = {

    children: ReactNode

}
export default function Container({children} : Props) {

    return(
        
        <div className="w-full max-w-[1246px] px-4 mx-auto flex justify-between items-center"> 
            {children}
        </div>

    )

}