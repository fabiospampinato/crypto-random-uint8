# Crypto Random Uint8

Generate a cryptographically-random Uint8Array with the given number of bytes of entropy.

## Install

```sh
npm install --save crypto-random-uint8
```

## Usage

```ts
import random from 'crypto-random-uint8';

random ( 8 ); // => <Uint8Array(8) 171, 2, 177, 127, 226, 149, 102, 130>
random ( 16 ); // => <Uint8Array(16) 158, 153, 84, 135, 102, 48, 148, 135, 117, 74, 236, 216, 240, 239, 6, 30>
random ( 32 ); // => <Uint8Array(32) 101, 67, 214, 187, 36, 255, 127, 15, 95, 90, 125, 136, 80, 31, 239, 20, 221, 145, 179, 139, 88, 30, 178, 92, 31, 249, 209, 80, 176, 78, 190, 56>
random ( 64 ); // => <Uint8Array(64) 42, 90, 86, 4, 78, 192, 56, 17, 108, 171, 61, 61, 52, 234, 190, 185, 196, 150, 134, 200, 164, 47, 110, 118, 162, 107, 244, 94, 202, 83, 152, 12, 96, 224, 213, 161, 44, 229, 45, 65, 153, 58, 232, 22, 81, 173, 156, 213, 172, 227, 186, 150, 234, 144, 227, 124, 211, 249, 26, 246, 195, 222, 96, 177>
```

## License

MIT © Fabio Spampinato
