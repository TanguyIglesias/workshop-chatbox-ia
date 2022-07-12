import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Dispatch, SetStateAction } from "react";

interface inputBarProps {
  userMessage: string;
  setUserMessage: Dispatch<SetStateAction<string>>;
  createBox: boolean;
  setCreateBox: Dispatch<SetStateAction<boolean>>;
}

const InputBar = ({
  userMessage,
  setUserMessage,
  createBox,
  setCreateBox,
}: inputBarProps) => {
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateBox(!createBox);
  };
  return (
    <Box component="form" noValidate onSubmit={handleMessage}>
      <div className="flex">
        <div className="grow mr-2">
          <TextField
            id="filled-textarea"
            label="Ask LuluBot"
            placeholder="Write your message"
            multiline
            variant="filled"
            fullWidth
            onChange={(e) => setUserMessage(e.target.value)}
            value={userMessage}
          />
        </div>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </Box>
  );
};

export default InputBar;
