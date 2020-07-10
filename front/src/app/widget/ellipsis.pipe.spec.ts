import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('qsdfqsdfqsdfqsdfqsdf')
    expect(pipe).toBeTruthy();
    expect(result).toBe('qsdfqsdfqs...');
  });

  it('test with null', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform(undefined as unknown as string)
    expect(pipe).toBeTruthy();
    expect(result).toBeUndefined();
  });
});
