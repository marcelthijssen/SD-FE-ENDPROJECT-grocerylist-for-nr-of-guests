/**
 * Displaying words with first letter als capatilize
 * @param item
 * @returns {`${number}`}item
 */

export default function capitalize( item ) {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    return item;
}