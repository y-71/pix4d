# pix4d

This is a vanilla implementation of the assignement. 

# propositions for the viewer:

## Singleton
In pix4d, we use one viewer and therefore we need can afford to make the viewer a singleton in order to call it from different points of the application.

## Geometry and Materials
Accessing the geometry and the materials of the meshes is non-trivial and implementing it would mean way better control over the meshes. It would mean implementing a facade for dealing with Threejs related properties

## BabylonJS
I would also switch from ThreeJS to BabylonJS due to 4 reasons:

- API doesn't completely change every 3 months which helps when looking up older solutions online
- Very active and helpful community
- Very active and helpful developers (Three.js: oldest bug on GitHub from April 2013, Babylon.js: oldest bug on GitHub from 2 days ago)
- The playground is such a great tool to try things out quickly, explain issues and provide help

