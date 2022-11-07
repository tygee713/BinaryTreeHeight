const solution = (tree) => {
  let tallestHeight = 0

  const continuePath = (index = 0, iterations = 0) => {
    iterations++
    if (!tree[index] || tree[index] < 0) return

    if (iterations > tallestHeight) tallestHeight = iterations

    continuePath(2 * index + 1, iterations)
    continuePath(2 * index + 2, iterations)
  }

  continuePath()

  return tallestHeight
}


