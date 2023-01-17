import sprite from './icons.svg'

const Sprite = ({ id, width, height, style, className, onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ ...style }}
      className={className || ''}
      onClick={onClick}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  )
}

export default Sprite
