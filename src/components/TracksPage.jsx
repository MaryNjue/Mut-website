import './TracksPage.css'; 
import cyberSecurityImg from '../assets/cybersecurity.jpg';
import uiuxImg from '../assets/uiux.jpg';
import webDevImg from '../assets/webdevelopment.jpg';
import mobileAppsImg from '../assets/app.jpg';
import cloudEngImg from '../assets/cloud.jpg';
import powerPlatformImg from '../assets/power.jpg';
import Navigation from './navigation';

const Tracks = () => {
  return (
    <div className="tracks-container">
      <Navigation/>
        <h1 className="tittle">Tracks</h1>
      <div className="track">
        <div className="track-text">
          <h2>Cyber Security</h2>
          <p>Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities.</p>
        </div>
        <div className="track-image">
          <img src={cyberSecurityImg} alt="Cyber Security" />
        </div>
      </div>

      <div className="track">
        <div className="track-text">
          <h2>UI/UX Design</h2>
          <p>Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences.</p>
        </div>
        <div className="track-image">
          <img src={uiuxImg} alt="UI/UX Design" />
        </div>
      </div>


      <div className="track">
        <div className="track-text">
          <h2>Web Development</h2>
          <p>Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases.</p>
        </div>
        <div className="track-image">
          <img src={webDevImg} alt="Web Development" />
        </div>
      </div>


      <div className="track">
        <div className="track-text">
          <h2>Mobile Apps Development</h2>
          <p>Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart.</p>
        </div>
        <div className="track-image">
          <img src={mobileAppsImg} alt="Mobile Apps Development" />
        </div>
      </div>

      <div className="track">
        <div className="track-text">
          <h2>Cloud Engineering</h2>
          <p>Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures.</p>
        </div>
        <div className="track-image">
          <img src={cloudEngImg} alt="Cloud Engineering" />
        </div>
      </div>


      <div className="track">
        <div className="track-text">
          <h2>Power Platform</h2>
          <p>Students who select the Power Platform track will explore the capabilities of Microsofts Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding.</p>
        </div>
        <div className="track-image">
          <img src={powerPlatformImg} alt="Power Platform" />
        </div>
      </div>


      <div className="registration-form">
        <h3>Register for Your Preferred Track</h3>
        <form>
          <label>
            Full Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email Address:
            <input type="email" name="email" required />
          </label>
          <label>
            Current Course of Study:
            <input type="text" name="course" required />
          </label>
          <label>
            Year of Study:
            <input type="text" name="year" required />
          </label>
          <label>
            Select Track:
            <select name="track" required>
              <option value="cyber-security">Cyber Security</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-apps-development">Mobile Apps Development</option>
              <option value="cloud-engineering">Cloud Engineering</option>
              <option value="power-platform">Power Platform</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Tracks;
