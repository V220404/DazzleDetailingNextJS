'use client'

import React from "react"
import storeData from "../data/car_package.json"
import Link from "next/link"
import { Button } from "./ui/moving-border"
import { BackgroundGradient } from "./ui/background-gradient"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";


interface Pakage {
    id: number,
    title: string,
    slug: string,
    short: string,
    description: string,
    price: string,
    isFeatured: boolean,


}


function Service() {
    const featuredCourses =
        storeData.pakage.filter((pakage: Pakage) => pakage.isFeatured)




    return (





        <div className="py-12 bg-gray-900">
            <div>

                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase text-xl"> Featured Services   </h2>
                    <p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> Our Best in Segment Products</p>
                </div>
            </div>



            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 gap-8 justify-center">

                    {featuredCourses.map((pakage: Pakage) => (
                        <div key={pakage.id} className="flex justify-center">



                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-4  flex flex-col item-center text-center flex-grow">
                                    <p className="text-lg  sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{pakage.title}</p>
                                    <p>{pakage.short}</p>

                                    <Link href={"`/courses/${pakage.slug}`"}>
                                        Know More
                                    </Link>
ff
                                </div>



                            </BackgroundGradient>
                        </div>
                    ))}


                </div>






            </div>







            <div className="mt-20 text-center">

                <Link href={'/courses'}>

                    <Button borderRadius="2.75rem" className="bg-white dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800">

                        View All Services
                    </Button>
                </Link>
            </div>





        </div>





    )




}
export default Service