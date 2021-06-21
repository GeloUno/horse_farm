import { Story, Meta } from '@storybook/react';
import Attractions from './Attractions';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../utility/materialui';


export default {
  title: 'Components/Attractions',
  component: Attractions,

} as Meta;

const Primary: Story = (args) => (
  <ThemeProvider theme={theme}>
    <Attractions />
  </ThemeProvider>

)
export const PrimaryExample = Primary.bind({})

PrimaryExample.storyName = 'Attractions ';

PrimaryExample.args = {

}
