# pix4d

This is a vanilla implementation of the assignement. 

# propositions for the viewer:

## Singleton
In pix4d, we use only one viewer for big scenes and therefore we need can afford to make the viewer a singleton in order to call it from different points of the application.

## Geometry and Materials
Accessing the geometry and the materials of the meshes is easily readable but is updating it is not easy which is obvious because it's just a viewer. But implementing a facade for updating the THREEjs properties will help us implement features faster in the future.

## Fiber
It should be very interesting to test reimplementing it with react fiber. The interaction with the UI should be way smoother. 

