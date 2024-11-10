import Image from "next/image";
import { Box, Flex, Card, Avatar } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <h1>Engineering</h1>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}