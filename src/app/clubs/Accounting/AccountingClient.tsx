'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function AccountingClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Put accounting logo at /public/accounting-logo.png or swap this path */}
              <Image
                src="/accounting-logo.png"
                alt="UH Mānoa Accounting Club Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Accounting Club (UH Mānoa)</h1>
                <Badge bg="success">Business</Badge>
                <Badge bg="success">Professional</Badge>
                <Badge bg="success">Networking</Badge>
              </div>
              <p className="text-muted mb-3">
                A student organization supporting careers in accounting, audit, tax, and related fields
                through workshops, firm info sessions, and networking with professionals and alumni.
              </p>
              <div className="d-flex flex-wrap gap-2">
                {/* External link as <a> */}
                <Button
                  as="a"
                  href="https://acuhmanoa.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </Button>

                {/* Internal link wrapped with <Link> */}
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
                  The Accounting Club connects UH Mānoa students with resources to explore the accounting
                  profession. Activities include resume and interview prep, firm presentations, peer mentorship,
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
                    {' '}
                    TBD (announced at the start of each term)
                  </li>
                  <li>
                    <strong>Workshops:</strong>
                    {' '}
                    Resume reviews, interview practice, Excel/analytics skill-building
                  </li>
                  <li>
                    <strong>Professional Events:</strong>
                    {' '}
                    Employer info sessions, panels, and networking nights
                  </li>
                </ul>
                <small className="text-muted">
                  Exact dates/times posted on the website and socials each month.
                </small>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Visit the website to see the latest schedule and sign-up information.</li>
                  <li>Attend a general meeting or workshop to get oriented.</li>
                  <li>Introduce yourself! Members from all backgrounds are welcome.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://acuhmanoa.org/"
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
                    <div>Business · Professional · Networking</div>
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
                    href="https://acuhmanoa.org/"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Website
                  </Button>
                  {/* Add socials here later, e.g. Discord/Instagram/Email */}
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
                    TBD
                  </li>
                  <li>
                    <strong>Vice President:</strong>
                    {' '}
                    TBD
                  </li>
                  <li>
                    <strong>Treasurer:</strong>
                    {' '}
                    TBD
                  </li>
                </ul>
                <small className="text-muted">Update with real names once confirmed.</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
