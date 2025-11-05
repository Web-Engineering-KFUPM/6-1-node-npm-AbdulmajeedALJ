import _ from "lodash";

export function parseNumbers(input) {
  if (!Array.isArray(input)) return [];
  // Convert each input value to a number and keep only finite numbers.
  const nums = _.map(input, (s) => Number(s));
  return _.filter(nums, _.isFinite);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

