import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();

  return (
    <div
      className="explore-wrapper"
      id="events"
      style={{
        width: '100%',
        backgroundImage: 'url("https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074314/explore_page_combined_odzffj.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >

      <div className="explore-head">
        Explore the Events
      </div>
      <div className="explore-desc">
        Everything has been made simple for you to scroll around and get the most out of the options available.
      </div>

      <div className="tech-fun-wrapper">
        <a className="events-card"  onClick={() => navigate("/tech-events")}>
          <img src="https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074322/techevents_gyhidg.png" alt="" />
          <div className="events-desc">
            <p>Know more about</p>
            <div>TECH EVENTS</div>
          </div>
        </a>
        <a className="events-card" onClick={() => navigate("/fun-events")}>
          <img src="https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074315/funevents_cp6nba.png" alt="" />
          <div className="events-desc">
            <p>Know more about</p>
            <div>FUN EVENTS</div>
          </div>
        </a>
      </div>

    </div>
  )
}

export default Explore