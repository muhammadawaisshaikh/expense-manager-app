import React, { useEffect } from 'react';
import { addUser, getAUsers, getAUser, updateUser, deleteUser } from './homepage.service';
import Style from './style';

function Homepage() {
  const classes = Style();

  useEffect(() => {
    getUsersListing();
  })

  const getUsersListing = () => {
    let params = {
      page: 1
    }

    getAUsers(params).then(response => {
      console.log(response);
    })
    .catch(async error => {
      console.log(error.response);
    });
  }

  return (
    <div>
        <h1 className={classes.h1}>Homepage</h1>
    </div>
  );
}

export default Homepage;