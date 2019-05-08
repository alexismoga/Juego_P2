class MyBox extends THREE.Mesh {
  constructor() {
    super();
    
    // Se crea la parte de la interfaz que corresponde a la caja
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
    
    /*Gepmetria taza fuera
    this.recorridoSpline = new THREE.CatmullRomCurve3([
      new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 10, 0, 0 ),
			new THREE.Vector3( 11, 0.2, 0 ), new THREE.Vector3( 12, 0.4, 0 ),
			new THREE.Vector3( 13, 0.6, 0 ), new THREE.Vector3( 14, 0.8, 0 ),
			new THREE.Vector3( 15, 5, 0 ), new THREE.Vector3( 14, 6, 0 ),
			new THREE.Vector3( 13, 7, 0 ), new THREE.Vector3( 12, 8, 0 ),
			new THREE.Vector3( 11, 9, 0 ), new THREE.Vector3( 10, 10, 0 ),
			new THREE.Vector3( 0, 10, 0 ), /*new THREE.Vector3( 10, 30, 10 ),
			new THREE.Vector3( 0, 30, 10 ), new THREE.Vector3( - 10, 20, 10 ),
			new THREE.Vector3( - 10, 10, 10 ), new THREE.Vector3( 0, 0, 10 ),
			new THREE.Vector3( 10, - 10, 10 ), new THREE.Vector3( 20, - 15, 10 ),
			new THREE.Vector3( 30, - 15, 10 ), new THREE.Vector3( 40, - 15, 10 ),
			new THREE.Vector3( 50, - 15, 10 ), new THREE.Vector3( 60, 0, 10 ),
			new THREE.Vector3( 70, 0, 0 ), new THREE.Vector3( 80, 0, 0 ),
			new THREE.Vector3( 90, 0, 0 ), new THREE.Vector3( 100, 0, 0 )
    ]);*/
    
    this.curva = new THREE.EllipseCurve(0,  0,            // ax, aY
      10, 10,           // xRadius, yRadius
      0,  2 * Math.PI,  // aStartAngle, aEndAngle
      false,            // aClockwise
      0                 // aRotation
      );
      var points = this.curva.getPoints( 50 );
      console.log(points);
      //falta añadir bucle
    this.recorridoSpline = new THREE.CatmullRomCurve3(points);
    this.opciones = {steps: 50, curveSegments: 50, extrudePath: this.recorridoSpline};
    this.geometry = new THREE.TubeGeometry(this.recorridoSpline, 100,0.5,6, false);
    this.material = new THREE.MeshPhongMaterial( { color : 0xff0000 } );
    this.material.side = THREE.DoubleSide;
    //this.mesh = new THREE.Mesh(this.geometry, this.material);

  }
  
  update () {
   
  }
}