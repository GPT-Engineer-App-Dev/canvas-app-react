import { Box, Container, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link to="/">MyApp</Link>
        </Heading>
        <Box>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        </Box>
      </Flex>
      <Box as="main" py={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="xl">Welcome to MyApp</Heading>
          <Text fontSize="lg">This is your blank canvas. Start building your application here.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;