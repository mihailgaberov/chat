import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ChatArea } from './ChatArea';
import { IMessage } from '../Message/Message';

const message1: IMessage = {from: 'Mihail', content: 'Hello world!', time: '12:12', type: 'sent'};
const message2: IMessage = {from: 'Mihail', content: 'Hello world!', time: '12:13', type: 'received'};

describe('ChatArea', () => {
  it('renders correctly chat messages', () => {
    render(<ChatArea messages={[message1, message2]}/>);
    expect(screen.getByText(/Mihail/i)).toBeVisible()
    expect(screen.getByText(/12:12/i)).toBeVisible()
    expect(screen.getByText(/12:13/i)).toBeVisible();
    expect(screen.getAllByText(/Hello world!/i)[0]).toBeVisible();
  });
});