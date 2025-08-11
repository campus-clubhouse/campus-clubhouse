'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function IcsparkClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/icspark-logo.png or change src */}
              <Image
                src="/icspark-logo.png"
                alt="ICSpark UH Mānoa Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">ICSpark (UH Mānoa)</h1>
                <Badge bg="success">Technology</Badge>
                <Badge bg="success">Coding</Badge>
                <Badge bg="success">Outreach</Badge>
              </div>
              <p className="text-muted mb-3">
                A student community for learning by building—projects, workshops, and events that
                spark interest in software development and tech at UH Mānoa.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://icspark.github.io/index.html"
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
                  ICSpark hosts beginner-friendly workshops, project teams, and community events.
                  Members collaborate on web/mobile apps, tooling, and fun experiments while
                  growing skills in coding, teamwork, and shipping real things.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Meetings & Events */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Meetings & Events</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Weekly Meetups:</strong>
                    {' '}
                    Coding sessions & project standups
                  </li>
                  <li>
                    <strong>Workshops:</strong>
                    {' '}
                    Web, TypeScript, Git/GitHub, frameworks
                  </li>
                  <li>
                    <strong>Show & Tell:</strong>
                    {' '}
                    Demos, lightning talks, peer feedback
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
                  <li>Visit the website for the current schedule and projects.</li>
                  <li>Drop into a meetup—bring a laptop if you want to follow along.</li>
                  <li>Introduce yourself! All majors and experience levels are welcome.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://icspark.github.io/index.html"
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
                    <div>Technology · Coding · Outreach</div>
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
                  Have questions or want to collaborate? Reach out or drop by a meetup.
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button
                    as="a"
                    href="https://icspark.github.io/index.html"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-primary"
                  >
                    Website
                  </Button>
                  {/* Add Discord/Instagram/GitHub later if available */}
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
                    Cody Torres, codygt@hawaii.edu
                  </li>
                  <li>
                    <strong>Vice President:</strong>
                    {' '}
                    Brianna Lee
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
