import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Text,
  Tooltip,
  Icon,
  useClipboard,
  useColorModeValue,
  VStack,
  SimpleGrid,
  useToast,
  Divider,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
const confetti = {
  light: {
    primary: "4299E1",
    secondary: "BEE3F8",
  },

  dark: {
    primary: "1A365D",
    secondary: "2A4365",
  },
};
const init = {
  name:'',
  email:'',
  message:''
}

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard("log4gaurav@gmail.com");
  const [loading, setIsLoading] = useState(false);
  const [info , setInfo] = useState(init)
  const toast = useToast();
  const handleChange = (e)=>{
     const {value , name} = e.target;
     setInfo({...info , [name]:value})
  }
  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
        "service_qyxn51t",
        "template_ce9sjmm",
         info,
         "KCIiAacCk3VudJIbs"
      )
      .then((res) => {
        toast({
          title: "Email Sent Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setInfo(init)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Flex
        mt="55"
        align="center"
        justify="center"
        css={{
          backgroundAttachment: "fixed",
        }}
        bg='#202A44' color='white'
        id="contact"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 1 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                Get in Touch
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <a href="https://github.com/Gaurav9958kumar" target="_blank">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gaurav-kumar-600884a3/"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </a>
                </Stack>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <form onSubmit={handleSendEmail}>
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<BsPerson />} />
                          <Input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={info.name}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<MdOutlineEmail />} />
                          <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={info.email}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>

                        <Textarea
                          placeholder="Your Message"
                          rows={6}
                          resize="none"
                          name="message"
                          value={info.message}
                          onChange={handleChange}
                        />
                      </FormControl>

                      <Button
                        w="100%"
                        isLoading={loading}
                        type="submit"
                        loadingText="Sending"
                        colorScheme="blue"
                        value="send"
                        mt="2"
                        bg="#38b2ac"
                        color="white"
                        _hover={{
                          bg: "green.600",
                          cursor: "pointer",
                        }}
                      >
                        Send Email
                      </Button>
                    </form>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      <Divider />
      <SimpleGrid
        bg='#202A44' color='white'
        align="center"
        justify="center"
        minChildWidth="250px"
        pb="10"
        pt='50px'
      >
        <Text textAlign="center" fontWeight="bold">
          <Icon as={MdEmail} mr="2" />
          log4gaurav@gmail.com
        </Text>

        <Text textAlign="center" fontWeight="bold">
          <Icon as={PhoneIcon} mr="2" />
          9958243108
        </Text>
      </SimpleGrid>
    </>
  );
}
