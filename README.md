# 📘 GenDoc - JSDoc Generator for VS Code

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/your-repo)
[![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.99.0-blue?logo=visualstudiocode)](https://code.visualstudio.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**GenDoc** is a lightweight, offline-first Visual Studio Code extension that generates concise and consistent JSDoc comments for your TypeScript functions, helping you maintain a clean and well-documented codebase effortlessly.

---

## ✨ Features

- ✅ Auto-generates JSDoc above any TypeScript function
- ✅ Includes `@param`, `@returns`, `@created`, and `@modified` tags
- ✅ Max line width of 150 characters per line
- ✅ Triggerable via custom hotkey
- ✅ No third-party extensions required
- ✅ Smart function name formatting

---

## ⚙️ Installation (Local Development)

1. **Package your extension**:

```bash
npm install -g @vscode/vsce
vsce package
```

2. **Install it in VS Code**:

```bash
code --install-extension gendoc-0.0.1.vsix
```

## Usage

1. **In a TypeScript file, write gendoc on the line before a function**:

```bash
//example.ts
    gdoc
    function example(param: string): void {
    // ...
    }
```

2. **Press**:

```bash
Ctrl + Shift + L
```

3.  **_A well-formatted JSDoc comment will be inserted automatically above the function_**

### Example

**_Before_**:

```bash
//example.ts
    gdoc
    function fetchData(url: string, options: RequestInit): Promise<Response> {
    // ...
    }
```

**_After_**:

```
//example.ts
    /**
    * Fetch data function.
    * @param url description.
    * @param options description.
    * @returns description.
    * @created 2025-05-04 by Md. Nasir Ahmed.
    * @modified none
    */
    function fetchData(url: string, options: RequestInit): Promise<Response> {
    // ...
    }
```

🔧 **Configuration**

Currently, customization is done in code. For example, to change the author name, modify this line in extension.ts:

```
const author = 'Md. Nasir Ahmed';
```

📄 License

MIT © 2025 Md. Nasir Ahmed
