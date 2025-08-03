import React from 'react'

function Header() {
  return (
    <section className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-3">
        
        {/* Logo + Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-600 tracking-wide whitespace-nowrap">
          Niro<span className="text-green-600">Gyan</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-gray-700 text-sm md:text-lg font-medium leading-snug md:leading-normal md:ml-6">
          Your Trusted Partner for easy and reliable healthcare Appointments
        </p>

      </div>
    </section>
  )
}

export default Header
