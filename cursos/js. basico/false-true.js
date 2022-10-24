//valores false

Boolean(0);         //false
Boolean(null);      //false
Boolean(NaN);       //false
Boolean(undefined); //false
Boolean(false);     //false
Boolean("");        //false

//valores true 

Boolean(""); //Si tenemos un caracter en un string es verdadero inclusive un espacio 
Boolean(1);  // si tenemos un numero de uno en adelante es verdadero solo 0 es falso
Boolean([]); // si tenemos un objeto aunque sea vacio es verdadero
Boolean() ; //  function si tenemos una fucntion es verdadero