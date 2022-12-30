import { useNavigate } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';
import React from 'react';

export const HeaderComponent = () => {
    const navigate = useNavigate()

    const ref = React.createRef<HTMLDivElement>()
    const scrollToBottomOfList = React.useCallback(() => {
        ref!.current!.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [ ref ])
      
    const navigateTo = (id: string) => {
        navigate('/')
    }

    return (
        <header className="flex fixed bg-zinc-400 w-screen justify-between">
            <a href="#skill-container"><p>SKILL</p></a>
            <a href="#work-container"><p>WORK</p></a>
            <a href="#home-container"><img alt="usericon" src="images/sayy.png" className="w-16 h-16 rounded-full"></img></a>
            <a href="#history-container"><p>HISTORY</p></a>
            <a href="#sns-container"><p>SNS</p></a>
        </header>
    );
}