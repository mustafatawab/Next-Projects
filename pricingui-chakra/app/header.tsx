"use client";

import Practice from "./practice";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";
import { isPromise } from "util/types";
import Link from "next/link";

export default function Header() {
  return (
    <>
      
      <Box textAlign="center" bg="#6B46C1" pt="90" pb="250px" color="white">

        <Text textColor={'whiteAlpha.300'} fontWeight='bold'>
        <a href={'https://github.com/mustafatawab'} style={{textDecoration: 'none' , color: 'white'}}>By Mustafa Tawab</a>
        </Text>
        <Heading fontSize={"40px"}>Simple Pricing For Your Business</Heading>

        <Text fontSize={""}>
          Plans that are carefully crafted to suit your business
        </Text>
      </Box>
    </>
  );
}
