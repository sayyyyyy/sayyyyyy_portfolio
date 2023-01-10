import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React, { useState } from 'react';

export const HeaderComponent = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="flex md:grid md:grid-cols-7 fixed bg-zinc-400 w-screen justify-items-center items-center p-4 z-10 text-xl">
            <span className=""></span>
            <HashLink smooth to="/#skill-container"><p className="cursor-pointer hidden md:block">SKILL</p></HashLink>
            <HashLink smooth to="/#work-container"><p className="cursor-pointer hidden md:block">WORK</p></HashLink>
            <HashLink smooth to="/#home-container"><img alt="usericon" src="images/sayy.png" className="w-12 md:w-16 h-12 md:h-16 rounded-full cursor-pointer"></img></HashLink>
            <HashLink smooth to="/#history-container"><p className="cursor-pointer hidden md:block">HISTORY</p></HashLink>
            <HashLink smooth to="/#sns-container"><p className="cursor-pointer hidden md:block">SNS</p></HashLink>

            <img onClick={menuFunction} src="images/menu.png" className="w-8 ml-auto md:hidden"></img>
            {openMenu ? (
                <div className="w-screen absolute left-0 top-20 text-2xl bg-zinc-200 md:hidden">
                    <HashLink smooth to="/#skill-container"><p className="cursor-pointer leading-10">SKILL</p></HashLink>
                    <HashLink smooth to="/#work-container"><p className="cursor-pointer leading-10">WORK</p></HashLink>
                    <HashLink smooth to="/#history-container"><p className="cursor-pointer leading-10">HISTORY</p></HashLink>
                    <HashLink smooth to="/#sns-container"><p className="cursor-pointer leading-10">SNS</p></HashLink>
                </div>
            ): undefined}
        </header>
    );
}