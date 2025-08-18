import {
    Box,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import { useState } from 'react';

export default function Index() {
  const [alignment, setAlignment] = useState('page'); // const [변수명, 변수에 값 넣어주는 함수] = useState(초기값); 변수 값이 변경되면 리액트에서 화면을 다시 그림

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment === null) newAlignment = "page";
    setAlignment(newAlignment);
  };

  return (
    <>
      <Box sx={{ mx: "10px" }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ mt: '20px', mb: '10px' }}
        >
          <ToggleButton value="page">페이지 목록</ToggleButton>
          <ToggleButton value="guide">마크업 가이드</ToggleButton>
        </ToggleButtonGroup>

      </Box>
    </>
  )
}