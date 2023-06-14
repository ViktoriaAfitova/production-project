type Modes = Record<string, boolean | string>;

export function classNames(
  mainClass: string,
  modes: Modes,
  additional: string[]
): string {
  return [
    mainClass,
    ...additional,
    ...Object.entries(modes)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}

classNames("remove-button", { hovered: false, selectable: true, red: false }, [
  "padding",
]);
