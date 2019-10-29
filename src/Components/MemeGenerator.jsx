import React from 'react';

class MemeGenerator extends React.Component {
  state = {
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
    allMemeImgs: [],
  };

  componentDidMount () {
    fetch ('https://api.imgflip.com/get_memes')
      .then (response => response.json ())
      .then (response => {
        this.setState ({allMemeImgs: response.data.memes});
      });
  }

  changeHandler = event => {
    const {name, value} = event.target;
    this.setState ({[name]: value});
  };

  handleSubmit = event => {
    event.preventDefault ();

    const mems = this.state.allMemeImgs;
    const randIndex = Math.floor (Math.random () * mems.length);
    const randomMemUrl = mems[randIndex].url;
    this.setState ({randomImage: randomMemUrl});
  };

  render () {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text here"
            value={this.state.topText}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text here"
            value={this.state.bottomText}
            onChange={this.changeHandler}
          />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
