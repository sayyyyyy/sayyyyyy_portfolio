import { WorkElement } from "../components/workElement";
import { TitleComponent } from "../components/titleComponent";
import { useEffect, useState } from "react";
import { getSpreadSheetData } from "../scripts/getSpreadSheetData";

export const WorkAllPage = () => {
    const [allWorkList, setAllWorkList] = useState([])
    
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

    useEffect(() => {
        const request = {
            params: {
                operation: 'workAll'
            }
        }

        const getWorkData = async () => {
            setAllWorkList(await getSpreadSheetData(request))
        }
        
        getWorkData()
    }, []);

    return (
        <div className="relative top-24">
            <TitleComponent>WORK ALL</TitleComponent>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 mt-16">
                {allWorkList.map((work: WorkType) => {
                    return (
                        <WorkElement
                            key={work.workTitle}
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
        </div>
    );
}