import { TitleComponent } from "../components/titleComponent";
import { HistoryElement } from "../components/historyElement";

import "../components/history.css"

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSpreadSheetData } from "../scripts/getSpreadSheetData";

export const HistorySection = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [historyList, setHistory] = useState([])
    
    const navigate = useNavigate()
    const navigateHistoryAll = () => {
        navigate('/historyAll')
        setOpenMenu(!openMenu)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const request = {
            params: {
                operation: 'history'
            }
        }

        const getHistoryData = async () => {
            setHistory(await getSpreadSheetData(request))
        }
        
        getHistoryData()
    }, []);


    return (
        <section id="history-container" className="mt-24">
            <TitleComponent>HISTORY</TitleComponent>
            <dl className="flex flex-wrap justify-between mt-6">
                {historyList.map((history) => {
                    return (
                        <HistoryElement key={history["historyDescription"]} historyAge={history["historyAge"]} historyDescription={history["historyDescription"]}>{history["historyContent"]}</HistoryElement>
                    );
                })}
            </dl>
            <p onClick={() => {navigateHistoryAll()}} className="flex justify-end mt-8 text-zinc-400 cursor-pointer">すべて見る ＞</p>
        </section>
    );
}