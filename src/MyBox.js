class MyBox extends THREE.Mesh {
  constructor() {
    super();
    
    // Se crea la parte de la interfaz que corresponde a la caja
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
    
    //Gepmetria taza fuera
    this.recorridoSpline = new THREE.CatmullRomCurve3([
      new THREE.Vector3( 0, 10, - 10 ), new THREE.Vector3( 10, 0, - 10 ),
			new THREE.Vector3( 20, 0, 0 ), new THREE.Vector3( 30, 0, 10 ),
			new THREE.Vector3( 30, 0, 20 ), new THREE.Vector3( 20, 0, 30 ),
			new THREE.Vector3( 10, 0, 30 ), new THREE.Vector3( 0, 0, 30 ),
			new THREE.Vector3( - 10, 10, 30 ), new THREE.Vector3( - 10, 20, 30 ),
			new THREE.Vector3( 0, 30, 30 ), new THREE.Vector3( 10, 30, 30 ),
			new THREE.Vector3( 20, 30, 15 ), new THREE.Vector3( 10, 30, 10 ),
			new THREE.Vector3( 0, 30, 10 ), new THREE.Vector3( - 10, 20, 10 ),
			new THREE.Vector3( - 10, 10, 10 ), new THREE.Vector3( 0, 0, 10 ),
			new THREE.Vector3( 10, - 10, 10 ), new THREE.Vector3( 20, - 15, 10 ),
			new THREE.Vector3( 30, - 15, 10 ), new THREE.Vector3( 40, - 15, 10 ),
			new THREE.Vector3( 50, - 15, 10 ), new THREE.Vector3( 60, 0, 10 ),
			new THREE.Vector3( 70, 0, 0 ), new THREE.Vector3( 80, 0, 0 ),
			new THREE.Vector3( 90, 0, 0 ), new THREE.Vector3( 100, 0, 0 )
    ]);
    
    this.recorridoSpline = this.recorridoSpline.getPoints(100);
    this.opciones = {steps: 100, curveSegments: 50, extrudePath: this.recorridoSpline};
    this.geometry = new THREE.TubeGeometry(this.recorridoSpline, 20,2,8, false);
    this.material = new THREE.MeshPhongMaterial( { color : 0xff0000 } );

    //this.mesh = new THREE.Mesh(this.geometry, this.material);

  }
  
  update () {
   
  }
}