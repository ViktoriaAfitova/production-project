export type Modes = Record<string, boolean | string | undefined>;

export function classNames(
  mainClass: string,
  modes: Modes = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(modes)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

classNames('remove-button', { hovered: false, selectable: true, red: false }, [
  'padding',
]);
