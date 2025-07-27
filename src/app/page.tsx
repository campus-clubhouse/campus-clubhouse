'use client';

import { Container, Button } from 'react-bootstrap';
import { PeopleFill } from 'react-bootstrap-icons';

const Home = () => (
  <main className="hero-section">
    <div className="hero-overlay">
      <Container className="text-center d-flex align-items-center justify-content-center min-vh-100 flex-column">
        <PeopleFill size={100} className="mb-4 text-dark" />
        <h1 className="display-4 fw-bold text-dark">Welcome to Campus Clubhouse</h1>
        <p className="lead text-dark">
          Find clubs and make memories today.
        </p>
        <Button variant="success" size="lg" href="/clubs">
          Browse Clubs
        </Button>
      </Container>
    </div>
  </main>
);

export default Home;
