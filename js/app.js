// Include partials in index.html

// fetch( "partials/header.html" )
//     .then( response =>
//     {
//         return response.text()
//     } )
//     .then( data =>
//     {
//         document.querySelector( "header" ).innerHTML = data;
//     } );

// fetch( "partials/footer.html" )
//     .then( response =>
//     {
//         return response.text()
//     } )
//     .then( data =>
//     {
//         document.querySelector( "footer" ).innerHTML = data;
//     } );

//Form Validation

( function ()
{
    'use strict';
    window.addEventListener( 'load', function ()
    {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName( 'needs-validation' );
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call( forms, function ( form )
        {
            form.addEventListener( 'submit', function ( event )
            {
                if ( form.checkValidity() === false )
                {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add( 'was-validated' );
            }, false );
        } );
    }, false );
} )();


//Testimonial Slider
$( document ).ready( function ()
{
    $( ".owl-carousel" ).owlCarousel( {
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    } );

    //OTC tab
    $( '#otc-list a' ).on( 'click', function ( e )
    {
        e.preventDefault()
        $( this ).tab( 'show' )
    } )
} );
