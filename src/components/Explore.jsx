function Explore() {
  return (
    <div
      className="explore-wrapper"
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/images/explore_page_combined.png)',
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, totam quae illum deleniti excepturi qui laborum sunt assumenda? Qui sit sequi velit id quia neque reiciendis fuga omnis sapiente quae nobis voluptatibus, debitis
      </div>

      <div className="tech-fun-wrapper">
        <a className="events-card" href="">
          <img src="/images/techevents.png" alt="" />
          <div className="events-desc">
            <p>Know more about</p>
            <div>TECH EVENTS</div>
          </div>
        </a>
        <a className="events-card" href="">
          <img src="/images/funevents.png" alt="" />
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