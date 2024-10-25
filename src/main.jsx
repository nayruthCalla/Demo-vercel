import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-nrm0r917.us.auth0.com"
    clientId="N3fCXuUWCHGwaQ39KHWIifRMdiu4z9cz"
    authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
)
