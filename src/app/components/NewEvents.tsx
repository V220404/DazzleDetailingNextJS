'use client'
import Link from "next/link"
import { Button } from "./ui/moving-border"
import { title } from "process"
import { HoverEffect } from "./ui/card-hover-effect";

function NewEvents(){

const event=[
    {
        title:"Event Name",
        description:"Enter the description of te even yoou want the event is of the store the detailes of the events are entered here for thew reference and all events are displayed here this data of eevents can be changed and modified as per the ned and occation and this is used to type just to feel the information in teh cards ",
        isFeatured:true,
    },
    {
        title:"Event Name",
        description:"Enter the description of te even yoou want the event is of the store the detailes of the events are entered here for thew reference and all events are displayed here this data of eevents can be changed and modified as per the ned and occation and this is used to type just to feel the information in teh cards ",
        isFeatured:true,
    },
    {
        title:"Event Name",
        description:"Enter the description of te even yoou want the event is of the store the detailes of the events are entered here for thew reference and all events are displayed here this data of eevents can be changed and modified as per the ned and occation and this is used to type just to feel the information in teh cards ",
        isFeatured:true,
    },
    {
        title:"Event Name",
        description:"Enter the description of te even yoou want the event is of the store the detailes of the events are entered here for thew reference and all events are displayed here this data of eevents can be changed and modified as per the ned and occation and this is used to type just to feel the information in teh cards ",
        isFeatured:true,
    },
    {
        title:"Event Name",
        description:"Enter the description of te even yoou want the event is of the store the detailes of the events are entered here for thew reference and all events are displayed here this data of eevents can be changed and modified as per the ned and occation and this is used to type just to feel the information in teh cards ",
        isFeatured:true,
    },
    {
        title:"Event Name",
        description:"Enter the description of te even yoou want the event is of the store the detailes of the events are entered here for thew reference and all events are displayed here this data of eevents can be changed and modified as per the ned and occation and this is used to type just to feel the information in teh cards ",
        isFeatured:true,
    },
]

    return(
        <div className="p-12 bg-gray-900">
            <div className="max-wl-7xl mx-auto px-4 sm:px-6">
<div className="text-center">
<h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase text-xl">Upcoming Offers & Events</h2>
<p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Our Stores Events and Offers</p>



</div>



<div className="mt-10">

      <HoverEffect items={event.map(data=>(
        {
            title: data.title,
             description: data.description,
             link:'/    '
        }
      ))} />
   
</div>




<div className="mt-20 text-center">

<Link href={'/courses'}>

    <Button borderRadius="2.75rem" className="bg-white dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800">

        View All Events
    </Button>
</Link>
</div>

            </div>
        </div>
    )
}


export default NewEvents