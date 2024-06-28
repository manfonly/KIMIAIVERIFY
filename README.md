# kimi chat for C&C++ static analyze

This is the demo project for VScode plugin which call kimi chat API by javascript to do static analyze C & C++ code.

## Requirements

You need a kimi AI account, and get your API token at:
user account info/basic info:  
https://platform.moonshot.cn/console/info

![KIMI API](img/kimi_info.jpg)

We call this token as:  
[KIMI API KEY]

You also need to have a Microsoft account, login:  
https://login.live.com

Then access Azure DevOps:  
https://aka.ms/SignupAzureDevOps

In the User settings, get Personal access tokens:  
![Navigate](img/azuredevopsinfo.jpg)

Create a new personal access token as:  
[AZURE DEV ACCESS TOKEN]

![Create personal access token](img/azurepat.jpg)

And don't forget to copy to some safe place:
![Save personal access token](img/savepat.jpg)

You also need to create a visual studio publisher at:
https://marketplace.visualstudio.com/manage/createpublisher
![Create VS publisher](img/createpublisher.jpg)

## How to use
First, install KIMIAIVERIFY from market place.
Open any C/C++ source file, you can find "AI static check" in the right click menu:  
![AI check menu](img/aimenu.png)

Or you can use CMD+shift+D keyboard short cut to call out this function.

The AI check result can be find at output log:
![AI check output](img/aicstatlog.png)

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

One Kimi free user API can only support one API call everytime, it takes about 5 seconds to get first response.

## Release Notes

### 1.0.0

Initial release of KIMI AI for C/C++ static analyze VScode plugin

## For more information


**Enjoy!**
