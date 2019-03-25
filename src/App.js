import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import { Subtitle, SubtitleH4 } from "./components/Subtitle";
import Wrapper from "./components/Wrapper";

import cards from "./data.json";

class App extends Component {
  state = {
    cards,
    cardsClicked: [],
    score: 0,
    gameStatusMsg: ""
  };

  /*The event handle for when the card / image is clicked*/
  clickedCard = id => {
    /* Sets the initial variables to match the variables in the state*/
    let cardsTemp = this.state.cards;
    let cardsClickedTemp = this.state.cardsClicked;
    let scoreTemp = this.state.score;
    let gameStatusMsgTemp = this.state.gameStatusMsg;

    /*If the cards clicked array matches the card array (minus 1 as that would mean all previous clicks were correct)*/
    if (cardsClickedTemp.length === cardsTemp.length - 1) {
      cardsClickedTemp = [];
      scoreTemp = 0;
      gameStatusMsgTemp =
        "You won!!  Great job!! Please click another image to try again.";
    } else if (cardsClickedTemp.indexOf(id) === -1) {
      /*Success scenario: If the id from the card clicked does not match an element in the array of clicked cards*/
      cardsClickedTemp.push(id);
      scoreTemp++;
      //Sets the sort order property of card object to a random number.
      cardsTemp.map(
        card =>
          (card.sortOrder = Math.floor(
            Math.random() * Math.floor(this.state.cards.length)
          ))
      );

      //Sorts the cards object in ascending order based on the card object sort order.
      cardsTemp.sort((a, b) => a.sortOrder - b.sortOrder);
      gameStatusMsgTemp = "Great work keep going.";
    } else {
      /*Failure scenario: If the id from the card clicked does match an element in the array of clicked cards*/
      cardsClickedTemp = [];
      scoreTemp = 0;
      gameStatusMsgTemp =
        "Sorry, you clicked that image before. You lost. Please click another image to try again.";
    }

    this.setState({
      cards: cardsTemp,
      cardsClicked: cardsClickedTemp,
      score: scoreTemp,
      gameStatusMsg: gameStatusMsgTemp
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>

        <Subtitle> Score: {this.state.score} </Subtitle>
        <SubtitleH4>
          {this.state.gameStatusMsg
            ? this.state.gameStatusMsg
            : "Click on an image to earn points, but don't click on any more than once!"}
        </SubtitleH4>

        {this.state.cards.map(card => (
          <FriendCard
            removeFriend={this.clickedCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
