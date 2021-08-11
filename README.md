# pix4d

This is a vanilla implementation of the assignement. 

# propositions for the viewer:

## Singleton
In pix4d, we use only one viewer for big scenes and therefore we need can afford to make the viewer a singleton in order to call it from different points of the application.

## Geometry and Materials
Accessing the geometry and the materials of the meshes is easily readable but is updating it is not easy which is obvious because it's just a viewer. But implementing a facade for updating the THREEjs properties will help us implement features faster in the future.

## BabylonJS
I would also switch from ThreeJS to BabylonJS due to 5 reasons:

- API doesn't completely change every 3 months which helps when looking up older solutions online
- Very active and helpful community
- BabylonJS's node material tool enables creating high quality shaders easily
- Very active and helpful developers (Three.js: oldest bug on GitHub from April 2013, Babylon.js: oldest bug on GitHub from 2 days ago)
- The playground is such a great tool to try things out quickly, explain issues and provide help

