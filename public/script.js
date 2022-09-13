// Navigation Bar JS

const showNav = ( toggleId, navId, bodyId, headerId ) => {
    const toggle = document.getElementById( toggleId );
    nav = document.getElementById( navId );
    bodypd = document.getElementById( bodyId );
    headerpd = document.getElementById( headerId );

    if ( toggle && nav && bodypd && headerpd ) {
        toggle.addEventListener( 'click', () => {
            nav.classList.toggle( 'show' );
            // toggle.classList.toggle( 'fa-solid fa-xmark' );
            bodypd.classList.toggle( 'body-pd' );
            headerpd.classList.toggle( 'body-pd' );
        })
    }
};

showNav( 'header-toggle', 'nav-bar', 'body-pd', 'header' );

const linkColor = document.querySelectorAll( '.nav_link' );

function colorLink () {
    if ( linkColor ) {
        linkColor.forEach( l => l.classList.remove( 'active' ) );
        this.classList.add( 'active' );
    }
}

linkColor.forEach( l => l.addEventListener( 'click', colorLink ) );

// Axios stuff

// Login

const userLogin = async ( e ) => {
    e.preventDefault();
    const userEmail = document.getElementById( 'email' ).value;
    const userPassword = document.getElementById( 'password' ).value;
    try {
        const res = await axios.post( 'http://localhost:3000/api/v1/auth/login', {
            email: userEmail,
            password: userPassword
        } );
        console.log( res.data.user );
        window.location.href = './approvedTestimonies.html';
    } catch (error) {
        console.log( error );
    }
}

// Sign Up

const userSignUp = async ( e ) => {
    e.preventDefault();
    const userName = document.getElementById( 'name' ).value;
    const userEmail = document.getElementById( 'email' ).value;
    const userPassword = document.getElementById( 'password' ).value;
    try {
        const res = await axios.post( 'http://localhost:3000/api/v1/auth/register', {
            name: userName,
            email: userEmail,
            password: userPassword
        } );
        console.log( res.data.user );
    } catch ( error ) {
        console.log( error );
    }
};

const donate = () => {
    fetch( "http://localhost:8000/donate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( {
            items: [
                { id: 1, quantity: 1 }
            ],
        } ),
    } )
        .then( res => {
            if ( res.ok ) return res.json();
            return res.json().then( json => Promise.reject( json ) );
        } )
        .then( ( { url } ) => {
            window.location = url;
        } )
        .catch( e => {
            console.error( e.error );
        } );
};

document.getElementById( 'donate' ).addEventListener( 'click', donate );
document.getElementById( 'signUp' ).addEventListener( 'click', userSignUp );
document.getElementById( 'login' ).addEventListener( 'click', userLogin );