import Image from "next/image";
import { Box, Flex, Card, Avatar, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import CodeBlockText from "./components/code";
import Header from "./components/header";
export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="w-full h-full flex lg:flex-row flex-col gap-10 p-8">
        <div className="flex flex-col">
          <h1 className="text-5xl tracking-tight lg:text-5xl lg:mt-16 mt-6">
            Remote work amplified
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-2 text-lg ml-1 mb-5">
            An open source software optimized for virtual collaborations.
          </p>
          <div className="mb-5">
            <CodeBlockText />
          </div>
          <Button variant="solid" className="mt-5">
            Demo
          </Button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://pbs.twimg.com/media/GAP5RCEXsAAjXHt?format=jpg&name=large"
            className="rounded-xl h-[350px] w-[650px] lg:h-[550px] lg:w-[800px]"
          ></img>
        </div>
      </div>
    </div>
  );
}
