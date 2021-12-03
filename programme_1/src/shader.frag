#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste
void main (void)
{
  //bleu uni
  /*
  //Couleur du fragment
  color = vec4(0.0,0.0,1.0,1.0);
  */

  //petit dégradé jaune-vert
  /*
  float r=gl_FragCoord.x/600.0;
  float g=gl_FragCoord.y/600.0;
  color = vec4(r,g,0.0,0.0);
  */

  //plein de couleurs
  /*
  float x=gl_FragCoord.x/600.0;
  float y=gl_FragCoord.y/600.0;
  float r=abs(cos(15.0*x+29.0*y));
  float g=0.0;
  if(abs(cos(25.0*x*x))>0.95)
  g=1.0;
  else
  g=0.0;
  color = vec4(r,g,0.0,0.0);
  */

  //triangle vert avec cercle rouge
  float x=gl_FragCoord.x/600;
  float y=gl_FragCoord.y/600;
  float r=0.0;
  float g=0.0;
  if(((x-0.5)*(x-0.5)+(y-0.5)*(y-0.5))<0.05){
  r=1.0;
  g=0.0;
  }
  else{
  r=0.0;
  g=1.0;
  }
  color = vec4(r,g,0.0,0.0);
  
}
