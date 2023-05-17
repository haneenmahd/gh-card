/**
 * Format for thousands. If greater than thousand adds a "k" to the end to denote thousand.
 */
export const formatter = (value: number): string => {
    if (value > 1000) {
        return `${(value / 1000).toFixed()}k`;
    }

    return `${value}`;
}