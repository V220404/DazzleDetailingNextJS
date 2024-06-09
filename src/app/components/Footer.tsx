function Footer(){
    return(
     <footer className="bg-black text-gray-400 py-12 ">
<div className="mx-auto mx-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 ">
    <div>
        <h2 className="text-white text-lg font-semibold mb-4 ">About Us</h2>
        <p>some information</p>


    </div>


    <div>
        <h2 className="text-white text-lg font-semibold mb-4 ">Important Links</h2>
     

    </div>


    <div>   <h2 className="text-white text-lg font-semibold mb-4 "> Follow Us</h2>
<div className=" flex space-x-4">
<a href='#' className="hover:text-white transition-colors duration-300">
    FaceBook
</a>
<a href='#' className="hover:text-white transition-colors duration-300">
    Twitter
</a>
<a href='#' className="hover:text-white transition-colors duration-300">
    Instagram
</a>

</div>
       


    </div>


    <div>
    <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
        <p>City Name , Country</p>
        <p> City City code</p>
        <p> Email ID</p>
        <p>Contact Number</p>


    </div>
</div>

<p className="flex justify-center mt-5 text-xs">@2024 Pintya Group. All Rights Reserved</p>
     </footer>
    )
}


export default Footer;