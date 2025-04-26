import React from "react";
import { Flex, List, ListItem, Text } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        <Text as="span">
          {"© 2022, Made with Lorem for a better web"}
        </Text>
       
    
      </Text>
      <List display="flex">
        <ListItem
color="gray.400"          me={{
            base: "20px",
            md: "44px",
          }}
        >
          {"About Us"}
         
        </ListItem>
        <ListItem
color="gray.400"          me={{
            base: "20px",
            md: "44px",
          }}
        >
          {"Privacy"}
         
        </ListItem>
        <ListItem
color="gray.400"          me={{
            base: "20px",
            md: "44px",
          }}
        >
          {"Blog"}
         
        </ListItem>
        <ListItem
color="gray.400"          me={{
            base: "20px",
            md: "44px",
          }}
        >
          {"License"}
         
        </ListItem>
      </List>
    </Flex>
  );
}
