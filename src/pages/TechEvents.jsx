import { useState } from 'react';
import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';

function TechEvents() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const events = [
    {
      title: 'Code Rush',
      date: '15 Oct - 11am onwards',
      venue: 'TBD',
      description:
        "A lightning-fast coding showdown! Solve challenges, race the clock, and outcode your peers to reach the top. Only the fastest survive!",
    },
    {
      title: 'Rapid Prototyping',
      date: '15 Oct - 11am onwards',
      venue: 'TBD',
      description:
        "Think fast, build faster! Turn ideas into working prototypes within hours. It’s all about creativity, speed, and execution!",
    },
    {
      title: 'Ideathon',
      date: '15 Oct - 2pm onwards',
      venue: 'TBD',
      description:
        "Brainstorm, innovate, and pitch your ideas! Teams of 2-3 compete to craft impactful solutions that wow the judges.",
    },
    {
      title: 'Water Rocket',
      date: '16 Oct - 1pm onwards',
      venue: 'TBD',
      description:
        "Build, launch, and soar! Design your own hydro-propelled rocket and see whose creation conquers the skies. Ready for liftoff?",
    },
    {
      title: 'Dig The Web',
      date: '16 Oct - 1:30pm onwards',
      venue: 'TBD',
      description:
        "Dive into internet puzzles and hunt hidden clues! Outsmart the web before time runs out. Let the scrolling begin!",
    },
    {
      title: 'Design x AI',
      date: '16 Oct - 2pm onwards',
      venue: 'TBD',
      description:
        "Blend art and AI! Use tools like Figma or Canva to craft stunning designs around a surprise theme. Creativity meets tech magic!",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="events-page-wrapper">
        <div className="events-page-main-bg"></div>
        <h1 className="events-head">Tech Events</h1>
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

export default TechEvents;
