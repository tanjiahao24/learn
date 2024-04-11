import ReactDOM from 'react-dom/client'
import { css } from '@emotion/css'
import styled from '@emotion/styled'

const $color = 'red'
const Div = styled.div`
  width: 100px;
  height: 100px;
  background-color: skyblue;
  .base {
    color: ${$color};
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <Div>
    <span className='base'>hello world</span>
  </Div>
)
