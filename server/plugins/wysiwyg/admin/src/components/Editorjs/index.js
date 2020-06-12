import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";
import ListTool from "@editorjs/list";
import _EditorJS from "@editorjs/editorjs";
import QuoteTool from "@editorjs/quote";
import HeaderTool from "@editorjs/header";
import DelimiterTool from "@editorjs/delimiter";

import "./index.css";

const EditorJS = ({ onEditorChange, name, value }) => {
  const { backendURL } = strapi;
  const holder = React.useRef();
  holder.current = holder.current || `editorJS_${Math.random().toString(32)}`;

  React.useEffect(() => {
    new _EditorJS({
      data: JSON.parse(value),
      tools: {
        quote: {
          class: QuoteTool,
          inlineToolbar: true,
        },
        delimiter: DelimiterTool,
        list: ListTool,
        header: HeaderTool,
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: `${backendURL}/editor/get-link`,
          },
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByFile(file) {
                const body = new FormData();

                body.append("files", file);

                const { data } = await axios({
                  url: `${backendURL}/upload`,
                  method: "POST",
                  data: body,
                });
                const imageUrl = `${backendURL}${data[0].url}`;

                return { success: 1, file: { url: imageUrl } };
              },
            },
          },
        },
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
