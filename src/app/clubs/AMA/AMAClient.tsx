'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function AMAClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/ama-logo.png or change the src below */}
              <Image
                src="/ama-logo.png"
                alt="American Marketing Association UH Mānoa Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">American Marketing Association (UH Mānoa)</h1>
                <Badge bg="success">Business</Badge>
                <Badge bg="success">Marketing</Badge>
                <Badge bg="success">Professional</Badge>
                <Badge bg="success">Networking</Badge>
              </div>
              <p className="text-muted mb-3">
                A student organization for aspiring marketers and business leaders. AMA at UH Mānoa
                hosts workshops, guest speakers, and networking events to build real-world skills in
                branding, digital marketing, analytics, and more.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button as="a" href="https://www.amauhm.com/" target="_blank" rel="noreferrer">
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
                  The American Marketing Association (AMA) connects students with industry
                  practitioners and career-building opportunities. Expect hands-on workshops,
                  resume/LinkedIn reviews, case study projects, and leadership opportunities
                  within committees and event teams. All majors welcome—if you’re curious about
                  marketing, this is a great place to start.
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
                    Personal branding, digital marketing, analytics, resume & interview prep
                  </li>
                  <li>
                    <strong>Professional Events:</strong>
                    {' '}
                    Speaker series, firm spotlights, and networking nights
                  </li>
                  <li>
                    <strong>Projects & Case Comps:</strong>
                    {' '}
                    Team-based marketing challenges and portfolio-building work
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
                  <li>Visit the website for the latest schedule and membership info.</li>
                  <li>Attend a general meeting or workshop to get oriented.</li>
                  <li>Introduce yourself—students from any major or experience level are welcome.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button as="a" href="https://www.amauhm.com/" target="_blank" rel="noreferrer">
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
                    <div>Business · Marketing · Professional</div>
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
                    href="https://www.amauhm.com/"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Website
                  </Button>
                  {/* Add socials later if desired, e.g.: */}
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
