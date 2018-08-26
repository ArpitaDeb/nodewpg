function getUserID() {
    return 50;
  }
  
  function isUservalid() {
    return true;
  }
  
  if (getUserID() > 30) {
    console.log('The user is valid');
  }
  
  else {
    console.log('The user is not valid');
  }