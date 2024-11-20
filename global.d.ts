import 'jest-extended';

declare global {
  namespace PrismaJson {
    type _SampleJson = {
      a: number;
      b: string
    };
  }
}
