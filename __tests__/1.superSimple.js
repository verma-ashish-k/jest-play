describe('Arrays', () => {
  it('should increase lenght after push', () => {
    //setup

    let newArray = [];
    let newItem = 'Hello';

    //execute
    newArray.push(newItem);
    //validate
    expect(newArray.length).toBe(1);
  });

  it("should have the type 'array' ", () => {
    let newArray = [];

    expect(Array.isArray(newArray)).toBeTruthy();
  });
  //   it('should fail', () => {
  //     expect(true).not.toBeTruthy();
  //   });
});
