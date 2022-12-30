import "../components/history.css"

import { HistoryElement } from "../components/historyElement"

export const HistoryAllPage = () => {
    const history2021 = [
        {historyAge: "2021.03", historyContent: "プログラミングを始める", historyDescription: ""},
        {historyAge: "2021.03", historyContent: "ハッカソン初参加", historyDescription: ""},
        {historyAge: "2021.05", historyContent: "CODEGYM Academy受講", historyDescription: ""},
        {historyAge: "2021.10", historyContent: "HacU Meijo参加", historyDescription: ""},
        {historyAge: "2021.11", historyContent: "フルスタックエンジニアとして長期インターン開始", historyDescription: ""}
    ]

    const history2022 = [
        {historyAge: "2022.04", historyContent: "学生団体Idea×Techに運営兼メンターとして加入", historyDescription: ""},
        {historyAge: "2022.05", historyContent: "技育CAMPハッカソンvol2参加　努力賞受賞", historyDescription: ""},
        {historyAge: "2022.06", historyContent: "CODEGYM Academy先輩チューター業務", historyDescription: ""},
        {historyAge: "2022.09", historyContent: "技育展・CCCu-22参加　CCC-u22にてファイナリスト選出、企業賞受賞", historyDescription: ""},
        {historyAge: "2022.10", historyContent: "JPHACKS参加", historyDescription: ""},
        {historyAge: "2022.11", historyContent: "XRCreativeAward参加", historyDescription: ""},
        {historyAge: "2022.11", historyContent: "技育CAMPハッカソンvol8　努力賞受賞", historyDescription: ""},
        {historyAge: "2022.12", historyContent: "HackU Meijo参加", historyDescription: ""},
        {historyAge: "2022.12", historyContent: "WithARハッカソン参加", historyDescription: ""},
        {historyAge: "2022.12", historyContent: "学生団体SAIBASIに運営として加入", historyDescription: ""},
    ]

    const history2023 = []

    const historyAll = [...history2021, ...history2022]
    return (
        <dl className="flex flex-wrap justify-between">
            {historyAll.map((history) => {
                return (
                    <HistoryElement historyAge={history.historyAge} historyDescription={history.historyDescription}>{history.historyContent}</HistoryElement>
                );
            })}
        </dl>
    );
}