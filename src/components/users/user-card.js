import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import connect from "react-redux/lib/connect/connect";
import { getUsers } from "../../action";


class UserCard extends Component{

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    const {getUsers} = this.props;
    getUsers()
  }

  render() {
  
  const { users, isLoading } = this.props
    return (
      <View>
       {
         !isLoading ? 
         users.map((user, i) => 
             <View>
               <Text key={i}>{user.name}</Text>
             </View>
           
         ) : <Text>Loading...</Text>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.getAllUsers.users);
  return {
    error: state.getAllUsers.error,
    isLoading: state.getAllUsers.loading,
    users: state.getAllUsers.users || []
  }
}

const mapDispatchToProps = {
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
