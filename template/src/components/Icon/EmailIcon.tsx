import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const EmailIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M64 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"
      fill="currentColor"></path>
  </Icon>
));

export default EmailIcon;
