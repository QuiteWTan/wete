import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-500 w-full flex flex-row justify-center font-poppins py-4 '>
      <div className='max-w-[1300px] w-full flex flex-row justify-end'>
        <div className='flex flex-col md:flex-row gap-4 items-center text-white'>
            <div className='flex items-center'>
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-gray-600 rounded-full flex items-center justify-center'>
                        <box-icon type='logo' name='whatsapp' color="white"></box-icon>
                    </div>
                    +62 822 5642 1856
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 bg-gray-600 rounded-full flex items-center justify-center'>
                    <box-icon name='gmail' type='logo' color="white"></box-icon>
                </div>
                williamtan1232@gmail.com
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
