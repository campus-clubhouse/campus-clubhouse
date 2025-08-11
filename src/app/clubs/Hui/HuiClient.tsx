'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function HuiClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/hui-logo.png or change the src below */}
              <Image
                src="/hui-logo.png"
                alt="Hawaiʻi Undergraduate Initiative (HUI) Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Hawaiʻi Undergraduate Initiative (HUI)</h1>
                <Badge bg="success">Student Success</Badge>
                <Badge bg="success">Mentorship</Badge>
                <Badge bg="success">Community</Badge>
              </div>
              <p className="text-muted mb-3">
                A UH Mānoa program that builds community and supports first-year success through mentorship,
                workshops, and campus connections. All majors and experience levels welcome.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://www.manoa.hawaii.edu/omsshui/"
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
                  HUI helps students transition into UH Mānoa by fostering belonging and
                  providing practical support. Expect peer mentorship, academic skills
                  workshops, and opportunities to connect with campus resources and student orgs.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Meetings & Events */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Meetings & Events</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Welcome & Orientation:</strong>
                    {' '}
                    Start-of-term kickoff and resource tour
                  </li>
                  <li>
                    <strong>Workshops:</strong>
                    {' '}
                    Study strategies, time management, campus tools
                  </li>
                  <li>
                    <strong>Community Events:</strong>
                    {' '}
                    Socials, mixers, and collaboration with other programs
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Visit the HUI website for current schedule and sign-up information.</li>
                  <li>Attend an info session or workshop to get started.</li>
                  <li>Introduce yourself—mentors and staff can help you plug into resources.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://www.manoa.hawaii.edu/omsshui/"
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
                    <div>Student Success · Mentorship · Community</div>
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
                  Have questions or want to collaborate? Reach out or drop by an event.
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button
                    as="a"
                    href="https://www.manoa.hawaii.edu/omsshui/"
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
                <Card.Title>Point of contact</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Program Lead:</strong>
                    {' '}
                    Jasmine Ko at jqko@hawaii.edu
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
