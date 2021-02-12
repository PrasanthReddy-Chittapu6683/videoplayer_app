import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Button,
  AspectRatio,
  GridItem,
  Flex,
  Heading,
  Spacer,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  InputRightElement,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { MdCompareArrows } from "react-icons/md";
import { FaYoutube, FaSearch, FaGithubSquare } from "react-icons/fa"
import { FiLogIn, FiMenu, FiUserPlus } from "react-icons/fi"
import { GoSignIn } from "react-icons/go"

import Content from "./Content"
import Footer from "./Footer"
import { RiMenuFoldLine } from "react-icons/ri"
import { BiVideoRecording } from "react-icons/bi"

import './Content.css'

interface thumbnails {
  url: string,
  width: number,
  height: number,
}
interface videoDetails {

  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: thumbnails,
      medium: thumbnails,
      high: thumbnails,
      standard: thumbnails,
      maxres: thumbnails
    }, channelTitle: string,
    tags: [],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string
    }
  }, contentDetails: {
    duration: string,
    dimension: string,
    definition: string,
    caption: string,
    licensedContent: boolean,
    contentRating: {},
    projection: string
  }, statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string
  }, player: {
    embedHtml: string
  }
}

export interface videosList {
  videoDtls: videoDetails[];

}
export const App = () => {

  const [isActive, setisActive] = React.useState(false)
  const handleClick = () => {
    setisActive(!isActive)
  }
  const [toogleColorMode, setToogleColorMode] = React.useState(false)
  return (

    <ChakraProvider theme={theme}>
      <Flex align='center' boxShadow='base' p='2' mb='2'>
        <Box p='2' pl='3'>
          <Heading size='md'  >
            {/* <FiMenu cursor='pointer' onClick={() => handleClick()} /> */}
            <IconButton  
              variant="ghost"
              color="current"
              border='0.1px solid  #4299e187'
              borderRadius='30px'
              aria-label="Search database"
              cursor='pointer' onClick={() => handleClick()}
              icon={<FiMenu />}
            />
          </Heading>
        </Box>
        <Box p='2'>
          <Heading size='lg' color='red.600'>
            <BiVideoRecording />
          </Heading>
        </Box>
        <Box p='2'>
          <Heading size='md'>
            My-Videos
          </Heading>
        </Box>
        <Spacer />
        <Box p='2' justifyContent="center" display='flex' flex='10' alignContent="center">
          <InputGroup size="sm" >
            {/* <InputLeftAddon children="Search" /> */}
            <Input placeholder="Search Videos" />
            {/* <InputRightAddon children=".com" /> */}
            <InputRightAddon pointerEvents='none' children={<FaSearch />} />
          </InputGroup>
        </Box>
        <Spacer />
        <Box p='2' >
          <Heading size='md' >
            <FiUserPlus />
          </Heading>
          {/* <Button colorScheme="teal" mr="4"> Sign Up </Button>
          <Button colorScheme="whatsapp" mr="4">Log in</Button> */}
        </Box>
        <Box p='2' >
          <Heading size='md' >
            <FiLogIn />
          </Heading>
          {/* <Button colorScheme="teal" mr="4"> Sign Up </Button>
          <Button colorScheme="whatsapp" mr="4">Log in</Button> */}
        </Box>
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Content openTabStatus={isActive} />
      <footer>
        <Footer />
      </footer>
      {/* <Box   fontSize="xl">
    <ColorModeSwitcher justifySelf="flex-start" />
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
       
        <GridItem rowSpan={2} colSpan={1} bg="gray" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Box> */}

      {/* <Box fontSize="xl"> */}

      {/* <Grid minH="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      > */}


      {/* <GridItem rowSpan={3} colSpan={1} bg="gray" >F1</GridItem>
        <GridItem colSpan={4} bg="tomato" >Header
        <ColorModeSwitcher justifySelf="flex-end" />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" >F2</GridItem>
        <GridItem colSpan={2} bg="gray" >F3</GridItem>
        <GridItem colSpan={4} bg="tomato" >F4</GridItem> */}
      {/* <VStack spacing={8}>
          <AspectRatio maxW="1560px" ratio={2}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              
            />
          </AspectRatio>
          <Button leftIcon={<MdCompareArrows />}>Call</Button>
          <Button leftIcon={<AddIcon />}>Call</Button>
          <Button leftIcon={<MdCompareArrows />}>Call</Button>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>

        </VStack> */}
      {/* </Grid>
    </Box> */}
    </ChakraProvider>
  )
}

