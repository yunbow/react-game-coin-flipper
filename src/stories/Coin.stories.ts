import type { Meta, StoryObj } from '@storybook/react';
import { Coin } from '../features/coin-flipper/components/Coin';

const meta: Meta<typeof Coin> = {
  title: 'Features/CoinFlipper/Coin',
  component: Coin,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['heads', 'tails'],
    },
    isFlipping: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heads: Story = {
  args: {
    side: 'heads',
    isFlipping: false,
  },
};

export const Tails: Story = {
  args: {
    side: 'tails',
    isFlipping: false,
  },
};

export const Flipping: Story = {
  args: {
    side: 'heads',
    isFlipping: true,
  },
};