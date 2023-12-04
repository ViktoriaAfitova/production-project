import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });

  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      secondParam: 'second',
    });
    expect(params).toBe('?test=value&secondParam=second');
  });

  test('test with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      secondParam: undefined,
    });
    expect(params).toBe('?test=value');
  });
});
