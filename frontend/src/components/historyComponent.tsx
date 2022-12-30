import { TitleComponent } from "./titleComponent";
import "../components/history.css"

type HistoryElementProps = {
    historyAge: string;
    children: string;
}

const HistoryElement = (props: HistoryElementProps) => {
    const {historyAge, children} = props
    return(
        <>
            <dt className="text-right">{historyAge}</dt>
            <dd><p>{children}</p></dd>
        </>
    );
}

export const HistoryComponent = () => {
    return (
        <section id="history-container" className="h-screen flex flex-col justify-center">
            <TitleComponent>HISTORY</TitleComponent>
            <dl className="flex flex-wrap justify-between">
                <HistoryElement historyAge="2021.03">プログラミングを始める</HistoryElement>
                <HistoryElement historyAge="2021.03">技育CAMPハッカソンvol1にてハッカソン初参加</HistoryElement>
                <HistoryElement historyAge="2021.05">CODEGYM Academy受講</HistoryElement>
                <HistoryElement historyAge="2021.11">フルスタックエンジニアとして長期インターン開始</HistoryElement>
                <HistoryElement historyAge="2022.04">学生団体Idea×Techに運営兼メンターとして加入</HistoryElement>
                <HistoryElement historyAge="2022.05">技育CAMPハッカソンvol2参加 努力賞受賞</HistoryElement>
                <HistoryElement historyAge="2022.06">CODEGYM Academyにて先輩チューター業務</HistoryElement>
                <HistoryElement historyAge="2022.09">技育展・CCCu-22参加 CCCu-22にてファイナリスト選出・企業賞受賞</HistoryElement>
                <HistoryElement historyAge="2022.11">技育CAMPハッカソンvol8参加 努力賞受賞</HistoryElement>
            </dl>
        </section>
    );
}