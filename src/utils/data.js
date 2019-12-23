export function findTransitiveDeps(item, data, list = []) {
  item.deps.forEach(dep => {
    const match = data.find(item => item.name === dep);
    console.assert(match, `Dependency ${dep} was not found`);

    if (!list.includes(dep)) {
      list.push(dep);
    }
    findTransitiveDeps(match, data, list);
  });
  return list;
}
