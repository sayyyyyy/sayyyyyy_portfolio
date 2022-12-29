type TitleComponentProps = {
    children: string;
}
export const TitleComponent = (props: TitleComponentProps) => {
    const { children } = props
    return (
        <h2 className="bg-zinc-300 w-screen align-center">{children}</h2>
    );
}