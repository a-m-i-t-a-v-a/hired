import { Outlet } from "react-router-dom"
import Header from "../Header"

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <div className="min-h-screen container">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default AppLayout
