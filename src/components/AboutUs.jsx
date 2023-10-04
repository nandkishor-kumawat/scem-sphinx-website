import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {
  return (
    <Box
      flex={1}
      backgroundImage={'5269961.jpg'}
      backgroundSize={'cover'}
      p={5}
    >
      <Heading
        color={'#fff'}
        mb={6}
      >ABOUT US</Heading>
      <Text
        color={'#fff'}
        fontSize={20}
        fontFamily={"'Raleway', sans-serif"}
        fontWeight={600}
      >
        The Society of Civil Engineers MNIT (SCEM) is a dedicated departmental club at MNIT for civil engineering students. SCEM organizes seminars, workshops, and events, fostering a close-knit community of like-minded individuals passionate about civil engineering. It offers opportunities for professional development, networking, and personal growth, making it an essential part of the civil engineering department's ecosystem.
      </Text>
    </Box>
  )
}

export default AboutUs