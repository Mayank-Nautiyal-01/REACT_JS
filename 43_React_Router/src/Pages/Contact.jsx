
import { Form } from 'react-router-dom';

export const contactData=async({request})=>{
    try{
      const res=await request.formData()
     const data=Object.fromEntries(res)
     console.log(data);
      return null;
    } catch(error){
      console.log(error);
    }
}
function Contact() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Contact Us</h2>
        <p className="text-gray-600 text-center mt-2">We'd love to hear from you!</p>

        {/* Contact Form */}
        <Form method="POST" action="/contact" className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input 
              type="text" 
              name="name"
              placeholder="Enter your name" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea 
              rows="4" 
              name="message"
              placeholder="Write your message here..." 
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
