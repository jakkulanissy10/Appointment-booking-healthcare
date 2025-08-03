import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../Header/index.jsx"
import AppointmentForm from "../AppointmentForm"
import { useAppointment } from "../AppointmentContext"

const DoctorDetail = () => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState(null)
  const { formData, setFormData, message, setMessage, showForm, setShowForm } =
    useAppointment()

  const handleSubmit = async (formData) => {
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`)
    if (selectedDateTime < new Date()) {
      setMessage("Please choose a future date and time.")
      return
    }

    setMessage("Booking your appointment...")

    try {
      const res = await fetch("http://localhost:3000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await res.json()
      if (res.ok) {
        setMessage("Appointment booked successfully!")
        setFormData({ name: "", email: "", date: "", time: "" })
        setShowForm(false)
      } else {
        setMessage(`Error: ${result.error}`)
      }
    } catch (error) {
      setMessage("Failed to connect to server.")
    }
  }

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`http://localhost:3000/doctors/${id}`)
        const data = await res.json()
        setDoctor(data)
      } catch {
        setMessage("Failed to load doctor details.")
      }
    }
    fetchDoctor()
  }, [id])

  if (!doctor) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading doctor details...
        </p>
      </div>
    )
  }

  const today = new Date().toISOString().split("T")[0]
  const available = doctor.available.toLowerCase() === "available"

  const InfoLine = ({ label, value }) => (
    <p>
      <b>{label}:</b> {value}
    </p>
  )

  return (
    <>
      <Header />
      <div style={{ padding: "40px", maxWidth: "900px", margin: "80px auto" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "30px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <img
              src={doctor.profile}
              alt={doctor.name}
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: "12px",
                margin: "0 auto",
              }}
            />

            <div style={{ textAlign: "center" }}>
              <h2
                style={{ fontSize: "28px", fontWeight: "bold", color: "#1f2937" }}
              >
                {doctor.name}
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#374151",
                  margin: "8px 0",
                }}
              >
                {doctor.specialization}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "8px",
                  color: available ? "green" : "red",
                }}
              >
                {doctor.available}
              </p>
            </div>

            <div style={{ textAlign: "left", marginTop: "20px", lineHeight: "1.8" }}>
              <InfoLine
                label="Experience"
                value={doctor.experience || "10+ years in practice"}
              />
              <InfoLine
                label="Education"
                value={doctor.education || "MBBS, MD from AIIMS Delhi"}
              />
              <InfoLine
                label="Location"
                value={doctor.location || "NiroGyan Health Center, Hyderabad"}
              />
              <InfoLine
                label="Contact"
                value={doctor.contact || "+91 98765 43210"}
              />
            </div>

            {/* Appointment Button */}
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                disabled={!available}
                style={{
                  padding: "12px 25px",
                  backgroundColor: available ? "#2563eb" : "#d1d5db",
                  color: available ? "#ffffff" : "#4b5563",
                  border: "none",
                  borderRadius: "8px",
                  cursor: available ? "pointer" : "not-allowed",
                  fontWeight: "600",
                  margin: "20px auto 0",
                  display: "block",
                }}
              >
                {available ? "Book Appointment" : "Not Available"}
              </button>
            ) : (
              <AppointmentForm
                today={today}
                onSubmit={handleSubmit}
                onCancel={() => setShowForm(false)}
              />
            )}

            {message && (
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "bold",
                  color: message.includes("successfully") ? "green" : "red",
                }}
              >
                {message}
              </p>
            )}

          
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorDetail




