import { useEffect, useState } from "react"
import "../components/history.css"

import { HistoryElement } from "../components/historyElement"
import { TitleComponent } from "../components/titleComponent"

import { getSpreadSheetData } from "../scripts/getSpreadSheetData"

export const HistoryAllPage = () => {
    const [historyAll, setHistory] = useState([])

    useEffect(() => {
        const request = {
            params: {
                operation: 'historyAll'
            }
        }

        const getHistoryData = async () => {
            setHistory(await getSpreadSheetData(request))
        }
        
        getHistoryData()
    }, []);

    return (
        <div className="relative top-24">
            <TitleComponent>History All</TitleComponent>
            <dl className="flex flex-wrap justify-between mt-4">
                {historyAll.map((history) => {
                    return (
                        <HistoryElement key={history["historyDescription"]} historyAge={history["historyAge"]} historyDescription={history["historyDescription"]}>{history["historyContent"]}</HistoryElement>
                    );
                })}
            </dl>
        </div>
    );
}

