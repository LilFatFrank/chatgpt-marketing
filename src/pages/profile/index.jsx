import { Card, Sprite } from '../../components'
import './profile.scss'

const Profile = () => {
  return (
    <div className="profile">
      <div className="row">
        <Card>
          <div className="card-header">
            <h3 className="label">account</h3>
          </div>
          <div className="user-detail">
            <label className="label">email</label>
            <label className="value">kevin.parker@proton.com</label>
          </div>
          <div className="card-details">
            <label className="label">card</label>
            <div className="details-area">
              <div className="info-box">
                <div className="info-details">
                  <label className="label">xxxx xxxx xxxx 3895</label>
                  <Sprite
                    id="passthrough-divider-icon"
                    width={170}
                    height={10}
                  />
                  <label className="label">Kevin Parker&nbsp;&nbsp;01/24</label>
                </div>
                <Sprite id="card-info-icon" width={52} height={43} />
              </div>
              <Sprite id="edit-icon" width={45} height={45} />
            </div>
          </div>
        </Card>
        <Card>
          <div className="card-header">
            <h3 className="label">subscription</h3>
          </div>
          <div className="subscription-area">
            <div className="subscription-plan">
              <div className="subscription-plan-details">
                <label className="label">free</label>
                <label className="words">5,000 words</label>
              </div>
              <Sprite id="free-plan-icon" width={73} height={74} />
            </div>
            <div className="subscription-plan">
              <div className="subscription-plan-details">
                <label className="label">pro</label>
                <label className="words">50,000 words</label>
              </div>
              <Sprite id="pro-plan-icon" width={73} height={74} />
            </div>
            <div className="subscription-plan">
              <div className="subscription-plan-details">
                <label className="label">elite</label>
                <label className="words">200,000 words</label>
              </div>
              <Sprite id="elite-plan-icon" width={73} height={74} />
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <div className="card-header">
          <h3 className="label">activity</h3>
        </div>
        <div className="activity">
          <div className="activity-header">
            <div className="col-1">
              <label className="label">when</label>
            </div>
            <div className="col-2">
              <label className="label">type</label>
            </div>
            <div className="col-3">
              <label className="label">card</label>
            </div>
            <div className="col-4">
              <label className="label">amount</label>
            </div>
            <div className="col-5">
              <label className="label">receipt</label>
            </div>
          </div>
          <div className="activity-content">
            <div className="detail">
              <div className="col-1">
                <label className="label">2nd june, 2022</label>
              </div>
              <div className="col-2">
                <label className="col-2 label">recurring payment</label>
              </div>
              <div className="col-3">
                <label className="col-3 label">xxxx 9183</label>
              </div>
              <div className="col-4">
                <label className="col-4 label">$19.99</label>
              </div>
              <div className="col-5">
                <Sprite id="receipt-icon" width={44} height={44} />
              </div>
            </div>
            <div className="detail">
              <div className="col-1">
                <label className="label">2nd june, 2022</label>
              </div>
              <div className="col-2">
                <label className="col-2 label">recurring payment</label>
              </div>
              <div className="col-3">
                <label className="col-3 label">xxxx 9183</label>
              </div>
              <div className="col-4">
                <label className="col-4 label">$19.99</label>
              </div>
              <div className="col-5">
                <Sprite id="receipt-icon" width={44} height={44} />
              </div>
            </div>
            <div className="detail">
              <div className="col-1">
                <label className="label">2nd june, 2022</label>
              </div>
              <div className="col-2">
                <label className="col-2 label">recurring payment</label>
              </div>
              <div className="col-3">
                <label className="col-3 label">xxxx 9183</label>
              </div>
              <div className="col-4">
                <label className="col-4 label">$19.99</label>
              </div>
              <div className="col-5">
                <Sprite id="receipt-icon" width={44} height={44} />
              </div>
            </div>
            <div className="detail">
              <div className="col-1">
                <label className="label">2nd june, 2022</label>
              </div>
              <div className="col-2">
                <label className="col-2 label">recurring payment</label>
              </div>
              <div className="col-3">
                <label className="col-3 label">xxxx 9183</label>
              </div>
              <div className="col-4">
                <label className="col-4 label">$19.99</label>
              </div>
              <div className="col-5">
                <Sprite id="receipt-icon" width={44} height={44} />
              </div>
            </div>
            <div className="detail">
              <div className="col-1">
                <label className="label">2nd june, 2022</label>
              </div>
              <div className="col-2">
                <label className="col-2 label">recurring payment</label>
              </div>
              <div className="col-3">
                <label className="col-3 label">xxxx 9183</label>
              </div>
              <div className="col-4">
                <label className="col-4 label">$19.99</label>
              </div>
              <div className="col-5">
                <Sprite id="receipt-icon" width={44} height={44} />
              </div>
            </div>
            <div className="detail">
              <div className="col-1">
                <label className="label">2nd june, 2022</label>
              </div>
              <div className="col-2">
                <label className="col-2 label">recurring payment</label>
              </div>
              <div className="col-3">
                <label className="col-3 label">xxxx 9183</label>
              </div>
              <div className="col-4">
                <label className="col-4 label">$19.99</label>
              </div>
              <div className="col-5">
                <Sprite id="receipt-icon" width={44} height={44} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Profile
