import '../styles/EventSection.css';
import EventBoxes from '../../../assets/images/event-boxes.png';
import { motion } from "framer-motion";
import { fadeBlurUp, fadeUp } from '../../../animations/animations';

export function EventSection() {
  return (
    <>
      <section id="events">
        <h1>E V E N T S</h1>
        <div className="event-box-section">
          <motion.div {...fadeBlurUp} className="event-boxes">
            <h1 className="header">Fall Clubs Fair ‘26</h1>
            <p className= "date">Sept. 1, <b>2-4PM</b> & Sept. 2, <b>12-4PM</b></p>
            <p className="event-description">Stop by the Mission SpaceWalker table at the Clubs Fair! Meet our members, learn about the cool projects we’re working on and find out how you can get involved. We’ve got a place for you!</p>
            <a href="https://www.instagram.com/p/DcsH2wbhJTR/" target="_blank" rel="noreferrer noopener"><button className="info-button">i n f o</button></a>
            <img src={EventBoxes} alt="event box" draggable="false" />
          </motion.div>
          <motion.div {...fadeBlurUp} className="event-boxes">
            <h1 className="header">Engg Clubs Fair 26’</h1>
            <p className= "date">Sept. 10 & 11</p>
            <p className="event-description">Meet us at the Engg Clubs Fair!</p>
            <img src={EventBoxes} alt="event box" draggable="false" />
          </motion.div>
          <motion.div {...fadeUp} className="event-boxes">
            <h1 className="header">AGM '26</h1>
            <p className= "date">TBD</p>
            <p className="event-description">Join us for our biggest meeting of the year! We’ll be recapping the year, announcing exciting plans, and opening the floor for new members to join or take on responsibilities. If you've ever wanted to be more involved, this is the time!</p>
            <img src={EventBoxes} alt="event box" draggable="false" />
          </motion.div>
        </div>
      </section>
    </>
  )
}