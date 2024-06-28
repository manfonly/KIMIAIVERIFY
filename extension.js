// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const OpenAI = require("openai");

const MOONSHOT_API_KEY = vscode.workspace.getConfiguration().get('kimiApiKey');

const client = new OpenAI.OpenAI(
	{
		apiKey: MOONSHOT_API_KEY,
		baseURL: "https://api.moonshot.cn/v1"
	}
)

let aicstat = vscode.window.createOutputChannel("AI-CSTAT");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
async function static_analyze(c_code) {
	const completion = await client.chat.completions.create({
        model: "moonshot-v1-8k",         
        messages: [
            {
				role: "system",
				content: "请使用MISRA C 2023标准对以下的C代码进行静态分析，并提供改进建议，如果提供的不是C代码，直接回复不支持"
			},
            {
				role: "user",
				content: c_code
			}
        ],
        temperature: 0.3
    });
    return completion.choices[0].message.content;
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const removeLog = vscode.commands.registerCommand('editor.aicstat', function() {
		const global = vscode.window;
		const editor = global.activeTextEditor;
		if (!editor) {
			return;
		}
		const document = editor.document;
		let txt = document.getText();
		//let txt = document.getText(editor.selection);
		static_analyze(txt).then((v) => {
			aicstat.append(v);
			aicstat.show();
			//global.showInformationMessage(v)
		});
	});

	context.subscriptions.push(removeLog);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
