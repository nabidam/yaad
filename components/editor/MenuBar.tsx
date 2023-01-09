import { Editor } from "@tiptap/react";
import IconButton from "../button/IconButton";
import Select from "../form/Select";
import Bold from "../icons/Bold";
import Italic from "../icons/Italic";
import Strikethrough from "../icons/Strikethrough";
import Underline from "../icons/Underline";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const changeTextStyle = (style: string) => {
    console.log({ style });
    switch (style) {
      case "paragraph":
        editor.chain().focus().setParagraph().run();
        break;
      case "h1":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "h2":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "h3":
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case "h4":
        editor.chain().focus().toggleHeading({ level: 4 }).run();
        break;
      case "h5":
        editor.chain().focus().toggleHeading({ level: 5 }).run();
        break;
      case "h6":
        editor.chain().focus().toggleHeading({ level: 6 }).run();
        break;
      default:
        break;
    }
  };

  const changeFontSize = (size: string) => {
    editor.chain().focus().setFontSize(size).run();
  };

  return (
    <div className="flex flex-wrap gap-[30px]">
      <Select
        changeValue={changeTextStyle}
        options={[
          { text: "Paragraph", value: "paragraph" },
          { text: "Heading 1", value: "h1" },
          { text: "Heading 2", value: "h2" },
          { text: "Heading 3", value: "h3" },
          { text: "Heading 4", value: "h4" },
          { text: "Heading 5", value: "h5" },
          { text: "Heading 6", value: "h6" },
        ]}
        defaultValue="Paragraph"
      />
      <Select
        changeValue={changeFontSize}
        options={[
          { text: "6", value: "6" },
          { text: "8", value: "8" },
          { text: "10", value: "10" },
          { text: "12", value: "12" },
          { text: "18", value: "18" },
          { text: "24", value: "24" },
          { text: "32", value: "32" },
          { text: "64", value: "64" },
          { text: "96", value: "96" },
        ]}
        defaultValue="12"
      />
      <div className="flex gap-[10px]">
        <IconButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <Bold />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <Italic />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <Underline />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <Strikethrough />
        </IconButton>
      </div>

      {/* <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button> */}
    </div>
  );
};

export default MenuBar;
