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
	const currentSelection = vscode.window.activeTextEditor?.document.getText() || '';
	const currentFileName = vscode.window.activeTextEditor?.document.fileName;

	var setting: vscode.Uri = vscode.Uri.parse('untitled:' + currentFileName + '-duplicated');
	vscode.workspace.openTextDocument(setting).then((a: vscode.TextDocument) => {
		vscode.window.showTextDocument(a, 1, false).then(e => {
			e.edit(edit => {
				edit.insert(new vscode.Position(0, 0), currentSelection);
			});
		});
	}, (error: any) => {
		vscode.window.showErrorMessage("Cannot duplicate tab")
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}
