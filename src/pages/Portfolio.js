import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import FriendCard from "../components/FriendCard";
import friends from "../../src/friends.json";


class Portfolio extends Component {

 render(props) {
  return <FriendCard friends={friends} />
  }
}

export default Portfolio;
