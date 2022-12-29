import { WorkElement } from "./workElement";

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
            <h2>WORK</h2>
            <div className="">
                {workList.map((work: WorkType) => {
                    return (
                        <WorkElement workSrc={work.workSrc} workTitle={work.workTitle}></WorkElement>
                    );
                })}
            </div>
            
        </div>
    );
}