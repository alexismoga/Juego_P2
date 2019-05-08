class MyCone extends THREE.Mesh {
    constructor() {
      super();
      
      // Se crea la parte de la interfaz que corresponde a la caja
      // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
      this.createGUI();
      
      // Un Mesh se compone de geometría y material
      this.geometry = new THREE.ConeGeometry (2,2,4);
      // Las primitivas básicas se crean centradas en el origen
      // Se puede modificar su posición con respecto al sistema de coordenadas local con una transformación aplicada directamente a la geometría.
      this.geometry.applyMatrix (new THREE.Matrix4().makeTranslation(0,1,0));
      this.position.set(4,0,0);
      // Como material se crea uno a partir de un color
      this.material = new THREE.MeshNormalMaterial(this.wireframe=true);
    }
    
    createGUI () {
      // Controles para el tamaño, la orientación y la posición de la caja
      this.guiControls = new function () {
        this.sizeX = 1.0;
        this.sizeY = 1.0;
        this.sizeZ = 1.0;
        
        
        // Un botón para dejarlo todo en su posición inicial
        // Cuando se pulse se ejecutará esta función.
        this.reset = function () {
          this.sizeX = 1.0;
          this.sizeY = 1.0;
          this.sizeZ = 1.0;
          
        }
      } 
      
      // Se crea una sección para los controles de la caja
      var folder = gui.addFolder ('Dimensiones del cono');
      // Estas lineas son las que añaden los componentes de la interfaz
      // Las tres cifras indican un valor mínimo, un máximo y el incremento
      // El método   listen()   permite que si se cambia el valor de la variable en código, el deslizador de la interfaz se actualice
      folder.add (this.guiControls, 'sizeX', 0.1, 5.0, 0.1).name ('Radio : ').listen();
      folder.add (this.guiControls, 'sizeY', 0.1, 5.0, 0.1).name ('Altura : ').listen();
      folder.add (this.guiControls, 'sizeZ', 0.1, 5.0, 0.1).name ('Resolucion : ').listen();
      
      
      folder.add (this.guiControls, 'reset').name ('[ Reset ]');
    }
    
    update () {
      // Con independencia de cómo se escriban las 3 siguientes líneas, el orden en el que se aplican las transformaciones es:
      // Primero, el escalado
      // Segundo, la rotación en Z
      // Después, la rotación en Y
      // Luego, la rotación en X
      // Y por último la traslación
      this.scale.set (this.guiControls.sizeX,this.guiControls.sizeY,this.guiControls.sizeZ);
    }
  }