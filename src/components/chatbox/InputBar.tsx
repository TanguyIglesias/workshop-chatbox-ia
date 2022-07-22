import { Button, TextField } from "@mui/material";
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
  setCreateBox,
}: inputBarProps) => {
  const handleMessage = () => {
    setCreateBox(true);
  };
  return (
    <div className="flex m-4">
      <div className="grow mr-2">
        <TextField
          id="filled-textarea"
          label="Ask LuluBot"
          placeholder="Write your message"
          multiline
          variant="filled"
          fullWidth
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCreateBox(true);
            }
          }}
          onChange={(e) => setUserMessage(e.target.value)}
          value={userMessage}
        />
      </div>
      <Button
        onClick={handleMessage}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
};

export default InputBar;
