import { Outlet } from 'react-router-dom'
import classes from './Authemtication.module.css'

function AuthenticationPage() {
  return (
    <div className={classes.container}>
    
        <Outlet/>
    </div>
  )
}

export default AuthenticationPage