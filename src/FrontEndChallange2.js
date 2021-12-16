import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];


const LanguageContext = React.createContext ({
  language = languages[0],
  setLanguage: () => {}
})

class LanguageSwitcher extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {({ language, setLanguage}) => (
          <button onclick={() => setLanguage("JavaScript")} >
             (current: {language})
          </button>
        )}
      </LanguageContext.Consumer>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  setLanguage = languages => {
    this.setState({languages});
  };
  state = {
    language: "JavaScript",
    setLanguage: this.languages[0]
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state} >
      <div>
      console.log(this.state.language)
        <p id="favoriteLanguage">Favorite programing language: {this.state.language}</p>
        <button id="changeFavorite" onclick={ <LanguageSwitcher /> }>Toggle language</button>
      </div>
    </LanguageContext.Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);