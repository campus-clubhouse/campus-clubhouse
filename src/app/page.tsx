import { Container, Row, Col, Button } from 'react-bootstrap';
import { PeopleFill } from 'react-bootstrap-icons';

const Home = () => (
  <main>
    <Container fluid className="py-5 bg-light text-center">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <PeopleFill size={120} className="mb-4 text-success" />
          <h1 className="mb-3">Find a club for you</h1>
          <Button variant="success" size="lg">Explore Clubs</Button>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
