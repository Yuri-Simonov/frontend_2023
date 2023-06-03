type Mods = any;
// type Mods = Record<string, string | boolean>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...Object.keys(mods).filter((classNames) => mods[classNames]),
        ...additional.filter(Boolean),
    ].join(' ');
}
