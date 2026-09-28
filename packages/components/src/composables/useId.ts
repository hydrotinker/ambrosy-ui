let counter = 0

/**
 * Generate a stable, unique id for associating form controls with labels.
 * A small standalone helper so the library works on Vue 3.4+ (before the
 * built-in `useId`). Pass an existing id to short-circuit generation.
 */
export function useId(prefix = 'ab', existing?: string): string {
  if (existing) return existing
  counter += 1
  return `${prefix}-${counter}`
}
