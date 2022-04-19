function areArraysSame(mass1, mass2) {
  if (mass1.length != mass2.length) {
    return false;
  }
  for (i = 0; i < mass1.length; i++) {
    if (mass1[i] === mass2[i]) {
      return true;
    } else {
      return false;
    }
  }
}
// Тест
//   areArraysSame([1, 2, 3], [4, 5, 6]); //   false
//   areArraysSame([1, 2, 3], [1, 2, 3]); //   true
//   areArraysSame([1, 2, 3], [1, 2, 3, 4]); //   false
