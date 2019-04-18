import React, { Component } from 'react';
import { Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Button,
  StatusBar,
  Image,
  FlatList,
  Animated
} from 'react-native';
//import { Audio } from 'expo-av';

import { WawaText } from '../../components/WawaText';
import { DialogBox } from '../../components/DialogBox';
import { pageIds } from '../InStore/InStoreConfig';

import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const IMAGE_FOLDER = '../../img/';
const AUDIO_FOLDER = '../../audio/';

// 关于将音频文件打包的问题：
// 打包是由react-native自动完成的，这里的 require 会使音频文件成为 APK 的可以通过 iOS/Android 的资源管理机制引用的一部分。
//
// 事项一：
// 必须写    [./sounds/60.mp3] 
// 而不能写成 [sounds/60.mp3]。前面的点 和 除号 必须有。不然会和尝试引入ogg文件时一样的错误。
//
// 事项二：
// 打包器默认不支持ogg格式，如果尝试 require 一个 OGG 文件的话，就会引发如下错误：
// DeltaPatcher.js:77 Uncaught (in promise) TypeError: Cannot read property 'concat' of undefined
//    at DeltaPatcher.applyDelta (DeltaPatcher.js:77)
//    at deltaUrlToBlobUrl (deltaUrlToBlobUrl.js:28)
//    at async getBlobUrl ((index):222)
//    at async WebSocket.ws.onmessage ((index):185)

// MIDI中，60 = C4
const notes_mp3 = [
  require('../../audio/60.mp3'),
  require('../../audio/61.mp3'),
  require('../../audio/62.mp3'),
  require('../../audio/63.mp3'),
  require('../../audio/64.mp3'),
  require('../../audio/65.mp3'),
  require('../../audio/66.mp3'),
  require('../../audio/67.mp3'),
  require('../../audio/68.mp3'),
  require('../../audio/69.mp3'),
  require('../../audio/70.mp3'),
  require('../../audio/71.mp3'),
  require('../../audio/72.mp3'),
  require('../../audio/73.mp3'),
  require('../../audio/74.mp3'),
  require('../../audio/75.mp3'),
  require('../../audio/76.mp3'),
  require('../../audio/77.mp3'),
  require('../../audio/78.mp3'),
  require('../../audio/79.mp3'),
  require('../../audio/80.mp3'),
  require('../../audio/81.mp3'),
  require('../../audio/82.mp3'),
  require('../../audio/83.mp3'),
  require('../../audio/84.mp3'),
];


const STAFF_BEGIN = require(`${IMAGE_FOLDER}/notes/slice_0_1.png`);
const STAFF_END   = require(`${IMAGE_FOLDER}/notes/slice_0_15.png`);
const STAFF_EMPTY = require(`${IMAGE_FOLDER}/notes/slice_0_2.png`);
const NOTE_IMAGES = [
  require(`${IMAGE_FOLDER}/notes/slice_0_2.png`),//require('./notes/slice_0_0.png'),
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  require(`${IMAGE_FOLDER}/notes/slice_0_3.png`), // 72
  require(`${IMAGE_FOLDER}/notes/slice_0_4.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_5.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_6.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_7.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_8.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_9.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_10.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_11.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_12.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_13.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_14.png`),
  null,
];

// 写成MIDI音符只是为了方便记忆
// 第一排：C4-B4, 60-71
// 第二排：C5~B5, 72-83

const LINE_BREAK = -1;
const EMPTY_NOTE = 59;
const QUESTIONS = [
  [72,74,76,77,79,LINE_BREAK,
   79,77,76,74,72],
];

var g_mytest = null;
var mouse_x = new Animated.Value(20);
var mouse_y = new Animated.Value(300);
var mouse_rot_y = new Animated.Value(0);
var mouse_opacity = new Animated.Value(1);
var last_mouse_x = -999;

var curr_notes = []; // 当前的题库。可能只有一部分被显示出来。内容为MIDI音符编号，-1为强行换页
var curr_note_idx = 0;
var curr_notes_visible_start = 0; // 第一个可见的

