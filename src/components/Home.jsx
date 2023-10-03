import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Box
            paddingX={5}
        >
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                width={'100%'}
                height={'calc(100vh - 50px)'}
                flex={1}
                fontSize={'6rem'}
            >
                <Text>YANTRAKRITI</Text>
            </Flex>

            {/* About Section */}
            <Box
                marginY={5}
            >
                <Heading
                    as={'h1'}
                    fontSize={'4xl'}
                    fontFamily={'wity2'}
                    mb={2}
                >
                    ABOUT
                </Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate assumenda eaque? Voluptatem labore eveniet, eos natus commodi sint. Mollitia velit, quod quibusdam, aperiam explicabo voluptate recusandae, ipsam ratione aliquam doloribus dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum, impedit, hic voluptate optio nobis dolore in mollitia fugiat quasi perferendis, tenetur reiciendis cumque maxime expedita explicabo cupiditate et unde. </Text>
            </Box>

            {/* Event Section */}
            <Box
                marginY={5}
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
                    background={'orange.400'}
                    color={'white'}
                    fontSize={'xl'}
                    my={2}
                >Explore</Button>
            </Box>

            <Box
                my={5}
            >
                <Heading as={'h1'} fontSize={'4xl'} fontFamily={'wity2'} mb={2}>Quick Links</Heading>
                <Flex
                    my={5}
                    flexWrap={'wrap'}
                    align={'center'}
                    justifyContent={'center'}
                    gap={10}
                >
                    <Link to='/events'>Events</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/events'>Events</Link>
                </Flex>
            </Box>

        </Box>
    )
}

export default Home