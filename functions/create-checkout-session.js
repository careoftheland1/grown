// Placeholder only. Add Stripe's server SDK and real Price IDs before enabling checkout.
// Never accept browser-supplied prices; map product/variant identifiers to env Price IDs here.
export async function onRequestPost() {
  return new Response(JSON.stringify({ error: 'Stripe Checkout is not configured yet.' }), {
    status: 501,
    headers: { 'Content-Type': 'application/json' }
  });
}