export default class M11 extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      curr_visible_notes: [],
      dummy_notes: [],
      difficulty: 0,
      mouse_h: 80,
      mouse_w: 80,
      key_row1_x: 0,
      key_row1_y: 220,
      key_row2_x: "50%",
      key_row2_y: 220,
      key_height: 80,
      key_width:  90,
      note_h:     200,
      note_w:     64,
      game_state: "not_started",
    }
    this.note_elts = { }; // id to React Node
    g_mytest = this;
  }
  
  ShouldShowStaff() {
    return true;
    //return (this.state.difficulty > 1); 
  }
  
  SetNotes(x) {
    curr_notes = x.splice();
    curr_note_idx = 0;
    curr_notes_visible_start = 0;
  }
  
  UpdateVisibleNotes() {
    var c = [], dummy = [];
    var i = curr_notes_visible_start;
    for (; i < curr_notes.length && curr_notes[i] != LINE_BREAK; i++) {
      if (i < curr_note_idx) c.push(EMPTY_NOTE);
      else c.push(curr_notes[i]);
      dummy.push(EMPTY_NOTE);
    }
    var s = this.state;
    s.curr_visible_notes = c;
    s.dummy_notes = dummy;
    this.setState(s);
  }
  
  SetDifficulty(d) {
    var state = this.state;
    if (d == 0) {
      state.key_height = 80;
      state.key_width  = 90;
      state.key_row2_x = 5;
    } else {
      state.key_height = 80;
      state.key_width  = 45;
      state.key_row2_x = 320;
    }
    state.difficulty = d;
    this.setState(state);
  }
  
  GetHintForCurrentLevel() {
    if (this.state.difficulty == 0) return "[0] 提示：请跟随老鼠的移动按下指定按键。";
    else if (this.state.difficulty == 1) return "[1] 提示：请跟随老鼠的移动按下指定按键；请注意按键对应谱子的位置";
    else return "[2]";
  }
  
  StartGame() {
    var state = this.state;
    state.game_state = "started";
    this.setState(state);
  }
  
  EndGame() {
    var state = this.state;
    state.game_state = "ended";
    this.setState(state);
  }
  
  ExitGame() {
    this.props.funcs.redirectTo(pageIds.storeMain);
  }
  
  componentDidMount() {
    this.SetDifficulty(this.state.difficulty);
    curr_notes = QUESTIONS[0];
    this.UpdateVisibleNotes();
  }
  
  ShouldShowOctave1() { return (this.state.difficulty > 0); }
  ShouldShowOctave2() { return true; }
  
  playNote(midi_note_id) {
    const idx = midi_note_id - 60;
    const s = new Sound(notes_mp3[idx], (error) => {
      if (error) {
        console.log(error);
        return; 
      }
      s.play( () => s.release() );
    });
  }
  
  GetCurrNote() {
    return curr_notes[curr_note_idx];
  }
  
  GetNextNote() {
    var ret = -999, idx = curr_note_idx + 1;
    while (curr_notes[idx] == LINE_BREAK) idx ++;
    if (idx < curr_notes.length) ret = curr_notes[idx];
    return ret;
  }
  
  // 该函数会在移至当前谱的最后时终止游戏
  IncrementCurrNote() {
    curr_note_idx ++;
    while (curr_note_idx < curr_notes.length && curr_notes[curr_note_idx] == LINE_BREAK) {
      curr_note_idx ++;
      console.log("cni=" + curr_note_idx);
      curr_notes_visible_start = curr_note_idx;
    }
    
    // 终止游戏
    if (curr_note_idx >= curr_notes.length) this.EndGame();
  }
  
  OnNotePressed(note) { // MIDI音符编号
    var c = g_mytest.state.curr_visible_notes;
    var x0 = this.GetCurrNote(), x1 = this.GetNextNote();
    console.log(c.length + " - " + x0 + " - " + x1);
    if (c.length > 0 && x0 != -999 && x0 == note) {
      
      // 更新谱子。
      this.IncrementCurrNote();
      this.UpdateVisibleNotes();
      
      // 把老鼠移到下一个音符的位置去。
      var next_note = undefined;
      if (x1 != -999) {
        var id = 'note' + x1;
        var elt = g_mytest.note_elts[id];
        elt.measure((x,y,w,h,px,py) => {
          g_mytest.MoveMouseTo(px, py);
        });
      } else {
        g_mytest.MoveMouseTo(-999, -999);
      }
    }
  }
  
  MoveMouseTo(px, py) { // Screen X, Screen Y
    if (1) {
      var target_y_rot = 0; // 向右移动
      if (px < last_mouse_x) target_y_rot = 1; // 向左移动
      last_mouse_x = px;
      
      Animated.parallel([
        Animated.timing(
          mouse_x,
          { toValue: px, duration: 300 }
        ),
        Animated.timing(
          mouse_y,
          { toValue: py, duration: 300 }
        ),
        Animated.timing(
          mouse_rot_y,
          { toValue: target_y_rot, duration: 100 }
        ),
      ]).start( () => { } )
    } else {
      mouse_x = px - this.state.mouse_w / 4;
      mouse_y = py;
      console.log('MoveMouseTo ' + mouse_x + ', ' + mouse_y)
      
      Animated.sequence([
        Animated.timing(
          mouse_opacity,
          { fromValue: 0, toValue: 1, duration: 1000 }
        ),
      ]).start( () => { } )
      
      this.setState(this.state);
    }
  }
  
  _onPressButton(x) {
    //Alert.alert('You tapped the button!' + this.id)
    var x = this.id;
    console.log("onPressButton");
    if (x == "notes_disp") { // Clear notes
      console.log("clear");
      g_mytest.setState({ curr_visible_notes: [] });
    } else { // Add note
      if (x.startsWith('note')) {
        var n = parseInt(x.substr(4));
        
        g_mytest.OnNotePressed(n);
        g_mytest.playNote(n);
      }
    }
  }
  
  VisualizeNotes() {
    return "";//"length = " + this.state.curr_visible_notes.length;
  }
  
  render() {
    
    let mouse_rot_y_interpolated = mouse_rot_y.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
    
    return (

      <ImageBackground
        style={{width:'100%', height:'100%'}}
        resizeMode="stretch"
        source={require('../../img/instore/M11.jpg')}
      >


        <View style={styles.container}>
          
          <StatusBar hidden />
          <TouchableOpacity id="notes_disp" style={{right:2, top:2, position:'absolute',
            height:80, width:200, backgroundColor:'#33663300'}}
            onPress={this._onPressButton}>
            {<Text>{this.VisualizeNotes()}</Text>}
            
          </TouchableOpacity>
          
          { 
            /* 空的谱线背景，先绘制 */
            this.ShouldShowStaff() && 
            <View style={{flexDirection:'row', left:'auto', right:'auto', top:2, position:'absolute'}}>
              <Image source={STAFF_BEGIN}
                     style={{height:this.state.note_h, width:this.state.note_w}}
                     resizeMode='stretch'></Image>
                     
              <View>
                <FlatList
                  horizontal
                  style={{}}
                  data={this.state.dummy_notes}
                  backgroundImage={STAFF_EMPTY}
                  renderItem={
                    ({item}) => <Image source={NOTE_IMAGES[item-59]}
                                       style={{height:this.state.note_h, width:this.state.note_w}}
                                       resizeMode='stretch'></Image>
                  }
                />
              </View>
              
              <Image source={STAFF_END}
                     style={{height:this.state.note_h, width:this.state.note_w}}
                     resizeMode='stretch'></Image>
                     
            </View>
          }
          
          {
            /* 有内容的谱线，后绘制，覆盖于空的谱线之上 */
            this.ShouldShowStaff() &&
            <View style={{flexDirection:'row', left:'auto', right:'auto', top:2, position:'absolute'}}>
              <Image source={STAFF_BEGIN}
                     style={{height:this.state.note_h, width:this.state.note_w}}
                     resizeMode='stretch'></Image>
                     
              <View>
                <FlatList
                  horizontal
                  style={{}}
                  data={this.state.curr_visible_notes}
                  backgroundImage={STAFF_EMPTY}
                  renderItem={
                    ({item}) => <Image source={NOTE_IMAGES[item-59]}
                                       style={{height:this.state.note_h, width:this.state.note_w}}
                                       resizeMode='stretch'></Image>
                  }
                />
              </View>
              
              <Image source={STAFF_END}
                     style={{height:this.state.note_h, width:this.state.note_w}}
                     resizeMode='stretch'></Image>
                     
            </View>
          }

          {
            this.ShouldShowOctave2() &&
            <View style={{flex:1, flexDirection:'row',
              left:this.state.key_row2_x,
              top:this.state.key_row2_y,
              height: this.state.key_height,
              position:'absolute', width:'100%'}}>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <TouchableOpacity id="note73" ref={c => (this.note_elts['note73'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#a6cee3'}]} onPress={this._onPressButton}>
                  <Text>#C</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note75" ref={c => (this.note_elts['note75'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#1f78b4'}]} onPress={this._onPressButton}>
                  <Text>#D</Text>
                </TouchableOpacity>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <TouchableOpacity id="note78" ref={c => (this.note_elts['note78'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#33a02c'}]} onPress={this._onPressButton}>
                  <Text>#F</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note80" ref={c => (this.note_elts['note80'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#fb9a99'}]} onPress={this._onPressButton}>
                  <Text>#G</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note82" ref={c => (this.note_elts['note82'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#e31a1c'}]} onPress={this._onPressButton}>
                  <Text>#A</Text>
                </TouchableOpacity>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
            </View>
          }

          {
            this.ShouldShowOctave2() && 
            <View style={{flex:1, flexDirection:'row',
              left:this.state.key_row2_x, 
              top:this.state.key_row2_y+2+this.state.key_height,
              height:this.state.key_height,
              position:'absolute', width:'100%'}}>
                <TouchableOpacity id="note72" ref={c => (this.note_elts['note72'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#a6cee3'}]}
                  onPress={this._onPressButton}>
                  <Text>C</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note74" ref={c => (this.note_elts['note74'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#1f78b4'}]} onPress={this._onPressButton}>
                  <Text>D</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note76" ref={c => (this.note_elts['note76'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#b2df8a'}]} onPress={this._onPressButton}>
                  <Text>E</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note77" ref={c => (this.note_elts['note77'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#33a02c'}]} onPress={this._onPressButton}>
                  <Text>F</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note79" ref={c => (this.note_elts['note79'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#fb9a99'}]} onPress={this._onPressButton}>
                  <Text>G</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note81" ref={c => (this.note_elts['note81'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#e31a1c'}]} onPress={this._onPressButton}>
                  <Text>A</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note83" ref={c => (this.note_elts['note83'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#808080'}]} onPress={this._onPressButton}>
                  <Text>B</Text>
                </TouchableOpacity>
            </View>
          }

          {
            this.ShouldShowOctave1() &&
            <View style={{flex:1, flexDirection:'row',
              left:   this.state.key_row1_x,
              top:    this.state.key_row1_y,
              height: this.state.key_height,
              position:'absolute', width:'100%'}}>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <TouchableOpacity id="note61" ref={c => (this.note_elts['note61'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#a6cee3'}]} onPress={this._onPressButton}>
                  <Text>#C</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note63" ref={c => (this.note_elts['note63'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#1f78b4'}]} onPress={this._onPressButton}>
                  <Text>#D</Text>
                </TouchableOpacity>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <TouchableOpacity id="note66" ref={c => (this.note_elts['note66'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#33a02c'}]} onPress={this._onPressButton}>
                  <Text>#F</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note68" ref={c => (this.note_elts['note68'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#fb9a99'}]} onPress={this._onPressButton}>
                  <Text>#G</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note70" ref={c => (this.note_elts['note70'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#e31a1c'}]} onPress={this._onPressButton}>
                  <Text>#A</Text>
                </TouchableOpacity>
                <View style={styles.hiddenHalfButton}>
                </View>
            </View>
          }

          {
            this.ShouldShowOctave1() &&
            <View style={{flex:1, flexDirection:'row',
              left:this.state.key_row1_x, 
              top:this.state.key_row1_y + 2 + this.state.key_height,
              height:this.state.key_height,
              position:'absolute', 
              width:'100%'}}>
                <TouchableOpacity id="note60" ref={c => (this.note_elts['note60'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#a6cee3'}]} onPress={this._onPressButton}>
                  <Text>C</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note62" ref={c => (this.note_elts['note62'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#1f78b4'}]} onPress={this._onPressButton}>
                  <Text>D</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note64" ref={c => (this.note_elts['note64'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#b2df8a'}]} onPress={this._onPressButton}>
                  <Text>E</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note65" ref={c => (this.note_elts['note65'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#33a02c'}]} onPress={this._onPressButton}>
                  <Text>F</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note67" ref={c => (this.note_elts['note67'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#fb9a99'}]} onPress={this._onPressButton}>
                  <Text>G</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note69" ref={c => (this.note_elts['note69'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#e31a1c'}]} onPress={this._onPressButton}>
                  <Text>A</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note71" ref={c => (this.note_elts['note71'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#808080'}]} onPress={this._onPressButton}>
                  <Text>B</Text>
                </TouchableOpacity>
            </View>
          }
        </View>
        
        {/* 老鼠 */}
          
        <Animated.View id="theMouse" ref={c => (this.the_mouse = c)} 
            style={{position:'absolute', 
                    top:mouse_y, left: mouse_x, opacity: mouse_opacity,
                    transform: [{rotateY: mouse_rot_y_interpolated}] }}
            pointerEvents="none"
            >
            <Image source={require('../../img/instore/TheMouse.gif')} style={{height:this.state.mouse_h, width:this.state.mouse_w}} resizeMode='stretch'></Image>
        </Animated.View>
        
        
        {/* 游戏还没开始时的样子 */}
        
        {
          (this.state.game_state == "not_started") &&
          <View style = {styles.blocker}>
          </View>
        }
         
        {
          (this.state.game_state == "not_started") && 
          <View style = {{width: '100%', height:120, position:'absolute',
                          left: 'auto', right:'auto', top:'60%'}}>
            <DialogBox onPress={() => this.StartGame()}>
              <WawaText style={{ color:'white', fontSize: 18 }}>
                { this.GetHintForCurrentLevel() }
              </WawaText>
            </DialogBox>
          </View>
        }
        
        {/* 完成时的消息 */}
        {
          (this.state.game_state == "ended") &&
            <View style = {styles.blocker}>
          </View>
        }
        {
          (this.state.game_state == "ended") &&
          <View style = {{width: '100%', height: 120, position:'absolute',
                          left: 'auto', right: 'auto', top:'20%' }} >
            <DialogBox onPress={() => this.ExitGame()}>
              <WawaText style={{ color:'white', fontSize: 18 }}>
                任务完成！点此返回。
              </WawaText>
            </DialogBox>
          </View>
        }
          
      </ImageBackground>
    );
  }
  
  GenStyleSheet() {
    return ({
      container: {
        paddingTop: 6,
        alignItems: 'center'
      },
      button: {
        width: g_mytest.state.key_width,
        height: g_mytest.state.key_height,
        margin: 1,
        alignItems: 'center',
        backgroundColor: '#2196F333',
        opacity: 0.4,
      },
      hiddenHalfButton: {
        width: g_mytest.state.key_width/2,
        height: g_mytest.state.key_height,
        margin: 1,
      },
      buttonText: {
        padding: 3,
        color: 'white'
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    alignItems: 'center'
  },
  button: {
    width: 45,
    height: 80,
    margin: 1,
    alignItems: 'center',
    backgroundColor: '#2196F333',
    opacity: 0.4,
  },
  hiddenHalfButton: {
    width: 22.5,
    height: 80,
    margin: 1,
  },
  buttonText: {
    padding: 3,
    color: 'white'
  },
  blocker: {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.7,
  }
})
