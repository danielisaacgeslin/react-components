import React from 'react';
import { shallow } from 'enzyme';

import ModalHelper from './ModalHelper';
import ModalComponent from './ModalComponent';

describe('Modal', () => {
  it('should confirm', async () => {
    ModalHelper.mount();
    ModalHelper.ModalComponent = shallow(<ModalComponent />) as any;
    ModalHelper.mount(); // once will not overwrite shallow
    setTimeout(() => {
      (ModalHelper.ModalComponent as any).find('[data-testid="modal-confirm"]').simulate('click');
    });
    const res = await ModalHelper.confirm({ title: 'title', body: <p>body</p>, confirmText: 'yes' });
    expect(res).toBe(true);
  });

  it('should cancel', async () => {
    ModalHelper.mount();
    ModalHelper.ModalComponent = shallow(<ModalComponent />) as any;
    setTimeout(() => {
      (ModalHelper.ModalComponent as any).find('[data-testid="modal-cancel"]').simulate('click');
    });
    const res = await ModalHelper.confirm({ title: 'title', body: <p>body</p>, confirmText: 'yes' });
    expect(res).toBe(false);
  });
});
