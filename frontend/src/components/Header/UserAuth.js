import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;


export default function UserAuth(props) {
  const isLoggedIn = props.isLoggedIn;
}
