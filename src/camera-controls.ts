import { PerspectiveCamera, Vector3 } from "three";

/**
 * Simple camera controls which just make the camera spin around a target position.
 */
export class CameraControls {
  rotationSpeed = 0.001;
  distance = 10.0;
  target = new Vector3();
  private angle = 0.0;

  constructor(private camera: PerspectiveCamera) {}

  update(dt: number): void {
    this.angle += this.rotationSpeed * dt;

    const x = Math.sin(this.angle) * this.distance;
    const z = Math.cos(this.angle) * this.distance;
    this.camera.position.set(x, 0, z);
    this.camera.lookAt(this.target);
  }
}
