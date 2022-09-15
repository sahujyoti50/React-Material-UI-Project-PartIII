import React from "react";
import { Stack, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";

import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" color="success"/>
        <TextField label="name" variant="filled"/>
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
        {/*adding color and size*/}
        <TextField label="required" required />
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value?"required":"Do not share with anyone"}
        />
      </Stack>
      
      
      <Stack direction="row" spacing={2}>
        {/* //To add password in * form and initialy disable */}
        <TextField
          label="password"
          type="password"
          disabled
          helperText="do not share your pasword with anyone"
        />
          <TextField label="Read Only" InputProps={{ readOnly: true }} />
          <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Stack>
     
      
      <Stack direction="row" spacing={2}>
        {/* //To add password in * form and initialy disable */}
        <TextField
          label="age"
          InputProps={{
            endAdornment: <InputAdornment position="end">Years</InputAdornment>,
          }}
        />
        <TextField
          label="weigth"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="height"
          InputProps={{
            endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default App;
