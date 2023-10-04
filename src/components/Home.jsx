import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Box>
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                width={'100%'}
                height={'calc(100vh - 48px)'}
                flex={1}
                backgroundImage={'3286718.jpg'}
            >
                <Image src='scem.png' alt='SCEM' width='100%' height='100%' />
            </Flex>

            <Box
                px={5}
            >

                {/* About Section */}
                <Box
                    marginY={5}
                    backgroundImage={'5375775.jpg'}
                >
                    <Heading
                        as={'h1'}
                        fontSize={'4xl'}
                        fontFamily={'wity2'}
                        mb={2}
                    >
                        ABOUT
                    </Heading>
                    <Text>
                        The Society of Civil Engineers MNIT (SCEM) is a dedicated departmental club at MNIT for civil engineering students. SCEM organizes seminars, workshops, and events, fostering a close-knit community of like-minded individuals passionate about civil engineering. It offers opportunities for professional development, networking, and personal growth, making it an essential part of the civil engineering department's ecosystem.
                    </Text>
                </Box>

                {/* Event Section */}
                <Box
                    my={5}
                >
                    <Heading
                        as={'h1'}
                        fontSize={'4xl'}
                        fontFamily={'wity2'}
                        mb={2}
                    >
                        EVENTS
                    </Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi corporis blanditiis veritatis nesciunt, quisquam modi debitis ipsam. Maiores ducimus numquam reprehenderit excepturi quibusdam debitis culpa totam vitae doloremque quasi fugiat sunt iusto, quo officia a eaque libero vel delectus! Cum vero odit architecto molestias voluptates asperiores odio esse. Quia qui pariatur hic, ipsum velit aperiam quos, amet aliquid optio, corporis eos non quam! </Text>

                    <Button
                        as={Link}
                        to='/events'
                        colorScheme='orange'
                        color={'white'}
                        fontSize={'xl'}
                        my={2}
                    >Explore</Button>
                </Box>

                <Box
                    mt={5}
                >
                    <Heading as={'h1'} fontSize={'4xl'} fontFamily={'wity2'}>Quick Links</Heading>
                    <Flex
                        py={5}
                        flexWrap={'wrap'}
                        align={'center'}
                        justifyContent={'center'}
                        gap={10}
                    >
                        <Link to='/events'>Events</Link>
                        <Link to='/schedule'>Schedule</Link>
                        <Link to='/about-us'>About Us</Link>

                    </Flex>
                </Box>
            </Box>

        </Box>
    )
}

export default Home