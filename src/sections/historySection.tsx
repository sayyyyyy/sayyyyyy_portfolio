import { TitleComponent } from "../components/titleComponent";
import { HistoryElement } from "../components/historyElement";

import "../components/history.css"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import historyList from '../data/historyData.json';

export const HistorySection = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const navigate = useNavigate()
    const navigateHistoryAll = () => {
        navigate('/historyAll')
        setOpenMenu(!openMenu)
        window.scrollTo(0, 0)
    }

    return (
        <section id="history-container" className="mt-24">
            <TitleComponent>HISTORY</TitleComponent>
            <dl className="flex flex-wrap justify-between mt-6">
                {historyList.filter((h) => h.isPickup).map((history: { historyAge: string, historyContent: string, historyDescription: string }) => {
                    return (
                        <HistoryElement key={history.historyDescription} historyAge={history.historyAge} historyDescription={history.historyDescription}>{history.historyContent}</HistoryElement>
                    );
                })}
            </dl>
            <p onClick={() => { navigateHistoryAll() }} className="flex justify-end mt-8 text-zinc-400 cursor-pointer">すべて見る ＞</p>
        </section>
    );
}