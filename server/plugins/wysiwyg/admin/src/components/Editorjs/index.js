import React from "react";
import PropTypes from "prop-types";
import _EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import "./index.css";

const EditorJS = ({ onEditorChange, name, value }) => {
  const holder = React.useRef();
  holder.current = holder.current || `editorJS_${Math.random().toString(32)}`;

  React.useEffect(() => {
    new _EditorJS({
      data: JSON.parse(value),
      tools: {
        list: List,
        header: Header,
      },
      holder: holder.current,
      autofocus: true,
      onChange: async (api) => {
        const data = await api.saver.save();

        onEditorChange({ target: { name, value: JSON.stringify(data) } });
      },
    });
  }, []);

  return <div id={holder.current} className="editorjs" />;
};

EditorJS.propTypes = {
  onEditorChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default EditorJS;
