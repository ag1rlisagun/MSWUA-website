import '../styles/OutreachPage.css';
import checkpoint from '../../../assets/images/icons/checkpoint-icon.png';
import { motion } from "framer-motion";
import choices25Image from "../../../assets/images/photos/events/choices25.png";
import cscImage from "../../../assets/images/photos/events/csc.png";
import mecha25Image from "../../../assets/images/photos/events/mecha25.png";
import FadeTextDiv from '../../../animations/fade-text-div.tsx';
import { fade, fadeBlurUp, lineMovement } from "../../../animations/animations.tsx";
import { Link } from 'react-router-dom';

export function OutreachPage () {

  return (
    <>
      <div id="events-outreach">
        <h1>Our Outreach</h1>
        <p>Where Purpose Meets Action</p>

        <div className="events-grid">

          <motion.img {...fadeBlurUp} className="events-img-2" src={cscImage} alt="csc image" />
          <FadeTextDiv className="can-text events-1">
            <motion.h2 variants={fade}className="event-title">Canadian Space Conference</motion.h2>
            <motion.p variants={fade} className="event-text">Building connections and showcasing our work</motion.p>

            <Link to="https://csc.seds.ca"><motion.button variants={fade}>learn more</motion.button></Link>
          </FadeTextDiv>

          <FadeTextDiv className="can-text events-2">
            <motion.h3 variants={fade}>Jan '25</motion.h3>
            <motion.h2 variants={fade} className="event-title">Mecha Mayhem</motion.h2>
            <Link to="https://www.mechamayhem.ca"><motion.button variants={fade}>learn more</motion.button></Link>
          </FadeTextDiv>

          <motion.img {...fadeBlurUp} className="events-img-3" src={mecha25Image} alt="mecha25 image" />

          <motion.img {...fadeBlurUp} className="events-img-1" src={choices25Image} alt="choices25 image" />
          <FadeTextDiv className="can-text events-3">
            <motion.h3 variants={fade}>Feb '25</motion.h3>
            <motion.h2 variants={fade}>CHOICES ‘25</motion.h2>
            <Link to="https://www.ualberta.ca/en/women-in-scholarship-engineering-science-technology/programs/choices-conference.html"><motion.button variants={fade}>learn more</motion.button></Link>
          </FadeTextDiv>

        </div>

        <div className="line2-section">
          <motion.div {...lineMovement} className="h-line2 line2-1"></motion.div>

          <img className="checkpoint2-1" src={checkpoint} alt="check point icon" />

          <motion.div {...lineMovement}  
            transition={{ ...lineMovement.transition, delay: 0.8 }}
            className="h-line2 line2-2">
          </motion.div>

          <img className="checkpoint2-2" src={checkpoint} alt="check point icon" />

          <motion.div {...lineMovement}  
            transition={{ ...lineMovement.transition, delay: 0.8 }}
            className="h-line2 line2-3">
          </motion.div>

          <img className="checkpoint2-3" src={checkpoint} alt="check point icon" />
          
        </div>
      </div>
    </>
  )
}