import React, { FC } from 'react';
import Image from 'next/image';
import { CardProps } from '@/types/cardtype';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const SpotlightCard: FC<CardProps> = ({ title, image, price }) => {
  return (
    <div className='bg-[#262626] w-fit h-fit p-4 rounded-xl flex flex-col gap-2 cursor-pointer'>
      <div className='group relative overflow-hidden rounded-xl '>
        <Image
          src={image || "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"}
          alt="Spotlight Image"
          width={300}
          height={300}
          className=' group-hover:scale-[1.1] transition ease-in-out duration-500'
        />
        <div className='absolute bottom-4 right-4 transition opacity-0 group-hover:opacity-100 duration-500 translate-x-16 group-hover:translate-x-0 flex flex-col gap-1'>
          <button className='w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl bg-black'><MdOutlineShoppingCart /></button>
          <button className='w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl bg-black'><FaRegHeart /></button>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold'>{title}</p>
        <span className='text-green-300 font-semibold'><span>฿</span>{price}</span>

      </div>
    </div>
  );
}

export default SpotlightCard;
