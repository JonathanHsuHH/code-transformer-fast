export function isImageNode(node: SceneNode): boolean {
  if (node.isAsset) {
    return true;
  }
  if ('children' in node && node.children.length > 0) {
    let hasOnlyVector = true;
    node.children.forEach((child) => {
      if (child.type !== 'VECTOR') {
        hasOnlyVector = false;
      }
    });
    if (hasOnlyVector) {
      return true;
    }
  } else if (node.type === 'VECTOR') {
    return true;
  }
  if (node.type === 'FRAME' || node.type === 'RECTANGLE') {
    if (
      (node.fills as Paint[]).find((paint) => paint.type === 'IMAGE') !==
      undefined
    ) {
      return true;
    }
  }

  return false;
}
