
import './LeadershipPage.css'; 
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import imgDrNdia from '../assets/Dr-Ndia.jpg'
import imgVictory from '../assets/victoria.jpg'
import imgAllan from '../assets/allann.jpg'
import imgWebster from '../assets/webster.jpg'
import Navigation from './navigation';


const Leadership = () => {
  const leaders = [
    {
      name: "Dr. John Ndia",
      title: "Patron",
      bio: "Dr. John Ndia is the patron of the Murang'a University Tech Club. With a passion for education and technology, he has guided the club in fostering a culture of innovation and leadership among students.",
      img: imgDrNdia
    },
    {
      name: "Victory Njeri",
      title: "Chairperson",
      bio: "Victory Njeri is the Chairperson of MUTC. She is dedicated to leading the club and ensuring that members have opportunities to grow their tech skills.",
      img: imgVictory
    },
    {
      name: "Allan Muhari",
      title: "Vice Chairperson",
      bio: "Allan Muhari, the Vice Chairperson, focuses on supporting the leadership team and facilitating club events.",
      img: imgAllan
    },
    {
      name: "Bridget Gitonga",
      title: "Secretary",
      bio: "As the Secretary of MUTC, Bridget Gitonga ensures smooth communication and management of club activities.",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Ruth Mutisya",
      title: "Treasurer",
      bio: "Ruth Mutisya handles the financial aspects of the club, ensuring that all resources are managed effectively.",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Webster Ifedha",
      title: "Cyber Security Lead",
      bio: "Webster Ifedha is responsible for cybersecurity initiatives and training within the club.",
      img: imgWebster
    },
    {
      name: "Manase Gunga",
      title: "UI/UX Lead",
      bio: "Manase Gunga leads UI/UX design efforts within the club, helping members understand the importance of user-centered design.",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Carolyne Githenduka",
      title: "Web Development Lead",
      bio: "Carolyne Githenduka oversees the web development track, helping members build and enhance their web development skills.",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Stanley Amunze",
      title: "Mobile Apps Development Lead",
      bio: "Stanley Amunze leads the mobile development track, mentoring members on mobile app development.",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Paul Karanja",
      title: "Cloud Engineering Lead",
      bio: "Paul Karanja is responsible for cloud engineering within the club, guiding members on cloud technologies.",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Evyonn Mbithe",
      title: "Power Platform Lead",
      bio: "Evyonn Mbithe leads the Power Platform initiatives within the club, ensuring members are well-versed in modern technology solutions.",
      img: "https://via.placeholder.com/150"
    },
  ];

  return (
    <section className="leadership-section">
      <Navigation/>
      <h1>Meet Our Leaders</h1>
      <div className="leaders-container">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <img src={leader.img} alt={leader.name} className="leader-image" />
            <h4 className="leader-card-name">{leader.name}</h4>
            <h4 className="leader-title">{leader.title}</h4>
            <p className="leader-bio">{leader.bio}</p>
            <div className="leader-socials">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
