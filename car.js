AFRAME.registerComponent("car", {
    schema: {
      modelref:{type:"string",default:"Models/low-poly_jaguar_xj-s/scene.gltf"}
    },
  
    init: function () {
        this.el.setAttribute("gltf-model", this.data.modelref)
        const pos = {x:0,y:50,z:80}
        const rot = {x:0, y:-100, z:0}
        this.el.setAttribute("position",pos)
        this.el.setAttribute("rotation",rot)        
    }
  });