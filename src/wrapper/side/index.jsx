import '../wrapper.scss'
import { APP_LINKS } from '../../utils'
import { Sprite } from '../../components'
import { Link, useLocation } from 'react-router-dom'

const Side = () => {

  const location = useLocation()

  console.log(location)

  return (
    <div className="side-section">
      <Sprite id={'words-pill-icon'} width={75} height={75} />
      <div className="words-pill-icon-label">
        5000/5000
        <br />
        words remaining
      </div>
      <div className="links">
        {APP_LINKS.map((link) => (
          <Link
            to={link.label}
            key={link.key}
            rel="noreferrer noopener"
            className={`link ${location.pathname.slice(1).includes(link.label) ? 'active' : ''}`}
          >
            <Sprite id={`${location.pathname.slice(1).includes(link.label) ? `highlight-${link.label}` : link.label}-icon`} width={24} height={24} />
            <label>{link.label}</label>
          </Link>
        ))}
      </div>
      <Sprite id="eye-icon" width={175} height={175} />
    </div>
  )
}

export default Side
