myVar = "This is an outer var"


var Obj = {
    myVar : "This is inner var",
    displayVar : function() {
      console.log(this.myVar)
    }
}

Obj.displayVar()        // "This is inner var""
var dv = Obj.displayVar // pointing to the method
dv()                    // this is global object and will result in "This is outer var"
var bd = dv.bind(Obj)   // binding to the object - this will become Obj
bd()                    // "This is inner var"
