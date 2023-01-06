import { BrowserRouter, Route, Routes } from "react-router-dom";

// コンポーネントの読み込み
import { MainPage } from "./pages/mainPage";
import { WorkAllPage } from "./pages/workAllPage";
import { HistoryAllPage } from "./pages/historyAllPage";
import { WorkDetailPage } from "./pages/workDetailPage";

export const Routers = () => {
    return ( 
        <Routes>
            <Route path='*' element={<MainPage />}></Route>
            <Route path="workAll" element={<WorkAllPage />}/>
            <Route path="historyAll" element={<HistoryAllPage />} />
            <Route path="workDetail" element={<WorkDetailPage />} />
        </Routes>
    );
}