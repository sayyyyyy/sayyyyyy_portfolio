import { WorkElement } from "../components/workElement";
import { TitleComponent } from "../components/titleComponent";

export const WorkAllPage = () => {
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


    const allWorkList = [
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
            workSrc: "images/works/MusicHouse.png", 
            workTitle: "Music House", 
            workOverview: "普通の家に見えるけれど、実は… 家の中に音楽の要素が散りばめられているwebサイトです。", 
            workObsession: "プログラミングを始めて１ヶ月もたたないうちに制作したので技術よりもわかりやすいデザインを意識して制作しました", 
            workSkill: ["HTML", "CSS", "JavaScript", "Heroku"], 
            workPeriod: "1週間", 
            workLink: "", 
            githubLink: "https://github.com/sayyyyyy/hackthon_vol1", 
            workNumOfPeople: 3,
            workResponsibilty: "電卓部分の作成。ゴミ箱部分の作成"
        },
        {
            workSrc: "images/works/GameMatching.png", 
            workTitle: "ゲームでマッチング", 
            workOverview: "ゲーム好きのためのマッチングアプリです。 ゲームとレベルでユーザを検索でき、フォローを通じてつながることができます。個人でトークができ、またグループも作成できます。", 
            workObsession: "WebSocketを利用してリアルタイムでメッセージが送信されるようにしました。", 
            workSkill: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Docker", "WebSocket", "MySQL"], 
            workPeriod: "1ヶ月", 
            workLink: "", 
            githubLink: "https://github.com/sayyyyyy/matching-in-the-game", 
            workNumOfPeople: 4,
            workResponsibilty: "電卓部分の作成。ゴミ箱部分の作成"
        },
        {
            workSrc: "images/works/SpaceShuttle.png", 
            workTitle: "Space Shuttle", 
            workOverview: "Spaceshuttleは，みんなで同じ動画を見るアプリです．アバターを使用することで，リビングのような気楽さのまま，大人数でわいわいと見る「リビング感」を味わうことができます．", 
            workObsession: "従来のアプリだとテキストで感情を共有することが多いですが、それだと手間なためアバターを利用して映像に集中できるようにしました。", 
            workSkill: ["HTML", "CSS", "JavaScript", "React", "MaterialUI", "clmtrackr.js", "Firebase", "SkyWay", "Live2D"], 
            workPeriod: "1ヶ月", 
            workLink: "", 
            githubLink: "https://github.com/sayyyyyy/Spaceshuttle", 
            workNumOfPeople: 6,
            workResponsibilty: "チームリーダー、SkyWayを利用した動画共有部分の作成"
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
            workSrc: "images/works/MuscleOnlineWeb.png", 
            workTitle: "Muscle Online Web版", 
            workOverview: "他のユーザーと楽しく筋トレを行うサービス", 
            workObsession: "スマホ1台で楽しむことが可能で、1人ではなく様々な人と競いながら楽しく筋トレを行うことができる。", 
            workSkill: ["HTML", "CSS", "JavaScript", "React", "Python", "Flask", "Posenet", "JWT", "WebSocket", "Celery", "Redis", "MySQL", "Docker"], 
            workPeriod: "2週間", 
            workLink: "", 
            githubLink: "https://github.com/sayyyyyy/Muscle-Online", 
            workNumOfPeople: 3,
            workResponsibilty: "バックエンド、非同期処理"
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
            workSrc: "images/works/Youlink.png", 
            workTitle: "YOULINK", 
            workOverview: "学生エンジニア、デザイナーと気軽に交流でき、繋がりを作れるサービス。 募集者がタイトル・タグ・説明などを記入し、募集をかける。それを見たユーザーが日程を選択し、話す日を待つ。それだけでつながりを作ることができます。", 
            workObsession: "日程を募集者にあらかじめ記入してもらうことで日程調節をできるかぎり簡潔にした", 
            workSkill: ["HTML", "CSS", "Sass", "Typecript", "Vue.js", "Vite", "Firebase", "Twitter API", "GitHub API", "Docker", "GitHub Actions"], 
            workPeriod: "1ヶ月", 
            workLink: "https://youlink-bf71e.web.app/top", 
            githubLink: "https://github.com/sayyyyyy/youlink", 
            workNumOfPeople: 4,
            workResponsibilty: "DB連携処理"
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
            workSrc: "images/works/Tsunaguma.png", 
            workTitle: "つなぐま", 
            workOverview: "いらないものを気軽に取引できるサービス", 
            workObsession: "繋がりを同大学に限定することで安心で気軽に取引できる", 
            workSkill: ["HTML", "CSS", "TypeScript", "Vue.js", "Nuxt.js", "Ruby", "Ruby on rails", "MySQL", "Docker"], 
            workPeriod: "1ヶ月", 
            workLink: "", 
            githubLink: "https://github.com/sayyyyyy/Tsunaguma", 
            workNumOfPeople: 6,
            workResponsibilty: "全体的なサポート"
        },
        {
            workSrc: "images/works/Fillin.png", 
            workTitle: "Fillin", 
            workOverview: "カップラーメンの待ち時間が楽しくなるアプリ", 
            workObsession: "", 
            workSkill: ["Unity", "FireStore"], 
            workPeriod: "2週間", 
            workLink: "", 
            githubLink: "", 
            workNumOfPeople: 4,
            workResponsibilty: "ブロックの変更処理、ブロックの保存、出現処理"
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

    return (
        <>
            <TitleComponent>WORK</TitleComponent>
            <div className="grid grid-cols-3">
                {allWorkList.map((work: WorkType) => {
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
        </>
    );
}