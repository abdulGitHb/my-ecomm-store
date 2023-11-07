import NextNav from "@/components/next-Nav";

const ContactUsPage = () => {

    async function create(formData: FormData) {
        'use server';
        console.log("formdata", formData);
        const data:any = await formData;
        console.log("data",data);
        // const id = await createItem(formData);
      }

      
    return ( 
        <div>
            <div className="w-full">
                <div className="bg-gradient-to-b from-[#e4974f] to-[#bd7634] h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">Contact Us</p>

                        <form action={create}>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none">Name</label>
                                    <input name="name" placeholder="John Doe" type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Phone</label>
                                    <input name="phone" placeholder="+91 88888 88888" type="number" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                </div>
                                
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full md:w-1/2 flex flex-col md:ml md:mt-0 mt-4">
                                    <label  className="font-semibold leading-none">Email Id</label>
                                    <input name="email" placeholder="johndoe@xyz.com" type="email" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label  className="font-semibold leading-none">Subject</label>
                                    <input name="subject" placeholder="Enquiry for glasses" type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                </div>
                                
                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none">Message</label>
                                    <textarea name="message" placeholder="Hey there, write your message here!" typeof="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button type="submit" className="mt-9 font-semibold leading-none py-4 px-10 bg-[#e4974f] rounded hover:bg-[#bd7634] focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUsPage;