import { useState, useEffect } from "react"
import DoctorCard from "../DoctorCard/index.jsx"
import Header from "../Header/index.jsx"
import { specialists, healthTips } from "../Data/index.jsx"

const DoctorList = () => {
  const [doctors, setDoctors] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true)
        const res = await fetch("https://appointment-booking-healthcare-2.onrender.com/doctors"
)
        if (!res.ok) throw new Error("Failed to fetch doctors")
        const data = await res.json()
        setDoctors(data)
      } catch (err) {
        console.error(err)
        setError("Unable to load doctors at the moment.")
      } finally {
        setLoading(false)
      }
    }
    fetchDoctors()
  }, [])

  // Filter doctors by name or specialization
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchInput.toLowerCase())
  )

  // Handlers
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value)
  }

  // Reusable classes
  const sectionHeading = "text-xl md:text-2xl font-bold text-center mb-6"

  return (
    <div className="bg-gray-50 text-gray-800 w-screen">
      {/* Header */}
      <Header />

      {/* Search Box */}
      <div className="flex justify-end mb-6 pt-10">
        <div className="w-48 relative mt-30">
          <input
            type="search"
            placeholder="Search doctor"
            value={searchInput}
            onChange={handleSearchChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm 
              text-sm"
          />
        </div>
      </div>

      {/* Specialists + Doctors Section */}
      <section className="pt-10 py-8 px-4">
        {/* Specialists only when no search */}
        {searchInput.trim() === "" && (
          <>
            <h1 className={sectionHeading}>Top Search Specialists</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {specialists.map((specialist, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={specialist.img}
                    alt={specialist.alt}
                    className="w-full h-48 object-cover"
                  />
                  <p className="text-center py-3 font-medium">{specialist.name}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Doctors Section */}
        <div>
          <h1 className={`${sectionHeading} p-5`}>
            {searchInput.trim() === "" ? "Meet our Doctors" : "Search Results"}
          </h1>

          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : loading ? (
            // Skeleton Loading State
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
              {[...Array(6)].map((_, i) => (
                <li
                  key={i}
                  className="animate-pulse bg-gray-200 rounded-lg h-56"
                ></li>
              ))}
            </ul>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">
                  No doctors found.
                </p>
              )}
            </ul>
          )}
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Quick Health Tips
        </h1>
        <div className="space-y-6">
          {healthTips.map((tip, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                tip.reverse ? "md:flex-row-reverse" : ""
              } items-center border border-gray-300 rounded-lg overflow-hidden bg-white`}
            >
              <img
                src={tip.img}
                alt={tip.title}
                className="w-full md:w-1/3 h-40 object-cover object-top"
              />
              <div className="p-5 text-center md:text-left">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  {tip.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm md:text-base font-medium">@ 2025 NirogGyan</p>
          <p className="text-sm md:text-base mt-2 sm:mt-0 flex items-center gap-1">
            Built with <span className="text-red-500">&#10084;&#65039;</span> & React
          </p>
        </div>
      </footer>
    </div>
  )
}

export default DoctorList
