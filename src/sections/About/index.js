import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'



import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import {SectionTitle, SectionBackground} from 'reusecore/SectionTitle';

import { FaGooglePlay, FaApple } from "react-icons/fa";

import aboutImage from 'assets/images/about/about.svg';



import AboutSectionWrapper from './about.style';




const About = () => {
    return (
        <AboutSectionWrapper id="about"> 
                <Container>
                    <Row>
                        <Col className="lg-5 md-6 sm-12">
                            <Image src={aboutImage} className="about-image" alt="cryptik about image" />
                        </Col>
                        <Col className="lg-6 offset-lg-1 md-6 sm-12">
                            <Box className="about-right-content">
                                <SectionTitle>
                                    <SectionBackground>
                                        <Heading as="h1">
                                            Plugin based investments and yield distribution
                                        </Heading>
                                    </SectionBackground>
                                    
                                    <Text>Build your own investment plugins to generate yield from protocols such as Aave, Yearn and Compound and define how to distribute them across stakeholders. <br/>Currently built in for the Moralis Hackathon Plugins:</Text>
                                </SectionTitle>  

                                <Box className="about-list">
                                    <Text as="span">[Investment] Mock stablecoin</Text>
                                    <Text as="span">[Distribution] Hourly dividend based on CRY Token stake</Text>
                                    <Text as="span">[Distribution] Lottery pool based on CRY Token burn</Text>
                                </Box>

                                <Box className="about-btn-wrapper">
                                    <Link href="http://app.crystaleth.finance" ><a className="btn btn-fill"> Participate</a></Link>
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </Container> 
        </AboutSectionWrapper>
    )
}


export default About;