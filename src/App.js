
import './App.css';
import AnnouncementBar from './Components/AnnouncementBar/AnnouncementBar';
import { Route, Routes } from 'react-router-dom';
import ShopComponent from './Components/AnnouncementBar/ShopComponent';
import BlogComponent from './Components/AnnouncementBar/BlogComponent';
import ContactComponet from './Components/AnnouncementBar/ContactComponent';
import AboutComponent from './Components/AnnouncementBar/AboutComponent';
import ArrivalsComponent from './Components/AnnouncementBar/ArrivalsComponent';
import ArrivalsComponent2 from './Components/AnnouncementBar/ArrivalsComponent2';
import OpenCards from './Components/AnnouncementBar/OpenCards';
import Account from './Components/AnnouncementBar/Account';
import PaymentGetway from './Components/AnnouncementBar/PaymentGetway';
import ShopSale from './Components/AnnouncementBar/ShopSale';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<AnnouncementBar/>}/>
      <Route path='shopcomponent' element={<ShopComponent/>}/>
      <Route path='blogcomponent' element={<BlogComponent/>}/>
      <Route path='contactcomponent' element={<ContactComponet/>}/>
      <Route path='aboutcomponent' element={<AboutComponent/>}/>
      <Route path='ArrivalsComponent' element={<ArrivalsComponent/>}/>
      <Route path='ArrivalsComponent2' element={<ArrivalsComponent2/>}/>
      <Route path='opencard' element={<OpenCards/>}/>
      <Route path='account' element={<Account/>}/>
      <Route path='paymentgetway' element={<PaymentGetway/>}/>
      <Route path='shopsale' element={<ShopSale/>}/>
    </Routes>
  </>
}

export default App;
