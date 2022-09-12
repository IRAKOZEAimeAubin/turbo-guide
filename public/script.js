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

const test = async ( e ) => {
    e.preventDefault();
    try {
        
    } catch (error) {
        
    }
}

document.getElementById( 'login' ).addEventListener( 'click', test );