import React, { Component } from "react";
import { Text, View } from "react-native";
import UserCard from "./users/user-card";

class HomeComponent extends Component{
  render() {
    return (
      <View>
        <Text>Home Component</Text>
        <UserCard />
      </View>
    );
  }
}

export default HomeComponent
