import { Viewer } from "./viewer";
import {MeshStandardMaterial} from 'three';

const viewer = new Viewer();
viewer.initialize(document.getElementById("target"));

const opacitySlider = document.getElementById("opacitySlider");
const pointSizeSlider = document.getElementById("pointSizeSlider");
const pointShapeSlider = document.getElementById("pointShapeSlider");


viewer
  .load(
    "cloud.js",
    "https://cdn.rawgit.com/potree/potree/develop/pointclouds/lion_takanawa/"
  )
  .then(pco => {
    // Make the lion shows up at the center of the screen.
    pco.translateX(-1);
    pco.rotateX(-Math.PI / 2);
    console.log(pco)
    // The point cloud octree already comes with a material which
    // can be customized directly. Here we just set the size of the
    // points.

    pco.material.opacity = opacitySlider.value/100;
    pco.material.size = pointSizeSlider.value/10;
    pco.material.shape = pointShapeSlider.value;
    opacitySlider.addEventListener("change",
      ()=>{
          pco.material.opacity = opacitySlider.value/100;
          });
    pointSizeSlider.addEventListener("change",
      ()=>{
        pco.material.size = pointSizeSlider.value/10;
        });

    pointShapeSlider.addEventListener("change",
    ()=>{
      pco.material.shape = pointShapeSlider.value;
      });

    })
  .catch(err => console.error(err));
