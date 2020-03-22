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