import Image from 'next/image'
import { FC } from 'react'
import { allCategoriesCardProps } from '@/types/cardtype'

const AllCategoriesCard: FC<allCategoriesCardProps> = ({ title, image }) => {
    return (
        <div className="p-4 rounded-xl shadow-lg cursor-pointer group transition-shadow duration-300">
            <div className=' group overflow-hidden rounded-3xl'>
                <Image
                    src={image || ""}
                    alt={title || ""}
                    width={250}
                    height={260}
                    className='group-hover:scale-125 rounded-3xl transition-transform duration-500'
                />
            </div>
            <div className="flex justify-center text-[22px] font-semibold group-hover:underline">
                {title}
            </div>
        </div>
    )
}

export default AllCategoriesCard
