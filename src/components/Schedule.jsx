import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Schedule = () => {
  const events = [
    {
      name: "Expert Talk",
      time: "09:30 AM - 12:00 Noon"
    },
    {
      name: "Ideation Competition",
      time: "01:00 PM - 03:00 PM"
    },
    {
      name: "Construction Exhibition",
      time: "03:00 PM - 05:00 PM"
    },
    {
      name: "Research Expo",
      time: "03:00 PM - 05:00 PM"
    }
  ]


  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      // py={5}
      px={5}
      // height={'100%'}
      flex={1}
      backgroundImage={'3286718.jpg'}
      backgroundSize={'cover'}
    // objectFit={'cover'}
    >
      <Flex
        border={'5px solid #c69cd86e'}
        borderRadius={22}
        p={5}
        maxW={'lg'}
        width={'100%'}
        min-height={'calc(100vh - 100px)'}
        direction={'column'}
      >
        <Heading
          as={'h1'}
          fontSize={'4xl'}
          mb={4}
          fontFamily={'wity2'}
          color={'#9e00e5'}
          textAlign={'center'}
        >EVENT SCHEDULE</Heading>

        <Flex
          direction={'column'}
          gap={10}
          justifyContent={'space-around'}
          flex={1}
        >

          {events.map(({ name, time }, key) => (
            <Flex
              key={key}
              p={2}
              border={'2px solid #ffffff4a'}
              fontFamily={'wity2'}
              borderRadius={'lg'}
              bg={'#ffffff1c'}
              justifyContent={'center'}
            >
              <Flex
                direction={'column'}
                alignItems={'center'}
              >
                <Text
                  fontSize={22}
                  color={'#fff'}
                  fontFamily={"Young Serif"}
                >{name}</Text>

                <Text
                  fontSize={22}
                  color={'#fff'}
                  fontFamily={"'Young Serif', serif"}
                >{time}</Text>
              </Flex>
            </Flex>
          ))

          }

        </Flex>

      </Flex>
    </Flex>
  )
}

export default Schedule