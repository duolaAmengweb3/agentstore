import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        // 主按钮:品牌渐变 + 发光
        primary:
          'text-primary-foreground shadow-lg shadow-primary/20 bg-[linear-gradient(135deg,#8B5CF6_0%,#6366F1_50%,#06B6D4_100%)] hover:shadow-xl hover:shadow-primary/30 hover:brightness-110',
        // 次级:描边,深色半透明
        outline:
          'border border-border/80 bg-card/40 text-foreground hover:bg-card hover:border-border',
        // 幽灵:无边框
        ghost: 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
        // GET 按钮:更紧凑
        get: 'bg-primary text-primary-foreground hover:brightness-110 shadow-sm shadow-primary/30',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-5',
        lg: 'h-12 px-6 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { buttonVariants };
