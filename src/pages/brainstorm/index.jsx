import { useEffect, useState } from 'react'
import { Card, Side, Sprite } from '../../components'
import { BRAINSTORM_PROMPTS } from '../../utils'
import './brainstorm.scss'

const Brainstorm = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const sendMessage = (type, label) => {
    setMessages([...messages, { type, label }])
    setMessage('')
  }

  return (
    <div className="page">
      <div className="row">
        <Side />
        <div className="main-section">
          <div className="brainstorm">
            <Card className={'chat-box'}>
              <p className="chat-text">
                welcome to{' '}
                <span
                  style={{ color: 'var(--primary)', fontFamily: 'inherit' }}
                >
                  soma
                </span>
                , your marketing assistant.
                <br /> we can brainstorm and discuss about absolutely anything.
                <br /> want me to create you 10 tweets for your brand?
              </p>
              <div className="chat-area">
                {messages.map((message, index) => (
                  <div
                    key={`${index} - ${message.type}`}
                    className="user-message"
                  >
                    {message.label}
                  </div>
                ))}
              </div>
              {messages.some((m) => m.type === 'prompt') ? null : (
                <div className="prompts">
                  {BRAINSTORM_PROMPTS.map((prompt, index) => (
                    <label
                      className="prompt"
                      key={`${index} - ${prompt.type}`}
                      onClick={() => sendMessage(prompt.type, prompt.label)}
                    >
                      {prompt.label}
                    </label>
                  ))}
                </div>
              )}
            </Card>
            <Card className={'chat-type'}>
              <input
                className="input"
                placeholder="ask anything under the sun"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div
                className="send"
                onClick={() => sendMessage('message', message)}
              >
                <Sprite id="send-chat-icon" width={32} height={32} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brainstorm
