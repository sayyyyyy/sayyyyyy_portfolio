type workElementProps = {
    workSrc: string;
    workTitle: string
}

export const WorkElement = (props: workElementProps) => {
    const { workSrc, workTitle } = props
    return ( 
    <div>
        <img alt="workelement" src={workSrc}></img>
        <p>{workTitle}</p>
    </div>
    );
}