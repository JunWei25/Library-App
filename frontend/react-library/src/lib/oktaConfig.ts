export const oktaConfig = {
    clientId: '0oamo1olnr4PSnQfO5d7',
    issuer: 'https://dev-92174304.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}