import { Route, Routes as Switch } from 'react-router-dom'
import './wrapper.scss'
import Routes from '../routes'
import Side from './side'

const Wrapper = () => {
  return (
    <div className="row">
      <Side />
      <div className="main-section">
        <Switch>
          <Route path="/*" element={<Routes />} />
        </Switch>
      </div>
    </div>
  )
}

export default Wrapper
