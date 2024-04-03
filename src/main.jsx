import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SvgFilters from './SvgFilters'; /* svg */

/* js */
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; /* bootstrap */


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <SvgFilters />
    <App />
  </>,
)
