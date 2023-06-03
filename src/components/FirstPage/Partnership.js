import {
    Flex,
    Box,
    Image,
    useBreakpointValue,
} from "@chakra-ui/react";

const Carousel = () => {
    const cards = [
        { id: "1", src: "./First-page/image6.png" },
        { id: "2", src: "./First-page/image7.png" },
        { id: "3", src: "./First-page/image8.png" },
        { id: "4", src: "./First-page/image9.png" },
        { id: "5", src: "./First-page/image10.png" },
    ];
    const marginValue = useBreakpointValue({ base: "1rem", md: "1rem" });
    const cardsList = cards.map((item) => {
        return (
            <Box
                key={item.id}
                p="2rem"
                borderRadius={"10px"}
                boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
                marginRight={marginValue}
                marginBottom={marginValue}
            >
                <Image src={item.src} />
            </Box>
        );
    });

    const justifyContentValue = useBreakpointValue({ base: "center", md: "space-between" });

    return (
        <Flex
            p="10rem 3rem"
            justifyContent={justifyContentValue}
            flexWrap="wrap"
        >
            {cardsList}
        </Flex>
    );
};

export default Carousel;
