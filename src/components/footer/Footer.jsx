import React from "react";
import Wave from "../../assets/svg/wave2.svg";
import {
  Box,
  Container,
  Group,
  Stack,
  Text,
  Anchor,
  ActionIcon,
  Divider,
  useMantineColorScheme,
} from "@mantine/core";
import TechStack from "./TechStack";
import Navegation from "./Navegation";
import Connect from "./Connect";
import Brand from "./Brand";
import Slogan from "./Slogan";

const Footer = () => {
  const { colorScheme } = useMantineColorScheme();

  const dark = colorScheme === "dark";

  return (
    <Box
      component="footer"
      style={{
        position: "relative",
        overflow: "hidden",

        borderTop: dark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(15,23,42,0.08)",
      }}
    >
      {/* WAVE BACKGROUND */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
          opacity: dark ? 0.12 : 0.07,
        }}
      >
        <img
          src={Wave}
          alt="wave background"
          style={{
            position: "absolute",
            bottom: "-20px",
            left: 0,
            width: "200%",
            height: "auto",
            animation: "waveMove 18s linear infinite",
          }}
        />
      </Box>

      <Container
        size="lg"
        py={80}
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Group align="flex-start" justify="space-between" wrap="wrap">
          <Brand dark={dark} />
          <Navegation dark={dark} />
          <TechStack dark={dark} />
          <Connect dark={dark} />
        </Group>

        <Divider
          my={40}
          color={dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}
        />
        <Slogan dark={dark} />
      </Container>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes waveMove {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-25%);
            }
          }

          a {
            transition: all 0.3s ease;
          }

          a:hover {
            color: #60a5fa !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </Box>
  );
};

export default Footer;
