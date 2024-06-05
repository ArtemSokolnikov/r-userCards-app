import React, { useState } from 'react';
import Object3DViewer from './Object3DViewer';
import ObjectSelector from './ObjectSelector';

const ThreeDObjectViewer = () => {
  const [selectedObject, setSelectedObject] = useState('Circle');

  return (
    <div style={{ display: 'flex',flexDirection: 'column',alignItems: 'center',gap: '10px',padding: '10px'}}>
      <ObjectSelector selectedObject={selectedObject} onSelectObject={setSelectedObject} />
      <Object3DViewer selectedObject={selectedObject} />
    </div>
  );
};

export default ThreeDObjectViewer;
