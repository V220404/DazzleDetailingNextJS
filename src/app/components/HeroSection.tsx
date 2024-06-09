import { Spotlight } from "./ui/Spotlight"
import Link  from "next/link"
import { Button } from "./ui/moving-border"
function HeroSection(){
    return(
        <div  className="h-auto md:h-[40] w-full rounded-md flex flex-col item-center justfy-center relative overflow-hidden mx-auto py-10 md:py-0 ">
          <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 "
        fill="white"
      />
            <div className="p-4 relative z-10 w-full text-center font-mono  ">

                <h1 className="mt-20 md:mt-40 text-4xl md:text-7xl font-bold  bg-clip-text  bg-gradient-to-b from-netural-50 to-neutral-400 justify-center">DAZZLE DETAILINGS</h1> 
                <p  className="mt-20 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-red-300 text-center ">
                At DAZZLE DETAILINGS, we transform every vehicle into a masterpiece with meticulous  detailing that highlights its true brilliance. Experience unparalleled service where every detail is perfected, ensuring your car shines with unmatched elegance and sophistication. Drive in dull, drive out dazzling.
                <div className="mt-20">
                    <Link href={"/courses"}>
                      <Button borderRadius="2.75rem
                      " className="bg-white dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800">

                        Explore
                      </Button>
                    </Link>
                </div>
             
                </p>
              
                </div>
              
        </div>



        
    )
}

export default HeroSection