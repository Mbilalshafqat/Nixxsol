import { Flex, Box, Text, Image, Button, useBreakpointValue } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  const testimonials = [
   
    {
      name: "Adam Smith",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.",
      image: "./First-page/adam.png",
      frameImage: "Frame 1000000912.png",
    }, 
    {
        name: "John",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.",
        image: "./First-page/adam.png",
        frameImage: "Frame 1000000912.png",
      },
      {
        name: "Katty",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.",
        image: "./First-page/adam.png",
        frameImage: "Frame 1000000912.png",
      },
  ];

  const updateCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
  };


  const onNextClick = () => {
    clearInterval(intervalId);
    if (cardIndex < testimonials.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
    const id = setInterval(updateCard, 3000);
    setIntervalId(id);
  };

  const onPrevClick = () => {
    clearInterval(intervalId);
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(testimonials.length - 1);
    }
    const id = setInterval(updateCard, 3000);
    setIntervalId(id);
  };

  const fontSize = useBreakpointValue({ base: "30px", md: "26px", lg: "80px" });
  const testimonialWidth = useBreakpointValue({ base: "15rem", md: "20rem", lg: "25rem" });
  const marginForArrows = useBreakpointValue({ base: "1rem", md: "15rem", lg: "35rem" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex pt="5rem" pb="3rem" gap="2rem" direction={flexDirection}>
      <Flex
        direction={"column"}
        p={"2rem 0"}
        pl="3rem"
        gap="1rem"
      >
        <Text fontWeight={800} color="#242424" fontSize={fontSize}>
          Testimonials
        </Text>
        <Text w={testimonialWidth}>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent
          elementum commodo.
        </Text>
      
      </Flex>
      <Flex direction={"column"}>
        <Flex alignItems={"flex-end"}>
          <Flex
            h="100%"
            p="1rem"
            pb="3rem"
            pr="2rem"
            gap="1rem"
            boxShadow={"2px 0px 8px 8px rgba(0, 0, 0, 0.1)"}
          >
            <Image src={testimonials[cardIndex].image} alignSelf={"flex-start"} />
            <Flex direction="column">
              <Text color={"#E4252C"} fontWeight={700} fontSize={"26px"}>
                {testimonials[cardIndex].name}
              </Text>
              <Text>
                {testimonials[cardIndex].testimonial}
              </Text>
            </Flex>
          </Flex>
          <Image h="80%" src={testimonials[cardIndex].frameImage} />
        </Flex>
        <Flex gap="1rem" mt='1rem' ml={marginForArrows}>
          <Box gap="0.5rem" _hover={{ cursor: "pointer" }}>
            <MdKeyboardArrowLeft
              style={{
              
                backgroundColor: "#E92129",
                fontSize: "25px",
                color: "white",
                borderRadius: "50%",
              }}
              onClick={onPrevClick}
            />
          </Box>
          <Box gap="0.5rem" _hover={{ cursor: "pointer" }}>
            <MdKeyboardArrowRight
              style={{
                backgroundColor: "#E92129",
                fontSize: "25px",
                color: "white",
                borderRadius: "50%",
              }}
              onClick={onNextClick}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Testimonials;
