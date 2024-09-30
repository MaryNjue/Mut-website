import './EventsPage.css'; 
import cyberSecurityImg from '../assets/cybersecurity.jpg';
import uiuxImg from '../assets/uiux.jpg';
import webDevImg from '../assets/webdevelopment.jpg';
import mobileAppsImg from '../assets/app.jpg';
import cloudEngImg from '../assets/cloud.jpg';
import powerPlatformImg from '../assets/power.jpg';
import Navigation from './navigation';
import Footer from './footer';

const Events = () => {
  const events = [
    {
      title: 'Cyber Security',
      day: 'Every Monday',
      time: '4pm to 7pm',
      location: 'Computer Lab F04',
      leader: 'Webster Ifedha',
      image: cyberSecurityImg,
    },
    {
      title: 'UI/UX Design',
      day: 'Every Tuesday',
      time: '5pm to 8pm',
      location: 'Computer Lab F04',
      leader: 'Manase Gunga',
      image: uiuxImg,
    },
    {
      title: 'Web Development',
      day: 'Every Wednesday',
      time: '6pm to 9pm',
      location: 'Computer Lab F04',
      leader: 'Carolyne Githenduka',
      image: webDevImg,
    },
    {
      title: 'Mobile Apps Development',
      day: 'Every Thursday',
      time: '4pm to 7pm',
      location: 'Computer Lab F04',
      leader: 'Stanley Amunze',
      image: mobileAppsImg,
    },
    {
      title: 'Cloud Engineering',
      day: 'Every Friday',
      time: '3pm to 6pm',
      location: 'Computer Lab F04',
      leader: 'Paul Karanja',
      image: cloudEngImg,
    },
    {
      title: 'Power Platform',
      day: 'Every Saturday',
      time: '1pm to 4pm',
      location: 'Computer Lab F04',
      leader: 'Evyonn Mbithe',
      image: powerPlatformImg,
    },
  ];

  return (
    
    <div className="events-container">
      <Navigation/>
      <h1 className="events-title">Weekly Schedule</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-day">{event.day}</p>
              <p className="event-time">{event.time}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-leader">Led by {event.leader}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
