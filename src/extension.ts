// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('duplicate-tab.duplicate', () => {
		duplicateTab();
	});

	context.subscriptions.push(disposable);
}

function duplicateTab() {
	const currentFileName = vscode.window.activeTextEditor?.document.fileName;
	vscode.window.showTextDocument(currentFileName, -2, false);
}

// This method is called when your extension is deactivated
export function deactivate() {}
