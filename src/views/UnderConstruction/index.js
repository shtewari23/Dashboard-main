// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa"; // Icon for under construction

function UnderConstruction() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} align="center" justify="center">
      <Box textAlign="center">
        {/* Under Construction Icon */}
        <Icon as={FaTools} w="48px" h="48px" color="gray.500" />
        
        {/* Heading */}
        <Text fontSize="2xl" fontWeight="bold" mt="4" color={textColor}>
          Under Construction
        </Text>
        
        {/* Description */}
        <Text fontSize="lg" color="gray.500" mt="2">
          This page is under construction. We are working hard to bring it to you soon. Please check back later!
        </Text>
        
        {/* Optional: Add more construction-related content or info */}
        <Text fontSize="md" color="gray.400" mt="4">
          In the meantime, feel free to explore other parts of the application.
        </Text>
      </Box>
    </Flex>
  );
}

export default UnderConstruction;
