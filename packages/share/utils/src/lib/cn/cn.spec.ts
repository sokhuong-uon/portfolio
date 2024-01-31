import { cn } from './cn';

describe('cn', () => {
  it('should merge classes.', () => {
    const className = 'text-4xl';
    expect(cn('bg-red-500 text-2xl', className)).toEqual('bg-red-500 text-4xl');
  });
});
