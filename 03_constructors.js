describe ("Constructors", function() {

  it ("Object is constructor of {}", function() {
    expect({}.constructor).toBe(Object.prototype.constructor);
  });

  it ("Array is constructor of []", function() {
    expect([].constructor).toBe(Array.prototype.constructor);
  });

  it ("String is constructor of ''", function() {
    expect("".constructor).toBe(String.prototype.constructor);
  });

  it ("Number is constructor of 1", function() {
    expect((1).constructor).toBe(Number.prototype.constructor);
  });

  it ("Boolean is constructor of true", function() {
    expect(true.constructor).toBe(Boolean.prototype.constructor);
  });

  it ("RegExp is constructor of /aaa/", function() {
    expect(/aaa/.constructor).toBe(RegExp.prototype.constructor);
  });

  it ("Function is constructor of a function", function() {
    const f = function() {};
    expect(f.constructor).toBe(Function.prototype.constructor);
  });
});
