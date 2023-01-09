// import dynamic from "next/dynamic";
import Editor from "../components/editor/Editor";
// const Editor = dynamic(() => import("../components/editor/Editor"), {
//   ssr: false,
// });

const EditorPage = () => {
  return <Editor />;
};

export default EditorPage;
