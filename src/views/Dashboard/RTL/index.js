 // Chakra imports
 import { Box, Flex } from "@chakra-ui/react";
 import UnderConstruction from "views/UnderConstruction";
 function RTL() {
   return (
     <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
       <UnderConstruction /> {/* Using the UnderConstruction component */}
     </Flex>
   );
 }
 
 export default RTL;
 