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
import { scale } from 'react-native-size-matters';
//import { Audio } from 'expo-av';

import { WawaText } from '../../components/WawaText';
import { WawaButton } from '../../components/WawaButton';
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
const notes_sounds = [];

// 预先载入，避免播放时卡顿
function InitSounds() {
  notes_sounds.length = 0;
  for (var i=0; i<notes_mp3.length; i++) {
    notes_sounds.push(new Sound(notes_mp3[i]));
  }
}

// 中文名来自：https://zhuanlan.zhihu.com/p/22389368
// 英文名来自：https://classpiano.com
// [ 半音delta, 标记, 英文描述, 中文描述 ]
const CHORD_TYPES = [
  [ [ 4, 3 ], "",    "major", "大三和弦" ],
  [ [ 3, 4 ], "m",   "minor", "小三和弦" ],
  [ [ 4, 4 ], "aug", "augmented", "增三和弦" ],
  [ [ 3, 3 ], "dim", "diminished", "减三和弦" ],
  
  [ [ 4, 3, 4 ], "major 7th", "大大七和弦" ]
  [ [ 4, 3, 3 ], "minor 7th", "大小七和弦" ],
  [ [ 3, 4, 4 ], "minor with major 7th", "小大七和弦" ],
  [ [ 3, 4, 3 ], "minor 7th", "小小七和弦" ],
  [ [ 4, 4, 3 ], "augmented 7th", "增大七和弦" ],
  [ [ 4, 4, 2 ], "7th sharp 5th", "增七和弦" ],
  [ [ 3, 3, 4 ], "minor 7th flat 5th", "减小七和弦" ],
  [ [ 3, 3, 2 ], "diminished 7th", "减七和弦" ],
];

const STAFF_BEGIN = require(`${IMAGE_FOLDER}/notes/slice_0_1.png`);
const STAFF_END   = require(`${IMAGE_FOLDER}/notes/slice_0_32.png`);

