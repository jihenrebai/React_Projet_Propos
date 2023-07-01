import React from 'react'
import { Card } from 'react-bootstrap';
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <div style={{  display: "inline-block" ,padding: "35px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageURL}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team: {team}
        <br />
        Nationality: {nationality}
        <br />
        <br />
        Nationality: {nationality}
        <br />
        <br />
        Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player