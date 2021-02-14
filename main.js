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

//POSTS
const postsList = document.querySelector('.posts')
//funcion setupPosts
const setupPosts = data => {
    if (data.length){
        let html = ''
        data.forEach(doc => {
            const post = doc.data()
            console.log(post)
            const li = `
            <li class="list-group-item list-group-item-action">
              <h5>${post.titulo}</h5>
              <p>${post.descripcion}</p>
            </li>
            `
            html += li

        })
        postsList.innerHTML = html
    } else {
        postsList.innerHTML = `
        <p class="text-center">Login to see posts</p>
        `
    }
}

//EVENTS
// listar los datos para los usuarios que esten autenticados
auth.onAuthStateChanged(user => {
    if (user){
        //console.log('sign in fs')
        fs.collection('posts')
            .get()
            .then((snapshot) => {
                //console.log(snapshot.docs)
                setupPosts(snapshot.docs)
            })
    } else {
        //console.log('sign out fs')
        setupPosts([])

    } 
})