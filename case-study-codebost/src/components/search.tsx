import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

export const Search = () => {

    return(

        <div className='flex items-center gap-4 lg:hidden'>
            
            <Image src={IconSearch} alt='Ícone de pesquisa' />
            <input type="text" placeholder='Buscar...' className='pr-5 bg-transparent outline-none text-white placeholder:text-white' />

        </div>

    )

}