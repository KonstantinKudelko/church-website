import React from "react";
import PropTypes from "prop-types";
import _EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

const EditorJS = ({ onEditorChange, name, value }) => {
  const holder = "rich-text-editor";

  React.useEffect(() => {
    new _EditorJS({
      data: JSON.parse(value),
      tools: {
        header: Header,
        list: List,
      },
      holder,
      autofocus: true,
      onChange: async (api) => {
        const data = await api.saver.save();

        onEditorChange({ target: { name, value: JSON.stringify(data) } });
      },
    });
  }, []);

  return <div id={holder} />;
};

EditorJS.propTypes = {
  onEditorChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default EditorJS;
