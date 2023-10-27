export function checkEdible(tree) {
  return tree.bears_edible_fruit;
}

export function filterValidTree(tree) {
  if (!checkEdible(tree)) {
    return false;
  }

  // add more checks here if needed

  return true;
}