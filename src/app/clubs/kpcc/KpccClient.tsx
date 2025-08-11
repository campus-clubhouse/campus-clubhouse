'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function KpccClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Put a logo at /public/kpop-cardio-crew-logo.png or update src */}
              <Image
                src="/kpcc-logo.png"
                alt="Kpop Cardio Crew UH Mānoa Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Kpop Cardio Crew (UH Mānoa)</h1>
                <Badge bg="success">Dance</Badge>
                <Badge bg="success">Fitness</Badge>
                <Badge bg="success">Community</Badge>
              </div>
              <p className="text-muted mb-3">
                A fun, high-energy group where we learn K-pop choreos, get a great workout,
                and build community—no prior dance experience required.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://www.instagram.com/kpopcardiocrew/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Button>
                <Link href="/clubs">
                  <Button variant="outline-secondary">← Back to Clubs</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content */}
      <Container className="py-5">
        <Row className="g-4">
          <Col lg={8}>
            {/* About */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  Kpop Cardio Crew brings UH Mānoa students together to learn choreography,
                  move to their favorite songs, and stay active. Sessions are beginner-friendly,
                  welcoming, and a great way to meet new friends who love K-pop and dance.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Meetings & Events */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Meetings & Events</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Weekly Classes:</strong>
                    {' '}
                    Follow-along cardio & choreo sessions
                  </li>
                  <li>
                    <strong>Workshops:</strong>
                    {' '}
                    Learn popular routines step-by-step
                  </li>
                  <li>
                    <strong>Pop-Ups:</strong>
                    {' '}
                    On-campus dance meetups and collabs
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Follow the Instagram for the next class and location.</li>
                  <li>Wear comfy clothes, bring water, and show up—no experience needed.</li>
                  <li>Invite a friend and have fun!</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://www.instagram.com/kpopcardiocrew/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Updates
                  </Button>
                  <Link href="/clubs">
                    <Button variant="outline-secondary">Explore More Clubs</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            {/* Quick Facts */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Quick Facts</Card.Title>
                <div className="d-flex flex-column gap-2">
                  <div>
                    <div className="text-muted">Campus</div>
                    <div>UH Mānoa</div>
                  </div>
                  <div>
                    <div className="text-muted">Category</div>
                    <div>Dance · Fitness · Community</div>
                  </div>
                  <div>
                    <div className="text-muted">Membership</div>
                    <div>Open to all UH students</div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Contact */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <p className="mb-3">
                  Questions or collabs? Reach out or join a class.
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button
                    as="a"
                    href="https://www.instagram.com/kpopcardiocrew/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Instagram
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* Officers (mock data) */}
            <Card>
              <Card.Body>
                <Card.Title>Point of contact</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Contact:</strong>
                    {' '}
                    Cassandra Liong, liongcv@hawaii.edu
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
