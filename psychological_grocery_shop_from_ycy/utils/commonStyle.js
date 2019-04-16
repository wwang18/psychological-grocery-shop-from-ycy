/** 公共样式表 **/
import { Dimensions, Platform, DeviceInfo } from 'react-native'

const defaultWidth = 375; //设计图的宽度
const defaultHeight = 667; //设计图的高度
// iPhoneX 
const X_WIDTH = 375;
const X_HEIGHT = 812;
const fontScale = Platform.OS === 'ios' 
    ? (1.0/DeviceInfo.Dimensions.screen.fontScale) 
    : (1.0/DeviceInfo.Dimensions.screenPhysicalPixels.fontScale);
export const width = Dimensions.get('window').width;      //设备的宽度
export const height = Dimensions.get('window').height;    //设备的高度
// 判断是否为iPhone X
export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    ((width === X_WIDTH && height === X_HEIGHT) ||
    (width === X_HEIGHT && height === X_WIDTH))
  )
}
// 判断是否为android
export function isAndroid() {
  return Platform.OS === 'android' 
}
//宽度适配 width, margin/paddingLeft, margin/paddingRight, margin/paddingHorizo​​ntal
export function w(w) {
  return w*width/defaultWidth;
}
//高度适配 height, margin/paddingTop, margin/paddingBottom, margin/paddingVertical
export function h(h) {
  return h*height/defaultHeight;
}
//字体适配
export function f(f) {
  return f*fontScale;
}
export default cSty = {
  // 宽度比例
  wScale: width/defaultWidth,
  // 高度比例
  hScale: height/defaultHeight,
  // 字体比例
  fs: fontScale,
  // 字体
  ff: 'DFPWaWaW5-GB',
  // 居中
  cc: {
    justifyContent: 'center',
    alignItems: 'center'
  }
  /** 颜色 **/
  // 主色 
  // themeColor: '#00CA7A',
  // 可交互文字 
  // interactiveColor: '#00B36B',
  // 非点击按钮文字
  // unclickableColor: '#4DDBA2',
  // 特殊提示文字
  // warningColor: '#FA5151',
  // 正文/大标
  // mainColor: '#191919',
  /** 文字 **/
  ///最大文字
  // maxFs: 32,
  
}