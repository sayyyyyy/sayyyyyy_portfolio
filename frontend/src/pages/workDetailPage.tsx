import { useLocation } from "react-router-dom";

type WorkDetailProps = {
    workSrc: string;
    workTitle: string;
    workOverview: string;
    workObsession: string;
}

export const WorkDetail = () => {
    const location = useLocation()

    const {workSrc, workTitle, workOverview, workObsession} = location.state
    return (
        <div>
            <h1>{workTitle}</h1>
            <img alt="work image" src={workSrc}></img>
            <p>{workOverview}</p>
            <p>{workObsession}</p>
        </div>
    );
}