import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'

const EditForm = (props) => {
    const [bio, setBio] = useState('')
    const [status, setStatus] = useState('')
    const [meditation, setMeditation] = useState('')
    const [experience, setExperience] = useState('')

    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Meditation</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter Meditation"
                    value={meditation}
                    onChange={(e) => setMeditation(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter Experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" block>Submit</Button>
        </Form>
    )
}

export default EditForm;