'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

type Club = {
  id: string;
  name: string;
  description: string;
};

const clubs: Club[] = [
  { id: 'chess', name: 'Chess Club', description: 'Strategy and fun every Friday.' },
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
            <Card>
              <Card.Body>
                <Card.Title>{club.name}</Card.Title>
                <Card.Text>{club.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
