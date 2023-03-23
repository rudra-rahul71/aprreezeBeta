export const environment = {
  production: false,
  auth: {
    domain: "dev-fuf1krjmd6j1rolw.us.auth0.com",
    clientId: "dZoG1UmpvGvvGip0yHBEr7XGLMgl193R",
    redirectUri: window.location.origin,
    audience: "https://appreeze-portal-service.com",
    httpInterceptor: {
      allowedList: ['http://localhost:8080/*']
    }
  },
  dev: {
    portalServiceUrl: "http://localhost:8080"
  }
};
