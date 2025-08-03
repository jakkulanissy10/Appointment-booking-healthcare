import { useAppointment } from "../AppointmentContext.jsx"

const AppointmentForm = ({ today, onSubmit, onCancel }) => {
  const { formData, setFormData } = useAppointment()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-center">Book Appointment</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            min={today}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                backgroundColor: "#dc2626", 
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                backgroundColor: "#16a34a", 
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AppointmentForm
