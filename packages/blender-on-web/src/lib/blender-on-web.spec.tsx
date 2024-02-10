import { render } from '@testing-library/react';

import BlenderOnWeb from './blender-on-web';

describe('BlenderOnWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlenderOnWeb />);
    expect(baseElement).toBeTruthy();
  });
});
