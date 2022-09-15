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
        } );
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


// Donate with Stripe API

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

const donateBtn = document.getElementById( 'donate' );
if ( donateBtn ) {
    document.getElementById( 'donate' ).addEventListener( 'click', donate );
}