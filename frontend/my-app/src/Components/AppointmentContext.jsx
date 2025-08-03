import { createContext, useContext, useState } from "react"

const AppointmentContext = createContext()

export const useAppointment = () => useContext(AppointmentContext)

export const AppointmentProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", time: "" })
  const [message, setMessage] = useState("")
  const [showForm, setShowForm] = useState(false)

  return (
    <AppointmentContext.Provider value={{ formData, setFormData, message, setMessage, showForm, setShowForm }}>
      {children}
    </AppointmentContext.Provider>
  )
}
