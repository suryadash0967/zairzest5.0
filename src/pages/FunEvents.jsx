import { useState } from 'react';
import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';

function FunEvents() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const events = [
    {
      title: 'Cup Stacking',
      date: '15-16 Oct - 12 noon onwards',
      venue: 'SAC Area',
      description:
        "Cup Stacking is a fast-paced challenge of speed and precision! Compete in Speed and Memory Stacking rounds to test your reflexes and focus. The ultimate stacking showdown awaits!",
    },
    {
      title: 'Paper Dance',
      date: '15-16 Oct - 12 noon onwards',
      venue: 'SAC Area',
      description:
        "Team up, dance to trending beats, and fold your paper smaller each round! Strike your best pose when the music stops and dance your way to victory!",
    },
    {
      title: 'PvP',
      date: '15-16 Oct - 12 noon onwards',
      venue: 'SAC Area',
      description:
        "Step into the arena and battle it out! Every second counts—no mercy, no retreat, only glory. Crush your rival and claim your victory!",
    },
    {
      title: 'Programemer',
      date: '15-16 Oct - best ones get featured',
      venue: 'Online',
      description:
        "Create your best tech memes and submit them online! The funniest and most original get featured. No plagiarism—Big Brother is watching!",
    },
    {
      title: 'Treasure Hunt',
      date: '16 Oct - 4:30pm onwards',
      venue: 'SAC Area',
      description:
        "Decode puzzles, crack codes, and race against time! Each clue brings you closer to victory. Think fast, act faster, and hunt smart!",
    },
    {
      title: 'Jamming Night',
      date: '16 Oct - 4:30pm onwards',
      venue: 'Stage Area',
      description:
        "End Zairzest with an epic night of live music! Grab your gang, sing your heart out, and vibe to beats that’ll echo till next year!",
    },
  ];

  return (
    <>
      <Navbar />
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
              description={event.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FunEvents;
