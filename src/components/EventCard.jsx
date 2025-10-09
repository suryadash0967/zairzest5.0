function EventCard({ title, date, venue, isFlipped, onFlip, description }) {
  return (
    <div className={`profile-left-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="profile-left-wrapper">
        <div className="left-img-wrapper events-img-wrapper">
          <img src="/images/events_img_1.png" alt="events" className="profile-img events-img img1" />
          <img src="/images/events_img_2.png" alt="events" className="profile-img events-img img2" />
        </div>
        <div className="profile-img-desc">
          <div className="event-card-img">
            <img src="/images/event_card_img_1.png" className='event-card-image' alt="" />
          </div>
          <div className="event-name-wrapper">
            <div className="event-name">{title}</div>
            <div className="info-btn" onClick={onFlip}><i className='bx bx-info-circle'></i></div>
          </div>
          <div className="events-desc-wrapper">
            <div className="date-time">
              <div>Date & Time</div>
              <div>{date}</div>
            </div>
            <div className="venue">
              <div>Venue</div>
              <div>{venue}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-left-back-wrapper">
        <div className="profile-left-wrapper">
          <div className="left-img-wrapper">
            <img src="/images/events_img_1.png" alt="events" className="profile-img events-img img1" />
            <img src="/images/events_img_2.png" alt="events" className="profile-img events-img img2" />
          </div>
          <div className="profile-img-desc">  
            <div className="event-back-desc">
              {description}
            </div>
            <div className="back-close-btn" onClick={onFlip}>Close</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
