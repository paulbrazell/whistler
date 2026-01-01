import { IconButton, Stack } from "@mui/material";
import { Email } from "@mui/icons-material";
import {
  SiBandcamp,
  SiSpotify,
  SiApplemusic,
  SiInstagram,
} from "react-icons/si";

export const SocialIcons = () => (
  <Stack direction="row" spacing={1}>
    <IconButton
      href="https://www.instagram.com/whistler.band/"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="small"
    >
      <SiInstagram />
    </IconButton>
    <IconButton
      href="https://whistlerband.bandcamp.com"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="small"
    >
      <SiBandcamp />
    </IconButton>
    <IconButton
      href="https://open.spotify.com/artist/6EQ9te2ITSVOT6Tle0ZqYY?si=tzXP7ROeTOytf5PwwOyoTw"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="small"
    >
      <SiSpotify />
    </IconButton>
    <IconButton
      href="https://music.apple.com/us/artist/whistler/1516938797"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="small"
    >
      <SiApplemusic />
    </IconButton>
    <IconButton
      href="mailto:whistler.royson@gmail.com"
      color="inherit"
      size="small"
    >
      <Email />
    </IconButton>
  </Stack>
);
