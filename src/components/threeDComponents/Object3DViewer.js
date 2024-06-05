import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Object3DViewer = ({ selectedObject }) => {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  let object;

  useEffect(() => {
    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    const geometry = createGeometry(selectedObject);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    object = new THREE.Mesh(geometry, material);
    scene.add(object);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, [selectedObject]);

  const createGeometry = (selectedObject) => {
    switch (selectedObject) {
      case 'Rectangle':
        return new THREE.BoxGeometry();
      case 'Triangle':
        return new THREE.ConeGeometry();
      case 'Circle':
        return new THREE.SphereGeometry();
      default:
        return new THREE.BoxGeometry();
    }
  };

  const handleFaceClick = (event) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(object);

    if (intersects.length > 0) {
      const faceIndex = intersects[0].faceIndex;
      const color = new THREE.Color(0x0000ff);
      intersects[0].object.geometry.faces[faceIndex].color = color;
      intersects[0].object.geometry.colorsNeedUpdate = true;
    }
  };

  return <div ref={containerRef} onClick={handleFaceClick}></div>;
};

export default Object3DViewer;
