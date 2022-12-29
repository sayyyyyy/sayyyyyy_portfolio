
export const HeaderComponent = () => {
    return (
        <header className="flex fixed bg-zinc-300 w-screen justify-between">
            <a href="#skill-container"><p>SKILL</p></a>
            <a href="#work-container"><p>WORK</p></a>
            <a href="#home-container"><img alt="usericon" src="images/sayy.png" className="w-16 h-16 rounded-full"></img></a>
            <a href="#history-container"><p>HISTORY</p></a>
            <a href="#sns-container"><p>SNS</p></a>
        </header>
    );
}