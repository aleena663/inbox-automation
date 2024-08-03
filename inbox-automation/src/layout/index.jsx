
import React, {useState} from 'react'
import Sidebar from '../component/Sidebar'
 
const Layout = ({ children }) => {
    const [issidebarOpen, setissidebarOpen] = useState(true)
    const toggleSidebar = () => {
        setissidebarOpen(!issidebarOpen)
    }
    return (
        <div className="flex">
            <Sidebar toggleSidebar={toggleSidebar} isOpen={issidebarOpen} />
            <div className={`${issidebarOpen ? " ml-[300px]" : "ml-[80px]"}  transition-all flex-1 p-6 bg-gray-100 min-h-screen`}>
                {children}
            </div>
        </div>
    )
}
 
export default Layout
 