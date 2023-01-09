import MenuBar from "./MenuBar";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "./TextStyleExtension";
import HorizontalDivider from "../misc/HorizontalDivider";

const Editor = ({ content = "" }: { content?: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Underline,
      TextStyle,
    ],
    content,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <HorizontalDivider />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
