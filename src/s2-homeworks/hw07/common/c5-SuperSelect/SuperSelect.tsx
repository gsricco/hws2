import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent, SetStateAction, ReactNode,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    value,
    ...restProps
}) => {
    const mappedOptions: ReactNode[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.value}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            value={value}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
