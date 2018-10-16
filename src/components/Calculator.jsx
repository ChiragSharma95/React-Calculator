import React, { Component } from "react";
import * as math from "mathjs";

class Calculator extends Component {
  state = {
    displayValue: "0"
  };

  inputDigit(digit) {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue === "0" ? String(digit) : displayValue + digit
    });
  }

  inputDot() {
    const { displayValue } = this.state;

    if (displayValue.indexOf(".") === -1) {
      this.setState({
        displayValue: displayValue + "."
      });
    }
  }

  clearDisplay = () => {
    this.setState({
      displayValue: "0"
    });
  };

  backspace() {
    const { displayValue } = this.state;

    let newVal = displayValue.substring(0, displayValue.length - 1);
    if (displayValue.length === 1) {
      this.setState({
        displayValue: "0"
      });
    } else {
      this.setState({
        displayValue: newVal
      });
    }
  }

  inputOperator(operator) {
    const { displayValue } = this.state;

    this.setState({
      displayValue: `${String(displayValue)} ${operator} `
    });
  }

  evaluate = () => {
    const { displayValue } = this.state;
    let result = math.eval(displayValue).toString();
    if (isNaN(result)) {
      this.setState({
        displayValue: "Invalid"
      });
      setTimeout(() => {
        this.setState({
          displayValue: "0"
        });
      }, 2000);
    } else {
      this.setState({
        displayValue: result
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="calculator-wrapper text-center justify-content-center mt-5">
            <h3>React Calculator</h3>
            <div className="calculator ">
              <div id="output" class="text-right">
                <h3>
                  {this.state.initView}
                  {this.state.displayValue}
                </h3>
              </div>
              <div className="btns">
                <div className="row">
                  <div className="col-md-9">
                    <button
                      className="btn btn-danger"
                      id="clear"
                      onClick={() => this.clearDisplay()}
                    >
                      C
                    </button>
                    <button
                      className="btn btn-danger"
                      id="del"
                      onClick={() => this.backspace()}
                    >
                      <span class="fas fa-backspace" />
                    </button>
                    <br />
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(7)}
                    >
                      7
                    </button>
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(8)}
                    >
                      8
                    </button>
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(9)}
                    >
                      9
                    </button>
                    <br />
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(4)}
                    >
                      4
                    </button>
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(5)}
                    >
                      5
                    </button>
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(6)}
                    >
                      6
                    </button>
                    <br />
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(1)}
                    >
                      1
                    </button>
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(2)}
                    >
                      2
                    </button>
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(3)}
                    >
                      3
                    </button>
                    <br />
                    <button className="btn num" onClick={() => this.inputDot()}>
                      .
                    </button>
                    <button
                      className="btn num"
                      onClick={() => this.inputDigit(0)}
                    >
                      0
                    </button>
                    <button
                      className="btn btn-primary num"
                      id="equal"
                      onClick={() => this.evaluate()}
                    >
                      =
                    </button>
                    <br />
                  </div>
                  <div className="col-md-3 side_right">
                    <button
                      className="btn btn-primary"
                      onClick={() => this.inputOperator("/")}
                    >
                      /
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.inputOperator("*")}
                    >
                      *
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.inputOperator("-")}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary plus"
                      onClick={() => this.inputOperator("+")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;
