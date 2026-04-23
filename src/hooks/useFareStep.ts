// src/hooks/useFareStep.ts
import { useState, useCallback } from 'react';
import type { FareStepperState } from '../types';

export function useFareStep(
  base: number,
  min: number,
  max: number,
  step: number = 10
): FareStepperState {
  const [fare, setFare] = useState(base);

  const inc = useCallback(() => setFare(f => Math.min(f + step, max)), [max, step]);
  const dec = useCallback(() => setFare(f => Math.max(f - step, min)), [min, step]);
  const reset = useCallback(() => setFare(base), [base]);

  return {
    fare,
    inc,
    dec,
    reset,
    isMin: fare <= min,
    isMax: fare >= max
  };
}