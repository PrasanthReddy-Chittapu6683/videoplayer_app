import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaXingSquare } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const Footer = () => {
    return (
        <Flex align='center' boxShadow='dark-lg' p='2' mb='2' >


            <Spacer />
            <Box p='2' fontSize='10px' display='flex' size='sm' alignItems='center' justifyContent='center' >
                @Follow Me
                <Box ml='2' color='teal.900' alignItems='center' justifyContent='center'>
                    <Link href="https://github.com/PrasanthReddy-Chittapu6683" isExternal>
                        <FaGithubSquare fontSize='20' />
                    </Link>

                </Box>
                <Box ml='2' color='linkedin.700' alignItems='center' justifyContent='center'>
                    <Link href='https://www.linkedin.com/in/prasanth-kumar-reddy-cv-385768b5/' isExternal>
                        <FaLinkedin fontSize='20' />
                    </Link>
                </Box>
                <Box ml='2' color='telegram.600' alignItems='center' justifyContent='center'>
                    <Link href='https://www.xing.com/profile/PrasanthKumarReddy_CV' isExternal>
                        <FaXingSquare fontSize='20' />
                    </Link>
                </Box>
                <Box ml='2' color='telegram.600' alignItems='center' justifyContent='center'>
                    <Link href='https://cvpkr-portfolio.web.app/' isExternal>
                        <ImProfile fontSize='20' />
                    </Link>
                </Box>
            </Box>
            <Spacer />
            <Box p='2'>
                <Heading fontSize='xx-small'>
                    @ Developer: Prasanth CV.
                </Heading>
            </Box>
        </Flex>
    )
}

export default Footer
