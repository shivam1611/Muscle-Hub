import classes from './panel.module.css'

// eslint-disable-next-line react/prop-types
function Panel({title,img,para}) {
  return (
    <div className={classes.panel}>
        <div className={classes.img_panel}>
            <img src={img} alt="" className={classes.img} />
        </div>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.para}>{para}</p>
        <button className={classes.btn_lg}>view schedule</button>
    </div>
  )
}

export default Panel