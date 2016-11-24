var codePush  = require('react-native-code-push');
export const checkIsUpdate = function(){
  codePush.sync({
      updateDialog: {
        //是否显示更新discription
        appendReleaseDescription: true,
        //更新说明的前缀。 默认是” Description:
        descriptionPrefix: "\n\n更新内容:\n",
        mandatoryContinueButtonLabel:"立即更新",//强制更新的按钮文字，默认为continue
        mandatoryUpdateMessage:"",//- 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.
        optionalIgnoreButtonLabel: '稍后',//非强制更新时，取消按钮文字,默认是ignore
        optionalInstallButtonLabel: '后台更新',//非强制更新时，确认文字. Defaults to “Install”
        optionalUpdateMessage: '有新版本了，是否更新？',//非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.
        title: '更新提示'//要显示的更新通知的标题. Defaults to “Update available”.
       },
      installMode: codePush.InstallMode.IMMEDIATE
  });
}
