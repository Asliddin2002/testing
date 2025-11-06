describe('Function is being tested', () => {
  test('Callback in forEach', () => {
    const fooB = vi.fn();
    const arr = ['a', 'b', 'c', 'd'];

    arr.forEach(fooB);

    expect(fooB).toHaveBeenCalled();
    expect(fooB).toHaveBeenCalledTimes(arr.length);
    expect(fooB).toHaveBeenCalledWith('a', 0, arr);
    expect(fooB).toHaveBeenNthCalledWith(4, 'd', 3, arr);
  });

  test('Object methods', () => {
    const obj = {
      method(a: number) {
        return a + 5;
      },
    };
    const objMethod = vi.spyOn(obj, 'method');
    obj.method(1);
    obj.method(10);

    expect(objMethod).toReturnTimes(2);
    expect(objMethod).toHaveNthReturnedWith(1, 6);
    expect(objMethod).toHaveNthReturnedWith(2, 15);

    expect(objMethod).toHaveBeenCalled();
    expect(objMethod).toHaveBeenNthCalledWith(1, 1);
    expect(objMethod).toHaveBeenNthCalledWith(2, 10);
    expect(obj.method(5)).toBe(10);
  });
});
