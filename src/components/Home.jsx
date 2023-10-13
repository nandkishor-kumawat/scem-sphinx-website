import { Box, Button, Center, Container, Heading, Image, Text } from '@chakra-ui/react'
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
                height={'calc(100vmin)'}
                // aspectRatio={3.5}
                flex={1}
                backgroundImage={'./videos/51.gif'}
                backgroundSize={'cover'}
            >
                <Image src='scem.svg' alt='SCEM' width='100%' loading='lazy' />
            </Flex>


            <Box
                py={5}
                backgroundImage={'./videos/4.gif'}
                backgroundSize={'cover'}
                color={'white'}
            >
                <Container
                    maxW={1140}
                >

                    {/* About Section */}
                    <Box
                        my={5}
                    >
                        <Heading
                            as={'h1'}
                            fontSize={'4xl'}
                            fontFamily={'wity2'}
                            mb={2}
                        >
                            ABOUT
                        </Heading>

                        <Text
                            textAlign={'justify'}
                            maxW={'xl'}
                        >
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
                        <Text
                            maxW={'xl'}
                            textAlign={'justify'}
                        >
                            Welcome to YANTRAKRITI
                            2023, a place where
                            technical brilliance meets
                            creativity! A celebration of
                            innovation, wisdom and
                            cutting-edge technology,
                            YANTRAKRITI : Innovating
                            the World of Engineering.
                            Join us for a day jam-
                            packed with engaging
                            events designed for
                            engineering enthusiasts
                            across the board.
                        </Text>

                        <Button
                            as={Link}
                            to='/events'
                            colorScheme='orange'
                            color={'white'}
                            fontSize={'xl'}
                            my={2}
                        >Explore</Button>
                    </Box>

                    {/* Theme Section */}
                    <Box
                        my={5}
                    >
                        <Heading
                            as={'h1'}
                            fontSize={'4xl'}
                            fontFamily={'wity2'}
                        >
                            THEME:
                        </Heading>
                        <Heading
                            as={'h3'}
                            fontFamily={'wity2'}
                            mb={2}
                        >
                            Renaissance</Heading>
                        <Text
                            maxW={'xl'}
                            textAlign={'justify'}
                        >Join us at our technical fest, where we embrace the spirit of the Renaissance—a time of innovation, creativity, and exploration. Dive into the convergence of art and technology, witness cutting-edge advancements, and celebrate the reawakening of human ingenuity in the modern age.</Text>
                        {/* <Button
                        as={Link}
                        to='/events'
                        colorScheme='orange'
                        color={'white'}
                        fontSize={'xl'}
                        my={2}
                    >Explore</Button> */}
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
                </Container>

            </Box>

        </Box>
    )
}

export default Home