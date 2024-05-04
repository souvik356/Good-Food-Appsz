import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Footer from './components/Footer';

function Body({cart}) {
  return (
    <Provider store={appStore}>
        <div className="w-full h-screen">
        <Header cart={cart}/>
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
  )
}

export default Body