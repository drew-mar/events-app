import { useState } from "react"

function AddEvent({ addEvent }) {
  // form data state
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  // reset inputs
  const resetForm = () => {
    setName('')
    setDate('')
    setLocation('')
    setTime('')
  }

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault()

    // create new event object
    const newEvent = {
      id: Math.round(Math.random() * 10000),
      name: name,
      location: location,
      date: new Date(date).toDateString(),
      time: time
    }
    addEvent(newEvent)
    resetForm()
  }


  return (
    <form className="add-event-form" onSubmit={handleSubmit}>
      <h3>Add Event</h3>
      <label>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Location</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        <span>Date</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        <span>Time</span>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default AddEvent