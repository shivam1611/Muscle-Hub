import classes from './TrainerCard.module.css'
// eslint-disable-next-line react/prop-types
function TrainerCard({img,title,para,name}) {
  return (
    <div className={classes.card}>
        <div className={classes.img_section}>
            <img src={img} alt=""  className={classes.img}/>
        </div>
        <div className={classes.details}>
        <p className={classes.title}>{title}</p>
        <p className={classes.name}>{name}</p>
        <p className={classes.para}>{para}</p>
        <div className={classes.social_media}>
        <i className={`fa-brands fa-facebook`}></i>
        <i className={`fa-brands fa-instagram`}></i>
        <i className={`fa-brands fa-twitter`}></i>
        <i className={`fa-brands fa-youtube`}></i>
        </div>
        </div>
    </div>
  )
}

export default TrainerCard