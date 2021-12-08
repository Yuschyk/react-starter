import { customRandom } from 'nanoid';


export const generateRandomHash = customRandom('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  8, (size) => (new Uint8Array(size)).map(() => 256 * Math.random()));
