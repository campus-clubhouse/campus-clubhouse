'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p className="text-center mt-5">Loading...</p>;
  if (!session?.user) redirect('/auth/signin');

  // Dummy user data — replace with real database values later
  const user = {
    name: session.user.name || 'Admin',
    email: session.user.email || 'admin@foo.com',
    role: 'ADMIN',
    major: 'Computer Science',
    year: 'Sophomore',
    interests: ['Tech', 'Music', 'Gaming'],
    bio: 'Excited to get involved with tech clubs!',
    discord: 'Admin#1234',
    notifications: true,
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-lg rounded-4 bg-light border-0">
        <Row className="align-items-center mb-4">
          <Col md={2} className="text-center">
            <div className="bg-secondary rounded-circle mx-auto" style={{ width: '80px', height: '80px' }} />
          </Col>
          <Col md={10}>
            <div className="d-flex align-items-center gap-3 mb-1">
              <h2 className="mb-0">{user.name}</h2>
              <p className="mb-0 text-muted">{user.role}</p>
            </div>

          </Col>
        </Row>

        <Row>
          {/* Left Column */}
          <Col md={6}>
            <h5 className="mb-3">Academic Info</h5>
            <p>
              <strong>Major:</strong>
              {' '}
              {user.major}
            </p>
            <p>
              <strong>Year:</strong>
              {' '}
              {user.year}
            </p>

            <h5 className="mt-4 mb-3">Interests</h5>
            {user.interests.map((interest) => (
              <Badge key={interest} bg="primary" className="me-2 mb-2">{interest}</Badge>
            ))}
            <h5 className="mt-4">Bio</h5>
            <p>{user.bio}</p>
          </Col>

          {/* Right Column */}
          <Col md={6}>
            <h5 className="mb-3">Contact Info</h5>

            <p>
              <i className="bi bi-discord me-2 text-primary" />
              <strong>Discord:</strong>
              {' '}
              {user.discord}
            </p>

            <p>
              <i className="bi bi-envelope-fill me-2 text-primary" />
              <strong>Email:</strong>
              {' '}
              {user.email}
            </p>
            <h5 className="mt-4 mb-3">Settings</h5>
            <Form.Check
              type="switch"
              id="notifications-switch"
              label="Notifications"
              defaultChecked={user.notifications}
            />

            <div className="mt-4">
              <Button variant="secondary" className="w-100">Edit Profile</Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
