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
                <h3 className="font-bold md:text-xl lg:text2xl">{children}</h3>
                <p className="md:text-lg lg:text-xl">{historyDescription}</p>
            </dd>
        </>
    );
}