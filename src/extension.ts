import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("extension.generateDoc", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const doc = editor.document;
    const pos = editor.selection.active;

    const currentLine = doc.lineAt(pos.line);
    if (!currentLine.text.trim().includes("gdoc")) {
      return;
    }

    const nextLine = doc.lineAt(pos.line + 1).text;
    const functionRegex = /(async\s+)?function\s+(\w+)\s*\(([^)]*)\)/;
    const arrowFunctionRegex = /const\s+(\w+)\s*=\s*(async\s*)?\(([^)]*)\)\s*=>/;
    let match = functionRegex.exec(nextLine) || arrowFunctionRegex.exec(nextLine);

    if (!match) {
      vscode.window.showInformationMessage("No function found on next line.");
      return;
    }

    const functionName = match[2] || match[1];
    const params = match[3]
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
    const createdDate = new Date().toISOString().slice(0, 10);
    const author = "Md. Nasir Ahmed";

    const docLines = [
      "/**",
      ` * ${functionName.replace(/([A-Z])/g, " $1").trim()} function.`,
      ...params.map((p) => ` * @param ${p} description.`),
      ` * @returns description.`,
      ` * @created ${createdDate} by ${author}.`,
      ` * @modified none`,
      " */",
    ];

    const edit = new vscode.WorkspaceEdit();
    const range = new vscode.Range(currentLine.range.start, currentLine.range.end);
    edit.replace(doc.uri, range, docLines.join("\n"));

    await vscode.workspace.applyEdit(edit);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
