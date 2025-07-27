'use client';

import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const dummyClubData = {
  name: 'Manoa Hiking Club',
  description: 'We go hiking and we enjoy it!',
  meetingTime: 'Fridays at 3 PM',
  location: 'Campus Center 215',
  website: 'https://manoahikingclub.com',
  contact: 'WeLikeHikes@hawaii.edu',
  interests: ['Athletics', 'Outdoors'],
  photos: [],
};

export function ClubAdminDashboard() {
  const [club, setClub] = useState(dummyClubData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setClub({ ...club, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Club info updated!');
  };

  return (
    <Container className="mt-4">
      <h2>Edit Your Club</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Club Name</Form.Label>
          <Form.Control name="name" value={club.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" rows={3} value={club.description} onChange={handleChange} />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Meeting Time</Form.Label>
              <Form.Control name="meetingTime" value={club.meetingTime} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control name="location" value={club.location} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control name="website" value={club.website} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Email</Form.Label>
          <Form.Control name="contact" value={club.contact} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="primary">Update Club Info</Button>
      </Form>
    </Container>
  );
}

export default ClubAdminDashboard;
