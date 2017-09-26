import React, { Component } from 'react';
import TextField from '../component/TextField';
import { Link } from 'react-router';
import { Icon } from 'react-fa';
import '../cm-style/Header.css';
import '../cm-style/orsi.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    this.changeLocation = this.changeLocation.bind(this);
  }
  changeLocation(e) {
    e.preventDefault();
    const ref = this.inputText;
    this.setState({
      location: ref.value,
    }, () => {
      this.props.handleUpdate(this.state.location);
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="lg-3 sm-12">
            <Link to="/about">
              <Icon name="github" className="github-icon" />
            </Link>
            GitHub Accounts
          </h1>
          <form id="search" onSubmit={this.changeLocation}>
            <TextField
              refs={(inputText) => { this.inputText = inputText; }}
            />
            <button>
              <Icon name="search" className="search" />
            </button>
          </form>
        </header>
      </div>
    );
  }
}
export default SearchBox;
