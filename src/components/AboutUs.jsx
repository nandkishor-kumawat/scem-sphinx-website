import { Box, Container, Flex, Grid, GridItem, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Profile from './Profile'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AboutUs = () => {

  const teamMembers = [

    {
      src: './members/raushan.jpg',
      name: 'Raushan Shahi',
      position: 'General Secretary'
    },
    {
      src: './members/shagun.jpg',
      name: 'Shagun Srivastava',
      position: 'Joint Secretary'
    },
    {
      src: './members/ronak.jpeg',
      name: 'Ronak Gupta',
      position: 'Joint Secretary'
    },
    {
      src: './members/abhyudaya.jpg',
      name: 'Abhyudaya Singh',
      position: 'Treasurer'
    },
    {
      src: './members/gayatri.png',
      name: 'Gayatri Rankawat',
      position: 'Senior Executive'
    },
    {
      src: './members/yash.jpeg',
      name: 'Yash Kumar',
      position: 'Senior Executive'
    },
    {
      src: './members/dimple.jpg',
      name: 'Dimple Bhambhani',
      position: 'Senior Executive'
    },
    {
      src: './members/kinjal.jpg',
      name: 'Kinjal Goyal',
      position: 'Senior Executive'
    },
    {
      src: './members/avni.jpg',
      name: 'Avni Tyagi',
    },
    {
      src: './members/shruti.jpg',
      name: 'Shruti Sharma',
    },
    {
      src: './members/yashashwini.jpg',
      name: 'Yashashwini Upadhyay',
    },
    {
      src: './members/khushi.jpg',
      name: 'Khushi Kumawat',
    },
    {
      src: './members/smith.jpg',
      name: 'Smith Shah',
    },
    {
      src: './members/aaryan.jpg',
      name: 'Aaryan Srivastava',
    },
    {
      src: './members/abhinav.jpg',
      name: 'Abhinav Pal',
    },
    {
      src: './members/deepak.jpg',
      name: 'Deepak Kumar',
    },
    {
      src: './members/nigam.jpeg',
      name: 'Nigam',
    },
  ]


  return (

    <Box
      flex={1}
      backgroundImage={'9.jpeg'}
      backgroundSize={'cover'}
      p={5}
    >
      <Container
        maxW={1024}
      >
        <Heading
          color={'#fff'}
          mb={6}
        >ABOUT US</Heading>
        <Text
          color={'#fff'}
          fontSize={18}
          fontFamily={"'Raleway', sans-serif"}
          fontWeight={600}
        >
          The Society of Civil Engineers MNIT (SCEM) is a dedicated departmental club at MNIT for civil engineering students. SCEM organizes seminars, workshops, and events, fostering a close-knit community of like-minded individuals passionate about civil engineering. It offers opportunities for professional development, networking, and personal growth, making it an essential part of the civil engineering department's ecosystem.
        </Text>

        <Box>
          <Text
            color={'#efa0f4'}
            fontSize={30}
            fontFamily={"'Autour One', cursive"}
            my={7}
          >Tech Visionaries Behind
            <Text
              as={'span'}
              // color={'#efa0f4'}
              fontSize={40}
            > YANTRAKRITI</Text>... </Text>

          <Box
            my={5}
          >
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              gap={10}
              border={'1px solid #ffc0cb78'}
              p={'12px'}
              borderRadius={20}
              flexWrap={'wrap'}
            >
              <Box>
                <Text
                  color={'#fff'}
                >
                  <Text
                    as={'span'}
                    fontSize={'8rem'}
                  >S</Text>
                  <Text
                    as={'span'}
                    fontSize={'5rem'}
                  >C</Text>
                  <Text
                    as={'span'}
                    fontSize={'5rem'}
                  >E</Text>
                  <Text
                    as={'span'}
                    fontSize={'5rem'}
                  >M</Text>


                </Text>
              </Box>

              <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={2}
              >
                <Box
                // w={200}
                textAlign={'right'}
                >
                  <Text color={'#fff'} >Dr. Amit Kumar</Text>
                  <Text color={'#fff'} >Faculty Coordinator</Text>
                  <Text color={'#fff'} >Assistant Professor</Text>
                  <Text color={'#fff'} >Department of Civil Engineering</Text>
                  <Text color={'#fff'} > MNIT</Text>
                </Box>

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
                    src={'./members/amit.jpg'}
                    width={200}
                    transition={'all 0.15s ease-in-out'}
                    _hover={{
                        transform: 'scale(1.1)'
                    }}
                  />

                </Flex>
              </Flex>
            </Flex>


            <Grid
              border={'1px solid #ffc0cb78'}
              py={'20px'}
              px={'12px'}
              borderRadius={20}
              mt={'1px'}
              mb={5}
              // flexWrap={'wrap'}
              // gap={10}
              gridGap={10}
              placeItems={'center'}
              templateColumns='repeat(auto-fit, minmax(200px, 1fr));'
            >
              {
                teamMembers.map(({ src, name, position }, index) => (
                  <GridItem key={index} >
                    <Profile src={src} name={name} position={position} />
                  </GridItem>
                ))
              }
            </Grid>


            <Flex
              gap={6}
              justifyContent={'center'}
            >
              <Link to={'https://www.facebook.com/scem.mnit'}>
                <Icon
                  as={BsFacebook}
                  color={'#fff'}
                  fontSize={26}
                  transition={'all 0.1s ease-in'}
                  _hover={{
                    color: '#3576dd'
                  }}
                />
              </Link>
              <Link to={'https://www.linkedin.com/company/scem-society-of-civil-engineers-mnit/'}>
                <Icon
                  as={BsLinkedin}
                  color={'#fff'}
                  fontSize={26}
                  transition={'all 0.1s ease-in'}
                  _hover={{
                    color: '#3866ad',
                  }}
                />
              </Link>
              <Link to={'https://instagram.com/scem.mnit'}>
                <Icon
                  as={BsInstagram}
                  color={'#fff'}
                  fontSize={26}
                  transition={'all 0.1s ease-in'}
                  _hover={{
                    color: '#a6429e',
                  }}
                />
              </Link>

            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUs