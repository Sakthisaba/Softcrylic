import {
    FormControl,
    FormLabel,Input,
    FormErrorMessage,
    FormHelperText,Heading
  } from '@chakra-ui/react'
  import {React ,useState} from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { FormData } from 'formdata-node'
import axios from 'axios'
import { RedirectFunction } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
  Text,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    Flex,

  
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,


    InputRightElement
  } from "@chakra-ui/react";


export default function Login()
{
   
 const [email,setemail] = useState("")
   
 const [password,setpassword] = useState("")

    function Auth(){
  
        let form = new FormData()
        form.set('email',email)
        form.set('pass',password)
     axios.get("http://localhost:8080/auth",{
      params: {
        email:email,
        password:password
      }
    },form).then((res)=>{
      console.log("redirect")
        if(res!='failure')
        {
            localStorage.setItem('User', res);
            console.log(res)
             window.location.href='/'
        }
        else
        {
            alert("Enter Correct Info")
        }
     })
    }

    return (
        <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Eventify Login</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                     
                    />
                    <Input type="email" placeholder="email address"  required onChange={(e)=>setemail(e.target.value)} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      
                    />
                    <Input
                      type={"password"} required
                      placeholder="Password" onChange={(e)=>setpassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm"  >
                       
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                onClick={Auth}>
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
       
      </Flex>
    )
}