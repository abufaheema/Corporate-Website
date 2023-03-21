import { Container, Row,Col, Image, ProgressBar } from 'react-bootstrap'
import React from 'react'
import { Box, Typography } from '@mui/material'

import img from './images/img1.jpg'



const AboutUs = () => {
    return (
      <Box component="div" id="about" className="block about-block">
        <Container fluid>
          <Box component="div" className="title-holder">
            <Typography variant="h2" align="center">
              About Us
            </Typography>
            <Box component="div" align="center" className="subtitle">
              learn more about us
            </Box>
          </Box>
          <Row>
            <Col sm={6}>
              <Image src={img} thumbnail />
            </Col>
            <Col sm={6}>
              <Typography variant="body" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit dicta veritatis sint quidem asperiores magni eaque
                praesentium temporibus, magnam, eveniet consequatur possimus
                nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
              </Typography>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit dicta veritatis sint quidem asperiores magni eaque
                praesentium temporibus, magnam, eveniet consequatur possimus
                nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
              </Typography>
              <Box className="progress-block mt-5">
                <Typography variant="h4">HTML / CSS / JAVASCRIPT</Typography>
                <ProgressBar now={80} label="80%" striped animated />
              </Box>
              <Box className="progress-block mt-5">
                <Typography variant="h4">RESPONSIVE</Typography>
                <ProgressBar now={95} label="95%" striped animated />
              </Box>
              <Box className="progress-block mt-5">
                <Typography variant="h4">PHOTOSHOP</Typography>
                <ProgressBar now={60} label="60%" striped animated />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    );
}

export default AboutUs