import { WorkElement } from "../components/workElement";
import { TitleComponent } from "../components/titleComponent";

import { useNavigate } from "react-router-dom";

export const WorkSection = () => {
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

    const navigate = useNavigate()

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
            <p onClick={() => {navigate('/workAll')}}>すべて見る</p>
        </section>
    );
}