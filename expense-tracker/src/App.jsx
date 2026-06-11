import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter,Route,Routes ,useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import  Products  from "./Products";
import Mobile from "./Mobile";
import Laptop from "./Laptop";
const App = () => {
  const NotFound = () =>{
     return <h1>ERROR 404 :: Page Not Found</h1>
  }
  const User = () => {
    const {id} = useParams();
    return <><h1>USER : {id}</h1></>
  }
  return (
    <BrowserRouter>
      <h1>React Router LInks </h1>
      <Link to="/">Home</Link> | 
      <Link to="/abt">About</Link> | 
      <Link to="/cnt">Contact</Link> |
      <Link to="/prod">Products</Link>
      <h1>CONTENT OF PAGE</h1>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/abt" element = {<About/>}/>
        <Route path ="/prod" element = {<Products/>}>
          <Route path = "mob" element={<Mobile/>}/>
          <Route path = "lap" element={<Laptop/>}/>
        </Route>
        <Route path ="/cnt" element = {<Contact/>}/>
        <Route path ="/user/:id" element = {<User/>}/>
        <Route path ="*" element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;