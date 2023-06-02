import { Flex, Box, Text, Button, Input, Textarea } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const BookMeeting = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(name && email && message);
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    emailjs
      .sendForm(
        "service_vulrbku",
        "template_ruxiqyq",
        form.current,
        "t_NkU5u7x-KOk0AID"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent. Please try again");
        }
      );

    e.target.reset();
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={{ base: "2rem", md: "5rem 3rem" }}
      gap={{ base: "2rem", md: "5rem" }}
    >
      <Flex direction="column" flex="1">
        <Text
          fontSize={{ base: "24px", md: "70px" }}
          lineHeight={{ base: "3rem", md: "5rem" }}
          fontWeight="bold"
          color="#FFFF"
        >
          Book a meeting with us
        </Text>
        <Text fontSize="22px" mt="2rem" color="#B8B8B8">
          Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
          Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In
          ornare nisl leo odio magna.
        </Text>
      </Flex>
      <Flex
        direction="column"
        color="white"
        flex="1"
        as="form"
        onSubmit={sendEmail}
        ref={form}
      >
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          mb="1rem"
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb="1rem"
          required
        />
        <Textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          mb="1rem"
          required
        />
        <Button
          type="submit"
          colorScheme="blue"
          isFullWidth
          isDisabled={!isFormValid}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};
export default BookMeeting;
