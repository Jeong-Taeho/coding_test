function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  rocks.unshift(0);
  rocks.push(distance);

  let left = 0;
  let right = distance;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let removedRocks = 0;
    let prevRock = 0;

    for (let i = 1; i < rocks.length; i++) {
      if (rocks[i] - prevRock < mid) {
        removedRocks++;
      } else {
        prevRock = rocks[i];
      }
    }

    if (removedRocks > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      result = Math.max(result, mid);
    }
  }

  return result;
}