import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Profile = ({ src, name,position }) => {
    return (
        <Flex
            alignItems={'center'}
            direction={'column'}
            width={200}
            aspectRatio={1}
        >
            <Image
                src={src}
                width={200}
                aspectRatio={1}
                borderRadius={28}
                border={'3px solid #e350e17a'}
                objectFit={'contain'}
                bg={'#d8d9db'}
            />
            <Text color={'#fff'}>{name}</Text>
            <Text color={'#fff'}>{position}</Text>
        </Flex>
    )
}

export default Profile