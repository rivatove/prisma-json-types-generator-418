import 'jest-extended';

type SampleJson = {
  a: number;
  b: string
}

declare global {
  namespace PrismaJson {
    type _SampleJson = SampleJson;
  }
}
