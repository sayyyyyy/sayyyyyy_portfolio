import { TitleComponent } from "../components/titleComponent";
import { HistoryElement } from "../components/historyElement";

import "../components/history.css"

import { useNavigate } from "react-router-dom";

export const HistorySection = () => {
    const navigate = useNavigate()
    const historyList = [
        {historyAge: "2021.03", historyContent: "プログラミングを始める"},
        {historyAge: "2021.03", historyContent: "ハッカソン初参加"},
        {historyAge: "2021.05", historyContent: "CODEGYM Academy受講"},
        {historyAge: "2021.11", historyContent: "フルスタックエンジニアとして長期インターン開始"},
        {historyAge: "2022.04", historyContent: "学生団体Idea×Techに運営兼メンターとして加入"},
        {historyAge: "2022.05", historyContent: "技育CAMPハッカソンvol2参加　努力賞受賞"},
        {historyAge: "2022.06", historyContent: "CODEGYM Academy先輩チューター業務"},
        {historyAge: "2022.09", historyContent: "技育展・CCCu-22参加　CCC-u22にてファイナリスト選出、企業賞受賞"},
        {historyAge: "2022.11", historyContent: "技育CAMPハッカソンvol8　努力賞受賞"},
    ]
    return (
        <section id="history-container" className="h-screen flex flex-col justify-center">
            <TitleComponent>HISTORY</TitleComponent>
            <dl className="flex flex-wrap justify-between">
                {historyList.map((history) => {
                    return (
                        <HistoryElement historyAge={history.historyAge}>{history.historyContent}</HistoryElement>
                    );
                })}
            </dl>
            <p onClick={() => {navigate('/historyAll')}}>すべて見る</p>
        </section>
    );
}