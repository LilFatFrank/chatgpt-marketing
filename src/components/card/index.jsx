import { Sprite } from '..'
import './card.scss'

const Card = ({ children, type }) => {
  switch (type) {
    case 'complete':
      return (
        <div className="card complete">
          <Sprite
            className={'complete-card-svg'}
            id="complete-card-background-icon"
            width={106}
            height={106}
          />
          {children}
        </div>
      )
    case 'saved':
      return (
        <div className="card saved">
          <Sprite
            className={'saved-card-svg'}
            id="saved-card-background-icon"
            width={106}
            height={106}
          />
          {children}
        </div>
      )
    default:
      return <div className="card default">{children}</div>
  }
}

export default Card
