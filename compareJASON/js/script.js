const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };


function compareJSON(obj1, obj2) {
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (let i = 0; i < obj1Keys.length; i++) {
        let prop = obj1Keys[0];
        if (obj1[prop] === obj2[prop]) {
          return true;
        }
      }
    
      return false;
    }
    if (compareJSON(obj1, obj2)) {
    console.log("true");
    } else {
    
    console.log("false");
    }
    
    