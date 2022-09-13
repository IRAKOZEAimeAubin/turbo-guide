require( 'dotenv' ).config();
const express = require( 'express' );
const app = express();

app.use( express.json() );
app.use( express.static( 'public' ) );
const stripe = require( 'stripe' )( process.env.STRIPE_SECRET_KEY );

const storeItems = new Map( [
    [ 1, { priceInCents: 500, name: "Donation" } ]
] )

app.post( '/donate', async ( req, res ) => {
    try {
        const session = await stripe.checkout.sessions.create( {
            payment_method_types: [ "card" ],
            mode: "payment",
            line_items: req.body.items.map( item => {
                const storeItem = storeItems.get( item.id );
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                };
            } ),
            success_url: 'http://localhost:8000/donate.html',
            cancel_url: 'http://localhost:8000/donate.html',
        } );
        res.json( { url: session.url } )
    } catch (e) {
        res.status(500).json({error:e.message})
    }
} )

app.listen( 8000 );