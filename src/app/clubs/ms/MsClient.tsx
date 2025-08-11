'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function MsClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Put a logo at /public/manoa-scholars-logo.png or update src */}
              <Image
                src="/ms-logo.png"
                alt="Manoa Scholars Club Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Manoa Scholars Club (UH Mānoa)</h1>
                <Badge bg="success">Academic</Badge>
                <Badge bg="success">Community</Badge>
                <Badge bg="success">Leadership</Badge>
              </div>
              <p className="text-muted mb-3">
                A student organization that supports scholarly growth, leadership, and service through
                community, mentorship, and events across campus.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://manoascholarsclub.weebly.com/"
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
                  The Manoa Scholars Club connects motivated students for academic enrichment and
                  campus engagement. Expect study socials, guest speakers, peer mentoring, and
                  opportunities to develop leadership through service and projects.
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
                    TBD (announced each term)
                  </li>
                  <li>
                    <strong>Academic Events:</strong>
                    {' '}
                    Study sessions, faculty talks, skills workshops
                  </li>
                  <li>
                    <strong>Service & Socials:</strong>
                    {' '}
                    Community projects and mixers
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Visit the website for membership details and upcoming events.</li>
                  <li>Attend a meeting or social to get oriented.</li>
                  <li>Introduce yourself—students from any major are welcome.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://manoascholarsclub.weebly.com/"
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
                    <div>Academic · Community · Leadership</div>
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
                  Have questions or want to collaborate? Reach out or drop by a meeting.
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button
                    as="a"
                    href="https://manoascholarsclub.weebly.com/"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Website
                  </Button>
                  {/* Add Instagram/Email later if available */}
                </div>
              </Card.Body>
            </Card>

            {/* Officers (mock data) */}
            <Card>
              <Card.Body>
                <Card.Title>Officers</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Meetings coordinator:</strong>
                    {' '}
                    Liliana Kubo, lkubo4@hawaii.edu
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
