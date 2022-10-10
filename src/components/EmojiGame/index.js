import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    totalScore: 0,
    emojiArrayIds: [],
    isMatchOn: true,
  }

  clickEmojiAction = id => {
    console.log(id)
    const {emojisList} = this.props
    const {emojiArrayIds} = this.state
    const isEmojiPresent = emojiArrayIds.includes(id)
    const clickedEmojisLength = emojiArrayIds.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        emojiArrayIds: [...previousState.emojiArrayIds, id],
      }))
    }
  }

  finishGameAndSetTopScore = currentScore => {
    const {totalScore} = this.state
    let newTopScore = totalScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({totalScore: newTopScore, isMatchOn: false})
  }

  resetGame = () => {
    this.setState({emojiArrayIds: [], isMatchOn: true})
  }

  getRandomEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  displayEmojis = () => {
    const randomEmojisList = this.getRandomEmojis()

    return (
      <ul className="emoji-list-container">
        {randomEmojisList.map(eachEmojiItem => (
          <EmojiCard
            key={eachEmojiItem.id}
            emojisList={eachEmojiItem}
            clickEmojiAction={this.clickEmojiAction}
          />
        ))}
      </ul>
    )
  }

  displayScoreCard = () => {
    const {emojisList} = this.props
    const {emojiArrayIds} = this.state
    const resultWinOrLoss = emojiArrayIds.length === emojisList.length

    return (
      <WinOrLoseCard
        resultWinOrLoss={resultWinOrLoss}
        onClickPlayAgain={this.resetGame}
        score={emojiArrayIds.length}
      />
    )
  }

  render() {
    const {emojiArrayIds, isMatchOn, totalScore} = this.state

    return (
      <div className="emoji-app-container">
        <NavBar
          currentScore={emojiArrayIds.length}
          topScore={totalScore}
          isMatchOn={isMatchOn}
        />
        {isMatchOn ? this.displayEmojis() : this.displayScoreCard()}
      </div>
    )
  }
}

export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
