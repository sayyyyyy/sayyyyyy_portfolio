type TitleComponentProps = {
    children: string;
}
export const TitleComponent = (props: TitleComponentProps) => {
    const { children } = props
    return (
        <h2>{children}</h2>
    );
}