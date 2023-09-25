import React, { useState } from 'react'

const ContactSection = () => {
    const [login, setLogin] = useState({
        email: '',
        subject: '',
        message: '',
    });
    console.log(login)
    const handleLogin = (name, value) => {
        setLogin((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    }
    return (
    <section className="flex justify-center py-24 px-4 gap-4 relative w-full bg-gray-300 font-raleway" name="contact">
      <div className='max-w-[1300px] w-full flex flex-col md:flex-row justify-center gap-4'>
        <div className="max-w-[550px] w-full">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <h3 className='font-bold'>Hi there!</h3>
            <p className="mb-4 max-w-md">
                My inbox is always open. Whether you have a question or reaching out or just want to say hi, I will try to reach out for you too as soon as possible
            </p>
        </div>

        <div className="max-w-[550px] w-full" >
            <form className="flex flex-col" action="https://getform.io/f/cda5704b-7e2e-4915-bed7-8418a3499355" method="POST">
                <div className="mb-6">
                    <label
                        label="email"
                        className="mb-2 text-sm font-medium"
                    >
                    Email : 
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="border-gray-200 border outline-none placeholder-[#9CA2A9]  text-gray-900 text-sm rounded-lg block w-full p-3"
                        placeholder="Example : example@gmail.com"
                        value={login.Email}
                        name='email'
                        onChange={(e) => handleLogin(e.target.name, e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label
                    label="subject"
                    className="text-sm mb-2 font-medium"
                    >
                    Subject : 
                    </label>
                    <input
                    type="text"
                    id="subject"
                    required
                    className="border-gray-200 border outline-none placeholder-[#9CA2A9] text-gray-900 text-sm rounded-lg block w-full p-3"
                    placeholder="Example: hi this is me"
                    value={login.Subject}
                    name="subject"
                    onChange={(e) => handleLogin(e.target.name, e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label
                        labe="message"
                        className="text-sm mb-2 font-medium"
                    >
                    Message :
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="border-gray-200 border outline-none placeholder-[#9CA2A9]  text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Example : good morning there"
                        value={login.Subject}
                        onChange={(e) => handleLogin(e.target.name, e.target.value)}
                    />
                </div>
                {
                    !login.email || !login.subject || !login.message ? 

                    <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full bg-gray-700" disabled>
                    Send Message
                    </button> 
                    : 
                    <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full bg-gray-700">
                        Send Message
                    </button>
                }
            </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
