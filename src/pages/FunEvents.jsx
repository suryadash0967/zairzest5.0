import { useState } from 'react';
import EventCard from '../components/EventCard';

function FunEvents() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const events = [
    {
      title: 'Treasure Hunt',
      date: '27 Apr - 9:00 AM',
      venue: 'SAC Area',
    },
    {
      title: 'Treasure Hunt',
      date: '27 Apr - 9:00 AM',
      venue: 'SAC Area',
    },
    {
      title: 'Treasure Hunt',
      date: '27 Apr - 9:00 AM',
      venue: 'SAC Area',
    }
  ];

  return (
    <div className="events-page-wrapper">
      <div className="events-page-main-bg"></div>
      <h1 className="events-head">Fun Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            venue={event.venue}
            isFlipped={flippedIndex === index}
            onFlip={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default FunEvents;
