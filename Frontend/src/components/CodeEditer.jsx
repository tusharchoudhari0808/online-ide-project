// import React, { useState } from "react";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-css";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-monokai";

// const CodeEditor = () => {
//   const [html, setHtml] = useState("");
//   const [css, setCss] = useState("");
//   const [js, setJs] = useState("");

//   const srcDoc = `
//     <html>
//       <head>
//         <style>${css}</style>
//       </head>
//       <body>
//         ${html}
//         <script>${js}<\/script>
//       </body>
//     </html>
//   `;

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Left: Code Editor */}
//       <div className="w-1/2 border-r border-gray-700 p-2">
//         <div className="flex gap-2 mb-2">
//           <button className="px-3 py-1 bg-gray-800 rounded-md">index.html</button>
//           <button className="px-3 py-1 bg-gray-800 rounded-md">style.css</button>
//           <button className="px-3 py-1 bg-gray-800 rounded-md">script.js</button>
//         </div>

//         <AceEditor
//           mode="html"
//           theme="monokai"
//           value={html}
//           onChange={setHtml}
//           fontSize={14}
//           className="w-full h-[200px] mb-2"
//         />
//         <AceEditor
//           mode="css"
//           theme="monokai"
//           value={css}
//           onChange={setCss}
//           fontSize={14}
//           className="w-full h-[200px] mb-2"
//         />
//         <AceEditor
//           mode="javascript"
//           theme="monokai"
//           value={js}
//           onChange={setJs}
//           fontSize={14}
//           className="w-full h-[200px]"
//         />
//       </div>

//       {/* Right: Output Section */}
//       <div className="w-1/2 p-2">
//         <h2 className="text-center text-lg mb-2">Output</h2>
//         <iframe
//           title="output"
//           className="w-full h-full bg-white border border-gray-700"
//           srcDoc={srcDoc}
//         />
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;
