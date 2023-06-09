import React from "react";

const Contact = () => {
    return (
        <>
    <div className="my-40 md:my-5">
                 {/* Contact form here  */}
                 {/* <!-- component --> */}
    <div className="flex justify-center items-center w-screen h-screen bg-white">
	{/* <!-- COMPONENT CODE --> */}
	<div className="container mx-auto my-4 px-4 lg:px-20">

		<div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl" data-aos="fade-right">
			<div className="flex">
				<h1 className="font-bold uppercase text-5xl">Send us a message</h1>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div className="my-4">
					<textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline
                      hover:bg-blue-700">
            Send Message
          </button>
				</div>
			</div>

			<div
				className="w-full lg:-mt-96 lg:w-2/6 px-8 py-14 ml-auto bg-blue-600 rounded-2xl" data-aos="fade-left">
				<div className="flex flex-col text-white">
					<h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
					<div className="flex my-4 w-full">
						<div className="flex justify-between items-center w-full">
							<i className="fas fa-map-marker-alt pt-2 pr-2 text-xl" />
              <p className="w-5/6 mt-2">B. A. U. Madrasah Deola,Tangail- 1900, Bangladesh.</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-200 font-light">Tel: 09 21-63237</p>
              <p className="text-gray-200 font-light">Fax: 09 21-63237</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- COMPONENT CODE --> */}
</div>

            </div>
        </>
    )
}


export default Contact;