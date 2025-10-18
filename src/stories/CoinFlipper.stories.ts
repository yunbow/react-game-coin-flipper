import type { Meta, StoryObj } from '@storybook/react';
import { CoinFlipperApp } from '../features/coin-flipper/CoinFlipperApp';

const meta: Meta<typeof CoinFlipperApp> = {
  title: 'Features/CoinFlipper/CoinFlipperApp',
  component: CoinFlipperApp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};