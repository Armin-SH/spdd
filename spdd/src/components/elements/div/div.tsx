import React, {forwardRef} from 'react';
import {DivProps} from './div.props'
import {styled} from '@mui/material/styles'

const CustomDiv = styled(({desktop, tablet, mobile, ...props}: any) => <div {...props}/>)<DivProps>`
  display: flex;
  flex-direction: row-reverse;
  ${(props) => props.desktop ? `
    flex-direction: ${props.desktop};
  ` : null};
  @media only screen and (max-width: 1023px) {
    ${(props) => props.tablet ? `
      flex-direction: ${props.tablet};
    ` : null}
  }
  @media only screen and (max-width: 639px) {
    ${(props) => props.mobile ? `
      flex-direction: ${props.mobile};
    ` : null}
  };
`;

const Div = forwardRef<any, DivProps>(function Div(props, ref) {
  const {children, className, style, onClick, mobile, tablet, desktop, dangerouslySetInnerHTML, role, id, ...rest} = props;

  return (
    <CustomDiv id={id} role={role} dangerouslySetInnerHTML={dangerouslySetInnerHTML} mobile={mobile} tablet={tablet} desktop={desktop} onClick={onClick} style={style} className={className} ref={ref} {...rest}>
      {children}
    </CustomDiv>
  )
});

export default Div;
