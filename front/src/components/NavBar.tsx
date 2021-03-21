import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  let body = null;

  //datos cargandose
  if (fetching) {
  }
  //usuario no loggeado
  else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color={"white"} mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color={"white"}>Registrarse</Link>
        </NextLink>
      </>
    );
  }

  //usuario loggeado
  else {
    body = (
      <Flex>
        <Box mr={2} color="white">
          {data.me.username}
        </Box>
        <Button
          onClick={() => {
            logout();
          }}
          variant="link"
          isLoading={logoutFetching}
        >
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex bg="teal">
      <Box p={4} ml={"auto"}>
        {body}
      </Box>
    </Flex>
  );
};
