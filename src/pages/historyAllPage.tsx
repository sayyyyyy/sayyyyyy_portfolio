import "../components/history.css"

import { HistoryElement } from "../components/historyElement"
import { TitleComponent } from "../components/titleComponent"

export const HistoryAllPage = () => {
    const history2021 = [
        {historyAge: "2021.03", historyContent: "プログラミングを始める", historyDescription: "技育祭に参加したことをきっかけにプログラミングを始める"},
        {historyAge: "2021.03", historyContent: "ハッカソン初参加", historyDescription: "技育祭でハッカソンの存在を知り参加する。このハッカソンの後からガッツリプログラミングをするようになる"},
        {historyAge: "2021.05", historyContent: "CODEGYM Academy受講", historyDescription: "周りのエンジニア学生との差を知り、技術を身につけるために受講する"},
        {historyAge: "2021.10", historyContent: "HackU Meijo参加", historyDescription: "CODEGYM Academyの受講が修了し、力試しとして参加。SpaceShuttleというアプリを開発"},
        {historyAge: "2021.11", historyContent: "長期インターン開始", historyDescription: "より多くのスキルを得るためにフルスタックエンジニアとして長期インターンを開始。設計、ネットワーク、Chromeの拡張機能、Webフロントエンド、バックエンドなどの幅広いことを担当"}
    ]

    const history2022 = [
        {historyAge: "2022.04", historyContent: "学生団体Idea×Techに加入", historyDescription: "友人に誘われ、エンジニア学生団体であるIdea×TechにWebメンター兼運営として加入。団体の運営や企画などを担当"},
        {historyAge: "2022.05", historyContent: "技育CAMPハッカソンvol2参加　努力賞受賞", historyDescription: "MuscleOnlineというWebアプリを開発し、努力賞を受賞"},
        {historyAge: "2022.06", historyContent: "CODEGYM Academy先輩チューター業務", historyDescription: "CODEGYM Academyで先輩チューター業務を行う。人に教える難しさを知り、また自分自身が人に教えることが好きだと気付く"},
        {historyAge: "2022.07", historyContent: "大学の講義で後輩向けに登壇", historyDescription: "大学のキャリアアップ講座という講義で約150名ほどにむけて話す。ここから積極的に話す役をやるようになる"},
        {historyAge: "2022.09", historyContent: "技育展・CCCu-22参加　CCC-u22にてファイナリスト選出、企業賞受賞", historyDescription: "以前制作したMuscleOnlineをUnityで再制作。CCCu-22と技育展に出場し、CCCu-22ではファイナリストに選出され、企業賞を受賞"},
        {historyAge: "2022.10", historyContent: "JPHACKS参加", historyDescription: "YOULINKというWebアプリを開発"},
        {historyAge: "2022.11", historyContent: "XRCreativeAward参加", historyDescription: "Fillinというスマホアプリを開発"},
        {historyAge: "2022.11", historyContent: "技育CAMPハッカソンvol8　努力賞受賞", historyDescription: "GetoryというWebアプリを開発する。初めて1人でハッカソンに参加し、努力賞を受賞"},
        {historyAge: "2022.12", historyContent: "HackU Meijo参加", historyDescription: "つなぐまというWebアプリを開発"},
        {historyAge: "2022.12", historyContent: "WithARハッカソン参加", historyDescription: "areal-Airrealというスマホアプリを開発"},
    ]

    const history2023 = [
        {historyAge: "2023.01", historyContent: "Webサービス開発者の会 登壇", historyDescription: "さくらのマイクロコミュニティ （Webサービス開発者の会） #5にて登壇"},
        {historyAge: "2023.01", historyContent: "インプット・アウトプットどうしてる? 登壇", historyDescription: "【LT会】インプット・アウトプットどうしてる? in 名古屋にて登壇"},
        {historyAge: "2023.01", historyContent: "長期インターン始めようぜ会　企画", historyDescription: "東海圏の学生エンジニア向けに長期インターン始めようぜ会を企画、運営全て1人で担当"},
    ]

    // データの取得
    // const 

    const historyAll = [...history2021, ...history2022, ...history2023]
    return (
        <div className="relative top-24">
            <TitleComponent>History All</TitleComponent>
            <dl className="flex flex-wrap justify-between mt-4">
                {historyAll.map((history) => {
                    return (
                        <HistoryElement key={history.historyDescription} historyAge={history.historyAge} historyDescription={history.historyDescription}>{history.historyContent}</HistoryElement>
                    );
                })}
            </dl>
        </div>
    );
}