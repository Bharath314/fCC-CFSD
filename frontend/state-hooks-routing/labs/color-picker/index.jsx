const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
    console.log(event.target.value)
  }

  return (
    <div 
      id="color-picker-container"
      style={{
        backgroundColor: color,
      }}
    >
      <p>Choose a color using the picker below:</p>
        <input
          id="color-input"
          type="color"
          onChange={handleChangeColor}
          value={color}
        ></input>
    </div>
  )
};