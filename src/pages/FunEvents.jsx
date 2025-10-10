import { useState } from 'react';
import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';

function FunEvents() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const events = [
    {
      title: 'Treasure Hunt',
      date: '15 Oct - 4:30pm onwards',
      venue: 'SAC Area',
      imageURL: "https://res.cloudinary.com/dl7eukvd3/image/upload/v1760092768/event_card_treasure_hunt_fhj7uu.jpg",
      description: "Think you're a tech wizard? Time to prove it! Navigate through layers of cryptic codes, steganography puzzles, and mind-bending technical riddles that'll test every byte of your brainpower. Each clue unlocks the next—crack them fast or watch your rivals surge ahead. From hidden links to debugging nightmares, every challenge pushes your limits harder than the last. Solo or squad up, it's a race against time where logic meets chaos. Can you decode, debug, and dominate your way to the treasure? The hunt begins now—may the sharpest mind win!",
    },
    {
      title: 'Cultural Night',
      date: '16 Oct - 4:30pm onwards',
      venue: 'Stage Area',
      imageURL: "https://res.cloudinary.com/dl7eukvd3/image/upload/v1760092767/event_card_jamming_vhqsgx.png",
      description: "Two days of tech madness, one epic night to close it all! Zairzest's final curtain call isn't about circuits or code—it's pure, unfiltered musical chaos. Live performances, killer riffs, and vocals that'll give you goosebumps. Whether you're here to headbang, vibe, or just scream lyrics at the top of your lungs, this is YOUR night. Grab your crew, lose yourself in the beats, and let's end Zairzest with a bang that echoes till next year. The stage is set, the amps are cranked—let the jamming begin!",
    },
    {
      title: 'Cup Stacking',
      date: '15-16 Oct - 12 noon onwards',
      venue: 'SAC Area',
      imageURL: "https://res.cloudinary.com/dl7eukvd3/image/upload/v1760092772/event_card_cup_lhb6qp.png",
      description: "Cup Stacking is a thrilling blend of speed, skill, and strategy! Participants will take on two exciting challenges — Speed Stacking, where precision and pace are key, and Memory Stacking, where creativity meets quick recall as players recreate given patterns within time limits. Join in to test your reflexes, sharpen your focus, and experience the ultimate stacking showdown!",
    },
    {
      title: 'Paper Dance',
      date: '15-16 Oct - 12 noon onwards',
      venue: 'SAC Area',
      imageURL: "https://res.cloudinary.com/dl7eukvd3/image/upload/v1760092766/event_card_paper_dance_r8yw2d.png",
      description: "Get ready for the ultimate fun challenge! Team up in pairs, groove to trending beats, and fold your paper smaller with every round. When the music stops, strike the hook step—or go full baraati mode! The pair that folds fast, dances hard, and wins the crowd's heart will be crowned the Ultimate Badshah of Paper Dance!",
    },
    {
      title: 'PvP',
      date: '15-16 Oct - 12 noon onwards',
      venue: 'SAC Area',
      imageURL: "https://res.cloudinary.com/dl7eukvd3/image/upload/v1760092767/event_card_pvp_jqda5n.png",
      description: "Unleash absolute chaos! Step into the blood-boiling arena where only the ruthless survive. Feel the roar of battle, the clash of steel, and the surge of unstoppable rage. Every strike is a challenge, every second a fight for dominance. No mercy. No retreat. Only victory carved in fury. Crush your rival, claim your glory, and let the world witness your wrath. This is war. This is power. This is legend!",
    },
    {
      title: 'Programemer',
      date: '15-16 Oct - best ones get featured',
      venue: 'Online',
      imageURL: "https://res.cloudinary.com/dl7eukvd3/image/upload/v1760092771/event_card_programemer_zdgwzi.png",
      description: "Programemer aint no casual event ehh.. unlike other events, it starts right at the beginning. Make your memes, put it on the form and lookout for the shoutouts (time to be popular). Remember 'Big brother is always watching'. No plagiarism allowed (We'd detect you anyways). Take your time to submit coz this. Lasts for a week",
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
              imageURL={event.imageURL}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FunEvents;
