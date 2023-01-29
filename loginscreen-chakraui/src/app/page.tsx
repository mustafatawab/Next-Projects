import {Flex, Heading , Input , Button} from "@chakra-ui/react"
const  IndexPage  =  () =>{
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading mb={6}>
                Log In
          </Heading>

          <input placeholder="lazar@chakra-ui.com" variant='filled' mb={3} type="email"></input>
          <input placeholder="******" variant="filled" mb={6} type="password"></input>
          <button colorScheme="teal">Log In</button>
    </Flex>

  </Flex>
}