import { WorkElement } from "../components/workElement";
import { TitleComponent } from "../components/titleComponent";

import { useNavigate } from "react-router-dom";

export const WorkSection = () => {
    type WorkType = {
        workSrc: string;
        workTitle: string
        workOverview: string;
        workObsession: string; 
        workSkill: Array<string>;
        workPeriod: string, 
        workLink: string, 
        githubLink: string, 
        workNumOfPeople: number,
        workResponsibilty: string
    }

    const workList = [
        {
            workSrc: "images/works/KnowledgeLibrary.png", 
            workTitle: "Knowledge Library", 
            workOverview: "ブックマークの拡張版を目指したWebアプリ", 
            workObsession: "極力手間を省くように、URLを入力したらスクレイピングでタイトルを自動で取得できるようにしました。", 
            workSkill: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"], 
            workPeriod: "1ヶ月", 
            workLink: "https://knowledge-library.azurewebsites.net/", 
            githubLink: "https://github.com/sayyyyyy/knowledge_library", 
            workNumOfPeople: 1, 
            workResponsibilty: "すべて"
        },
        {
            workSrc: "images/works/Sugures.png", 
            workTitle: "すぐレス", 
            workOverview: "様々な条件から最寄りの飲食店を検索できます。", 
            workObsession: "競合サービスがいくつかあるためシンプルさを売りにし、できるだけ簡単に探せるようにしました。食欲増進のためのオレンジをメインカラーとしてとして利用しました。", 
            workSkill: ["HTML", "CSS", "JavaScript", "Python", "Flask", "ホットペッパーグルメリサーチAPI", "Heroku"], 
            workPeriod: "2週間", 
            workLink: "https://sugures.herokuapp.com/", 
            githubLink: "https://github.com/sayyyyyy/sugures", 
            workNumOfPeople: 1,
            workResponsibilty: "すべて"
        },
        {
            workSrc: "images/works/MuscleOnlineUnity.png", 
            workTitle: "Muscle Online Unity版", 
            workOverview: "他のユーザーと楽しく筋トレを行うサービス", 
            workObsession: "スマホ1台で楽しむことが可能で、1人ではなく様々な人と競いながら楽しく筋トレを行うことができる。", 
            workSkill: ["Unity", "FireStore", "Figma", "Adobe Photoshop", "Cascadeur", "blender", "Cubase"], 
            workPeriod: "3ヶ月", 
            workLink: "", 
            githubLink: "https://github.com/sayyyyyy/MuscleOnline-ccc2022", 
            workNumOfPeople: 6,
            workResponsibilty: "Unityでの機能作成、データベース処理、Photonを利用したマルチゲーム化"
        },
        {
            workSrc: "images/works/Getory.png", 
            workTitle: "Getory", 
            workOverview: "言語ごとのリポジトリやランダムなリポジトリを簡単に発見できるサービス", 
            workObsession: "様々な人に使ってもらえるように多言語対応、ダークモード切り替えを実装", 
            workSkill: ["TailwindCSS", "TypeScript", "Vue.js", "Nuxt.js", "docker", "GitHub API", "Netlify"], 
            workPeriod: "1週間", 
            workLink: "https://getory.netlify.app/", 
            githubLink: "https://github.com/sayyyyyy/Getory", 
            workNumOfPeople: 1,
            workResponsibilty: "すべて"
        },
        {
            workSrc: "images/works/arealAirreal.png", 
            workTitle: "areal-AirReal", 
            workOverview: "空中に絵を描いて写真にできるサービス。他の人のも見ることができる。", 
            workObsession: "", 
            workSkill: ["Unity", "FireStore", "Firebase Storage", "Adobe XD", "Geospatial API"], 
            workPeriod: "2週間", 
            workLink: "", 
            githubLink: "", 
            workNumOfPeople: 6,
            workResponsibilty: "写真データの保存から表示"
        },
    ]

    const navigate = useNavigate()

    return (
        <section id="work-container" className="mt-24">
            <TitleComponent>WORK</TitleComponent>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 mt-16">
                {workList.map((work: WorkType) => {
                    return (
                        <WorkElement 
                            workSrc={work.workSrc} 
                            workTitle={work.workTitle} 
                            workOverview={work.workOverview} 
                            workObsession={work.workObsession} 
                            workSkill={work.workSkill} 
                            workPeriod={work.workPeriod} 
                            workLink={work.workLink} 
                            githubLink={work.githubLink} 
                            workNumOfPeople={work.workNumOfPeople} 
                            workResponsibilty={work.workResponsibilty} 
                        />
                    );
                })}
            </div>
            <p onClick={() => {navigate('/workAll')}} className="flex justify-end mt-8 text-zinc-400">すべて見る ＞</p>
        </section>
    );
}