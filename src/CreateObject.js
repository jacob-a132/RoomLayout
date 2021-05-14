import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

function CreateObject(props) {
  const [width, setWidth] = useState(props.width || 3);
  const [height, setHeight] = useState(props.height || 3);
  const [rotate, setRotate] = useState(props.rotate || 0);
  const [name, setName] = useState(props.name || "bed");
  const [color, setColor] = useState(props.color || "#f44336");
  const [layer, setLayer] = useState(props.layer || 0);
  const [isRound, setIsRound] = useState(props.isRound || false);

  const { onClose, onCreate, isUpdate } = props;
  return (
    <div className="createObject">
      {isUpdate ? "Update object" : "Create new object"}
      <input
        className="closeButton"
        type="button"
        value="X"
        onClick={() => onClose()}
      />
      <div>
        Name
        <input
          className="textBox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Width
        <input
          className="numBox"
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value === "" ? "" : parseFloat(e.target.value))}
        />
      </div>
      <div>
        Height
        <input
          className="numBox"
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value === "" ? "" : parseFloat(e.target.value))}
        />
      </div>
      <div className="colorChooser">
        <CirclePicker
          className=""
          width="210px"
          circleSize={28}
          circleSpacing={7}
          color={color}
          onChangeComplete={color => setColor(color.hex)}
        />
      </div>
      <div>
        Layer
        <input
          className="numBox"
          type="text"
          value={layer}
          onChange={(e) => setLayer(e.target.value === "" ? "" : parseInt(e.target.value))}
        />
      </div>
      <div>
        Rotate
        <input
          className="numBox"
          type="text"
          value={rotate}
          onChange={(e) => setRotate(e.target.value === "" ? "" : parseInt(e.target.value))}
        />
      </div>
      <div>
        <input type="radio" id="isRoundRadio0"
          checked={!isRound} 
          onChange={(e) => setIsRound(false)} 
        />
        <label htmlFor="isRoundRadio0">square</label>
      </div>
      <div>
        <input type="radio" id="isRoundRadio1"
          checked={isRound} 
          onChange={(e) => setIsRound(true)} 
        />
        <label htmlFor="isRoundRadio1">round</label>
      </div>
      <div>
        <input
          type="button"
          value={isUpdate ? "Update" : "Create"}
          onClick={() => onCreate({name, width, height, color, layer, isRound, rotate})}
        />
      </div>
    </div>
  );
}

export default CreateObject;
