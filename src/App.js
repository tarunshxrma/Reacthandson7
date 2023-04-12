import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import PageNotFound from './Components/PageNotFound';
import AddNewStudent from './Components/AddNewStudent';
import EditDetail from './Components/EditDetail';

function App() {
  return (
    <>
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/addnewstudent" element={<AddNewStudent/>}/>
        <Route path="/editdetails" element={<EditDetail/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
