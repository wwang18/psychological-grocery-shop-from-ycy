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
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const IMAGE_FOLDER = '../../img/';

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

const EMPTY_NOTE = 59;
const QUESTIONS = [
  [72,74,76,77,79,77,76,74,72],
];

var g_mytest = null;
var mouse_x = new Animated.Value(20);
var mouse_y = new Animated.Value(300);
var mouse_opacity = new Animated.Value(1);

export default class M11 extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      curr_notes: QUESTIONS[0], 
      dummy_notes: Array(QUESTIONS[0].length).fill(59),
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
    }
    this.note_elts = { }; // id to React Node
    g_mytest = this;
  }
  
  ShouldShowStaff() {
    return true;
    //return (this.state.difficulty > 1); 
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
  
  componentDidMount() {
    this.SetDifficulty(this.state.difficulty);
  }
  
  ShouldShowOctave1() { return (this.state.difficulty > 0); }
  ShouldShowOctave2() { return true; }
  
  playNote(midi_note_id) {
//    var path = 'https://raw.githubusercontent.com/bubububaoshe/bubububaoshe.github.io/master/mp3/activate.mp3';
    var path = 'http://192.168.0.22/audio/' + midi_note_id + '.ogg'; // TODO: 怎么播放资源文件中的音频
    
    const s = new Sound(path, null, (error) => {
      if (error) {
        console.log(error);
        return; 
      }
      s.play( () => s.release() );
    });
  }
  
  GetFirstNote() {
    var i = 0;
    for (; i<g_mytest.state.curr_notes.length; i++) {
      if (g_mytest.state.curr_notes[i] != 59) return [ g_mytest.state.curr_notes[i], i ];
    }
    return [-999, -999];
  }
  
  OnNotePressed(note) { // MIDI音符编号
    var c = g_mytest.state.curr_notes;
    var x = this.GetFirstNote();
    var first_note = x[0], idx = x[1];
    
    if (c.length > 0 && first_note != -999 && first_note == note) {
      c[idx] = EMPTY_NOTE;
      g_mytest.setState({
        curr_notes: c
      });
      var next_note = undefined;
      if (idx + 1 < this.state.curr_notes.length) {
        var id = 'note' + this.state.curr_notes[idx + 1];
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
      Animated.parallel([
        Animated.timing(
          mouse_x,
          { toValue: px, duration: 300 }
        ),
        Animated.timing(
          mouse_y,
          { toValue: py, duration: 300 }
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
      g_mytest.setState({ curr_notes: [] });
    } else { // Add note
      if (x.startsWith('note')) {
        var n = parseInt(x.substr(4));
        
        g_mytest.OnNotePressed(n);
        g_mytest.playNote(n);
      }
    }
  }
  
  VisualizeNotes() {
    return "";//"length = " + this.state.curr_notes.length;
  }
  
  render() {
    console.log("render");
    return (

      <ImageBackground
        style={{width:'100%', height:'100%'}}
        resizeMode="stretch"
        source={require('../../img/instore/M11.jpg')}
      >


        <View style={styles.container}>
          {/*
          <Video source={require('audio/note60.mp3')}
            ref={(ref) => {
              this.player = ref
            }}
            audioOnly={true}
            paused={true}
            rate={1}
            repeat={false}>
          </Video>
          */}

          <StatusBar hidden />
          <TouchableOpacity id="notes_disp" style={{right:2, top:2, position:'absolute',
            height:80, width:200, backgroundColor:'#33663300'}}
            onPress={this._onPressButton}>
            {<Text>{this.VisualizeNotes()}</Text>}
            
          </TouchableOpacity>
          
          { 
            /* 空的谱线背景，先绘制 */
            this.ShouldShowStaff() && 
            <View style={{flexDirection:'row', left:2, top:2, position:'absolute'}}>
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
            <View style={{flexDirection:'row', left:2, top:2, position:'absolute'}}>
              <Image source={STAFF_BEGIN}
                     style={{height:this.state.note_h, width:this.state.note_w}}
                     resizeMode='stretch'></Image>
                     
              <View>
                <FlatList
                  horizontal
                  style={{}}
                  data={this.state.curr_notes}
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
        <Animated.View id="theMouse" ref={c => (this.the_mouse = c)} 
            style={{position:'absolute', top:mouse_y, left:mouse_x, opacity:mouse_opacity}}
            pointerEvents="none"
            >
            <Image source={require('../../img/instore/TheMouse.gif')} style={{height:this.state.mouse_h, width:this.state.mouse_w}} resizeMode='stretch'></Image>
        </Animated.View>
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
  }
})
