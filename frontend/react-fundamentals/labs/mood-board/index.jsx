export function MoodBoardItem({ color, image, description }) {
  return <div className="mood-board-item" style={{backgroundColor: color}}>
    <img src={image} className="mood-board-image"/>
    <h3 className="mood-board-text">{description}</h3>
  </div>
}

export function MoodBoard() {
  const items = [
    {
      "id": 1,
      "color": "red",
      "image":"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      "description": "Glide through towering cliffs on an adrenaline-filled kayaking adventure, where every paddle stroke reveals raw, untamed beauty.",
    },
    {
      "id": 2,
      "color": "blue",
      "image":"https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      "description": "Discover a hidden world in tidal pools, where each step uncovers vibrant marine life thriving in nature's rocky aquariums.",
    },
    {
      "id": 3,
      "color": "green",
      "image":"https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      "description": "Unwind on a grassy beach, where soft green meadows blend seamlessly into golden sands and gentle waves.",
    }
  ];

  return <div>
    <h1 className="mood-board-heading">Destination Mood Board</h1>
    <div className="mood-board">
      {items.map((item) => (
        <MoodBoardItem
          key={item.key}
          color={item.color}
          description={item.description}
          image={item.image} 
        />
      ))}
      </div>  
  </div>
}
