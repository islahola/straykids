import React from 'react';
import {Scene,PerspectiveCamera, WebGLRenderer,BoxGeometry,MeshBasicMaterial,Mesh} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gambar from '../assets/image/scene.gltf'
const Oddenery = () => {
  const scene = new Scene();

  const camera = new PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );

  const renderer = new WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  const geometry = new BoxGeometry( 1, 1, 1 );
  const material = new MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new Mesh( geometry, material );
  scene.add( cube );
  
  const loader = new GLTFLoader();
  loader.load( '../assets/image/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
  }, undefined, function ( error ) {
    console.error( error );
  } );

  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
camera.position.z = 5;
  return (
    <div>
      {animate()}
    </div>
  );
}

export default Oddenery;
