import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import GitHubCalendar from "react-github-calendar";
import { Spacer, Box, Heading, Image, Flex } from "@chakra-ui/react";
function App() {

  return (
    <Box bg='#202A44' color='white'>
      <Navbar />
      <Spacer h={50} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Box
        w="60%"
        m="auto"
        pt="50"
      >
        <Heading textAlign="center" mt="85" mb="25" color="#38B2AC">
          GitHub Calender
        </Heading>
        <GitHubCalendar username="Gaurav9958kumar" />
      </Box>
      <Box
        w="80%"
        m="auto"
      >
        <Heading textAlign="center" mt="35" mb="25" color="#38B2AC">
          GitHub Stats
        </Heading>
        <Flex alignItems='center' justifyContent='space-around' flexDirection={['column','column','column','row']}>
    <Image alt="Gaurav9958kumar's Github Stats" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Gaurav9958kumar&layout=compact&langs_count=5&theme=light" />
    <Image alt="Gaurav9958kumar's Top Languages" src="https://github-readme-stats-eight-theta.vercel.app/api?username=Gaurav9958kumar&show_icons=true&theme=light&include_all_commits=true&count_private=true" />
    </Flex>
    <Image w='80%' m='auto' mt='50px' borderRadius='10px' src="https://github-readme-activity-graph.cyclic.app/graph?username=Gaurav9958kumar&bg_color=ffcfe9&color=9e4c98&line=43cf07&point=403d3d&area=true&hide_border=true" />
      </Box>

      <Contact />
    </Box>
  );
}

export default App;
