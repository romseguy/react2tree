export function visit(parent, visitFn, childrenFn) {
  if (!parent) return;

  visitFn(parent);

  const children = childrenFn(parent);

  if (children) {
    const count = children.length;

    for (let i = 0; i < count; i++) {
      visit(children[i], visitFn, childrenFn);
    }
  }
}

export function getNode(tree, key) {
  let node = null;

  visit(tree, d => {
    if (d.name === key) {
      node = d;
    }
  }, d => d.children);

  return node;
}
