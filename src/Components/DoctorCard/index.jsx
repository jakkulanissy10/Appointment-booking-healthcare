import { Link } from "react-router-dom"

const DoctorCard = ({ doctor }) => {
  return (
  <li className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 p-10">
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
        
        {/* Profile Image */}
       <img 
         src={doctor.profile} 
         alt={doctor.name} 
         className="w-full sm:w-40 h-56 md:h-64 object-cover object-top sm:rounded-l-lg"
       />

        {/* Doctor Info */}
      <div className="flex flex-col justify-between p-4 sm:flex-1 text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              {doctor.name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              {doctor.specialization}
            </p>
            <span className={`
                mt-2 block font-medium px-3 py-1 rounded-full text-xs sm:text-sm md:text-base w-fit
                ${
                  doctor.available === "Available"
                    ? " text-green-700"
                    : doctor.available === "Fully Booked"
                    ? " text-yellow-700"
                    : " text-red-700"
                }
              `}>
              {doctor.available}
            </span>
          </div>



              {/* Book Appointment Button */}
            <Link 
  to={`/doctors/${doctor.id}`} 
  className="self-start mt-4 bg-blue-300 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
  style={{ whiteSpace: "nowrap" }}
>
  Book Appointment
</Link>


        </div>
      </div>
    </li>
  )
}

export default DoctorCard

