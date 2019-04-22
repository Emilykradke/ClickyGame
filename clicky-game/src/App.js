import React, { Component } from 'react';
import Instructions from './components/Instructions/instructions'
import CharacterTile from './components/CharacterTile/CharacterTile'
import Footer from './components/Footer/footer'
import ScoreHeader from './components/ScoreHeader/scoreHeader'
import Wrapper from './components/Wrapper/wrapper'
import characters from "./characters.json"

class App extends Component {
  state = {
    characters
  }

  render() {
    return (
      <div>
        <ScoreHeader />
        <Instructions />
        <Wrapper>
          {this.state.characters.map(character => (
              <CharacterTile 
                image={character.image}
              />
            ))}
          <CharacterTile 

          />
        </Wrapper>
        <Footer />
      </div>
      
    )
  }
}

export default App;
