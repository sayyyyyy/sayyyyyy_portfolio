type TitleComponentProps = {
    children: string;
}
export const TitleComponent = (props: TitleComponentProps) => {
    const { children } = props
    return (
        <div className="pt-24">
            <h2 className="bg-zinc-300 w-screen h-12 text-2xl flex justify-center items-center">{children}</h2>
        </div>
    );
}