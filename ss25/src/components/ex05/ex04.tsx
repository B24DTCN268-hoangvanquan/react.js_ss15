import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

function Ex05() {
    return ( 
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<NotFound></NotFound>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
     );
}

export default Ex05;