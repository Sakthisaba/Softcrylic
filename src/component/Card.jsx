import '../style/EventCard.css'
import game from  '../assets/gmae.jpg'
import sport from  '../assets/sport.jpg'
import science from  '../assets/science.jpg'
import { Card, CardHeader, Spacer,CardBody,Heading,Stack,Text,StackDivider,Box,ButtonGroup,Image,Divider,CardFooter,Button, Center, Flex } from '@chakra-ui/react'
function EventCard({event})
{
    return(<div className='card-grid'>
  <Card maxW='sm'  >
  <CardBody className='card' >
    
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={'white'}>{event.title}</Heading>
      <Text color={'whiteAlpha.800'}>
     {event.summary}
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  
  <CardFooter className='card '>
  <Flex alignItems='stretch'>
      <Button variant='solid' colorScheme='blue'>
       Register Event
      </Button>
      <Spacer />
    <Text className='text-zinc-100'>Time: {event.time}</Text>
    </Flex>
  </CardFooter>
  
</Card>

    </div>)
}

export default EventCard;