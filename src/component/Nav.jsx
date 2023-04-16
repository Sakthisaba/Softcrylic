import {
    Box,
    Text,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'



  export  default  function Nav () {

    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const eventPage = () =>{
     window.location.href='/event'
    }
    return (<div className='navbar'>
      <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-around">
              <Text fontSize={'lg'} textColor={'whiteAlpha.800'} >Eventify</Text>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                  
                    
                      <Button >Your Community</Button>
                      <Button onClick={eventPage}>Events</Button>
                      <Button>All Communiity</Button>
                   
                  </ButtonGroup>
                  {localStorage.getItem('User')=='undefined'? <HStack spacing="3" ml={'7'}>
                    <Button colorScheme='blue'>Sign in</Button>
                    <Text color='white'>or</Text>
                    <Button variant="link">Sign up</Button>
                  </HStack>:<> <Button colorScheme='blue'>Log Out</Button></>}
                  
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={""}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box></div>
    )
  }