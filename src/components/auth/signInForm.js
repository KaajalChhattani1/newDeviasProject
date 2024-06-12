"use client";

import * as React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const router = useRouter();

  return (
    <Stack spacing={4} mt={8} justifyContent={"center"} alignItems={"center"}>
      <Stack spacing={2} sx={{ width: "60%" }}>
        <Typography variant={"h4"} textAlign={"left"}>
          Sign In
        </Typography>
        <Link href="#" variant="body2">
          {`Don't have an account ?  SignUp`}
        </Link>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            sx={{ width: "100%" }}
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            sx={{ width: "100%" }}
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Box>

        <Link href="#" variant="body2">
          Forgot Password ?
        </Link>
        <Button
          type="submit"
          sx={{
            alignSelf: "center",
            backgroundColor: "purple",
            width: "100%",
            height: 50,
            berderRadius: 4,
            color: "white",
          }}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Sign In
        </Button>
      </Stack>
    </Stack>
  );
}
