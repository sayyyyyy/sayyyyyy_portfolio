import { useNavigate } from "react-router-dom";
import React from 'react';

export const HeaderComponent = () => {

    return (
        <header className="grid grid-cols-5 md:grid-cols-7 fixed bg-zinc-400 w-screen justify-items-center items-center p-4 z-10 text-md md:text-xl">
            <span className="hidden md:block"></span>
            <a href="/#skill-container"><p className="cursor-pointer">SKILL</p></a>
            <a href="/#work-container"><p className="cursor-pointer">WORK</p></a>
            <a href="/#home-container"><img alt="usericon" src="images/sayy.png" className="w-12 md:w-16 h-12 md:h-16 rounded-full cursor-pointer"></img></a>
            <a href="/#history-container"><p className="cursor-pointer">HISTORY</p></a>
            <a href="/#sns-container"><p className="cursor-pointer">SNS</p></a>
        </header>
    );
}