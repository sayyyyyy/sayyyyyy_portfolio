import { WorkElement } from "./workElement";
import { TitleComponent } from "./titleComponent";

export const WorkComponent = () => {
    type WorkType = {
        workSrc: string;
        workTitle: string;
    }
    const workList = [
        {workSrc: "images/KnowledgeLibrary.png", workTitle: "Knowledge Library"},

    ]
    return (
        <div className="h-screen">
            <TitleComponent>WORK</TitleComponent>
            <div className="grid">
                {workList.map((work: WorkType) => {
                    return (
                        <WorkElement workSrc={work.workSrc} workTitle={work.workTitle}></WorkElement>
                    );
                })}
            </div>
            
        </div>
    );
}