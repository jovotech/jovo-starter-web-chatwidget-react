export function cls(
  fixedClassNames: string,
  dynamicClassNameMap: Record<string, boolean | null | undefined>,
) {
  return Object.entries(dynamicClassNameMap).reduce((className, [dynamicClassNames, condition]) => {
    if (condition) {
      className += ' ' + dynamicClassNames;
    }
    return className;
  }, fixedClassNames);
}
