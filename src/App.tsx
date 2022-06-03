import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutWeb from "./layout/LayoutWeb";
import HomePage from "./pages/home/HomePage";
import {Provider} from "react-redux";
import store from "./store";
import LoadData from "./assets/load-data/LoadData";


let isClickConnect = false;

function App() {

  return (
    <div>
      <Provider store={store}>
       <LoadData>
         <div className="App">
           <BrowserRouter>
             {/*------LayOut ----------------*/}
             <Routes>
               <Route path="/*" element={<LayoutWeb/>}>
                 <Route index element={<HomePage/>}/>
               </Route>
             </Routes>
           </BrowserRouter>
         </div>
       </LoadData>
      </Provider>

    </div>
  );
}

export default App;
