import shaders from './gl/shaders';
import f from './fonts';

const options = [
  {
    word: 'TWISTED',
    color: '#ffffff',
    fill: '#d8345f',
    geometry: new THREE.BoxGeometry(100, 10, 10, 64, 64, 64),
    position: {
      texture: [-0.945, -0.5, 0],
      mesh: [0, 0, 0],
    },
    scale: [0.009, 0.04, 1],
    shaders: {
      vertex: shaders.vertex.demo3,
      fragment: shaders.fragment.demo3,
    },
    font: {
      file: f.file.demo3,
      atlas: f.atlas.demo3,
    },
    class: 'demo-3',
  },
];

export default options;
