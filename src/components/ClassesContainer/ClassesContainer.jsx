import ClassCard from "../ClassCard/ClassCard";
import Panel from "../Panel/Panel";
import classes from "./ClassesContainer.module.css";
import { useState } from "react";

function ClassesContainer() {
  // function that set the selected id to what class we clicked

  const handleClassClick = (data) => {
    setSelectedID(data);
  };

  const classes_data = [
    {
      id: 1,
      title: "First Class Training",
      img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      para: "nhance your muscle strength and endurance with our comprehensive strength training sessions. These classes focus on exercises that challenge all major muscle groups using free weights, resistance bands, and body weight. Whether you're a beginner or an advanced athlete, our experienced trainers will guide you through tailored workouts to help you achieve your fitness goals.",
    },
    {
      id: 2,
      title: "Second Class Training",
      img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      para: "Get your heart pumping and burn calories with our high-energy Cardio Blast classes. This intense workout combines aerobic exercises, interval training, and plyometrics to improve cardiovascular health and boost your stamina. Suitable for all fitness levels, these sessions are designed to keep you motivated and challenged.",
    },
    {
      id: 3,
      title: "Third Class Training",
      img: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      para: "Experience the perfect blend of physical and mental wellness with our Yoga Flow classes. These sessions focus on improving flexibility, balance, and relaxation through a series of dynamic poses and breath control techniques. Ideal for relieving stress and enhancing mindfulness, our yoga classes cater to both beginners and seasoned practitioners.",
    },
    {
      id: 4,
      title: "Fourth Class Training",
      img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      para: "Maximize your workout efficiency with our HIIT classes, where short bursts of intense exercise are alternated with recovery periods. This method is proven to burn more fat in less time while improving overall athletic performance. Suitable for those looking to challenge themselves and achieve quick results.",
    },
  ];
  const [selectedID, setSelectedID] = useState(classes_data[0]);
  return (
    <div className={classes.container}>
      <div className={classes.left_section}>
        {classes_data.map((card) => (
          <ClassCard
            data={card}
            title={card.title}
            key={card.id}
            handleClassClick={handleClassClick}
            selectedID={selectedID}
            setSelectedID={setSelectedID}
          />
        ))}
      </div>

      <div className={classes.right_section}>
        
        <Panel
          title={selectedID.title}
          img={selectedID.img}
          para={selectedID.para}
        />
      </div>
    </div>
  );
}

export default ClassesContainer;
