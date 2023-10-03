import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CardBox = ({ id, name, url, image }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Button
                    my={2}
                    variant='solid'
                    colorScheme='orange'
                    as={Link}
                    to={url}
                >
                    Buy now
                </Button>
                <Text my={2}>{name}</Text>
            </CardBody>

        </Card>
    )
}

export default CardBox