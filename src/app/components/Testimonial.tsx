'use client'

import { title } from "process"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
const feed=[
    {
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},
{
    quote:'the feedback from customer is  displayed  here it can be any long stretched but it depends on customer how long this feed should be and you good work gives you good feedback so work accordingly you wants and feedback helps you to devlop the bussiness to any extent',
    name:'Customer Name',
    title:'title'
},



]



function Testimonials(){
    return(

<div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">


    <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony : Voices of success</h2>

    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-12xl">
             <InfiniteMovingCards
        items={feed}
        direction="right"
        speed="slow"
      /></div>
    </div>
</div>
    )
};

export default Testimonials