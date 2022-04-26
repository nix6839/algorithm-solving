long long sum(int a[], int n) {
  long long sum = 0;
  for (int i = 0; i < n; i += 1) {
      sum += a[i];
  }
  return sum;
}
