// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('duplicate-tab.duplicate', async (uri) => {
		const viewColumn = vscode.window.activeTextEditor?.viewColumn;
		let targetViewColumn = viewColumn;
		if (viewColumn === 1) {
			targetViewColumn = 2;
		} else if (viewColumn === 2) {
			targetViewColumn = 1;
		}
		if (uri) {
			await vscode.window.showTextDocument(uri, {
				viewColumn: targetViewColumn,
				preserveFocus: false,
				preview: false,
			});
		} else {
			const currentFileName: any = vscode.window.activeTextEditor?.document.fileName;
			if (!currentFileName) {
				return;
			}
			await vscode.window.showTextDocument(currentFileName, {
				viewColumn: targetViewColumn,
				preserveFocus: false,
				preview: false,
			});
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
