function EventList({ events, handleClick, isCta }) {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className="card">
          <h3>{event.name}, {event.location}</h3>
          <p>{event.date} - {event.time}</p>
          <button
            onClick={() => handleClick(event.id)}
            style={{ background: isCta ? '#F08080' : '' }}
          >
            Delete
          </button>
        </div>
      ))
      }
    </div >
  )
}

export default EventList