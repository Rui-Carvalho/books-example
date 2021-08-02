const environmentUrls = new Map();

environmentUrls.set('localhost', 'https://localhost:8080/api/v1');
environmentUrls.set('production', 'http://production:8080/api/v1');

export default environmentUrls.get(window.location.hostname);
