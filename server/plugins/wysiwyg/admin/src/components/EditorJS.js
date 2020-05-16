import React from "react";
import _EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

export const EditorJS = ({ value, onChange }) => {
  const id = React.useRef();
  id.current = id.current || `editorJS_${Math.random().toString(32)}`;

  React.useEffect(() => {
    let version = 0;
    new _EditorJS({
      holderId: id.current,
      data: JSON.parse(value),
      tools: {
        header: Header,
        list: List,
      },
      async onChange(api) {
        const _version = ++version;

        // simple debounce
        await new Promise((r) => setTimeout(r, 1000));
        if (_version !== version) return;

        const { blocks } = await api.save();
        onChange(blocks);
      },
    });
  }, []);

  return <div id={id.current} />;
};
