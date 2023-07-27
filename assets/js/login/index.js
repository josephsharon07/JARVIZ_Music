form = document.getElementById('form');

//Firebase Signin:
signin = firebase.auth();

form.addEventListener('submit', function(event){
    event.preventDefault();

    formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    signin.signInWithEmailAndPassword(email, password)
        .then((userCredential) => { 
            Swal.fire({
                title: 'signin Sucessfull !!...',
                text: "You will be redirected to the world of HI-RES music",
                icon: 'success',
                showOkButton: true,
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/dashboard/index.html';
                }
              })
        })
        .catch((error) => {
        });
});


