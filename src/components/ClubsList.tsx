'use client';

import Link from 'next/link';
import { Container, Row, Col, Card } from 'react-bootstrap';

type Club = {
  id: string;
  name: string;
  description: string;
};

const clubs: Club[] = [
  { id: '8bit', name: '8bit Club', description: 'For those passionate about software development and solutions' },
  { id: 'hiking', name: 'Hiking Club', description: 'Explore Oahu’s trails!' },
  { id: 'anime', name: 'Anime Society', description: 'Watch and discuss anime weekly.' },
  { id: 'striking', name: 'Kickboxing Club', description: 'Learn techniques and spar every Wednesday' },
];

export default function ClubsList() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Campus Clubs</h1>
      <Row>
        {/* USE unique ID as key */}
        {clubs.map((club) => (
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
