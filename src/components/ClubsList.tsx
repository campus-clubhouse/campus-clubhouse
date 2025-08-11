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
  { id: 'Accounting', name: 'Accounting Club', description: 'Opportunity to invest in professional growth' },
  { id: 'AMA', name: 'American Marketing Association', description: 'UHM chapter associated with AMA organization' },
  // eslint-disable-next-line max-len
  { id: 'BEST', name: 'Business Executive Society of Tomorrow', description: 'General Business club striving for excellence' },
  { id: 'Climb', name: 'Climbing club', description: 'For those who love to climb!' },
  { id: 'EnvironmentalJustice', name: 'Environmental Justice club', description: 'Students on taking action locally' },
  { id: 'GreyHats', name: 'Grey Hats at UHM', description: 'for ones eager about cybersecurity and practical hacking' },
  { id: 'Powerlifting', name: 'Powerlifting club', description: 'Powerlifting club at UHM' },
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
