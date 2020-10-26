const stripe = require('stripe')(process.env.STRIPE_SECRET);

const paymentIntent = await stripe.paymentIntents.create({
	amount: 1099,
	currency: 'aud',
	metadata: { integration_check: 'accept_a_payment' },
});

exports.handler = async function (event, context, callback) {};
