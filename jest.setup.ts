import '@testing-library/jest-dom'; // 確保引入 jest-dom
import { TextEncoder, TextDecoder as UtilTextDecoder } from 'util';

// 確保 global 可用於 Jest
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = UtilTextDecoder as unknown as {
  new (label?: string, options?: TextDecoderOptions): TextDecoder;
};
