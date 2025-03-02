📁 Project Structure Explanation
React_19/
│-- node_modules/
│-- public/
│   ├── vite.svg
│-- src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│-- .gitignore
│-- eslint.config.js
│-- index.html
│-- package-lock.json
│-- package.json
│-- README.md
│-- vite.config.js
📂 Folder & File Explanation
1️⃣ node_modules/
Contains all dependencies installed via npm or yarn.
Auto-generated when running npm install (⚠️ Do not modify).
2️⃣ public/
Stores static assets accessible from the browser.
vite.svg: Default Vite logo (can be removed or replaced).
Unlike CRA, public files are not processed by Webpack in Vite.
3️⃣ src/ (Main Code)
Stores all React components, styles, and logic.
📌 Key Files:

App.jsx → Main component containing the UI.
App.css → Styles specific to App.jsx.
index.css → Global CSS styles.
main.jsx → Entry point that renders <App /> inside index.html.
📌 Example main.jsx:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
4️⃣ .gitignore
Prevents unnecessary files from being pushed to GitHub (e.g., node_modules).
5️⃣ eslint.config.js
Configuration for ESLint (code quality & linting rules).
6️⃣ index.html
The root HTML file where React mounts (<div id="root"></div>).
7️⃣ package.json & package-lock.json
package.json: Stores project metadata & dependencies.
package-lock.json: Ensures consistent package versions.
8️⃣ vite.config.js
Configuration file for Vite (defines aliases, plugins, and optimizations).