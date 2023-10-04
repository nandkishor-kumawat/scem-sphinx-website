import React from 'react'
import CardBox from './CardBox'
import { Box, Flex } from '@chakra-ui/react'

const Events = () => {

    const EVENTS = [
        {
            id: 1,
            name: 'EXPERT TALKS',
            url: '',
            image: ''
        },
        {
            id: 2,
            name: 'IDEATION COMPETITION',
            url: 'https://forms.gle/T25apLudVwVvGrBP9',
            image: 'ideation.jpeg'
        },
        {
            id: 3,
            name: 'CIVINNO CONCLAVE',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSfFC9DjvbMetzeWdSbbRAzYFntKCGALiZe5FiOpONONEplA-g/viewform?usp=sf_link',
            image: 'conclave.jpeg'
        },
        {
            id: 4,
            name: 'CONSTRUCTION EVENT',
            url: '',
            image: ''
        },
        {
            id: 5,
            name: 'FUN AND GAMES',
            url: 'https://forms.gle/V4G9zv8AnajDDbbd9',
            image: ''
        }
    ]



    return (
        <>
            <Box
                backgroundImage={'5528701.jpg'}
                backgroundSize={'cover'}
                p={5}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
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