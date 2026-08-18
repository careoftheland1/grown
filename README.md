# grown on the land

Small static storefront for community-grown greens, picked up in the alley.

## Preview

From this directory run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

Replace the remaining SVG placeholders in `images/` with product photographs and update their paths in `products.js`. The placeholder Netlify function intentionally does not create Checkout sessions until Stripe configuration and server-side Price ID mapping are added.
