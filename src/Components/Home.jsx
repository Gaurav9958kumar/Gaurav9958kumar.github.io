import { Spacer, Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { init } from "ityped";
import ResumePDF from './Gaurav_Kumar_resume.pdf';

import { useEffect, useRef } from "react";
const Home = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 70,
      strings: ["Full Stack Web Developer","Front-end Developer", "Backend Developer", "Problem Solver"],
    });
  }, []);
  return (
    <Box id="home" bg='#202A44' color='white'>
      <Spacer h={55} />
      <Flex p={10} alignItems='center' justifyContent='space-around' flexDirection={['column' , 'column','column','row']}>
        <Box flexShrink={0}>
          <Image
            
            borderRadius="lg"
            width={{ lg: "300px", md: "300px" }}
            src="https://i.ibb.co/9bHxjFD/gaurav-image.jpg"
            alt="Gaurav Kumar"
          />
        </Box>
        <Box >
          <Text
            fontWeight="bold"
            fontSize={{ xl: "55", lg: "45", md: "45", sm: "45", base: "25" }}
            letterSpacing="wide"
            color="#48BB78"
            textAlign={{ sm: "center", md: "left", base: "center" }}
          >
            Hi, I Am Gaurav Kumar
          </Text>
          <Text
            mt={1}
            display="block"
            fontSize={{ xl: "40", lg: "40", md: "35", sm: "30", base: "15" }}
            lineHeight="normal"
            fontWeight="semibold"
            textAlign={{ sm: "center", md: "left", base: "center" }}
          >
            Full Stack Web Developer
          </Text>
          <Box>
            <Text
              mt={2}
              color="#4A5568"
              fontWeight="semibold"
              fontSize={{
                xl: "25",
                lg: "25",
                md: "25",
                sm: "20",
                base: "15",
              }}
              textAlign={{ sm: "center", md: "left", base: "center" }}
            >
              I'm a <span style={{ color: "#48BB78" }} ref={textRef}></span>
            </Text>
          </Box>
          <a style={{backgroundColor:'none'}} className="download_cv" href={`${ResumePDF}`} download={'Gaurav_Kumar_resume.pdf'}>
          <Button mt='40px' p='10px 30px' borderRadius='5px' bg='#070033'  _hover={{bg:'#070033'}} color='yellow'>Download Resume</Button>
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;

