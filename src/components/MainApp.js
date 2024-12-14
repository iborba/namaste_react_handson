import { Outlet } from 'react-router'
import Header from './Header'

const MainApp = () => {
  return (
    <div className='appBody'>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainApp;