import React from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiChakraui,
  SiExpress,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { DiMongodb, DiHeroku } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

const Skills = () => {
  return (
    <Box id="skills" bg='#202A44' color='white'>
      <Heading
        textAlign="center"
        pt="85"
        color="#48BB78"
      >
        Skills
      </Heading>
      <SimpleGrid
        minChildWidth="140px"
        w="80%"
        m="auto"
        gap={6}
        mt='50px'
        className="skillsDiv"
      >
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiHtml5
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            HTML
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiCss3
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            CSS
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiJavascript
              fontSize='30px'
              color='#90a0d9'
          />
          <Text fontWeight={500}>
            JavaScript
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <FaReact
           fontSize='30px'
           color='#90a0d9'
          />
          <Text fontWeight={500}>
            React
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiRedux
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            Redux
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <DiMongodb
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            MongoDB
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiExpress
            fontSize='30px'
            color='#90a0d9'
          />

          <Text fontWeight={500}>
            Express
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <FaNodeJs
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            Node JS
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <VscGithub
            fontSize='30px'
            color='#90a0d9'
          />
          <Text fontWeight={500}>
            GitHub
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiChakraui
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            Chakra UI
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <BsBootstrap
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            BootStrap
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <DiHeroku
             fontSize='30px'
             color='#90a0d9'
          />
          <Text fontWeight={500}>
            Heroku
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiNetlify
              fontSize='30px'
              color='#90a0d9'
          />
          <Text fontWeight={500}>
            Netlify
          </Text>
        </Flex>
        <Flex
          colSpan={1}
          flexDirection='column'
          w="100%"
          m="auto"
          gap='20px'
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <SiVercel
              fontSize='30px'
              color='#90a0d9'
          />
          <Text fontWeight={500}>
            Vercel
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
