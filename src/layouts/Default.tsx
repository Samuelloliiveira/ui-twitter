import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

export function Default() {
  return (
    <div className="m-auto max-w-[1000rem] min-h-screen grid grid-cols-[300px,1fr] max-md:grid-cols-[80px,1fr]">
      <Sidebar />

      <div className="">
        <Outlet />
      </div>
    </div >
  )
}