import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { propcontex } from './Components/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <propcontex>
     <React.StrictMode>
    <App />
  </React.StrictMode>


  </propcontex>
  
    

  
 
)
