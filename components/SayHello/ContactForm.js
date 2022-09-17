import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = ({ cancelRef, onClose, isOpen }) => {
  const form = useRef();
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  const sendEmail = (e) => {
    setIsSubmit(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hihzg4s",
        "template_lfmjqie",
        form.current,
        "1pcSyxmjVsfYKLZOR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmit(false);
          onClose();
          toast({
            title: "Message Sent!",
            description: "Message is sent to Hemanth!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
        }
      );
  };

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        {isError ? (
          <AlertDialogContent>
            <AlertDialogHeader>Error</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Text>There was an error processing your request</Text>
            </AlertDialogBody>
          </AlertDialogContent>
        ) : (
          <AlertDialogContent>
            <AlertDialogHeader>Say Hello &#128075;</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <FormControl as={"form"} ref={form}>
                <FormLabel>Your Name</FormLabel>
                <Input
                  placeholder="Your Name"
                  type={"text"}
                  name={"from_name"}
                />
                <FormLabel>Your Email</FormLabel>
                <Input
                  placeholder="youremail@email.com"
                  type={"email"}
                  name={"from_email"}
                />
                <FormLabel>Message</FormLabel>
                <Textarea name={"message"} />
              </FormControl>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={isSubmit}
                onClick={sendEmail}
                colorScheme="red"
                ml={3}
              >
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </>
  );
};
