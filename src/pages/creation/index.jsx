import { useEffect, useState } from 'react'
import { Card, Sprite } from '../../components'
import './creation.scss'

const Toggle = ({ toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled)

  const callback = () => {
    toggle(!isToggled)
    onClick(!isToggled)
  }

  return (
    <label className="checkbox">
      <input
        className="checkbox-input"
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <span className="checkbox-span" />
    </label>
  )
}

const Creation = () => {
  const [opacity, setOpacity] = useState(false)

  return (
    <div className='page'>
    <div className="creation">
      <div className="row-1">
        <div>&nbsp;</div>
        <label className="label">new campaign</label>
        <Sprite id="close-overlay-icon" width={60} height={60} />
      </div>
      <Card type={'secondary'} className={'row-2'}>
        <div className="col-1">
          <div className="info-section" style={{ opacity: opacity ? 1 : 0 }}>
            <Sprite id="guide-icon" width={24} height={24} />
            <div className="guide-container">
              <label className="label">guide</label>
              <p className="content">
                How many posts do you need per platform?
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-2"
        >
          <div className="col-header">
            <div className="progress-bar-marks">
              <label className="mark">content</label>
              <label className="mark">campaign details</label>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className="selection-area" id="selection-area">
            <div className="selection-card-container">
              <div className="selection-card" id="card-1" data-aos='fade-in'>
                <label className="label">select platform</label>
                <div className="multiple-options">
                  <Sprite
                    id="select-card-twitter-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-linkedin-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-facebook-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-instagram-icon"
                    width={76}
                    height={76}
                  />
                </div>
              </div>
            </div>
            <div className="selection-card-container">
              <div
                className="selection-card"
                id="card-2"
                onClick={() => setOpacity(true)}
                data-aos='fade-in'
              >
                <label className="label">number of posts</label>
                <div className="multiple-options">
                  <label className="field-label">1</label>
                  <label className="field-label">3</label>
                  <label className="field-label">7</label>
                  <label className="field-label">10</label>
                  <label className="field-label">30</label>
                </div>
              </div>
            </div>
            <div className="selection-card-container">
              <div
                className="selection-card"
                id="card-3"
                onClick={() => console.log('div')}
                data-aos='fade-in'
              >
                <label className="label">select platform</label>
                <div className="multiple-options">
                  <Sprite
                    id="select-card-twitter-icon"
                    width={76}
                    height={76}
                    onClick={() => console.log('icon')}
                  />
                  <Sprite
                    id="select-card-linkedin-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-facebook-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-instagram-icon"
                    width={76}
                    height={76}
                  />
                </div>
              </div>
            </div>
            <div className="selection-card-container">
              <div className="selection-card" id="card-4" data-aos='fade-in'>
                <label className="label">select platform</label>
                <div className="multiple-options">
                  <Sprite
                    id="select-card-twitter-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-linkedin-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-facebook-icon"
                    width={76}
                    height={76}
                  />
                  <Sprite
                    id="select-card-instagram-icon"
                    width={76}
                    height={76}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="col-header">
            <label className="label">review</label>
          </div>
          <div className="review-selection">
            <div className="section">
              <label className="label">platforms</label>
              <div className="platforms">
                <Sprite id="saved-card-twitter-icon" width={24} height={24} />
                <Sprite id="saved-card-instagram-icon" width={24} height={24} />
              </div>
            </div>
            <div className="section">
              <label className="label">total posts</label>
              <div className="posts">
                <label className="number">14</label>
                <label className="info">(7 per platform)</label>
              </div>
            </div>
            <div className="section">
              <label className="label">tone</label>
              <div className="tones">
                <div className="tone">
                  <div className="icon">🤣</div>
                  <span className="text">funny</span>
                </div>
                <div className="tone">
                  <div className="icon">🌄</div>
                  <span className="text">adventurous</span>
                </div>
                <div className="tone">
                  <div className="icon">💪</div>
                  <span className="text">bold</span>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="checked-options">
                <label className="label">images</label>
                <Toggle toggled={true} />
              </div>
              <div className="checked-options">
                <label className="label">hashtags</label>
                <Toggle toggled={true} />
              </div>
            </div>
            <div className="section">
              <div className="total">
                <label className="label">total</label>
                <div className="count">
                  <Sprite id="total-count-pill-icon" width={20} height={20} />
                  <span className="text">3500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
    </div>
  )
}

export default Creation
