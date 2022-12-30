type HistoryElementProps = {
    historyAge: string;
    children: string;
}

export const HistoryElement = (props: HistoryElementProps) => {
    const {historyAge, children} = props
    return(
        <>
            <dt className="text-right">{historyAge}</dt>
            <dd><p>{children}</p></dd>
        </>
    );
}