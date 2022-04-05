
/* IMPORT */

import {describe} from 'fava';
import random from '../dist/index.js';

/* MAIN */

describe ( 'Crypto Random Uint8', it => {

  it ( 'generates a random Uint8Array with the given number of bytes', t => {

    // This basically checks that the distribution of each byte is indeed random

    for ( const length of [1, 2, 3] ) {

      const buckets = [];

      for ( let i = 0; i < length; i++ ) {

        const bucket = new Map ();

        for ( let bi = 0; bi < 256; bi++ ) {

          bucket.set ( bi, 0 );

        }

        buckets[i] = bucket;

      }

      t.is ( buckets.length, length );

      for ( let i = 0; i < 500000; i++ ) {

        const bytes = random ( length );

        t.is ( bytes.length, length );

        for ( let bi = 0; bi < length; bi++ ) {

          const bucket = buckets[bi];
          const byte = bytes[bi];

          bucket.set ( byte, bucket.get ( byte ) + 1 );

        }

      }

      for ( let i = 0; i < length; i++ ) {

        const bucket = buckets[i];

        for ( let bi = 0; bi < 256; bi++ ) {

         const countByte = bucket.get ( bi );
         const countAvg = ( 500000 / 256 );
         const ratio = Math.min ( countByte, countAvg ) / Math.max ( countByte, countAvg );

         t.true ( ratio > .9 );

        }

      }

    }

  });

});
