#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

in vec3 coordonnee_3d;

//Un Fragment Shader minimaliste
void main (void)
{
  float x = abs(coordonnee_3d.x);
  float y = abs(coordonnee_3d.y);
  float z = abs(coordonnee_3d.z);


  color = vec4(x,y,z,1.0);
/*
  //perçage du triangle
  if(((x-0.35)*(x-0.35)+(y-0.35)*(y-0.35))<0.025){
    discard;
  }
*/
  //cercle inscrit au triangle
  if(((x-0.35)*(x-0.35)+(y-0.35)*(y-0.35))<((1+1-sqrt(2))/2)){
    x=0.5f;
    y=0.5f;
    z=0.5f;
  }
}
