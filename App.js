/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button,Platform, StyleSheet, ScrollView,Text, View} from 'react-native';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

var paragraph = 'President Trump plans to pursue federally legalizing medical marijuana following next month’s midterm races, Rep. Dana Rohrabacher, California Republican, said Thursday. The Trump administration has made a “solid commitment” to reform marijuana laws, and the president has spoken in support of federally legalizing the plant for medical purposes, Mr. Rohrabachertold Fox Business Channel. “I have been talking to people inside the White House who know and inside the president’s entourage,” Mr. Rohrabacher said, Fox Business reported. “I have talked to them at length. I have been reassured that the president intends on keeping his campaign promise. “I would expect after the election we will sit down and we’ll start hammering out something that is specific and real,” he added. “It could be as early as spring of 2019, but definitely in the next legislative session.” Mr. Trump did not campaign on legalizing marijuana, but he said while running that he agreed that states should be able to pass laws permitting the plant in spite of federal prohibition.';
var paragraph2 = paragraph;
export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {ContentWidth: 0, ContentHeight: 0, index: -10, scrollable: true, isAnnotation: false};
    this.draw = this.draw.bind(this);
  }

  draw()
  {
    this.setState({index: this.state.index * -1, scrollable: !this.state.scrollable, isAnnotation: !this.state.isAnnotation});
  }
  
  renderCanvas()
  {
    return(  
        <RNSketchCanvas
            containerStyle={{zIndex:this.state.index,position: 'absolute',height: this.state.ContentHeight, width: this.state.ContentWidth,backgroundColor: 'transparent'}}
            canvasStyle={{marginTop:60,backgroundColor: 'red',zIndex: this.state.index, position: 'absolute', height: this.state.ContentHeight, width: this.state.ContentWidth,backgroundColor: 'transparent'}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            undoComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Undo</Text></View>}
            clearComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Clear</Text></View>}
            
            strokeWidthComponent={(w) => {
              return (<View style={styles.strokeWidthButton}>
                <View  style={{
                  backgroundColor: 'white', marginHorizontal: 2.5,
                  width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                }} />
              </View>
            )}}
          />
          );
  }

  render() {
    var drawing;
    if(this.state.isAnnotation == false)
      {
         drawing = "Draw";
      }else{
         drawing = "Stop";
      }
      
      return (
      <View style={styles.container}>
      <View style={{marginTop:40,height:30}}>
      <Button style={{backgroundColor:'blue',height: 10}} title={drawing} onPress={this.draw} />
      </View>
      <View style={styles.Scroll}>
          <ScrollView scrollEnabled={this.state.scrollable}>
          {this.renderCanvas()}
            <Text style={styles.welcome} onLayout={(event) => {
            var {x, y, width, height} = event.nativeEvent.layout;
            this.setState({ContentWidth: width, ContentHeight: height})}}>{paragraph + '\n' + paragraph2}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    padding: 20,
    flex:1,
    marginTop:30
  },
  Scroll: {
      flex:1,
      marginTop: 60
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  }
});
