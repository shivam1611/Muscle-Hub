import Navbar from "../../components/Navbar/Navbar";
import classes from './ClassesPage.module.css'

function ClassesPage() {
  return (
    <div>
      <Navbar />
      <div className={classes.banner}>
        <h1 className={classes.heading_md}>Our <span className="diff">Classes</span></h1>
        <p className={`text-sm ${classes.classes_text}`}> Hey Future Body builders!! Here are five classes you can offer at Muscle Hub, along with descriptions of each class and their respective levels</p>
      </div>
      
    </div>
  );
}

export default ClassesPage;
