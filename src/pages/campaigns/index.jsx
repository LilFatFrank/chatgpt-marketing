import { Card, Side, Sprite } from '../../components'
import './campaigns.scss'

const Campaigns = () => {
  return (
    <div className="page">
      <div className="row">
        <Side />
        <div className="main-section">
          <div className="campaigns">
            <div className="section">
              <div className="section-header">
                <label className="title">saved</label>
              </div>
              <div className="section-cards">
                <Card type={'saved'}>
                  <div className="card-body">
                    <label className="days">3 days ago</label>
                    <div className="posts">
                      <label className="number-of-posts">7</label>
                      <label className="posts-label saved">posts</label>
                    </div>
                    <div className="media">
                      <Sprite
                        id={'saved-card-twitter-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-linkedin-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-facebook-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-instagram-icon'}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="card-footer saved">summer sale</div>
                </Card>
                <Card type={'saved'}>
                  <div className="card-body">
                    <label className="days">3 days ago</label>
                    <div className="posts">
                      <label className="number-of-posts">7</label>
                      <label className="posts-label saved">posts</label>
                    </div>
                    <div className="media">
                      <Sprite
                        id={'saved-card-twitter-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-linkedin-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-facebook-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-instagram-icon'}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="card-footer saved">summer sale</div>
                </Card>
                <Card type={'saved'}>
                  <div className="card-body">
                    <label className="days">3 days ago</label>
                    <div className="posts">
                      <label className="number-of-posts">7</label>
                      <label className="posts-label saved">posts</label>
                    </div>
                    <div className="media">
                      <Sprite
                        id={'saved-card-twitter-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-linkedin-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-facebook-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'saved-card-instagram-icon'}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="card-footer saved">summer sale</div>
                </Card>
                <div className="view-all-button">
                  <Sprite
                    id={'view-all-icon'}
                    width={98}
                    height={98}
                    className="icon"
                  />
                  <label className="label">view all</label>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-header">
                <label className="title">completed</label>
              </div>
              <div className="section-cards">
                <Card type={'complete'}>
                  <div className="card-body">
                    <label className="days">&nbsp;</label>
                    <div className="posts">
                      <label className="number-of-posts">7</label>
                      <label className="posts-label complete">posts</label>
                    </div>
                    <div className="media">
                      <Sprite
                        id={'complete-card-twitter-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-linkedin-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-facebook-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-instagram-icon'}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="card-footer complete">summer sale</div>
                </Card>
                <Card type={'complete'}>
                  <div className="card-body">
                    <label className="days">&nbsp;</label>
                    <div className="posts">
                      <label className="number-of-posts">7</label>
                      <label className="posts-label complete">posts</label>
                    </div>
                    <div className="media">
                      <Sprite
                        id={'complete-card-twitter-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-linkedin-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-facebook-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-instagram-icon'}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="card-footer complete">summer sale</div>
                </Card>
                <Card type={'complete'}>
                  <div className="card-body">
                    <label className="days">&nbsp;</label>
                    <div className="posts">
                      <label className="number-of-posts">7</label>
                      <label className="posts-label complete">posts</label>
                    </div>
                    <div className="media">
                      <Sprite
                        id={'complete-card-twitter-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-linkedin-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-facebook-icon'}
                        width={32}
                        height={32}
                      />
                      <Sprite
                        id={'complete-card-instagram-icon'}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="card-footer complete">summer sale</div>
                </Card>
                <div className="view-all-button">
                  <Sprite
                    id={'view-all-icon'}
                    width={98}
                    height={98}
                    className="icon"
                  />
                  <label className="label">view all</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaigns
