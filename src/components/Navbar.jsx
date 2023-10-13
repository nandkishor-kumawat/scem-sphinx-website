import { Button, Hide, IconButton, Menu, MenuButton, MenuItem, MenuList, Show } from '@chakra-ui/react';
import React from 'react'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {

    const navigate = useNavigate()


    return (
        <header className="text-gray-600 body-font sticky top-0  z-10 " style={{ backgroundColor: 'rgb(0 0 0 / 85%)' }}>
            <div className="w-full flex px-4 py-2 items-center justify-between">
                <Link to="/" className="text-2xl title-font font-medium items-center text-white" style={{letterSpacing: '5px'}}>SCEM</Link>

                <Hide below='540px'>
                    <div className='flex items-center gap-4 px-3'>
                        {/* <Link className={`hover:text-[#4FA4F4] ${useMatch('/') ? 'border-b-2 border-[#4FA4F4]' : ''} text-white`} to="/">Home</Link> */}
                        <Link className={`hover:text-[#4FA4F4] ${useMatch('/') ? 'border-b-2 border-[#4FA4F4]' : ''} text-white font-bold`} to="/">SCEM</Link>
                        <Link className={`hover:text-[#4FA4F4] ${useMatch('/events') ? 'border-b-2 border-[#4FA4F4]' : ''} text-white font-bold`} to="/events">Events</Link>
                        <Link className={`hover:text-[#4FA4F4] ${useMatch('/schedule') ? 'border-b-2 border-[#4FA4F4]' : ''} text-white font-bold`} to="/schedule">Schedule</Link>
                        <Link className={`hover:text-[#4FA4F4] ${useMatch('/about-us') ? 'border-b-2 border-[#4FA4F4]' : ''} text-white font-bold`} to="/about-us">About Us</Link>
                    </div>
                </Hide>

                <Show below='540px'>
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<GiHamburgerMenu />}
                                    variant='outline'
                                    size={'sm'}
                                    // bg={isOpen? 'black' : 'white'}
                                    bg={'white'}

                                />
                                <MenuList bg={'white'} px={2}>
                                    <MenuItem as={Link} to="/">SCEM</MenuItem>
                                    <MenuItem as={Link} to="/events">Event</MenuItem>
                                    <MenuItem as={Link} to="/schedule">Schedule</MenuItem>
                                    <MenuItem as={Link} to="/about-us">About Us</MenuItem>
                                </MenuList>
                            </>)}
                    </Menu>
                </Show>
            </div>
        </header>
    )
}

export default Navbar;