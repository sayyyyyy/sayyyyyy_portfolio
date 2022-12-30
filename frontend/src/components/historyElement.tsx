type HistoryElementProps = {
    historyAge: string;
    historyDescription: string;
    children: string;
}

export const HistoryElement = (props: HistoryElementProps) => {
    const {historyAge, historyDescription, children} = props
    return(
        <>
            <dt className="text-right">{historyAge}</dt>
            <dd>
                <h3>{children}</h3>
                <p>{historyDescription}</p>
            </dd>
        </>
    );
}