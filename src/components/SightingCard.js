import { Card, Icon, Image } from "semantic-ui-react";

function SightingCard({ sighting }) {
  const { image, location, likes, name } = sighting;
  // <div>
  //   <h3>{name}</h3>
  //   <img src={image} alt={name} style={{ width: "400px" }} />
  //   <p>{location}</p>
  //   <p>Likes: {likes}</p>
  // </div>
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{location}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="user" />
          {likes} Likes
        </span>
      </Card.Content>
    </Card>
  );
}

export default SightingCard;
