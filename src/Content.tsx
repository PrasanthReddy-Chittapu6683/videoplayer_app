import { Avatar, Box, Divider, Flex, Heading, Icon, IconButton, Link, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'

import './Content.css'

import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import Sidebar from './Sidebar';
import YoutubeService from './Services/YoutubeService';
import { videosList } from './App'
import { SearchIcon } from '@chakra-ui/icons';
import { BiHome, BiHomeAlt, BiHomeCircle, BiHomeSmile } from 'react-icons/bi';
import { FcHome } from 'react-icons/fc';
import { FiMoreVertical, FiTrendingUp } from 'react-icons/fi';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

import { parse } from 'path';
import Moment from 'react-moment';
import { FaComments } from 'react-icons/fa';

interface ContentProps {
    openTabStatus: boolean;
}

const Content: FC<ContentProps> = ({ openTabStatus }) => {

    const initalState: videosList = {
        videoDtls: []
    }
    const [getVidoes, setGetVidoes] = useState(initalState)

    const loadVidoes = async () => {
        const response = await YoutubeService.get('videos?/search', {
            params: {
                part: "snippet,contentDetails,player,statistics,id",
                chart: 'mostPopular',
                regionCode: 'IN',
                maxResults: 50,
            }
        })
        debugger;
        // q: 'Codevolution' 
        setGetVidoes({
            videoDtls: response?.data?.items
        })
        console.log(getVidoes.videoDtls)
        // setGetVidoes({ videos: response?.data?.items })

        //console.log(getVidoes)
    }
    useEffect(() => {
        loadVidoes();
        return () => {

        }
    }, [])
    const handleTabsChange = (index: any) => {

    }
    const nFormatter = (num: number, digits: number) => {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
    return (
        <Box flex='1' display='flex' flexDirection='row' className={openTabStatus ? "content is-nav-open" : ' content wrapper'}>
            {
                openTabStatus &&
                <Box flex='0.2'>
                    <Sidebar />
                </Box>


            }
            {
                !openTabStatus &&
                <Box flex='0.01' alignItems='center' display='flex' flexDirection='column'>
                    <IconButton m='5' mt='5'
                        variant="ghost"
                        color="current"
                        border='0.1px solid  #4299e187'
                        borderRadius='30px'
                        aria-label="Search database"
                        icon={<FcHome />}
                    />
                    <IconButton m='5' mt='0'
                        colorScheme="blue"
                        aria-label="Search database"
                        border='0.1px solid  #4299e187'
                        borderRadius='30px'
                        variant="ghost"
                        color="current"
                        icon={<FiTrendingUp />}
                    />
                </Box>
            }
            <Box flex={openTabStatus ? '0.8' : '0.9'}>
                <Heading size='sm' m='5' display='flex' alignItems='center' >
                    <FiTrendingUp aria-activedescendant='true' />
                    <Box as='span' ml='5'>
                        Top Trending
                    </Box>
                </Heading>

                <Box width='98%' justifyContent='flex-start' minHeight='90vh' maxHeight='75vh' overflow='auto'
                    display='flex' flexWrap='wrap'>
                    {getVidoes.videoDtls.map((video, index) => (
                        <>
                            <Link href='#' textDecoration='dotted'>
                                <Box   width='280px' height='340px' bg="transparent" m='2' border='1px solid'

                                    boxShadow='0 0 2px 3px rgb(66 153 225 / 60%)' borderColor='#4299e187'
                                    overflow='auto' objectFit='cover'
                                    className='video__box'
                                >
                                    <img src={video?.snippet?.thumbnails?.maxres?.url ||
                                        video?.snippet?.thumbnails?.standard?.url ||
                                        video?.snippet?.thumbnails?.medium?.url} alt="" />
                                    <Box   display='flex' flexDirection='row' m='5' justifyContent='stretch' alignItems='center'>
                                        <Avatar
                                            alt={video?.snippet?.channelTitle}
                                            src={video?.snippet?.thumbnails?.medium?.url}
                                        />
                                        <Heading  size='xs' ml='3'>{video?.snippet?.title} </Heading>
                                    </Box>
                                    <Box display='flex' flexDirection='row' ml='5' justifyContent='space-between' alignItems='center'>
                                        {video?.snippet?.channelTitle}
                                        <FiMoreVertical fontSize='25px' />
                                    </Box>
                                    <Box display='flex' fontSize='12px' color='lightseagreen' flexDirection='row' ml='5' alignItems='center'>
                                        {
                                            video?.statistics?.viewCount ?
                                                <> {nFormatter(parseInt(video?.statistics?.viewCount), 2)} views •  </>
                                                :
                                                <></>
                                        }
                                        <Moment fromNow>{video?.snippet?.publishedAt}</Moment>

                                    </Box>
                                    <Box display='flex' color='lightseagreen' justifyContent='space-evenly'
                                        flexDirection='row' ml='2' alignItems='center' fontSize='12px'>
                                        {
                                            video?.statistics?.commentCount ?
                                                <> <FaComments /> {nFormatter(parseInt(video?.statistics?.commentCount), 2)}   </>
                                                :
                                                <></>
                                        }
                                        {
                                            video?.statistics?.likeCount ?
                                                <> <AiFillLike /> {nFormatter(parseInt(video?.statistics?.likeCount), 2)}   </>
                                                :
                                                <></>
                                        }
                                        {
                                            video?.statistics?.dislikeCount ?
                                                <> <AiFillDislike /> {nFormatter(parseInt(video?.statistics?.dislikeCount), 2)}   </>
                                                :
                                                <></>
                                        }
                                    </Box>
                                </Box>
                            </Link>
                        </>
                    ))
                    }
                    {/*                        
                    <Box boxSize="xs" bg="blue.500" m='2'>
                        2
                      </Box>
                    <Box boxSize="xs" bg="blue.500" m='2' >
                        3
                      </Box>
                    <Box boxSize="xs" bg="blue.500" m='2'>
                        4
                     </Box>
                    <Box boxSize="xs" bg="blue.500" m='2'>
                        5
                      </Box>
                    <Box boxSize="xs" bg="blue.500" m='2'>
                        5
                      </Box> */}
                </Box>
            </Box>
        </Box>
    )

}

export default Content
 // return (
    //     <Flex className={openTabStatus ? "content is-nav-open" : ' content wrapper'} minHeight='2xl' maxHeight='2xl'>
    //         <Box className="nav" height='auto'>
    //             {/* {
    //                 openTabStatus &&
    //                 <RiMenuFoldLine className="sidebar__icon" onClick={() => handleClick()} />
    //             } */}
    //             <Box className="sidebar__body">
    //                 <form>
    //                     <Box>
    //                         {/* {
    //                             !openTabStatus && <RiMenuUnfoldLine className="sidebar__icon" onClick={() => handleClick()} />
    //                         } */}
    //                         <Sidebar />

    //                     </Box>
    //                 </form>

    //             </Box>
    //         </Box>
    //         <Box p='5' borderLeft='1px solid  #79797999 ' minHeight='2xl' maxHeight='2xl' overflow='auto' >
    //             <SimpleGrid  templateColumns="repeat(5, 1fr)" gap={6}>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     1
    //                 </Box>
    //                 <Box   boxSize="xs" bg="blue.500" >
    //                     2
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     3
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     4
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     5
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     6
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     7
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     8
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     9
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     10
    //                 </Box><Box    boxSize="xs" bg="blue.500" >
    //                     11
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     12
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     13
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     14
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     15
    //                 </Box><Box    boxSize="xs" bg="blue.500" >
    //                     16
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     17
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     18
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     19
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     20
    //                 </Box><Box    boxSize="xs" bg="blue.500" >
    //                     21
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     22
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     23
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     24
    //                 </Box>
    //                 <Box    boxSize="xs" bg="blue.500" >
    //                     25
    //                 </Box>
    //             </SimpleGrid >
    //         </Box>
    //     </Flex >
    // )