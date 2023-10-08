import React from 'react'
import CardBox from './CardBox'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Events = () => {

    const EVENTS = [
        {
            id: 1,
            name: 'PANEL DISCUSSION',
            url: '',
            image: './panel.jpeg'
        },
        {
            id: 2,
            name: 'IDEATION COMPETITION',
            url: 'https://forms.gle/T25apLudVwVvGrBP9',
            image: './ideation.jpeg'
        },
        {
            id: 3,
            name: 'CIVINNO CONCLAVE',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSfFC9DjvbMetzeWdSbbRAzYFntKCGALiZe5FiOpONONEplA-g/viewform?usp=sf_link',
            image: './conclave.jpeg'
        },
        {
            id: 4,
            name: 'CONSTRUCTION EVENT',
            url: '',
            image: './construction.jpeg'
        },
        {
            id: 5,
            name: 'FUN AND GAMES',
            url: 'https://forms.gle/V4G9zv8AnajDDbbd9',
            image: './fun_game.jpeg'
        }
    ]



    return (
        <>
            <Box
                backgroundImage={'6.jpg'}
                backgroundSize={'cover'}
                p={10}
            >
                <Button
                    as={'a'}
                    colorScheme='pink'
                    href='../YANTRAKRITI Brochure.pdf'
                    m={5}
                >Event Broucher</Button>

                <Flex
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    gap={10}
                    flexWrap={'wrap'}
                    pos={'relative'}
                >
                    {EVENTS.map((value, key) => (
                        <CardBox key={key} {...value} />
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default Events