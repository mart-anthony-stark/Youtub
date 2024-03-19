export const groupBy = <T>(data: T[], divider: number): T[][] => {
  const result: T[][] = [];

  // Determine the number of groups
  const numGroups = Math.ceil(data.length / divider);

  // Distribute elements of data into result arrays
  for (let i = 0; i < numGroups; i++) {
    result.push(data.slice(i * divider, (i + 1) * divider));
  }

  return result;
};
