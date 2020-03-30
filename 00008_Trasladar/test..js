describe("", function() {
  it("trasladar mueve el último elemento de una lista de 3 elementos a una de dos elementos", function() {
    var unArray = [1, 2, 3];
    var otroArray = [4, 5];

    trasladar(unArray, otroArray);

    assert.deepEqual(unArray, [1, 2]);
    assert.deepEqual(otroArray, [4, 5, 3]);
  })
  
  it("trasladar mueve el último elemento de una lista de 4 elementos a una de 4 elementos", function() {
    var unArray = [10, 20, 30, 40];
    var otroArray = [4, 5, 6, 7];

    trasladar(unArray, otroArray);

    assert.deepEqual(unArray, [10, 20, 30]);
    assert.deepEqual(otroArray, [4, 5, 6, 7, 40]);
  })


})