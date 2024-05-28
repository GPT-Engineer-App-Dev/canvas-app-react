import { Box, Container, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEvents, useVenues } from '../integrations/supabase';

const Index = () => {
  const { data: events, isLoading: eventsLoading, error: eventsError } = useEvents();
  const { data: venues, isLoading: venuesLoading, error: venuesError } = useVenues();

  if (eventsLoading || venuesLoading) return <Text>Loading...</Text>;
  if (eventsError || venuesError) return <Text>Error loading data</Text>;

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
        <Box>
          <Heading as="h3" size="lg">Events</Heading>
          {events.map(event => (
            <Box key={event.id}>
              <Text>{event.name}</Text>
              <Text>{event.description}</Text>
            </Box>
          ))}
        </Box>
        <Box>
          <Heading as="h3" size="lg">Venues</Heading>
          {venues.map(venue => (
            <Box key={venue.id}>
              <Text>{venue.name}</Text>
              <Text>{venue.location}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Index;