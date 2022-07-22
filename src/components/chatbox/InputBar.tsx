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
    <div className="flex items-end m-4">
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
      <div className="h-12 flex items-end">
        <Button
          onClick={handleMessage}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default InputBar;
