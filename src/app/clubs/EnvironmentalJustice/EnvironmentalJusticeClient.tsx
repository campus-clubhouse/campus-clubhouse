'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function EnvironmentalJusticeClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/environmental-justice-logo.png or change src */}
              <Image
                src="/EJ-logo.png"
                alt="Environmental Justice Club UH Mānoa Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Environmental Justice Club (UH Mānoa)</h1>
                <Badge bg="success">Sustainability</Badge>
                <Badge bg="success">Activism</Badge>
                <Badge bg="success">Community</Badge>
              </div>
              <p className="text-muted mb-3">
                A student-led org advocating for people and planet—connecting climate, health,
                culture, and equity. We host teach-ins, cleanups, and campaigns with partners on
                campus and across Oʻahu. All experience levels welcome.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://www.instagram.com/environmentaljusticeuhm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow on Instagram
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
                  The Environmental Justice Club brings together students who care about
                  sustainability and social justice. Activities include educational teach-ins,
                  hands-on service (beach/stream cleanups, native planting), policy & advocacy
                  workshops, and collaborations with other UH groups and local nonprofits.
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
                    Meetings are held weekly at 4pm on Wednesdays
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Follow the Instagram for the next meeting and volunteer days.</li>
                  <li>Show up—no prior experience required.</li>
                  <li>Bring a friend and water bottle; we’ll handle the rest!</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://www.instagram.com/environmentaljusticeuhm/"
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
                    <div>Sustainability · Activism · Community</div>
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
                  Have questions or want to collaborate? Reach out or join a meetup.
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button
                    as="a"
                    href="https://www.instagram.com/environmentaljusticeuhm/"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Instagram
                  </Button>
                  {/* Add email/Discord later if available */}
                </div>
              </Card.Body>
            </Card>

            {/* Officers (mock data) */}
            <Card>
              <Card.Body>
                <Card.Title>Point of contact</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Who to contanct:</strong>
                    {' '}
                    Gabrielle Kics at gkics@hawaii.edu
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
