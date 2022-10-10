import './index.css'

const EmojiCard = props => {
  const {emojisList, clickEmojiAction} = props
  const {id, emojiName, emojiUrl} = emojisList

  const sendEmojiIds = () => {
    clickEmojiAction(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="button" onClick={sendEmojiIds}>
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
