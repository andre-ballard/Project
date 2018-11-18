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
    this.state = {ContentWidth: 200, ContentHeight: 200, scrollable: true, isAnnotation: false};
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
            containerStyle={{marginTop:100,flex:1,backgroundColor: 'transparent'}}
            canvasStyle={{marginTop:100,flex:1,backgroundColor: 'red',backgroundColor: 'transparent'}}
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
            text={[{text: paragraph, position:{x:0,y:0}, fontSize:15}]}
          />
          );
  }

  render() {
      return (
      <View style={styles.container}>
          {this.renderCanvas()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
