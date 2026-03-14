import { WorkElement } from "../components/workElement";
import { TitleComponent } from "../components/titleComponent";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import workList from '../data/workData.json';

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
                {workList.filter((w) => w.isPickup).map((work: WorkType) => {
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
            <p onClick={() => { navigateWorkAll() }} className="flex justify-end mt-8 text-zinc-400 cursor-pointer">すべて見る ＞</p>
        </section>
    );
}