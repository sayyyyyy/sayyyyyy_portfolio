import { Link } from "react-router-dom";


type workElementProps = {
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

export const WorkElement = (props: workElementProps) => {
    const { workSrc, workTitle, workOverview, workObsession, workSkill, workPeriod, workLink, githubLink, workNumOfPeople, workResponsibilty } = props

    return (
        <Link to="/workDetail" state={{
            workSrc:workSrc, 
            workTitle:workTitle, 
            workOverview:workOverview, 
            workObsession:workObsession,
            workSkill:workSkill,
            workPeriod:workPeriod,
            workLink:workLink,
            githubLink:githubLink,
            workNumOfPeople:workNumOfPeople,
            workResponsibilty: workResponsibilty
        }}>
            <div className="flex flex-col items-center m-5">
                <img alt="work image" src={workSrc} className="h-64"></img>
                <p className="bg-zinc-300">{workTitle}</p>
            </div>
        </Link>

    );
}