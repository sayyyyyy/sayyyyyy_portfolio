import { BrowserRouter, Route, Routes } from "react-router-dom";

// コンポーネントの読み込み
import { MainPage } from "./pages/mainPage";
import { WorkAll } from "./pages/workAll";
import { HistoryAll } from "./pages/historyAll";

export const Routers = () => {
    return ( 
        <Routes>
            <Route path='*' element={<MainPage />}></Route>
            <Route path="workAll" element={<WorkAll />}/>
            <Route path="historyAll" element={<HistoryAll />} />
        </Routes>
    );
}