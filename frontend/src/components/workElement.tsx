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
    const { workSrc, workTitle } = props

    return (
        <Link to="/workDetail" state={{workSrc:workSrc, workTitle:workTitle, workOverview:"説明", workObsession:"こだわり"}}>
            <div className="flex flex-col items-center">
                <img alt="work image" src={workSrc} className="w-64"></img>
                <p>{workTitle}</p>
            </div>
        </Link>

    );
}