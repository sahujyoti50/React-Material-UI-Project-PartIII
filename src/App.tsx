import React from "react";
import { Stack, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";

import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
        {/*adding color and size*/}
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="required" required />
        {/* //add * */}
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* //add Text below input */}
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
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* //To add password in * form and initialy disable */}
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* //To add password in * form and initialy disable */}
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
          label="Weigth"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default App;
