import { TitleComponent } from "../components/titleComponent";
import { HistoryElement } from "../components/historyElement";

import "../components/history.css"

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const HistorySection = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const navigate = useNavigate()
    const navigateHistoryAll = () => {
        navigate('/historyAll')
        setOpenMenu(!openMenu)
        window.scrollTo(0, 0)
    }

    const historyList = [
        {historyAge: "2021.03", historyContent: "プログラミングを始める", historyDescription: "技育祭に参加したことをきっかけにプログラミングを始める"},
        {historyAge: "2021.03", historyContent: "ハッカソン初参加", historyDescription: "技育祭でハッカソンの存在を知り参加する。このハッカソンの後からガッツリプログラミングをするようになる"},
        {historyAge: "2021.05", historyContent: "CODEGYM Academy受講", historyDescription: "周りのエンジニア学生との差を知り、技術を身につけるために受講する"},
        {historyAge: "2021.11", historyContent: "長期インターン開始", historyDescription: "より多くのスキルを得るためにフルスタックエンジニアとして長期インターンを開始。設計、ネットワーク、Chromeの拡張機能、Webフロントエンド、バックエンドなどの幅広いことを担当"},
        {historyAge: "2022.04", historyContent: "学生団体Idea×Techに運営兼メンターとして加入", historyDescription: "友人に誘われ、エンジニア学生団体であるIdea×TechにWebメンター兼運営として加入。団体の運営や企画などを担当"},
        {historyAge: "2022.05", historyContent: "技育CAMPハッカソンvol2参加　努力賞受賞", historyDescription: "MuscleOnlineというWebアプリを開発し、努力賞を受賞"},
        {historyAge: "2022.06", historyContent: "CODEGYM Academy先輩チューター業務", historyDescription: "CODEGYM Academyで先輩チューター業務を行う。人に教える難しさを知り、また自分自身が人に教えることが好きだと気付く"},
        {historyAge: "2022.09", historyContent: "技育展・CCCu-22参加　CCC-u22にてファイナリスト選出、企業賞受賞", historyDescription: "以前制作したMuscleOnlineをUnityで再制作。CCCu-22と技育展に出場し、CCCu-22ではファイナリストに選出され、企業賞を受賞"},
        {historyAge: "2022.11", historyContent: "技育CAMPハッカソンvol8　努力賞受賞", historyDescription: "GetoryというWebアプリを開発する。初めて1人でハッカソンに参加し、努力賞を受賞"},
    ]
    return (
        <section id="history-container" className="mt-24">
            <TitleComponent>HISTORY</TitleComponent>
            <dl className="flex flex-wrap justify-between mt-6">
                {historyList.map((history) => {
                    return (
                        <HistoryElement key={history.historyDescription} historyAge={history.historyAge} historyDescription={history.historyDescription}>{history.historyContent}</HistoryElement>
                    );
                })}
            </dl>
            <p onClick={() => {navigateHistoryAll()}} className="flex justify-end mt-8 text-zinc-400 cursor-pointer">すべて見る ＞</p>
        </section>
    );
}