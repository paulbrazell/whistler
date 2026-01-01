import type { Route } from "./+types/home";
import { SocialIcons } from "~/components/social-icons";
import { useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Link,
  Stack,
} from "@mui/material";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Whistler" },
    {
      name: "description",
      content:
        "Whistler - Indie Rock from Charlotte, NC. Everywhere But Here, featuring 'Cadillac' and 'Questions' is now available on all streaming platforms.",
    },
  ];
}

export default function Home() {
  const bandsintownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Bandsintown script
    const script = document.createElement("script");
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.async = true;

    script.onload = () => {
      // Initialize widget after script loads
      if (bandsintownRef.current && (window as any).BIT) {
        (window as any).BIT.Widget.initialize();
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Navigation */}
          <Stack direction="row" spacing={4}>
            <Link href="#shows" color="inherit" underline="hover">
              Shows
            </Link>
            <Link
              href="https://whistlerband.bandcamp.com/merch"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
            >
              Merch
            </Link>
          </Stack>

          {/* Center Logo */}
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            Whistler
          </Typography>

          {/* Right Social Icons */}
          <SocialIcons />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth={false} sx={{ py: 5 }}>
        {/* Hero Section */}
        <Box sx={{ mb: 10 }}>
          <img src="app/assets/Spotify Header.jpg" />

          {/* Everywhere But Here Announcement */}

          <Box
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              mt: 6,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                flex: 1,
                justifyItems: { xs: "center", md: "left" },
                alignItems: {},
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{ mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}
              >
                Everywhere But Here out now
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, color: "text.secondary", lineHeight: 1.6 }}
              >
                Everywhere But Here, featuring "Cadillac" and "Questions" is now
                available on all streaming platforms.
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                href="https://distrokid.com/hyperfollow/whistler3/everywhere-but-here"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                  },
                }}
              >
                Listen Now
              </Button>
            </Box>
            {/* Album Cover */}
            <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "400px" } }}>
              <Paper
                sx={{
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "grey.200",
                  borderRadius: 2,
                }}
              >
                <Box sx={{ textAlign: "center", color: "text.secondary" }}>
                  <img
                    src="app/assets/Everywhere But Here Art.jpg"
                    alt="Everywhere But Here album cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>

        {/* Shows Section */}
        <Box id="shows" sx={{ mb: 10 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Shows
          </Typography>
          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <div ref={bandsintownRef}>
              <a
                className="bit-widget-initializer"
                data-artist-name="id_490343"
                data-events-to-display=""
                data-background-color="rgba(255,255,255,1)"
                data-separator-color="rgba(221,221,221,1)"
                data-text-color="rgba(66,66,66,1)"
                data-font="Arial"
                data-auto-style="true"
                data-button-label-capitalization="lowercase"
                data-header-capitalization="uppercase"
                data-location-capitalization="capitalize"
                data-venue-capitalization="capitalize"
                data-display-local-dates="false"
                data-local-dates-position="tab"
                data-display-past-dates="false"
                data-display-details="false"
                data-display-lineup="true"
                data-display-start-time="false"
                data-social-share-icon="false"
                data-display-limit="all"
                data-date-format="MMM D ddd"
                data-date-orientation="vertical"
                data-date-border-color="#4A4A4A"
                data-date-border-width="1px"
                data-date-capitalization="captialize"
                data-date-border-radius="10px"
                data-event-ticket-cta-size="small"
                data-event-custom-ticket-text=""
                data-event-ticket-text="Tickets"
                data-event-ticket-icon="false"
                data-event-ticket-cta-text-color="rgba(74,74,74,1)"
                data-event-ticket-cta-bg-color="rgba(255,255,255,1)"
                data-event-ticket-cta-border-color="rgba(74,74,74,1)"
                data-event-ticket-cta-border-width="1px"
                data-event-ticket-cta-border-radius="4px"
                data-sold-out-button-text-color="rgba(255,255,255,1)"
                data-sold-out-button-background-color="rgba(74,74,74,1)"
                data-sold-out-button-border-color="rgba(74,74,74,1)"
                data-sold-out-button-clickable="true"
                data-event-rsvp-position="right"
                data-event-rsvp-cta-size="small"
                data-event-rsvp-only-show-icon="false"
                data-event-rsvp-text="RSVP"
                data-event-rsvp-icon="false"
                data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
                data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
                data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
                data-event-rsvp-cta-border-width="1px"
                data-event-rsvp-cta-border-radius="4px"
                data-follow-section-position="hidden"
                data-follow-section-alignment="center"
                data-follow-section-header-text="Get updates on new shows, new music, and more"
                data-follow-section-cta-size="medium"
                data-follow-section-cta-text="FOLLOW"
                data-follow-section-cta-icon="false"
                data-follow-section-cta-text-color="rgba(255,255,255,1)"
                data-follow-section-cta-bg-color="rgba(74,74,74,1)"
                data-follow-section-cta-border-color="rgba(74,74,74,1)"
                data-follow-section-cta-border-width="0px"
                data-follow-section-cta-border-radius="2px"
                data-play-my-city-position="hidden"
                data-play-my-city-alignment="center"
                data-play-my-city-header-text="Don't see a show near you?"
                data-play-my-city-cta-size="small"
                data-play-my-city-cta-text="REQUEST A SHOW"
                data-play-my-city-cta-icon="false"
                data-play-my-city-cta-text-color="rgba(255,255,255,1)"
                data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
                data-play-my-city-cta-border-color="rgba(74,74,74,1)"
                data-play-my-city-cta-border-width="0px"
                data-play-my-city-cta-border-radius="2px"
                data-optin-font=""
                data-optin-text-color=""
                data-optin-bg-color=""
                data-optin-cta-text-color=""
                data-optin-cta-bg-color=""
                data-optin-cta-border-width=""
                data-optin-cta-border-radius=""
                data-optin-cta-border-color=""
                data-language="en"
                data-layout-breakpoint="900"
                data-app-id="53fa6c9dc37a0fc7c1e73af53255aac7"
                data-affil-code=""
                data-bit-logo-position="hidden"
                data-bit-logo-color="rgba(66,66,66,1)"
              ></a>
            </div>
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ borderTop: 1, borderColor: "divider", py: 4, mt: 8 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SocialIcons />
        </Container>
      </Box>
    </Box>
  );
}
