import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import { SectionTitle } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import Diagram from "assets/images/diagram.svg";
import UserMapWrapper from "./userMap.style";

const UserMap = () => {
  return (
    <UserMapWrapper>
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Row>
            <Col className="sm-12 md-10 offset-md-1">
              <SectionTitle className="text-center">
                <Heading>How it works</Heading>
                <Text>
                  Attention in when in just something bread not hundred well,
                  muff value emerge on the known officers. A parameters phase
                  orthographic the can differentiates.
                </Text>
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col className="md-12">
              <Box className="usermap-block">
                <Image src={Diagram} alt="cryptik user map" />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </UserMapWrapper>
  );
};

export default UserMap;
