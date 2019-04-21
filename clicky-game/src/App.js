import React, { Component } from 'react';
import Instructions from './components/Instructions/instructions'
import CharacterTile from './components/CharacterTile/CharacterTile'
import Footer from './components/Footer/footer'
import ScoreHeader from './components/ScoreHeader/scoreHeader'
import Wrapper from './components/Wrapper/wrapper'

class App extends Component {
  render() {
    return (
      <div>
        <ScoreHeader />
        <Instructions />
        <Wrapper>
          <CharacterTile />
        </Wrapper>
        <Footer />
      </div>
      
    )
  }
}

export default App;
