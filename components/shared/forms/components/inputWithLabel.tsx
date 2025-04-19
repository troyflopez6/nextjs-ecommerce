import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Root } from '@radix-ui/react-label'
import { ComponentProps, FC } from 'react'

export type TInputWithLabelProps = {
    inputProps: ComponentProps<'input'>
    labelProps?: ComponentProps<typeof Root>
    label?: string
    error?: string[]
}

const InputWithLabel: FC<TInputWithLabelProps> = ({ error, labelProps, inputProps, label }) => {
  return (
    <div className='grid gap-1'>
      <div className='grid gap-2'>
        {labelProps && label && <Label
          {...labelProps}
        >
          {label}
        </Label>
        }
        <Input
          {...inputProps}
        />
      </div>
      {
        error && error?.map((err, i) => (
          <div
            key={`${i}-${err}`}
            className='w-full text-destructive text-xs px-1'
          >
            {err}
          </div>
        ))
      }
    </div>
  )}
export default InputWithLabel