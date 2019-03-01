import React, { Component } from 'react';
import { calculate, deleteLastChar, getSquareRoot } from './helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

class Calculator extends Component {
  state = {
    display: '0'
  };

  onNumClick = e => {
    let keyValue = e.target.textContent;
    this.setState(prevState => {
      if (prevState.display === '0' || prevState.display === 'ERROR') {
        return { display: keyValue };
      }
      return { display: (prevState.display += keyValue) };
    });
  };

  onEqualClick = () => {
    this.setState({
      display: calculate(this.state.display)
    });
  };

  onResetClick = () => {
    this.setState({
      display: '0'
    });
  };

  onDeleteClick = () => {
    this.setState(prevState => {
      if (prevState.display === 'ERROR') {
        return { display: '0' };
      }
      return {
        display: deleteLastChar(prevState.display)
      };
    });
  };

  memoryStore = () => {
    localStorage.setItem('storedNum', this.state.display);
  };

  memoryRecall = () => {
    if (localStorage.getItem('storedNum') !== null) {
      this.setState(prevState => {
        if (prevState.display !== 'ERROR' && prevState.display !== '0') {
          return {
            display: (prevState.display += localStorage.getItem('storedNum'))
          };
        } else {
          return {
            display: localStorage.getItem('storedNum')
          };
        }
      });
    }
  };

  memoryCancel = () => {
    localStorage.removeItem('storedNum');
  };

  onSquareRootClick = () => {
    this.setState(prevState => {
      return {
        display: getSquareRoot(prevState.display)
      };
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center my-1">
        <main className="col-12 p-1 col-sm-10 col-md-8 col-lg-6 col-xl-4 bg-dark">
          <section>
            <div className="input-group mb-1">
              <textarea
                value={this.state.display}
                className="form-control rounded-0 mx-auto py-4"
                cols="2"
                disabled
              />
              <div onClick={this.onDeleteClick} className="input-group-append">
                <span className="input-group-text rounded-0 del-key">
                  <FontAwesomeIcon icon={faBackspace} />
                </span>
              </div>
            </div>
          </section>

          <section className="grid">
            <button
              onClick={this.memoryStore}
              className="btn py-2 rounded-0 btn-warning"
            >
              MS
            </button>
            <button
              onClick={this.memoryRecall}
              className="btn py-2 rounded-0 btn-warning"
            >
              MR
            </button>
            <button
              onClick={this.memoryCancel}
              className="btn py-2 rounded-0 btn-warning"
            >
              MC
            </button>
            <button
              onClick={this.onSquareRootClick}
              className="btn py-2 rounded-0 btn-warning"
            >
              √
            </button>
            <button
              onClick={this.onResetClick}
              className="btn py-2 rounded-0 btn-danger"
            >
              AC
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-warning"
            >
              (
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-warning"
            >
              )
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-warning"
            >
              ÷
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              7
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              8
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              9
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-warning"
            >
              x
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              4
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              5
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              6
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-warning"
            >
              -
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              1
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              2
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              3
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-warning"
            >
              +
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              .
            </button>
            <button
              onClick={this.onNumClick}
              className="btn py-2 rounded-0 btn-info"
            >
              0
            </button>
            <button
              onClick={this.onEqualClick}
              className="btn py-2 rounded-0 btn-primary equal-key"
            >
              =
            </button>
          </section>
        </main>
      </div>
    );
  }
}

export default Calculator;