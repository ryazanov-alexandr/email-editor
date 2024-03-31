import { Bold, Eraser, Italic, Underline } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../sevices/email.service";
import { useEditor } from "./useEditor";

import parse from "html-react-parser";
import styles from "./EmailEditor.module.scss";

export function EmailEditor() {
  const { text, applyFormat,  setText, textRef, updateSelection } = useEditor();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess() {
      setText("");
      queryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  return (
    <div>
      {text && <div className={styles.preview}>{parse(text)}</div>}

      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          onSelect={updateSelection}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter email..."
        >
          {text}
        </textarea>
        
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText("")}>
              <Eraser size={17} />
            </button>
            <button>
              <Bold onClick={() => applyFormat("bold")} size={17} />
            </button>
            <button>
              <Italic onClick={() => applyFormat("italic")} size={17} />
            </button>
            <button>
              <Underline onClick={() => applyFormat("underline")} size={17} />
            </button>
          </div>
          <button disabled={isPending} onClick={() => mutate()}>
            Send now
          </button>
        </div>
      </div>
    </div>
  );
}
