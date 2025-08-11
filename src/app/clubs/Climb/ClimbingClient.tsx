'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function ClimbingClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/climbing-logo.png or change the src below */}
              <Image
                src="/climbclub-logo.png"
                alt="UH Mānoa Climbing Club Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Climbing Club (UH Mānoa)</h1>
                <Badge bg="success">Outdoors</Badge>
                <Badge bg="success">Fitness</Badge>
                <Badge bg="success">Community</Badge>
              </div>
              <p className="text-muted mb-3">
                A student community for bouldering, top rope, and outdoor climbing. We host gym meetups,
                skills sessions, and trips when conditions and permits allow. Beginners welcome!
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://www.instagram.com/climbuhm/?hl=en"
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
                  The Climbing Club brings together UH Mānoa students who love moving on rock—indoors and out.
                  We focus on safe technique, training, and building a supportive crew. Expect gym sessions,
                  movement/footwork workshops, and occasional outdoor excursions (weather and access dependent).
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Meetings & Events */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Meetings & Events</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Gym Meetups:</strong>
                    {' '}
                    Weekly bouldering/top rope sessions
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Follow the Instagram for the next meetup and announcements.</li>
                  <li>Show up to a session—no experience needed. Rental gear OK.</li>
                  <li>Be kind, climb safe, and have fun!</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://www.instagram.com/climbuhm/?hl=en"
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
                    <div>Outdoors · Fitness · Community</div>
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
                    href="https://www.instagram.com/climbuhm/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Instagram
                  </Button>
                  {/* Add Discord or email later if available */}
                </div>
              </Card.Body>
            </Card>

            {/* Officers (mock data) */}
            <Card>
              <Card.Body>
                <Card.Title>Point of contact</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Who to contact:</strong>
                    {' '}
                    Ariela Gaffke at arielae@hawaii.edu
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
