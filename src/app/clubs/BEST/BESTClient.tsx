'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function BESTClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/best-logo.png or adjust this path */}
              <Image
                src="/best-logo.png"
                alt="Business Executive Society of Tomorrow (BEST) Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Business Executive Society of Tomorrow (BEST)</h1>
                <Badge bg="success">Business</Badge>
                <Badge bg="success">Leadership</Badge>
                <Badge bg="success">Professional</Badge>
                <Badge bg="success">Networking</Badge>
              </div>
              <p className="text-muted mb-3">
                BEST empowers UH Mānoa students to develop leadership, professional, and networking
                skills through workshops, speaker events, and hands-on projects with peers and industry.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button as="a" href="https://www.bestuhm.org/home" target="_blank" rel="noreferrer">
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
                  The Business Executive Society of Tomorrow (BEST) brings together students interested in
                  business strategy, entrepreneurship, and careers across consulting, finance, marketing, and
                  operations. Members gain experience through workshops, resume/LinkedIn reviews, case activities,
                  and community service. All majors are welcome.
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
                    <strong>General Meetings:</strong>
                    {' '}
                    Follow their events tab to keep up with any ongoing or upcoming events
                    {' '}
                    <a
                      href="https://www.bestuhm.org/events"
                      target="_blank"
                      rel="noreferrer"
                      className="link-primary"
                    >
                      here
                    </a>
                    .
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Visit the website for the latest schedule and membership details.</li>
                  <li>Attend a general meeting or workshop to get oriented.</li>
                  <li>Introduce yourself—students from any major or experience level are welcome.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button as="a" href="https://www.bestuhm.org/home" target="_blank" rel="noreferrer">
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
                    <div>Business · Leadership · Professional</div>
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
                  Have questions or want to collaborate? Reach out to slee3079@hawaii.edu or drop by a meeting.
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button
                    as="a"
                    href="https://www.bestuhm.org/home"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Website
                  </Button>
                  {/* Add socials here later if you have them */}
                </div>
              </Card.Body>
            </Card>

            {/* Officers (mock data) */}
            <Card>
              <Card.Body>
                <Card.Title>Officers</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>President:</strong>
                    {' '}
                    NICKOLAS WINDISCH
                  </li>
                  <li>
                    <strong>Vice President:</strong>
                    {' '}
                    LARA HO
                  </li>
                  <li>
                    <strong>Treasurer:</strong>
                    {' '}
                    STEVEN LI
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
