import React, { useEffect, useState } from "react";
import ThumbnailList from "./components/ThumbnailList";
import NotFound from "./components/NotFound";
import { Routes, Route, useLocation } from "react-router";
import Dashboard from "./pages/DashBoard";
import { useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom";
function App() {

    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams(location.search);
    let page = searchParams.get("page");
    let currentPage = 0;
    return (
       <>   
            <Link to = "/page=0" onClick={() => {currentPage = 0}}>Page1</Link>
            <Link to = "/page=1" onClick={() => {currentPage = 1}}>Page2</Link>
            <Link to = "/page=2" onClick={() => {currentPage = 2}}>Page3</Link>
            <Routes>
                <Route path="/" exact element={<ThumbnailList />} />
                <Route path="/page=0" exact element={<ThumbnailList currentPage={0}/>} />
                <Route path="/page=0/:id"  element={<Dashboard currentPage={0}/>} />
                <Route path="/page=1" exact element={<ThumbnailList currentPage={1}/>} />
                <Route path="/page=1/:id"  element={<Dashboard currentPage={1}/>} />
                <Route path="/page=2" exact element={<ThumbnailList currentPage={2}/>} />
                <Route path="/page=2/:id"  element={<Dashboard currentPage={2}/>} />
                <Route path="*">NOTFOUND 404</Route>
            </Routes>
       </>
    )
}

export default App;
