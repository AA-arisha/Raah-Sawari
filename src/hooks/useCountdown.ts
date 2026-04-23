// src/hooks/useCountdown.ts
import { useState, useEffect, useCallback } from 'react';
import type { CountdownState } from '../types';

export function useCountdown(initial: number): CountdownState {
  const [count, setCount] = useState(initial);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running || count <= 0) return;
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, running]);

  const reset = useCallback(() => { setCount(initial); setRunning(true); }, [initial]);
  const stop = useCallback(() => setRunning(false), []);

  return { count, reset, stop, expired: count <= 0 };
}