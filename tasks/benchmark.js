
/* IMPORT */

import benchmark from 'benchloop';
import random from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'random:1',
  fn: () => {
    random ( 1 );
  }
});

benchmark ({
  name: 'random:2',
  fn: () => {
    random ( 2 );
  }
});

benchmark ({
  name: 'random:4',
  fn: () => {
    random ( 4 );
  }
});

benchmark ({
  name: 'random:8',
  fn: () => {
    random ( 8 );
  }
});

benchmark ({
  name: 'random:16',
  fn: () => {
    random ( 16 );
  }
});

benchmark ({
  name: 'random:32',
  fn: () => {
    random ( 32 );
  }
});

benchmark ({
  name: 'random:64',
  fn: () => {
    random ( 64 );
  }
});

benchmark ({
  name: 'random:128',
  fn: () => {
    random ( 128 );
  }
});

benchmark.summary ();
