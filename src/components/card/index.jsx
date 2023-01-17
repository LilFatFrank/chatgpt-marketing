import { Sprite } from '..'
import './card.scss'

const Card = ({ children, type, className }) => {
  switch (type) {
    case 'complete':
      return (
        <div className={`card complete ${className || ''}`}>
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
        <div className={`card saved ${className || ''}`}>
          <Sprite
            className={'saved-card-svg'}
            id="saved-card-background-icon"
            width={106}
            height={106}
          />
          {children}
        </div>
      )
    case 'secondary':
      return <div className={`card secondary ${className || ''}`}>{children}</div>
    default:
      return <div className={`card default ${className || ''}`}>{children}</div>
  }
}

export default Card
