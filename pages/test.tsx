import Select from "../components/form/Select";

const Test = () => {
  return (
    <Select
      options={[
        { text: "yek", value: "yek" },
        { text: "do", value: "do" },
        { text: "se", value: "se" },
        { text: "char", value: "char" },
        { text: "panj", value: "panj" },
      ]}
    />
  );
};

export default Test;
