import { useEffect, useState } from "react"
import "../components/history.css"

import { HistoryElement } from "../components/historyElement"
import { TitleComponent } from "../components/titleComponent"
import axios from "axios"

export const HistoryAllPage = () => {
    const [historyAll, setHistory] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = process.env.REACT_APP_SPREADSHEET_URL || ''
            const response = await axios.get(url);
            setHistory(response.data);
            return response;
        }
        
        fetchData();
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

