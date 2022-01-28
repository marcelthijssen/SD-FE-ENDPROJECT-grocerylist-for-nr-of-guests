import jwt_decode from "jwt-decode";

function isTokenValid( accessToken ) {
  const decodedToken = jwt_decode( accessToken );
  const expirationUnix = decodedToken.exp; // This is a UNIX timestamp

  const now = new Date().getTime(); // This is a javascript timestamp
  const nowInUnix = Math.round( now / 1000 ); // Transfered to a UNIX timestamp

  // Calculating if there are seconds left, if so Token is Valid
  return expirationUnix - nowInUnix > 0;

}

export default isTokenValid;