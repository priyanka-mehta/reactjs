import React, { Component } from 'react';

class ArrayIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [2, 16, 36, 49, 25, 4],
      secondLargest: ''
    }
  }

  handleClick() {
    let arr = this.state.numbers;
    let largeNumber = arr[0];
    var secondLargest = arr[0];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > largeNumber) {
        secondLargest = largeNumber;
        largeNumber = arr[i];
      }
      else if (arr[i] > secondLargest && arr[i] !== largeNumber) {
        secondLargest = arr[i];
        this.setState({ secondLargest })
      }
    }
    this.setState({ secondLargest })
  }

  render() {
    return (
      <div>
        <center>
          <h4>Find Second Largest Number from Array</h4>
          <br />

          <table border='1'>
            <tbody>
              <tr>
                {this.state.numbers.map((number, key) => {
                  return (
                    <td key={key} style={{ width: '50px', textAlign: 'center' }}>{number}</td>
                  )
                })}
              </tr>
            </tbody>
          </table>

          <br />
          <button onClick={() => this.handleClick()}>Click me to find your answer</button>
          <br />
          <br />
          <h5>{this.state.secondLargest}</h5>
        </center>
      </div>
    )
  }
}
export default ArrayIndex;