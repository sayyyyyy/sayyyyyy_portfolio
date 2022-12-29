type workElementProps = {
    workSrc: string;
    workTitle: string
}

export const WorkElement = (props: workElementProps) => {
    const { workSrc, workTitle } = props
    return ( 
    <div className="flex flex-col items-center">
        <img alt="work image" src={workSrc} className="w-64"></img>
        <p>{workTitle}</p>
    </div>
    );
}