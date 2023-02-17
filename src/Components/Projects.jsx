import React from "react";

import { LinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Image,
  Badge,
  Text,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box id="projects" bg='#202A44' color='white'>
      <Heading
        m='auto'
        pt="95"
        textAlign="center"
        color="#48BB78"
      >
        Projects
      </Heading>
      <SimpleGrid
        minChildWidth="320px"
        gap="35"
        w="80%"
        m="auto"
        mt='50px'
        fontWeight="bold"
      >
        {" "}
        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image maxW='100%' src="https://i.ibb.co/KmxN3dt/Screenshot-261.png" alt="atozAmazon" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#48BB78" fontSize="25">
                  Foot Solution
                </Text>
              </Box>

              <Box fontWeight="semibold">
                Clone of E-commerce Web Application  Foot Solution which sells all kinds
                of products.Individual project within Five days using React , Chakra-Ui
              </Box>
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                 HTML
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                CSS
              </Badge>

              <Badge borderRadius="full" px="2" colorScheme="teal">
                JavaScript
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                React
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Chakra-UI
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a href="https://unrivaled-sundae-38bf14.netlify.app/" target={"_blank"}>
                  Deployed Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/Gaurav9958kumar/macabre-sun-7300-"
                  target="_blank"
                >
                  Github Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box m="auto">
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src='https://i.ibb.co/Msjvg89/Screenshot-260.png' alt="Lyst" />

            <Box p="4">
              <Box
                mt="1"
                textAlign="center"
                fontWeight="bold"
                lineHeight="tight"
                noOfLines={1}
              >
                <Text color="#48BB78" fontSize="25">
                LYST Shopping Store
                </Text>
              </Box>

              <Box fontWeight="semibold">
                An Ecommerce web application to buy clothes and jewellery, created in five days with team of Four members.
              </Box>
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                HTML
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                CSS
              </Badge>

              <Badge borderRadius="full" px="2" colorScheme="teal">
                JavaScript
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Rest API
              </Badge>
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt="5" mb="3">
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://beamish-cuchufli-0d9043.netlify.app/"
                  target={"_blank"}
                >
                  Deployed Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
              <Box borderRadius={10} p={2} _hover={{ color: "green" }}>
                <a
                  href="https://github.com/priyanshu2014204/elated-silver-5908"
                  target="_blank"
                >
                  Github Link
                  <Icon ml="2" as={LinkIcon} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
