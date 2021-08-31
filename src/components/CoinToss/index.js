// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    head: 1,
    headsCount: 0,
    tailsCount: 0,
  }

  CoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const tossValue = Math.floor(Math.random() * 2)
    let heads = headsCount
    let tails = tailsCount
    if (tossValue === 0) {
      tails = tailsCount + 1
    } else {
      heads = headsCount + 1
    }

    this.setState({
      head: tossValue,
      headsCount: heads,
      tailsCount: tails,
    })
  }

  render() {
    const {head, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    const imgSrc =
      head === 0
        ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="coin-toss-app-container">
        <div className="coin-toss-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgSrc} className="coinImage" alt="toss result" />
          <div>
            <button type="button" className="toss-btn" onClick={this.CoinToss}>
              Toss Coin
            </button>
          </div>
          <div className="uli">
            <p className="lis">Total:{totalCount}</p>
            <p className="lis">Heads:{headsCount}</p>
            <p className="lis">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
