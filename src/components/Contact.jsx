import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { FaLinkedinIn } from "react-icons/fa6"
import { IoPaperPlane } from "react-icons/io5"
import emailjs from "@emailjs/browser"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage('')
    setErrorMessage('')

    emailjs.send(
      "adarshdwivedi9598",
      "template_a6psjme",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "FrHjyThTWYvW47uQM"
    ).then(
      () => {
        setSuccessMessage("Message sent successfully. I’ll get back to you soon.")
        setFormData({ name: '', email: '', message: '' })
        setLoading(false)
      },
      () => {
        setErrorMessage("Something went wrong. Please try again.")
        setLoading(false)
      }
    )
  }

  return (
    <div className='w-full min-h-screen'>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl text-black">Contact Me</h1>
        <p className="mt-2 text-gray-800">Let's Keep in Touch</p>
        <div className="relative mt-3 w-48 h-[2px] bg-black/80">
          <span className="absolute left-1/2 -translate-x-1/2 -top-[5px] w-14 h-[10px] bg-orange-500 rounded-full"></span>
        </div>
      </div>

      <div className='flex justify-center mt-8 mb-12 px-4'>
        <div className='w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row'>

          <div className='w-full md:w-1/2 bg-blue-900 p-8 flex flex-col relative overflow-hidden min-h-[300px]'>
            <div className='absolute inset-0 opacity-20'>
              <div className='grid grid-cols-4 gap-3 p-4'>
                {[...Array(12)].map((_, i) => (
                  <div key={i} className='w-10 h-10 rounded-full bg-blue-400'></div>
                ))}
              </div>
            </div>

            <div className='relative z-10 h-full flex flex-col'>
              <h1 className='text-3xl md:text-4xl text-white'>Get In Touch</h1>

              <div className='flex gap-4 my-6'>
                <a href='https://www.instagram.com/adarshh_010/' target='_blank' rel='noreferrer' className='text-white text-2xl'><FaInstagram /></a>
                <a href='https://github.com/adarshh8' target='_blank' rel='noreferrer' className='text-white text-2xl'><FaGithub /></a>
                <a href='mailto:adarshdwivedi9598@gmail.com' className='text-white text-2xl'><BiLogoGmail /></a>
                <a href='https://www.linkedin.com/in/adarsh8/' target='_blank' rel='noreferrer' className='text-white text-2xl'><FaLinkedinIn /></a>
              </div>

              <p className='text-white mt-auto'>Send Your Email Here!</p>
            </div>
          </div>

          <div className='w-full md:w-1/2 bg-gray-200 p-8 flex flex-col'>
            <form onSubmit={handleSubmit} className='flex flex-col h-full'>

              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                className='mb-4 px-4 py-3 rounded-lg bg-gray-100 border'
                required
              />

              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className='mb-4 px-4 py-3 rounded-lg bg-gray-100 border'
                required
              />

              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='6'
                placeholder='Enter your message'
                className='mb-4 px-4 py-3 rounded-lg bg-gray-100 border resize-none'
                required
              />

              {successMessage && (
                <p className='text-green-600 mb-3'>{successMessage}</p>
              )}

              {errorMessage && (
                <p className='text-red-600 mb-3'>{errorMessage}</p>
              )}

              <button
                type='submit'
                disabled={loading}
                className='bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 border-2 border-red-500'
              >
                {loading ? "sending..." : "send"}
                <IoPaperPlane />
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
