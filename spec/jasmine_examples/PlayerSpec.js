describe("A suite", () => {

  beforeEach(() => {
    console.log('\x1b[33m%s\x1b[0m', 'Executing a test')
  })

  afterEach(() => {
    console.log('\x1b[33m%s\x1b[0m', 'After executing test')
  })

  beforeAll(() => {
    console.log('\x1b[33m%s\x1b[0m', 'Before all')
  })

  afterAll(() => {
    console.log('\x1b[33m%s\x1b[0m', 'After all')
  })

  it("True tobe True", () => {
    expect(true).toBe(true);
  });

  it("False tobe True", () => {
    expect(false).toBe(false);
  });

  it("False tobe True", () => {
    expect(false).toEqual('false')
  });

});


describe("A spec using the fail function", function () {
  var foo = function (x, callBack) {
    if (x) {
      callBack();
    }
  };

  it("should not call the callBack", function () {
    foo(false, function () {
      fail("Callback has been called");
    });
  });
});
