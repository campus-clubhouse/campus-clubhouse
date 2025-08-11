'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function PowerliftingClient() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Save a logo at /public/powerlifting-logo.png or adjust src */}
              <Image
                src="/powerlifting-logo.png"
                alt="UH Mānoa Powerlifting Club Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">Powerlifting Club (UH Mānoa)</h1>
                <Badge bg="success">Fitness</Badge>
                <Badge bg="success">Strength</Badge>
                <Badge bg="success">Competition</Badge>
              </div>
              <p className="text-muted mb-3">
                A student community focused on the big three — squat, bench, and deadlift. Train together,
                learn technique and programming basics, and prep for mock meets or sanctioned comps.
                All experience levels welcome.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as="a"
                  href="https://www.instagram.com/uhmpowerlifting/?hl=en"
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
                  The Powerlifting Club connects UH Mānoa students who want to get stronger safely.
                  Expect group training sessions, form checks, programming/Q&A, recovery tips, and
                  occasional mock meets. Whether you&apos;re new to lifting or chasing PRs, you&apos;re welcome here.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Meetings & Events */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Meetings & Events</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Training Sessions:</strong>
                    {' '}
                    Weekly group lifts (schedule posted each term)
                  </li>
                  <li>
                    <strong>Technique Clinics:</strong>
                    {' '}
                    Squat/bench/deadlift cues & setup
                  </li>
                  <li>
                    <strong>Programming Basics:</strong>
                    {' '}
                    Volume, intensity, peaking
                  </li>
                  <li>
                    <strong>Mock Meets:</strong>
                    {' '}
                    Practice attempts and commands
                  </li>
                </ul>
                <small className="text-muted">
                  Exact dates/times announced on Instagram stories and posts.
                </small>
              </Card.Body>
            </Card>

            {/* How to Join */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>How to Join</Card.Title>
                <ol className="mb-3">
                  <li>Follow the Instagram for the next meetup and orientation info.</li>
                  <li>Show up to a session—bring water and gym gear; belts/straps optional.</li>
                  <li>Introduce yourself! All majors and experience levels are welcome.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href="https://www.instagram.com/uhmpowerlifting/?hl=en"
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
                    <div>Fitness · Strength · Competition</div>
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
                    href="https://www.instagram.com/uhmpowerlifting/?hl=en"
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
                    <strong>Contact:</strong>
                    {' '}
                    jacklai@hawaii.edu
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
