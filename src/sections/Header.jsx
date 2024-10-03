import clsx from 'clsx';
import React, { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

const Navlink = ({ title }) => {
    return (
        <LinkScroll className='base-bold text-p4 uppercase transition-colors duration-500 hover:text-p1 cursor-pointer max-lg:my-4 max-lg:h5'>
            {title}
        </LinkScroll>
    )
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='fixed top-0 left-0 z-50 w-full py-10'>
            <div className='container flex h-14 items-center max-lg:px-5'>
                {/* Logo is hidden for deskop */}
                <a className='lg:hidden flex-1'>
                    <img src="/images/xora.svg" alt="logo" width={115} height={55} />
                </a>
                <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ?
                    // opacity-100 makes the sidebar visible on mobile
                    "max-lg:opacity-100" :
                    // pointer-events-none disables the click event on the element
                    "max-lg:pointer-events-none")}>
                    <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before-max-md:px-4'>
                        <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                            <ul className='flex max-lg:block max-lg:px-12'>
                                <li className='nav-li'>
                                    <Navlink title="features" />
                                    <div className='dot' />
                                    <Navlink title="pricing" />
                                </li>
                                <li className='nav-logo'>
                                    <LinkScroll
                                        to="hero"
                                        smooth={true}
                                        offset={-100}
                                        className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")}>
                                        <img src="/images/xora.svg" width={160} height={55} alt="logo" />
                                    </LinkScroll>
                                </li>
                                <li className='nav-li'>
                                    <Navlink title="faq" />
                                    <div className='dot' />
                                    <Navlink title="download" />
                                </li>
                            </ul>
                        </nav>
                        <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
                            <img src="/images/bg-outlines.svg" width={960} height={380} alt='outline1' className='relative z-2' />
                            <img src="/images/bg-outlines-fill.png" width={960} height={380} alt='outline2' className='absolute inset-0 mix-blend-soft-light opacity-5' />
                        </div>

                    </div>
                </div>
                <button className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center' onClick={
                    () => setIsOpen(
                        (prevState) => !prevState)
                }>
                    <img src={`/images/${isOpen ? 'close' : 'magic'}.svg`} className='size-1/2 object-contain' />
                </button>
            </div>
        </header>
    );
}

export default Header;