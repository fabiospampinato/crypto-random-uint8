
/* IMPORT */

import webcrypto from 'tiny-webcrypto';

/* MAIN */

const random = ( bytes: number ): Uint8Array => {

  const uint8 = new Uint8Array ( bytes );

  webcrypto.getRandomValues ( uint8 );

  return uint8;

};

/* EXPORT */

export default random;
