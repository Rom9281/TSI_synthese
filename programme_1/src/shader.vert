#version 330 core

// Variable d'entrée, ici la position
layout (location = 0) in vec3 position;

//Un Vertex Shader minimaliste
void main (void)
{
  //Coordonnees du sommet
  gl_Position = vec4(position,1.0);

  //question 17 : on divise l'abscisse du sommet par 2, le triangle se rétrécit
  gl_Position.x/=2;

  //question 19 : déplacement du triangle
  vec4 p=vec4(position, 1.0);
  p.x=p.x*0.3;
  p+=vec4(-0.7,-0.8,0.0,0.0);
  gl_Position = p;
}
