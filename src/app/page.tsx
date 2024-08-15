"use client"

import useSWR from 'swr';
import SpotlightCard from "@/components/SpotlightCard";
import { api } from "@/http/api";
import { fetcher } from '@/http/request';
import AllCategoriesCard from '@/components/AllCategoriesCard';



export default function Home() {
  const { data: spotlightCardData } = useSWR(api.spotlightCards, fetcher, { suspense: true });
  const { data: allCategoriesCard } = useSWR(api.allCategoriesCard, fetcher, { suspense: true });


  return (
    <main>
      <section className="py-10">
        <div className="flex flex-col gap-10">
          <div><h1 className="text-[36px] font-bold">Spotlight.</h1></div>
          <div className="flex-wrap flex justify-between">
            {spotlightCardData.map((el: any, index: number) => (
              <SpotlightCard key={index} title={el.title} image={el.img} price={el.price} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="flex flex-col gap-10">
          <div><h1 className="text-[36px] font-bold">All Categories.</h1></div>
          <div className="flex-wrap flex justify-between">

            {allCategoriesCard.map((el: any, index: number) => (
              <AllCategoriesCard key={index} title={el.title} image={el.img} />
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
