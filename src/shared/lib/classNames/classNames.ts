type Modes = Record<string, boolean | string>;

export function classNames(
  mainClass: string,
  modes?: Modes,
  additional?: string[]
): string {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(modes)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

classNames("remove-button", { hovered: false, selectable: true, red: false }, [
  "padding",
]);
