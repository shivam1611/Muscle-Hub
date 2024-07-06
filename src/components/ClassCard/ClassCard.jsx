import classes from "./ClassCard.module.css";


// eslint-disable-next-line react/prop-types
function ClassCard({ title, data, selectedID, setSelectedID }) {
  return (
    // eslint-disable-next-line react/prop-types
    <div
      className={classes.card}
      onClick={() => setSelectedID(data)}
    >
      <i className={`fa-solid fa-dumbbell ${classes.icon}`}></i>
      <h1 className={`${classes.title} ${
        // eslint-disable-next-line react/prop-types
        selectedID?.id == data.id ? classes.selected_state : classes.unselected_state
      }`}>{title}</h1>
    </div>
  );
}


export default ClassCard;
