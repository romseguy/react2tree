export function visit(parent, visitFn, childrenFn) {
  if (!parent) return;

  visitFn(parent);

  let children = childrenFn(parent);

  if (children) {
    let count = children.length;

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
