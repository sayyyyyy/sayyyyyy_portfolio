import { WorkElement } from "../components/workElement";
import { TitleComponent } from "../components/titleComponent";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSpreadSheetData } from "../scripts/getSpreadSheetData";

export const WorkSection = () => {
    const [workList, setWorkList] = useState([])

    type WorkType = {
        workImage: string;
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
                operation: 'work'
            }
        }

        const getWorkData = async () => {
            setWorkList(await getSpreadSheetData(request))
        }
        
        getWorkData()
    }, []);

    const [openMenu, setOpenMenu] = useState(false);

    const navigate = useNavigate()
    const navigateWorkAll = () => {
        navigate('/workAll')
        window.scrollTo(0, 0)
        setOpenMenu(!openMenu);
    }

    return (
        <section id="work-container">
            <TitleComponent>WORK</TitleComponent>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 mt-16">
                {workList.map((work: WorkType) => {
                    return (
                        <WorkElement
                            key={work.workTitle} 
                            workImage={work.workImage} 
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
            <p onClick={() => {navigateWorkAll()}} className="flex justify-end mt-8 text-zinc-400 cursor-pointer">すべて見る ＞</p>
        </section>
    );
}