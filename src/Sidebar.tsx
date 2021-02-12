import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { FcHome, FcLibrary, FcLike } from 'react-icons/fc'
import { FiTrendingUp } from 'react-icons/fi'
import { MdSubscriptions } from 'react-icons/md'
import { RiChatHistoryLine } from 'react-icons/ri'

const Sidebar = () => {
    return (
        <>
            <SimpleGrid columns={[1, null, 1]} spacing="10px"  >
                <Heading size='sm' className="home" cursor='pointer' fontWeight='sm' height="40px">
                    <Box p='2' as='span' flex='1' display='flex' sx={{
                        ".home:hover &": {
                            fontWeight: 500
                        },
                    }}>
                        <FcHome style={{ marginRight: '5px', marginTop: '2px' }} letterSpacing='10px' />

                                        Home
                                    </Box>

                </Heading>
                {/* <Divider /> */}
                <Heading size='sm' className="Trending" cursor='pointer' fontWeight='sm' height="40px">
                    <Box p='2' as='span' flex='1' display='flex' sx={{
                        ".Trending:hover &": {
                            // fontWeight: 500
                            fontWeight: 500
                        },
                    }}>
                        <FiTrendingUp color='blue' style={{ marginRight: '5px', marginTop: '2px' }} letterSpacing='10px' />
                                        Trending
                                        </Box>
                </Heading>
                {/* <Divider /> */}
                <Heading size='sm' className="Subscriptions" cursor='pointer' fontWeight='sm' height="40px">

                    <Box p='2' as='span' flex='1' display='flex' sx={{
                        ".Subscriptions:hover &": {
                            fontWeight: 500
                        },
                    }}>
                        <MdSubscriptions style={{ marginRight: '5px', marginTop: '2px' }} letterSpacing='10px' />

                                        Subscriptions
                                        </Box>
                </Heading>
                <Divider />
                <Heading size='sm' className="Library" cursor='pointer' fontWeight='sm' height="40px">

                    <Box p='2' as='span' flex='1' display='flex' sx={{
                        ".Library:hover &": {
                            fontWeight: 500
                        },
                    }}>
                        <FcLibrary style={{ marginRight: '5px', marginTop: '2px' }} letterSpacing='10px' />

                                        Library
                                        </Box>
                </Heading>
                {/* <Divider /> */}
                <Heading size='sm' className="History" cursor='pointer' fontWeight='sm' height="40px">

                    <Box p='2' as='span' flex='1' display='flex' sx={{
                        ".History:hover &": {
                            fontWeight: 500
                        },
                    }}>
                        <RiChatHistoryLine style={{ marginRight: '5px', marginTop: '2px' }} letterSpacing='10px' />

                                        History
                                        </Box>
                </Heading>
                <Heading size='sm' className="History" cursor='pointer' fontWeight='sm' height="40px">

                    <Box p='2' as='span' flex='1' display='flex' sx={{
                        ".History:hover &": {
                            fontWeight: 500
                        },
                    }}>
                        <FcLike style={{ marginRight: '5px', marginTop: '2px' }} letterSpacing='10px' />

                                        Liked Videos
                                        </Box>
                </Heading>
                <Divider />
            </SimpleGrid>

            {/* <VStack divider={<StackDivider borderColor="blackAlpha.400" />} spacing={6}
                                align="stretch" >
                                <Link>

                                    <Box h="10px" > Home </Box>
                                </Link>
                                <Link>
                                    <Box h="10px" > Trending </Box>
                                </Link>

                                <Link>
                                    <Box h="10px" > Subscriptions </Box>
                                </Link>
                                <Link>
                                    <Box h="10px" > Library </Box>
                                </Link>
                                <Link>
                                    <Box h="10px" > History </Box>
                                </Link>
                                <Link className=''>
                                    <Box h="10px" > Your Videos</Box>
                                </Link>
                                <Link>
                                    <Box h="10px" > Watch Later </Box>
                                </Link>
                                <Link>
                                    <Box h="10px" > Liked Videos </Box>
                                </Link>
                            </VStack>
 */}

            {/*  <input
                                type="range"
                                min="0"
                                max="2"
                                value={tabIndex}
                                onChange={handleSliderChange}
                            />
                           <Tabs display='flex' index={tabIndex} onChange={handleTabsChange}>
                                <TabList flexDirection='column' alignContent='flex-start' justifyContent='flex-start'>
                                    <Tab>One</Tab>
                                    <Tab>Two</Tab>
                                    <Tab>Three</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <p>Click the tabs or pull the slider around</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>Yeah yeah. What's up?</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>Oh, hello there.</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs> */}
        </>
    )
}

export default Sidebar
