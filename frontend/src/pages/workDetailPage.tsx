
type WorkDetailProps = {
    workSrc: string;
    workTitle: string;
    workOverview: string;
    workObsession: string;
}

export const WorkDetail = (props: WorkDetailProps) => {
    const {workSrc, workTitle, workOverview, workObsession} = props
    return (
        <div>
            <h1>{workTitle}</h1>
            <img alt="work image" src={workSrc}></img>
            <p>{workOverview}</p>
            <p>{workObsession}</p>
        </div>
    );
}