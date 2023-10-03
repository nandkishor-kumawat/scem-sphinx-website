import React from 'react'
import CardBox from './CardBox'
import { Flex } from '@chakra-ui/react'

const Events = () => {

    const EVENTS = [
        {
            id: 1,
            name: 'EXPERT TALKS',
            url: 'https://forms.gle/4r1JfQh4B9v3k1Wk7',
            image: ''
        },
        {
            id: 2,
            name: 'IDEATION COMPETITION',
            url: 'https://forms.gle/T25apLudVwVvGrBP9',
            image: ''
        },
        {
            id: 3,
            name: 'CIVINNO CONCLAVE',
            url: 'https://forms.gle/4r1JfQh4B9v3k1Wk7',
            image: ''
        },
        {
            id: 4,
            name: 'CONSTRUCTION EVENT',
            url: 'https://forms.gle/4r1JfQh4B9v3k1Wk7',
            image: ''
        },
        {
            id: 5,
            name: 'FUN AND GAMES',
            url: 'https://forms.gle/4r1JfQh4B9v3k1Wk7',
            image: ''
        }
    ]



    return (
        <>
            <div>Events</div>
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                gap={10}
                flexWrap={'wrap'}
            >
                {Object.entries(EVENTS).map(([key, value]) => (
                    <CardBox key={key} {...value} />
                ))}
            </Flex>
        </>
    )
}

export default Events