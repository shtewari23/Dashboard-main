import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius="15px"
      flexDirection="column"
      bgImage={SidebarHelpImage}
      justifyContent="flex-start"
      alignItems="start"
      boxSize="border-box"
      p="8px"  // Reduced padding to fit the new height
      h="120px"  // Reduced height
      w="100%"
    >
      <IconBox width="30px" h="30px" bg="white" mb="auto">
        <QuestionIcon color="teal.300" h="16px" w="16px" />  {/* Adjusted icon size */}
      </IconBox>
      <Text fontSize="xs" color="white" fontWeight="bold">
        Need help?
      </Text>
      <Text fontSize="xx-small" color="white" mb="5px">  {/* Adjusted font size */}
        Please check our docs
      </Text>
     
        <Button
          fontSize="9px"  // Reduced font size
          fontWeight="bold"
          w="100%"
          bg="white"
          _hover="none"
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          color="black"
        >
          DOCUMENTATION
        </Button>
    </Flex>
  );
}
