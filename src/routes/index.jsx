import {
  Routes as Switch,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { Brainstorm, Campaigns, Creation, Login, Profile } from '../pages'

const Routes = () => {
  const location = useLocation()

  return (
    <>
      <Switch>
        <Route path="/" element={<Navigate to={'/login'} replace={true} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/brainstorm" element={<Brainstorm />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/login" element={<Login />} />
      </Switch>
      {location.pathname.includes('login') ||
      location.pathname.includes('card') ? (
        <img src="/assets/login-card-bg.svg" alt="background" />
      ) : null}
    </>
  )
}

export default Routes
