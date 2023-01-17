import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Routes from './routes'
import './style/app.scss'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/*" element={<Routes />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
