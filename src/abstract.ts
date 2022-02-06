
/* MAIN */

const abstract = ( getRandomNumbers: ( buffer: Uint8Array ) => void ) => {

  return ( bytes: number ): Uint8Array => {

    const uint8 = new Uint8Array ( bytes );

    getRandomNumbers ( uint8 );

    return uint8;

  };

};

/* EXPORT */

export default abstract;
