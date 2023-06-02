import {
    Flex,
    Box,
    Image,
  } from "@chakra-ui/react";
  
  const Carousel = () => {
    const cards = [
      { id: "1", src: "./First-page/image6.png" },
      { id: "2", src: "./First-page/image7.png" },
      { id: "3", src: "./First-page/image8.png" },
      { id: "4", src: "./First-page/image9.png" },
      { id: "5", src: "./First-page/image10.png" },
    ];
    const cardsList = cards.map((item) => {
      return (
        <Box
          key={item.id}
          p="2rem"
          borderRadius={"10px"}
          boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
        >
          <Image src={item.src} />
        </Box>
      );
    });
    return (
      <Flex p="10rem 3rem" gap="3rem" justifyContent={'space-between'} >
        {cardsList}
      </Flex>
    );
  };
  
  export default Carousel;