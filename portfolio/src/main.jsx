import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Front from './component/front.jsx'
import About from './component/about.jsx'
import Port from './component/port.jsx'
const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'',element:<Front/>},
    {path:'/about',element:<About/>},
    {path:'/port',element:<Port/>},
  ]
}
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
