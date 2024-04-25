import './App.css';
import  LessonButton from './components/LessonButton';
import LessonButtonGroup from './components/LessonButtonGroup';
import LessonRadioGroup from './components/LessonRadioGroup';
import LessonSelect from './components/LessonSelect';
import  LessonTypography from './components/LessonTypography';

import { createTheme, colors, ThemeProvider } from '@mui/material';
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <LessonTypography/> */}
        {/* <LessonButton /> */}
        {/* <LessonButtonGroup/> */}
        {/* <LessonRadioGroup/> */}
        <LessonSelect/>
      </div>
    </ThemeProvider>
  );
}

export default App;
