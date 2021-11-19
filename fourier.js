
function dft(x) {
  const X = [];
  const N = x.length;
  for (let k = 0; k < N; k++) {
    let re = 0;  // Real Part
    let im = 0;  // Imaginary Part
    for (let n = 0; n < N; n++) {
      const phi = (TWO_PI * k * n) / N;   // Common Angle 
      re += x[n] * cos(phi);  // X is the signal
      im -= x[n] * sin(phi);  // X is the signal
    }
    re = re / N; // Averaging over N
    im = im / N; // Averaging over N

    let freq = k;
    let amp = sqrt(re * re + im * im);
    let phase = atan2(im, re);
    X[k] = { re, im, freq, amp, phase };
  }
  return X;
}