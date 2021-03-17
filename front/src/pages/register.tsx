import React from "react";
import { Formik, Form } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Button,
} from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/inputField";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="username"
              type="password"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
              />
            </Box>
            <Button type="submit" isLoading={isSubmitting} color="teal">
              Registrarse
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