// FlatList 将用下标的方式从此表中找出元素
const NOTE_IMAGES = [
  // [0]
  require(`${IMAGE_FOLDER}/notes/slice_0_2.png`), // [0] 高音谱表的空格
  require(`${IMAGE_FOLDER}/notes/slice_0_19.png`), // [1] 低音谱表的空格
  require(`${IMAGE_FOLDER}/notes/slice_0_15.png`), // [2] 高到低,
  require(`${IMAGE_FOLDER}/notes/slice_0_17.png`), // [3] 低到高,
  null,
  null,
  null,
  null,
  null,
  null,
  
  // [10]
  null, null, null, null, null, null, null, null, null, null,
  
  // [20]
  null, null, null, null, null, null, null, null, null, null,
  
  // [30]
  null, null, null, null, null, null, null, null, null, null,
  
  // [40]
  null, null, null, null, null, null, null, null, null, null,
  
  // [50]
  null, null, null, null, null, null, null, null, null, null,
  
  // [60]
  require(`${IMAGE_FOLDER}/notes/slice_0_20.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_21.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_22.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_23.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_24.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_25.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_26.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_27.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_28.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_29.png`),
  
  // [70]
  require(`${IMAGE_FOLDER}/notes/slice_0_30.png`),
  require(`${IMAGE_FOLDER}/notes/slice_0_31.png`),
  
  // [72]
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

const NOTE_IMAGES_BLANK = [
  // [0]
  require(`${IMAGE_FOLDER}/notes/slice_1_2.png`), // [0] 高音谱表的空格
  require(`${IMAGE_FOLDER}/notes/slice_1_19.png`), // [1] 低音谱表的空格
  require(`${IMAGE_FOLDER}/notes/slice_1_15.png`), // [2] 高到低,
  require(`${IMAGE_FOLDER}/notes/slice_1_17.png`), // [3] 低到高,
  null,
  null,
  null,
  null,
  null,
  null,
  
  // [10]
  null, null, null, null, null, null, null, null, null, null,
  
  // [20]
  null, null, null, null, null, null, null, null, null, null,
  
  // [30]
  null, null, null, null, null, null, null, null, null, null,
  
  // [40]
  null, null, null, null, null, null, null, null, null, null,
  
  // [50]
  null, null, null, null, null, null, null, null, null, null,
  
  // [60]
  require(`${IMAGE_FOLDER}/notes/slice_1_20.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_21.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_22.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_23.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_24.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_25.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_26.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_27.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_28.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_29.png`),
  
  // [70]
  require(`${IMAGE_FOLDER}/notes/slice_1_30.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_31.png`),
  
  // [72]
  require(`${IMAGE_FOLDER}/notes/slice_1_3.png`), // 72
  require(`${IMAGE_FOLDER}/notes/slice_1_4.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_5.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_6.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_7.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_8.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_9.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_10.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_11.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_12.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_13.png`),
  require(`${IMAGE_FOLDER}/notes/slice_1_14.png`),
  null,
];

// 写成MIDI音符只是为了方便记忆
// 第一排：C4-B4, 60-71
// 第二排：C5~B5, 72-83

const LINE_BREAK = -1;
const EMPTY_NOTE_LOW = 1;
const EMPTY_NOTE_HIGH = 0;
const HIGH_CLEF_TO_LOW = 2;
const LOW_CLEF_TO_HIGH = 3;
const NOTE_COMMENT = -2;
const QUESTIONS = [
  [NOTE_COMMENT, "Example Comment", 72,74,76,77,79,LINE_BREAK,
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
      visible_octaves: 1,
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
      show_note_comments: true,
      is_setting_visible: false,
      note_comments: ""
    }
    this.note_elts = { }; // id to React Node
    g_mytest = this;
  }
  
  ShouldShowStaff() {
    return true; 
  }
                                      
  ToggleNoteComments() {
    console.log("ToggleNoteComments");
    var s = this.state;
    s.show_note_comments = !(s.show_note_comments);
    this.setState(s);
  }
  
  SetNotes(x) {
    curr_notes = x.slice();
    curr_note_idx = 0;
    while (true) {
      if (x[curr_note_idx] == LINE_BREAK) curr_note_idx ++;
      else if (x[curr_note_idx] == NOTE_COMMENT) {
        this.SetNoteComment(x[curr_note_idx + 1]);
        curr_note_idx += 2;
      }
      else break;
    }
    curr_notes_visible_start = curr_note_idx;
    this.UpdateVisibleNotes();
  }
  
  do_Gen(type) {
  }
  
  GenRandom() {
    // +4, +3
    var lb = 60, ub = 83;
    
    const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
                        "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    
    var n = [];
    
    var last_n0 = -999;
    for (var i=0; i<3; i++) {
      var n0, n1, n2;
      do {
        n0 = lb + Math.floor(Math.random() * (ub - 7 - lb + 1));
        n1 = n0 + 4;
        n2 = n1 + 3;
      } while (n0 == last_n0);
      last_n0 = n0;
      
      n.push(NOTE_COMMENT);
      n.push(NOTE_NAMES[n0 - lb] + ' maj')
          
      n.push(n0); n.push(n1); n.push(n2); n.push(LINE_BREAK);
    }
    this.SetNotes(n);
  }
  
  SetNoteComment(c) {
    var s = this.state;
    s.note_comments = c;
    this.setState(s);
  }
  
  UpdateVisibleNotes() {
    var c = [], dummy = [], last_clef = null, clef = null;
    var i = curr_notes_visible_start;
    var cmt = this.state.note_comments;
    for (; i < curr_notes.length && curr_notes[i] != LINE_BREAK;) {
      if (curr_notes[i] == NOTE_COMMENT) {
        console.log("cmt " + curr_notes[i+1])
        this.SetNoteComment(curr_notes[i+1]);
        i += 2;
        continue;
      }
      
      var empty_note;
      if (curr_notes[i] < 72) { clef = "low"; empty_note = EMPTY_NOTE_LOW; }
      else { clef = "high"; empty_note = EMPTY_NOTE_HIGH; }
      
      if ((last_clef != null) && (clef != last_clef)) {
        if (clef == "low") {
          c.push(LOW_CLEF_TO_HIGH);
          dummy.push(LOW_CLEF_TO_HIGH);
        } else {
          c.push(HIGH_CLEF_TO_LOW);
          dummy.push(HIGH_CLEF_TO_LOW);
        }
      }
      
      if (i < curr_note_idx) c.push(empty_note);
      else c.push(curr_notes[i]);
      dummy.push(empty_note);
      i++;
      
      last_clef = clef;
    }
    var s = this.state;
    s.note_comments = cmt;
    s.curr_visible_notes = c;
    s.dummy_notes = c.slice();
    this.setState(s);
  }
  
  SetVisibleOctaves(d) {
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
    state.visible_octaves = d;
    this.setState(state);
  }
  
  GetHintForCurrentLevel() {
    if (this.state.visible_octaves == 0) return "[0] 提示：请跟随老鼠的移动按下指定按键。";
    else if (this.state.visible_octaves == 1) return "[1] 提示：请跟随老鼠的移动按下指定按键；请注意按键对应谱子的位置";
    else return "[2] 这个难度下范围扩大，有两个八度的键。";
  }
  
  // 因为有可能从view中调用，而view中的this指针指向的是那个view，所以得要通过全局引用来取到这个Component
  StartGame() {
    var state = g_mytest.state;
    state.game_state = "started";
    g_mytest.setState(state);
    g_mytest.GenRandom();
    g_mytest.UpdateVisibleNotes();
    g_mytest.MoveMouseToNote(g_mytest.GetCurrNote());
  }
  
  EndGame() {
    var state = this.state;
    state.game_state = "ended";
    this.setState(state);
  }
  
  // 该函数只有通过主界面进入才有效，不然 props 会是 undefined
  ExitGame() {
    this.props.funcs.redirectTo(pageIds.storeMain);
  }
  
  componentDidMount() {
    InitSounds();
    this.UpdateVisibleNotes();
    // init level
    this.SetVisibleOctaves(this.state.visible_octaves);
    
    // init
    this.GenRandom();
    this.UpdateVisibleNotes();
    this.MoveMouseToNote(this.GetCurrNote());
    
    var state = g_mytest.state;
    state.note_comments = "Cm ・ C-minor ・ C小三和弦";
    this.setState(state);
  }
  
  ShouldShowOctave1() { return (this.state.visible_octaves > 0); }
  ShouldShowOctave2() { return true; }
  
  playNote(midi_note_id) {
    const idx = midi_note_id - 60;
    notes_sounds[idx].play();
  }
  
  GetCurrNote() {
    return curr_notes[curr_note_idx];
  }
  
  GetNextNote() {
    var ret = -999, idx = curr_note_idx + 1;
    while (true) {
      if (curr_notes[idx] == LINE_BREAK) idx ++;
      else if (curr_notes[idx] == NOTE_COMMENT) idx += 2;
      else break;
    }
    if (idx < curr_notes.length) ret = curr_notes[idx];
    return ret;
  }
  
  // 该函数会在移至当前谱的最后时终止游戏
  IncrementCurrNote() {
    curr_note_idx ++;
    while (curr_note_idx < curr_notes.length) {
      if (curr_notes[curr_note_idx] == LINE_BREAK) { // 只有换行时才移动可见窗口 
        curr_note_idx ++;
        console.log("cni=" + curr_note_idx);
        curr_notes_visible_start = curr_note_idx;
      }
      else if (curr_notes[curr_note_idx] == NOTE_COMMENT) {
        this.SetNoteComment(curr_notes[curr_note_idx + 1]);
        curr_note_idx += 2;
      }
      else break;
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
  
  MoveMouseToNote(note_idx) {
    var id = 'note' + note_idx;
    var elt = this.note_elts[id];
    elt.measure((x,y,w,h,px,py) => {
      this.MoveMouseTo(px, py);
    });
  }
  
  MoveMouseTo(px, py) { // Screen X, Screen Y
    if (1) {
      var target_y_rot = 0; // 向右移动
      if (px < last_mouse_x) target_y_rot = 1; // 向左移动
      last_mouse_x = px;
      
      px = px - this.state.mouse_w * 0.2;
      py = py - this.state.mouse_h * 0.2;
      
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
      mouse_x = px - this.state.mouse_w * 0.66;
      mouse_y = py - this.state.mouse_h * 0.66;
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
                  renderItem={
                    ({item}) => <Image source={NOTE_IMAGES_BLANK[item]}
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
                  renderItem={
                    ({item}) => <Image source={NOTE_IMAGES[item]}
                                       style={{height:this.state.note_h, width:this.state.note_w}}
                                       resizeMode='stretch'></Image>
                  }
                  onPressItem={this.ToggleNoteComments} 
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
                <TouchableOpacity id="note61" ref={c => (this.note_elts['note61'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#fdbf6f'}]} onPress={this._onPressButton}>
                  <Text>#C</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note63" ref={c => (this.note_elts['note63'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#ff7f00'}]} onPress={this._onPressButton}>
                  <Text>#D</Text>
                </TouchableOpacity>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <View style={this.GenStyleSheet().hiddenHalfButton}>
                </View>
                <TouchableOpacity id="note66" ref={c => (this.note_elts['note66'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#6a3d9a'}]} onPress={this._onPressButton}>
                  <Text>#F</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note68" ref={c => (this.note_elts['note68'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#ffff99'}]} onPress={this._onPressButton}>
                  <Text>#G</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note70" ref={c => (this.note_elts['note70'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#b15928'}]} onPress={this._onPressButton}>
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
                <TouchableOpacity id="note60" ref={c => (this.note_elts['note60'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#fdbf6f'}]} onPress={this._onPressButton}>
                  <Text>C</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note62" ref={c => (this.note_elts['note62'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#ff7f00'}]} onPress={this._onPressButton}>
                  <Text>D</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note64" ref={c => (this.note_elts['note64'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#cab2d6'}]} onPress={this._onPressButton}>
                  <Text>E</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note65" ref={c => (this.note_elts['note65'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#6a3d9a'}]} onPress={this._onPressButton}>
                  <Text>F</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note67" ref={c => (this.note_elts['note67'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#ffff99'}]} onPress={this._onPressButton}>
                  <Text>G</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note69" ref={c => (this.note_elts['note69'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#b15928'}]} onPress={this._onPressButton}>
                  <Text>A</Text>
                </TouchableOpacity>
                <TouchableOpacity id="note71" ref={c => (this.note_elts['note71'] = c)} style={[this.GenStyleSheet().button, {backgroundColor:'#c0c0c0'}]} onPress={this._onPressButton}>
                  <Text>B</Text>
                </TouchableOpacity>
            </View>
          }
        </View>
        
        
        { /* 目前显示的片段中附带的描述 */ }
        {
          (this.state.show_note_comments == true) &&
          <View style={{left: 0, width:'100%', height:40, top:'45%', position:'absolute',
            alignItems:'center', justifyContent:'center'}}>
            <Text textAlign="center">{this.state.note_comments}</Text>
          </View>
        }
        
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
          <View style = {styles.blocker}></View>
        }
        {
          (this.state.game_state == "ended") &&
          <View style = {{width: '100%', height: 120, position:'absolute',
                          left: 'auto', right: 'auto', top:'10%' }} >
            <DialogBox>
              <WawaText style={{ color:'white', fontSize: 18 }}>
                任务完成！请问是要继续玩还是退出：
              </WawaText>
            </DialogBox>
          </View>
        }
        {
          (this.state.game_state == "ended") &&
          <View style={{width:150, height:30, position:'absolute', left:40, right:'auto', top:'50%'}}>
            <Button title="再来一回" color='#CBA7F9' onPress={this.StartGame}>
            </Button>
          </View>
        }
        {
          (this.state.game_state == "ended") &&
          <View style={{width:150, height:30, position:'absolute', right:40, left:'auto', top:'50%'}}>
            <Button title="回到店铺" color='#CBA7F9' onPress={this.ExitGame}>
            </Button>
          </View>
        }
        
        {/*设置・・・很多地方抄自Settings*/}
        {
          (this.state.is_setting_visible == true) &&
          <View style={
                        [ styles.blocker, 
                         {backgroundImage:require("../../img/instore/EmptyDialogBox.png")}]
                      }>
            <View style={styles.contentPosition}>
              <View style={styles.headerContainer}>
                <WawaText style={styles.headerText}>
                  ～～设置～～
                </WawaText>
              </View>
            </View>
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
  },
  
  contentPosition: {
    flex: 1,
    paddingHorizontal: 70,
    paddingTop: 30,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: scale(36),
  },
})
