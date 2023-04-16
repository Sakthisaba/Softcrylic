import '../style/EventCard.css'
import game from  '../assets/gmae.jpg'
import sport from  '../assets/sport.jpg'
import science from  '../assets/science.jpg'
import { Card, CardHeader, Spacer,CardBody,Heading,Stack,Text,StackDivider,Box,ButtonGroup,Image,Divider,CardFooter,Button, Center, Flex } from '@chakra-ui/react'
function EventCard()
{
    return(<div className='card-grid'>
  <Card maxW='sm'  >
  <CardBody className='card' >
    <Image
      src={sport}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={'white'}>Sport Club</Heading>
      <Text color={'whiteAlpha.800'}>
      sports club or sporting club, sometimes an athletics club or sports society or sports association, 
      is a group of people formed for the purpose of playing sports.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  
  <CardFooter className='card '>
  <Flex alignItems='stretch'>
      <Button variant='solid' colorScheme='blue'>
       Join Community
      </Button>
      <Spacer />
    <Text className='text-zinc-100'></Text>
    </Flex>
  </CardFooter>
  
</Card>
<Card maxW='sm'  >
  <CardBody className='card' >
    <Image
      src={science}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={'white'}>Science Hub</Heading>
      <Text color={'whiteAlpha.800'}>
      Sci-Hub is helping millions of students and researchers, medical professionals, 
      journalists and curious people in all countries to unlock access to knowledge
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  
  <CardFooter className='card '>
  <Flex alignItems='stretch'>
      <Button variant='solid' colorScheme='blue'>
       Join Community
      </Button>
      <Spacer />
    <Text className='text-zinc-100'></Text>
    </Flex>
  </CardFooter>
  
</Card>
<Card maxW='sm'  >
  <CardBody className='card' >
    <Image
      src={game}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={'white'}>Gaming Club</Heading>
      <Text color={'whiteAlpha.800'}>
      Take your playing to new levels of luxury with Gaming Club™. Discover a wealth of Microgaming online casino games, bonuses, safe banking and much more
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  
  <CardFooter className='card '>
  <Flex alignItems='stretch'>
      <Button variant='solid' colorScheme='blue'>
       Join Community
      </Button>
      <Spacer />
    <Text className='text-zinc-100'></Text>
    </Flex>
  </CardFooter>
  
</Card>
    </div>)
}

export default EventCard;