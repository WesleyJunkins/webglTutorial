const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if(!gl) {
    throw new Error('WebGL is not supported');
};

alert('Everything is working');

