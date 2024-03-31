import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SvgFilters from './SvgFilters'; /* svg */

/* css */
import '@assets/css/style-liberty.css'
import '@assets/css/style.min.css'
import '@assets/css/classic-themes.min.css'
import '@assets/css/global-styles-inline.css'
import '@assets/css/style.css'
import '@assets/css/foodmenu.min.css'
import '@assets/css/public.css'

/* js */
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; /* bootstrap */


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <SvgFilters />
    <App />
  </>,
)
