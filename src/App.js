// import useState hook
import { useState } from 'react'
// import components
import Nav from './components/Nav'
import Modal from './components/Modal'
import EventList from './components/EventList'
import AddEvent from './components/AddEvent'


function App() {
  // show/hide modal state
  const [showModal, setShowModal] = useState(false)
  // show/hide events state
  const [showEvents, setShowEvents] = useState(true)
  // events state
  const [events, setEvents] = useState([
    { id: 1, name: 'American River 50 Endurance Run', location: 'Folsom', date: '1st April', time: '9:00AM' },
    { id: 2, name: 'Coachella Music Festival', location: 'Indio', date: '14th April', time: '12:00PM' },
    { id: 3, name: 'Desert X', location: 'Greater Palm Springs', date: '18th April', time: '9:30AM' },
    { id: 4, name: 'Surfscape', location: 'Huntington Beach', date: '29th April', time: '8:40AM' },
    { id: 5, name: 'Red Bluff Round-Up', location: 'Red Bluff', date: '15th April', time: '11:00AM' }
  ])


  // add event
  const addEvent = (event) => {
    // add new event to current state
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    // close modal
    setShowModal(false)
  }
  // delete event
  const handleClick = (id) => {
    // update state based on previous state
    setEvents((prevEvents) => {
      // filter event by id
      return prevEvents.filter((event) => {
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Nav />
      {/* show/hide events buttons */}
      <div className='button-container'>
        {showEvents && (
          <div><button onClick={() => setShowEvents(false)}>Hide events</button></div>
        )}
        {!showEvents && (
          <div><button onClick={() => setShowEvents(true)}>Show events</button></div>
        )}
        {!showModal && (
          <div><button onClick={() => setShowModal(true)}>Add event</button></div>
        )}
      </div>
      {/* pass events state & handleDelete as props to eventList component */}
      {showEvents && <EventList events={events} handleClick={handleClick} isCta={true} />}
      {showModal && <Modal isCta={true}>
        <AddEvent addEvent={addEvent} />
      </Modal>}
    </div>
  );
}

export default App;
