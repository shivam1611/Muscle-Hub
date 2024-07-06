import Navbar from "../../components/Navbar/Navbar";
import classes from "./ClassesPage.module.css";
import ClassesContainer from '../../components/ClassesContainer/ClassesContainer'
import Footer from "../../components/Footer/Footer";

function ClassesPage() {
  return (
    <div>
      <Navbar />
      <div className={classes.banner}>
        <video autoPlay loop muted playsInline className="background_video">
          <source
            src="https://videos.pexels.com/video-files/3196220/3196220-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className={classes.heading_lg}>
          Unlock Your Potential with Muscle Hub.
        </h1>
        <h1 className={`${classes.heading_lg} diff`}>Start you journey now</h1>
      </div>
      <div className={classes.class_container}>
        <h1 className={classes.heading_md}>
          Our <span className="diff">Classes</span>
        </h1>
        <p className={classes.classes_text}>
          Heyy Future Body Builders !! Here are five classes you can offer at
          Muscle Hub, along with descriptions of each class and their respective
          levels
        </p>
          <ClassesContainer/>
          <Footer/>
      </div>
    </div>
  );
}

export default ClassesPage;
