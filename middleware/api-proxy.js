// middleware/api-proxy.js
export default defineEventHandler(async (event) => {
    if (event.node.req.url.startsWith('/api')) {
      const targetUrl = `https://api.staging.voomgle.com${event.node.req.url}`;
      const method = event.node.req.method;
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
  
      try {
        const response = await fetch(targetUrl, {
          method,
          headers,
          body: event.node.req.method === 'POST' ? await readBody(event) : undefined,
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Proxy error:', error);
        event.node.res.statusCode = 500;
        return { error: 'Proxy error' };
      }
    }
  });