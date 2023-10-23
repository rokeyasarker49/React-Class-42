/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
    return (
        <div>

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 text-black">
                <div className=" w-100 border border-green-500 rounded">
                    <img src="contact.png" alt="" className="p-6" />
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded  bg-white border border-green-500" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded  bg-white  border border-green-500" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="8" className="w-full p-3 rounded bg-white resize-none border border-green-500" required></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-green-500 text-white">Send Message</button>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;