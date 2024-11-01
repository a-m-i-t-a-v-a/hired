import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/layouts/AppLayout"
import Landing from "./pages/Landing"
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import Job from './pages/Job'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import { ThemeProvider } from './components/ThemeProvider'
import ThemeButton from './components/theme-button/ThemeButton'

function App() {

  const router=createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Landing/>
        },
        {
          path:'/onboarding',
          element:<Onboarding/>
        },
        {
          path:'/jobs',
          element:<JobListing/>
        },
        {
          path:'/job/:id',
          element:<Job/>
        },
        {
          path:'/post-job',
          element:<PostJob/>
        },
        {
          path:'/saved-job',
          element:<SavedJobs/>
        }
      ]
    }
  ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeButton/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
