import Navbar from "../../components/Navbar/Navbar";
import TrainerCard from "../../components/TrainerCard/TrainerCard";
import classes from "./ContactPage.module.css";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

function ContactPage() {
  const data = [
    {
      id: 1,
      name: "Robert Dhawan",
      age: 24,
      img: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Arm Trainer",
      bio: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
    },
    {
      id: 2,
      name: "Alam Diwakar",
      age: 27,
      img: "https://images.pexels.com/photos/8874379/pexels-photo-8874379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "chest trainer",
      bio: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
    },
    {
      id: 3,
      name: "Christiano Ramanand",
      age: 29,
      img: "https://images.pexels.com/photos/896059/pexels-photo-896059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Leg Day Trainer",
      bio: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
    },
    {
      id: 4,
      name: "Rakesh Smith",
      age: 40,
      img: "https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Back Trainer",
      bio: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffnesss: 250 }}
    >
      <div className={classes.container}>
        <div className={classes.bg}></div>
        <Navbar />
        <div className={classes.trainer_section}>
          <h1 className={classes.heading_md}>
            Our <span className="diff">Trainers</span>
          </h1>
          <p className={classes.para}>
            At Muscle Hub, our trainers are more than just fitness
            experts—they’re your dedicated partners in health and wellness.
          </p>
        </div>
      </div>
      <div className={classes.card_container}>
        {data.map((card) => (
          <TrainerCard
            key={card.id}
            img={card.img}
            title={card.title}
            name={card.name}
            para={card.bio}
          />
        ))}
      </div>
      <div className={classes.map_container}>
        <div className={classes.map_side}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27711.731606101777!2d78.51186138443691!3d29.74968411813812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39097b59890b0c29%3A0x8168351f216f51a8!2sR.T.O.%20Kotdwar!5e0!3m2!1sen!2sin!4v1720609572970!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={classes.map}
          ></iframe>
        </div>
        <div className={classes.form_side}>
          <form  className={classes.form}>
            <div className={classes.row}>
              <div className={classes.cont}>
                <label htmlFor="name" id="name" className={classes.label}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={classes.input_field}
                  placeholder="Full Name"
                />
              </div>
              <div className={classes.cont}>
                <label htmlFor="email" id="email" className={classes.label}>
                  Email Address
                </label>
                <input
                  type="email "
                  name="email"
                  className={classes.input_field}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.cont}>
                <label htmlFor="subject" className={classes.label}>
                  Subject
                </label>
                <input
                  type="text"
                  className={classes.input_field}
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.cont}>
                <label htmlFor="message" className={classes.label}>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button className={classes.btn_lg}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default ContactPage;
