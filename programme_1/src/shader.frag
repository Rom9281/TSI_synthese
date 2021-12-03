#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste
void main (void)
{
  //Couleur du fragment
  color = vec4(0.0,0.0,1.0,1.0);

  float x=(300-gl_FragCoord.x)/600.0;
  float y=(300-gl_FragCoord.y)/600.0;
  float r = 0.0;

  float g=0.0;

  if((x*x)+(y*y)<0.05){
    g=0.0;
    r=1.0;
  }
  else{
    g=1.0;
    r=0.0;
  }
  color = vec4(r,g,0.0,0.0);
}
