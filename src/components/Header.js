import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import logo from '../trivia.png';
import './Header.css';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    return (
      <header className="header">
        <img src={ logo } className="App-logo" alt="logo" />
        <div className="header-player">
          <p className="header-player-name" data-testid="header-player-name">{ name }</p>
          <span className="header-player-score" data-testid="header-score">{ score }</span>
          <img
            data-testid="header-profile-picture"
            className="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
            alt="User"
          />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
});

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
