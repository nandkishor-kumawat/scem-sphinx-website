import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CardBox = ({ id, name, url, image }) => {
    return (
        <Card
            maxW='sm'
            bg={'#400072'}
        >
            <CardBody
            p={1}
            >
                <Box pos={'relative'}>
                    <Image
                        w={'100%'}
                        aspectRatio={1}
                        src={image || 'ideation.jpeg'}
                        alt={name}
                        borderRadius='lg'
                    />

                    <Box
                        as={Link}
                        to={url}
                        bg={'rgb(255 151 0)'}
                        color={'black'}
                        position={'absolute'}
                        bottom={30}
                        left={0}
                        fontWeight={'bold'}
                        // fontSize={'2xl'}
                        p={'0.5rem 1.5rem'}
                        transition={'all 0.2s ease'}
                        _hover={{
                            color: 'white',
                        }}
                    >
                        Register
                    </Box>
                </Box>
                <Text
                    color={'#fff'}
                    fontFamily={"'Young Serif', serif"}
                    my={2}
                    px={2}
                >
                    {name}
                </Text>
            </CardBody>

        </Card>
    )
}

export default CardBox