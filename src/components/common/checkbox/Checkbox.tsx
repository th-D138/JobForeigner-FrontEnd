import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import styles from './checkbox.module.scss';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <div className={styles.checkboxContainer}>
    <CheckboxPrimitive.Root
      ref={ref}
      className={`${styles.checkbox} ${className || ''}`}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={styles.checkboxIndicator}>
        <Check className={styles.checkIcon} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {children && <label className={styles.label}>{children}</label>}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
