import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form"; // react-hook-form import
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import BgSignUp from "assets/img/BgSignUp.png"; // Background image
import { useHistory } from "react-router-dom"; // For navigation

function SignUp() {
  const [formSubmitted, setFormSubmitted] = useState(false); // For handling successful form submission
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const toast = useToast(); // For success message
  const history = useHistory(); // For routing

  // Initialize react-hook-form with validation rules
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form Data", data);
    // Simulating a successful registration
    setFormSubmitted(true);
    toast({
      title: "User registered successfully.",
      description: "You can now log in with your new account.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex direction="column" textAlign="center" justifyContent="center" align="center" mt="6.5rem" mb="30px">
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
        <Text fontSize="md" color="white" fontWeight="normal" mt="10px" mb="26px" w={{ base: "90%", sm: "60%", lg: "40%", xl: "70%" }}>
          Use these awesome forms to login or create a new account in your project for free.
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex direction="column" w="445px" background="transparent" borderRadius="15px" p="40px" mx={{ base: "100px" }} bg={bgColor} boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)">
          <Text fontSize="xl" color={textColor} fontWeight="bold" textAlign="center" mb="22px">
            Register With
          </Text>
          <HStack spacing="15px" justify="center" mb="22px">
            <Flex justify="center" align="center" w="75px" h="75px" borderRadius="15px" border="1px solid lightgray" cursor="pointer" transition="all .25s ease" _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href="#">
                <Icon as={FaFacebook} w="30px" h="30px" _hover={{ filter: "brightness(120%)" }} />
              </Link>
            </Flex>
            <Flex justify="center" align="center" w="75px" h="75px" borderRadius="15px" border="1px solid lightgray" cursor="pointer" transition="all .25s ease" _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href="#">
                <Icon as={FaApple} w="30px" h="30px" _hover={{ filter: "brightness(120%)" }} />
              </Link>
            </Flex>
            <Flex justify="center" align="center" w="75px" h="75px" borderRadius="15px" border="1px solid lightgray" cursor="pointer" transition="all .25s ease" _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href="#">
                <Icon as={FaGoogle} w="30px" h="30px" _hover={{ filter: "brightness(120%)" }} />
              </Link>
            </Flex>
          </HStack>
          <Text fontSize="lg" color="gray.400" fontWeight="bold" textAlign="center" mb="22px">
            or
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} mb="8px">
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Name
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Your full name"
                size="lg"
                {...register("name", { required: "Name is required" })}
              />
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email} mb="8px">
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Your email address"
                size="lg"
                {...register("email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: "Invalid email format" } })}
              />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password} mb="8px">
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Your password"
                size="lg"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
              />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>

            <FormControl display="flex" alignItems="center" mb="24px">
              <Switch id="remember-login" colorScheme="teal" me="10px" />
              <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                Remember me
              </FormLabel>
            </FormControl>

            <Button type="submit" bg="teal.300" fontSize="10px" color="white" fontWeight="bold" w="100%" h="45" mb="24px" _hover={{ bg: "teal.200" }} _active={{ bg: "teal.400" }}>
              SIGN UP
            </Button>
          </form>

          <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <Link color={titleColor} as="span" ms="5px" onClick={() => history.push("/auth/signin")} fontWeight="bold">
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
