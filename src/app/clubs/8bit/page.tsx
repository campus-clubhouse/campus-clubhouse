import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export const metadata = {
  title: '8Bit Club · Campus Clubhouse',
  description: 'Mockup club page for 8Bit (UH Mānoa) in the Campus Clubhouse style.',
};

export default function EightBitClubPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={3}>
              {/* Replace with a real logo if you have one in /public */}
              <Image
                src="/public/8bit-logo.png"
                alt="8Bit UH Mānoa Logo"
                width={200}
                height={200}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="m-0">8Bit (UH Mānoa)</h1>
                <Badge bg="dark">Technology</Badge>
                <Badge bg="secondary">Gaming</Badge>
                <Badge bg="success">Community</Badge>
              </div>
              <p className="text-muted mb-3">
                A student community for game development, retro and modern gaming culture,
                creative coding, and tech meetups at UH Mānoa.
              </p>
              <div className="d-flex flex-wrap gap-2">
                {/* External link as <a> */}
                <Button as="a" href="https://8bithawaii.org/" target="_blank" rel="noreferrer">
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
                  8Bit brings together UH Mānoa students who love building and playing games,
                  experimenting with interactive media, and learning the tools of the trade—from
                  engines and art pipelines to sound and publishing. We run beginner-friendly
                  workshops, casual game nights, and occasional jams/collabs.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Upcoming / Regular Meetings */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Meetings & Events</Card.Title>
                <ul className="mb-0">
                  <li>
                    <strong>Weekly Meetup:</strong>
                    {' '}
                    TBD (Semester schedule announced at the start of term)
                  </li>
                  <li>
                    <strong>Workshops:</strong>
                    {' '}
                    Tools like Unity, Godot, pixel art, audio, and more
                  </li>
                  <li>
                    <strong>Community:</strong>
                    {' '}
                    Playtests, showcases, and collabs with other UH clubs
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
                  <li>Check the website for the next meeting and quick onboarding.</li>
                  <li>Bring a laptop (optional) if you want to follow along during workshops.</li>
                  <li>Say hi! All majors and experience levels are welcome.</li>
                </ol>
                <div className="d-flex flex-wrap gap-2">
                  {/* External link as <a> */}
                  <Button as="a" href="https://8bithawaii.org/" target="_blank" rel="noreferrer">
                    Get Updates
                  </Button>

                  {/* Internal link wrapped with <Link> */}
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
                    <div>Tech · Gaming · Creative</div>
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
                  Have questions or want to collaborate? Please reach out!
                </p>
                <div className="d-flex flex-column gap-2">
                  <Button as="a" href="https://8bithawaii.org/" target="_blank" rel="noreferrer">
                    Website
                  </Button>
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
