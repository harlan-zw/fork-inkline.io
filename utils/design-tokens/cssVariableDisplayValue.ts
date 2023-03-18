import { ComponentManifestCssVariable } from '@inkline/inkline/types';

export function cssVariableDisplayValue(variable: ComponentManifestCssVariable): string {
    let resolvedValue;
    if (variable.value) {
        resolvedValue =
            typeof variable.value === 'string'
                ? variable.value
                : variable.value.map(cssVariableDisplayValue).join(' ');
    }

    if (resolvedValue) {
        return variable.name ? `var(${variable.name}, ${resolvedValue})` : resolvedValue;
    } else {
        return `var(${variable.name})`;
    }
}
