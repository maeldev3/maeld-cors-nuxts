import { createProxyMiddleware } from 'http-proxy-middleware';
import { fromNodeMiddleware } from 'h3'; // Import from h3
export default fromNodeMiddleware((req, res, next) => {
  if (req && req.url && req.url.startsWith('/api')) {
    const proxy = createProxyMiddleware({
      target: 'https://api.staging.voomgle.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
      // logLevel: "debug", 
    });
    proxy(req, res, next);
  } else {
    next();
  }
});

