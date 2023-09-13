import { renderHook } from "@testing-library/react-hooks";
import { useCountry } from ".";
import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));

describe('use-country', () => {

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('shoud return ee if path is /ee', () => {
    mockRouter.setCurrentUrl("/ee");

    const { result } = renderHook(() => useCountry());
    expect(result.current).toBe('ee');
  });

  it('shoud return fr if path is /fr/something-else', () => {
    mockRouter.setCurrentUrl("/fr/something-else");

    const { result } = renderHook(() => useCountry());
    expect(result.current).toBe('fr');
  });

  it('should return an empty string if path is just /', () => {
    mockRouter.setCurrentUrl("/");

    const { result } = renderHook(() => useCountry());
    expect(result.current).toBe('');
  });

  it('should always return an empty string if [country] is less than 2 characters long', () => {
    mockRouter.setCurrentUrl("/e");

    const { result } = renderHook(() => useCountry());
    expect(result.current).toBe('');
  });

  it('should always return an empty string if [country] is more than 2 characters long', () => {
    mockRouter.setCurrentUrl("/eee");

    const { result } = renderHook(() => useCountry());
    expect(result.current).toBe('');
  });
});
