import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function Ex04() {
    return ( 
        <>
            <BrowserRouter>
                    <Routes>
                         <Route path="/register" element={<Register></Register>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
     );
}

export default Ex04;