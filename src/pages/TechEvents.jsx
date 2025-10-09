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
      description: "Code Rush is a high-speed coding showdown where you race against the clock and your peers to solve programming challenges. Each round pushes you harder—solve fast, code smart, and advance to the next level. Only the quickest problem-solvers survive the elimination rounds. Think fast, type faster, and prove you've got what it takes to reach the top.",
    },
    {
      title: 'Rapid Prototyping',
      date: '15 Oct - 11am onwards',
      venue: 'TBD',
      description: "The Rapid Prototyping Challenge is a fast-paced sprint where you'll have just a few hours to turn a real-world problem into a working prototype. It's not about being perfect, it's about thinking on your feet and building a Minimum Viable Prototype (MVP) that works. This is your chance to showcase your skills and prove that a great idea doesn't need months to come to life.",
    },
    {
      title: 'Ideathon',
      date: '15 Oct - 2pm onwards',
      venue: 'TBD',
      description: "Ideathon is a collaborative event where teams of 2-3 brainstorm, develop, and pitch innovative ideas to solve a given problem statement. It's a test of creativity and practicality, with the team presenting the most impactful solution winning the prize.",
    },
    {
      title: 'Water Rocket',
      date: '16 Oct - 1pm onwards',
      venue: 'TBD',
      description: "Ready for liftoff? Harness the raw power of pressurized hydro-propulsion in this ultimate engineering showdown. Team up with your co-pilot to design, build, and launch a rocket that defies gravity. It’s a high-velocity battle of aerodynamics, thrust, and pure innovation. Will you conquer the skies or crash and burn? Assemble your team and prepare for blast-off!",
    },
    {
      title: 'Dig The Web',
      date: '16 Oct - 1:30pm onwards',
      venue: 'TBD',
      description: "Dive into a whirlpool of quirky internet puzzles where every click counts! Each round gets trickier (and sneakier) — but hey, so does your time limit. Crack the clues, outsmart the web, and be the winner of this event! Ready to dig in? Let the scrolling (and chaos) begin!",
    },
    {
      title: 'Design x AI',
      date: '16 Oct - 2pm onwards',
      venue: 'TBD',
      description: "Design X AI is a time-bound design challenge. You'll be given a theme on the spot and limited time to craft your masterpiece using AI-powered tools and traditional design platforms like Canva, Figma, or Photoshop. Your task? To turn ideas into visuals blending imagination, technology, and design thinking.",
    }
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
