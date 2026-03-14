

import "../components/history.css"

import { HistoryElement } from "../components/historyElement"
import { TitleComponent } from "../components/titleComponent"
import historyAll from '../data/historyData.json';

export const HistoryAllPage = () => {
    return (
        <div className="relative top-24">
            <TitleComponent>History All</TitleComponent>
            <dl className="flex flex-wrap justify-between mt-4">
                {historyAll.map((history: { historyAge: string, historyContent: string, historyDescription: string }) => {
                    return (
                        <HistoryElement key={history.historyDescription} historyAge={history.historyAge} historyDescription={history.historyDescription}>{history.historyContent}</HistoryElement>
                    );
                })}
            </dl>
        </div>
    );
}