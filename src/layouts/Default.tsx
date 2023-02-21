import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

export function Default() {
  return (
    <div className="m-auto max-w-[1000rem] grid grid-cols-[300px,1fr]">
      <Sidebar />

      <div className="border-l border-r border-gray-secondary">
        <Outlet />
      </div>
    </div >
  )
}