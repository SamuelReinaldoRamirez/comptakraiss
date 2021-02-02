require('isomorphic-fetch');
const Koa = require('koa');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');

const dotenv = require('dotenv');
const next = require('next');
dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;


const port = parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log("ON EST DANS SEVEUR")
    const server = new Koa();
    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];
    server.use(
        createShopifyAuth({
          apiKey: SHOPIFY_API_KEY,
          secret: SHOPIFY_API_SECRET_KEY,
          scopes: ['read_products', 'write_products', 'read_orders', 'read_customers'], //'read_fulfillements',
          afterAuth(ctx) {
            //const { shop, accessToken } = ctx.session;
            //ctx.redirect('/');
            const urlParams = new URLSearchParams(ctx.request.url);
            const shop = urlParams.get('shop');
            ctx.redirect(`/?shop=${shop}`);
          },
        }),
      );
    
    server.use(graphQLProxy({version: ApiVersion.October19}))
    server.use(verifyRequest());
    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
      return
    });
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
      });
});