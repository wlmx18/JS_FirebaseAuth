const $singupform = document.getElementById('singup-form')
console.log($singupform)

$singupform.addEventListener('submit', (e) => {
    console.log('ok')
    e.preventDefault()
    //ETIQUETA
    //const $singupEmail = document.getElementById('signup-email')
    //VALOR
    const email = document.getElementById('signup-email').value
    const password = document.getElementById('signup-password').value

    //console.log($email, $password)

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            //clear form
            $singupform.reset()

            //hide modal
            $('#signupModal').modal('hide')

            console.log('created ok')
        })


    
})