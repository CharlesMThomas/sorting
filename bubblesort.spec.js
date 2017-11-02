describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single item', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles a multiple items', function() {
    expect(bubbleSort([5, 2, 7, 9, 3, 4])).toEqual([2, 3, 4, 5, 7, 9]);
  });
});
