import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Profile = ({ src, name, position }) => {
    return (
        <Flex
            alignItems={'center'}
            direction={'column'}
        >
        <Flex
            alignItems={'center'}
            direction={'column'}
            width={200}
            aspectRatio={1}
            overflow={'hidden'}
            cursor={'pointer'}
            borderRadius={28}
            border={'3px solid #e350e17a'}
        >
            <Image
                src={src}
                // width={200}
                // aspectRatio={1}
                objectFit={'contain'}
                bg={'#d8d9db'}
                transition={'all 0.2s ease-in-out'}
                _hover={{
                    transform: 'scale(1.1)'
                }}

            /></Flex>
            <Text color={'#fff'}>{name}</Text>
            <Text color={'#fff'}>{position}</Text>
        </Flex>
    )
}

export default Profile