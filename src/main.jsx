import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Handle GitHub Pages SPA redirect
;(function () {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect)
  }
})()

// Parse redirect from 404.html
const { search } = window.location
if (search.startsWith('?/')) {
  const decoded = search
    .slice(2)
    .split('&')
    .map((s) => s.replace(/~and~/g, '&'))
    .join('?')
  window.history.replaceState(
    null,
    null,
    import.meta.env.BASE_URL + decoded + window.location.hash
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
