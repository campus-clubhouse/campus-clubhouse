'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function GreyHatsClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/greyhats-logo.png or change the src */}
              <Image
                src="/GreyHats-logo.png"
                alt="UH Mānoa Grey Hats Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Grey Hats (UH Mānoa)</h1>
                <Badge bg="success">Cybersecurity</Badge>
                <Badge bg="success">CTF</Badge>
                <Badge bg="success">Workshops</Badge>
              </div>
              <p className="text-muted mb-3">
                A student-led cybersecurity club focused on hands-on learning—CTFs, blue/red team
                concepts, tooling, and talks from peers and pros. All experience levels welcome.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://uhmgreyhats.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
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
                  Grey Hats builds practical security skills through weekly meetups, labs, and
                  competitions. Expect topics like web exploitation, reverse engineering,
                  forensics, networking, and scripting—plus teamwork and ethical practices.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Meetings & Events */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Meetings & Events</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>General Meetings:</strong>
                    {' '}
                    Weekly meetings going over various topics from 9/10-12/10
                  </li>
                  <li>
                    <strong>Competitions:</strong>
                    {' '}
                    NCL 10/25-27 individual game 11/08-10 team game
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Visit the website for the latest schedule and onboarding info.</li>
                  <li>Bring a laptop if you want to follow hands-on labs.</li>
                  <li>All majors/skill levels are welcome—start where you are.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://uhmgreyhats.github.io/"
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
                    <div>Cybersecurity · Tech · Competition</div>
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
                  Have questions or want to collaborate? Reach out or stop by a meeting.
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button
                    as="a"
                    href="https://uhmgreyhats.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Website
                  </Button>
                  {/* Add Discord/Email here later if you have it */}
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
                    emorrell@hawaii.edu
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
