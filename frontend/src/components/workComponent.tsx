import { WorkElement } from "./workElement";
import { TitleComponent } from "./titleComponent";

export const WorkComponent = () => {
    type WorkType = {
        workSrc: string;
        workTitle: string;
    }

    const workList = [
        {workSrc: "images/works/KnowledgeLibrary.png", workTitle: "Knowledge Library"},
        {workSrc: "images/works/MusicHouse.png", workTitle: "Music House"},
        {workSrc: "images/works/GameMatching.png", workTitle: "ゲームでマッチング"},
        {workSrc: "images/works/SpaceShuttle.png", workTitle: "Space Shuttle"},
        {workSrc: "images/works/Sugures.png", workTitle: "すぐレス"},
    ]

    return (
        <section id="work-container" className="h-screen flex flex-col justify-center">
            <TitleComponent>WORK</TitleComponent>
            <div className="grid grid-cols-3">
                {workList.map((work: WorkType) => {
                    return (
                        <WorkElement workSrc={work.workSrc} workTitle={work.workTitle}></WorkElement>
                    );
                })}
            </div>
            <p>すべて見る</p>
        </section>
    );
}