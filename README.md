<h2 align="center"> 杨超越解忧杂货铺 </h2>
<h3 align="center"> psychological-grocery-shop-from-ycy</h3>

##### 百度贴吧杨超越吧编程大赛参赛作品
杨超越解忧杂货铺是一个基于react native架构构建的跨平台移动app,用户对杂货店（超越）写信问生活困惑，ycy回信答疑（系统识别用户困惑的文字内容，引用ycy说过的话回信）

## Contents

- [Prepare For Development Envirement](#react-native-installation)
- [React native and React Navigation Guide](#react-native-navigation)
- [Debug Run](#debug-run)
- [Package To apk](#package-to-apk)
- [build for ios](#build-for-ios)
- [build for windows](#build-for-windows)
- [build for web](#build-for-web)

<h2 id="react-native-installation"> 📋 Prepare For Development Envirement </h2>
Windows环境下，杨超越解忧杂货铺的开发需要准备以下开发环境：</br>   
Node, Python2, JDK</br>
Node installation: https://nodejs.org/en/</br>
Python installation: https://www.python.org/downloads/</br>
python3 react native貌似已经支持python3，可以直接安装python3</br>
openJDK for windows： https://developers.redhat.com/products/openjdk/download/</br>
Linux 和 macos 可以直接于openJDK官网下载安装。</br>
甲骨文JDK8 是免费的，JDK11将于2020对企业收费。</br>
用户安装完JDK后需要设置JAVA_HOME, 教程请见：https://www.mkyong.com/java/how-to-set-java_home-on-windows-10/</br>
更多开发环境设置请看： https://reactnative.cn/docs/getting-started.html</br>
注意：海外用户不要修改 npm config set registry 和 npm config set disturl</br>

IDE 推荐安装Android Studio： https://developer.android.com/studio</br>
已经建好的页面基于android SDK 28 for Android 9 (Pie) 编译成功</br>
注意设置ANDROID_HOME 路径到系统变量，方法类似JAVA_Home。 React Native中文教程有详细过程解释。</br>

<h2 id="react-native-navigation">📋 React native and React Navigation Guide</h2>
React Native中文教程位于：https://reactnative.cn/docs/getting-started.html</br>
React navigation中文教程位于：https://reactnavigation.org/docs/zh-Hans/getting-started.html</br>


<h2 id="debug-run">  📋 Debug Run</h2>
Master Branch的代码clone后应当可以直接运行。</br>
开发者可于，../psychological-grocery-shop-from-ycy/ 文件夹运行 `npm-install` 来安装依赖。</br>
在启动安卓模拟器后，可在同一窗口运行 `react-native run-android` 来运行程序。</br>

常见错误： 500， script didn't run. 开发者错误关闭了npm 运行窗口。出现此错误可新开一个CMD窗口重新运行  `react-native run-android` ， 或者新开一个窗口运行 `npm start` 再于原窗口运行 `react-native run-android`</br>

<h2 id="package-to-apk"> 📋 Package To apk</h2>
打包APK的教程在：https://reactnative.cn/docs/signed-apk-android/</br>
配置的重点是秘钥的部分，请严格按照教程一步步执行。</br>

常见打包失败原因：</br>
link 错误，找不到资源。 在Node_Modules 文件夹下找到包：`react-native-orientation`, `react-native-screens`, `react-native-splash-screen`,  `react-native-exit-app`, 修改其中的 `/android/build.gradle` 文件，将compileSdkVersion 和targetSdkVersion 修改为 28</br>

<h2 id="build-for-ios"> 📋 build for ios</h2>
To be added.

<h2 id="build-for-windows"> 📋 build for windows UWP</h2>
编译基于 react-native-windows 的 UWP 应用，可运行于windows10 及 windows phone.

<h2 id="build-for-web"> 📋 build for web</h2>
编译基于 react-native-web 的 web 应用，可运行于windows10, linux 及 mac os.
Currently not in our route map.

