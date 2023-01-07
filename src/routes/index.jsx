import { Routes as Switch, Route } from 'react-router-dom'
import { Campaigns, Profile } from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<>Home</>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/campaigns" element={<Campaigns />} />
    </Switch>
  )
}

export default Routes
