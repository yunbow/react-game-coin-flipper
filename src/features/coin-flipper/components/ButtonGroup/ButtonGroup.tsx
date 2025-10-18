import React from 'react';
import { Button } from '../../../../components/Button';
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps {
  onFlip: () => void;
  onReset: () => void;
  disabled?: boolean;
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onFlip,
  onReset,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`${styles.buttons} ${className}`}>
      <Button onClick={onFlip} disabled={disabled} variant="primary">
        コインを投げる
      </Button>
      <Button onClick={onReset} disabled={disabled} variant="secondary">
        リセット
      </Button>
    </div>
  );
};