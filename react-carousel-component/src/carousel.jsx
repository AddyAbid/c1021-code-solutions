import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeIndex: 0
    };
  }

  render() {
    const poke = (
      <div className="container">
      {
        pokemon.map((poke, index) => {
          const clickRight = () => {
            this.setState({
              pokeIndex: this.state.pokeIndex + 1
            });
            if (this.state.pokeIndex > 3) {
              this.setState({
                pokeIndex: 0
              });
            }
          };
          const clickLeft = () => {
            this.setState({
              pokeIndex: this.state.pokeIndex - 1
            });
            if (this.state.pokeIndex < 1) {
              this.setState({
                pokeIndex: 4
              });
            }
          };
          return (
            <div key={poke.number}>
              <div className="row align-center" id={this.state.pokeIndex === index ? 'open' : 'hidden'}>
                <div className="col-fourth">
                  <i className="fas fa-chevron-left fa-3x ml" onClick={clickLeft}></i>
                </div>
                <div className='col-half' >
                  <img src={poke.img} />
                </div>
                <div className="col-fourth">
                  <i className="fas fa-chevron-right fa-3x right-arrow mr" onClick={clickRight}></i>
                </div>
            </div>
          </div>

          );
        })
      }
      </div>
    );
    return (
      <div>
        {poke}
      </div>

    );
  }
}

export default Carousel;

const pokemon = [
  { number: '001', name: 'Bulbasaur', img: 'images/001.png' },
  { number: '004', name: 'Charmander', img: 'images/004.png' },
  { number: '007', name: 'Squirtle', img: 'images/007.png' },
  { number: '025', name: 'Pikachu', img: 'images/025.png' },
  { number: '039', name: 'Jigglypuff', img: 'images/039.png' }
];
