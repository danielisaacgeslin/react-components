import React from 'react';

import { storiesOf } from '@storybook/react';
import Modal from '../src/components/ModalHelper';

Modal.mount();

const options = {
  title: 'Open Modal',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  body: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Maxime ratione cumque harum nesciunt quos pariatur,
      officiis suscipit ad omnis sint numquam doloremque libero? Explicabo quod nam ipsum fugit vitae quasi.
        </div>
  )

};

storiesOf('Modal', module)
  .add('OpenModal', () => (
    <button onClick={async () => { if (await Modal.confirm(options)) alert('confirmed'); }}>
      Open Modal
    </button>
  ));
