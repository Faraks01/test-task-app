import {FC} from 'react'
import {FormProps} from './Form.types'

const Form: FC<FormProps> = ({children, ...restProps}) => (
  <form noValidate autoComplete="off" {...restProps} style={{ display: 'contents' }}>
    {children}
  </form>
)

export default Form
