import React from 'react'
import '../styles/gameFrame.scss'
import Loading from '../Components/Loading'
import Layout from '../Components/Layout'


class Minesweeper extends React.Component {

  state = {
    loading: true
  }

  toggleLoad = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {
    return (
      <Layout>
        <div className='game-hold'>
          {this.state.loading && <Loading width={400} height={400} />}
          <iframe onLoad={this.toggleLoad} src="https://104.248.216.64:6776/" frameBorder="0"></iframe>
        </div>
      </Layout>
    )
  }

}
export default Minesweeper

