var fakeConsole;

function setUpFakeConsole() {
  fakeConsole = {
    lines: [],
    log: function(line) {
      this.lines.push(line + "\n");
      console.log(line);
    },
    toString: function() {
      return String.prototype.concat.apply([], this.lines);
    }
  };
}

function setUpRealConsole() {
  fakeConsole = console;
}


function imprimir(s) {
  fakeConsole.log(s)
}

function listasIguales(unArray, otroArray) {
    if (unArray.length != otroArray.length)
        return false;
    for (var i = 0; i < unArray.length; i++) {
        if (unArray[i] instanceof Array && otroArray[i] instanceof Array) {
            if (!arraysIguales(unArray[i], otroArray[i]))
              return false;
        }           
        else if (unArray[i] != otroArray[i])
          return false;   
    }       
    return true;
}