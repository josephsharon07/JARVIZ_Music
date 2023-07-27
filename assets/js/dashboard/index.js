function signOutUser() {
    firebase.auth().signOut()
      .then(() => {
        alert("signOut Sucessfull!!...");
        window.location.href = "/login/index.html";
      })
      .catch((error) => {
        console.error(error);
      });
  }
  