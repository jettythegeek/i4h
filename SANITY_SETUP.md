# Sanity publishing setup

The site reads blog posts from Sanity project `gfh5enm6`, public dataset `production`. The original three local posts remain available only as a temporary fallback until the first Sanity post is verified.

## Connect a project

The local environment is already configured. Add the development and production site origins under **Settings → API → CORS origins** in Sanity. Enable credentials because Studio is embedded on the same origin.

Run `npm run dev`, then visit `/studio`. Sign in with a Sanity project member account and publish from the **Blog post** document type.

## Refresh the site after publishing

Create a Sanity webhook with these settings:

- URL: `https://your-site.example/api/revalidate`
- Trigger: create, update, delete
- Filter: `_type == "post"`
- Projection: `{_type, "slug": slug.current}`
- Secret: the same value as `SANITY_REVALIDATE_SECRET`

The endpoint validates Sanity's signature before invalidating blog caches.
