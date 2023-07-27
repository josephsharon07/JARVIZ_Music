aut = firebase.auth();

aut.onAuthStateChanged((user) => {
    if (user) 
    {
      var uid = user.uid;
      console.log(uid);
    } 
    else 
    {
      alert("You are not allowed to this page because you are not signed in with J.A.R.V.I.Z. Music....")
      window.location.href = "/index.html";
    }
  });