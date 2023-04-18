import { PropsWithChildren } from 'react'
import Sidebar from './Sidebar'
import FollowBar from './FollowBar'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container h-full mx-auto xl:px-30 max-w-6xl">
      <div className="grid grid-cols-4 h-full">
        <Sidebar />
        <main className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
          {children}
        </main>
        <FollowBar />
      </div>
    </div>
  )
}

export default AppLayout
