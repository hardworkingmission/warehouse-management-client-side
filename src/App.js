import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import ManageItems from './components/ManageItems/ManageItems';
import AllItems from './components/AllItems/AllItems';
import AddItem from './components/AddItem/AddItem';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Blogs from './components/Blogs/Blogs';
import MyItems from './components/MyItems/MyItems';
import AddUserNote from './components/AddUserNote/AddUserNote';
import MyNotes from './components/MyNotes/MyNotes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems/>
          </RequireAuth>
        }>
           <Route index element={<AllItems/>}/>
           <Route path="allitems" element={<AllItems/>}/>
           <Route path='additem' element={<AddItem/>}/>
        </Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }/>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth> 
        }/>
        <Route path='/mynotes' element={
          <RequireAuth>
            <MyNotes/>
          </RequireAuth> 
        }/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/addusernote' element={<AddUserNote/>}/>
        <Route path='/inventory/'>
          <Route path=':productId' element={
            <RequireAuth>
              <Inventory/>
            </RequireAuth>
          }/>
        </Route>
      </Routes>
      <Footer/>
  
    </div>
  );
}

export default App;
