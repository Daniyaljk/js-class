import {Routes, Route} from "react-router-dom";
import HomaPage from "./pages/HomaPage";
import SearchPage from "./pages/SearchPage";
import CrudPage from "./pages/CrudPage";

import "./App.css";
import Header from "./compoents/header/Header";


function App() {
    return (
        <>

            <Header/>

            <Routes>
                <Route path={"/"} element={<HomaPage/>}/>
                <Route path={"/search"} element={<SearchPage/>}/>
                <Route path={"/crud"} element={<CrudPage/>}/>
            </Routes>
        </>
    );
}

export default App;
