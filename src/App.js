import React, { Component } from 'react';
import Instructions from './components/Instructions/instructions'
import CharacterTile from './components/CharacterTile/CharacterTile'
import Footer from './components/Footer/footer'
import ScoreHeader from './components/ScoreHeader/scoreHeader'
import Wrapper from './components/Wrapper/wrapper'
import characters from "./characters.json"

class App extends Component {
  state = {
    score: 0, 
    highScore: 0,
    characters
  }

  imageClicked = id => {
    this.shuffleImages(this.state.characters)
    this.setState({ characters })
    this.handleGuess(id)
  }

  shuffleImages = (array) => {
    array.sort(() => Math.random() - .5)
  }

  handleGuess = (id) => {
    let characters = [...this.state.characters]
    console.log(characters)
    if (characters[id].clicked === false) {
      // eslint-disable-next-line no-unused-expressions
      characters[id].clicked = true

      this.setState({
        score: this.state.score + 1,
        characters
      })
    } else {
      
    }
  }

  render() {
    return (
      <div>
        <ScoreHeader score={this.state.score} highScore={this.state.highScore}/>
        <Instructions />
        <Wrapper>
          {this.state.characters.map(character => (
              <CharacterTile 
                id={character.id}
                clicked={character.clicked}
                image={character.image}
                imageClicked={this.imageClicked}
              />
            ))}
        </Wrapper>
        <Footer />
      </div>
      
    )
  }
}

export default App;
