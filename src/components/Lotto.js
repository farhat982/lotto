import React from "react";

class Lotto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: []
    };

  }

  pushNumbers = counter => {
    let numArr = [];
    let randomGenerator = num => {
      return parseInt(Math.random() * num + 1);
    };
    while (counter) {
      let randomNum = randomGenerator(59);
      while (numArr.indexOf(randomNum) !== -1) {
        randomNum = randomGenerator(59);
      }
      numArr.push(randomNum);
      counter--;
    }
    numArr[numArr.length] = randomGenerator(10);
    return numArr;
  };

  clickHandler() {
    this.setState({
      numbers: this.pushNumbers(6)
    });
  }

  reset() {
    this.setState({
      numbers: []
    });
  }

  render() {
    return (
      <div className="lotto-container">
        <h1>LOTTO</h1>
        <p>Generate your lucky number</p>
        <ul className="number-container">
          {this.state.numbers.map((num, i) => {
            return (
              <li key={i}>
                <p>{num}</p>
              </li>
            );
          })}
        </ul>
        <div className="button-container">
          <button className="reset" onClick={() => this.reset()}>
            Reset
          </button>
          <button className="generate" onClick={() => this.clickHandler()}>
            Feeling Lucky!
          </button>
        </div>
      </div>
    );
  }
}

export default Lotto;
