import { WorkElement } from "../components/workElement";
import { TitleComponent } from "../components/titleComponent";

export const WorkAll = () => {
    type WorkType = {
        workSrc: string;
        workTitle: string;
    }

    const allWorkList = [
        {workSrc: "images/works/KnowledgeLibrary.png", workTitle: "Knowledge Library"},
        {workSrc: "images/works/MusicHouse.png", workTitle: "Music House"},
        {workSrc: "images/works/GameMatching.png", workTitle: "ゲームでマッチング"},
        {workSrc: "images/works/SpaceShuttle.png", workTitle: "Space Shuttle"},
        {workSrc: "images/works/Sugures.png", workTitle: "すぐレス"},
    ]

    return (
        <>
            <TitleComponent>WORK</TitleComponent>
            <div className="grid grid-cols-3">
                {allWorkList.map((work: WorkType) => {
                    return (
                        <WorkElement workSrc={work.workSrc} workTitle={work.workTitle}></WorkElement>
                    );
                })}
            </div>
        </>
    );
}