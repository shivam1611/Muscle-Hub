import Navbar from "../../components/Navbar/Navbar";
import TrainerCard from "../../components/TrainerCard/TrainerCard";
import classes from "./ContactPage.module.css";
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
    </motion.div>
  );
}

export default ContactPage;
