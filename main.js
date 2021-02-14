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

//LOGIN

const $signinForm = document.querySelector('#login-form')

$signinForm.addEventListener('submit',(e) => {
    console.log('submit login')
    e.preventDefault()

    const email = document.querySelector('#login-email').value
    const password = document.querySelector('#login-password').value

    console.log(email, password )

    //COMUNICACION CON FIREBASE
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            //clear form
            $signinForm.reset()

            //hide modal
            $('#signinModal').modal('hide')

            console.log('logined ok ')
        })

})

// LOGOUT

const $logout = document.querySelector('#logout')

$logout.addEventListener('click',(e)=> {
    e.preventDefault()
    auth.signOut().then(() => {
        console.log('signout ok')
    })
})