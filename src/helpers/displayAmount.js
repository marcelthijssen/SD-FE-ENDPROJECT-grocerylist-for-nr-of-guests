/**
 * Displaying amounts with one digit
 * @param amount
 * @returns {`${number}`}
 */

export default function displayAmount( amount ) {
  return `${ parseFloat( amount.toFixed( 1 ) ) }`;
}
