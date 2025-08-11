'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

type Club = {
  id: string;
  name: string;
  description: string;
};

const clubs: Club[] = [
  { id: '8bit', name: '8bit Club', description: 'For those passionate about software development and solutions' },
  { id: 'Accounting', name: 'Accounting Club', description: 'Opportunity to invest in professional growth' },
  { id: 'AMA', name: 'American Marketing Association', description: 'UHM chapter associated with AMA organization' },
  { id: 'striking', name: 'Kickboxing Club', description: 'Learn techniques and spar every Wednesday' },
];

export default function ClubsList() {
  const [filter, setFilter] = useState('');

  // Filter clubs based on name or description
  const filteredClubs = clubs.filter(
    (club) => club.name.toLowerCase().includes(filter.toLowerCase())
    || club.description.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Campus Clubs</h1>

      {/* Filter Input */}
      <Form.Group className="mb-4" controlId="filter">
        <Form.Control
          type="text"
          placeholder="Search clubs..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Form.Group>

      <Row>
        {/* USE unique ID as key */}
        {filteredClubs.map((club) => (
          <Col md={4} className="mb-4" key={club.id}>
            <Card className="h-100 position-relative">
              <Card.Body>
                <Card.Title className="h5 mb-2">
                  <Link
                    href={`/clubs/${club.id}`}
                    className="stretched-link text-reset text-decoration-none"
                  >
                    {club.name}
                  </Link>
                </Card.Title>
                <Card.Text>{club.description}</Card.Text>
                {/* Bottom-right hint */}
                <div className="click-hint position-absolute bottom-0 end-0 m-3 small text-secondary">
                  Click here →
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
