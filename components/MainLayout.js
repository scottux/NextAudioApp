import Header from './Header'
import AudioEngine from './AudioEngine'
import React from 'react'
import Helmet from 'react-helmet';
import MainPanel from './panels/MainPanel'
import Oscillator from './panels/Oscillator'
import LfoPanel from './panels/LfoPanel'
import WavePanel from './panels/WavePanel'
import SinePanel from './panels/SinePanel'
import KeyboardPanel from './panels/KeyboardPanel'


class MainLayout extends React.Component{

  constructor(props){
  	super(props);

  }

  render(){
   if(!this.props.keyOn){
   	return(
      <div >
        <Helmet>
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        </Helmet>
        <Header /> 
        <div className={"main-layout"}>         
          <MainPanel keyToggle={this.props.keyToggle} changeMasterGain={this.props.changeMasterGain} 
          masterGain={this.props.masterGain} keyOn={this.props.keyOn} baseFrequency={this.props.masterFreq}
          changeBaseFrequency={this.props.changeBaseFrequency} />
          <div className={"second-panel"} >
            <Oscillator addOsc={this.props.addOsc} subOsc={this.props.subOsc} oscArray={this.props.oscArray} />
            <LfoPanel lfoRate={this.props.LFObj[2]} lfoFreq={this.props.LFObj[3]} changeLFO={this.props.changeLFO}
             lfoType={this.props.LFObj[1]} />
          </div>
          <div>
            <SinePanel xData={this.props.masterFreq} yData={this.props.masterGain} oscs={this.props.oscArray} />
            <WavePanel phase={this.props.phase} changePhase={this.props.changePhase} />
          </div>
         </div>
          <KeyboardPanel playNote={this.props.playNote} stopNote={this.props.stopNote} />
      </div>
     )
   }else {
   	return(
      <div >
        <Helmet>
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        </Helmet>
        <Header /> 
        <div className={"main-layout"}>         
          <AudioEngine lfo={this.props.LFObj} gain={this.props.masterGain} freq={this.props.masterFreq} oscArray={this.props.oscArray} 
            phase={this.props.phase}  /> 
          <MainPanel keyToggle={this.props.keyToggle} changeMasterGain={this.props.changeMasterGain} 
          masterGain={this.props.masterGain} keyOn={this.props.keyOn} baseFrequency={this.props.masterFreq}
          changeBaseFrequency={this.props.changeBaseFrequency} />
          <div className={"second-panel"} >
            <Oscillator addOsc={this.props.addOsc} subOsc={this.props.subOsc} oscArray={this.props.oscArray} />
            <LfoPanel lfoRate={this.props.LFObj[2]} lfoFreq={this.props.LFObj[3]} changeLFO={this.props.changeLFO}
             lfoType={this.props.LFObj[1]} />
          </div>
          <div>
            <SinePanel xData={this.props.masterFreq} yData={this.props.masterGain} oscs={this.props.oscArray} />
            <WavePanel phase={this.props.phase} changePhase={this.props.changePhase} />
          </div>
         </div>
          <KeyboardPanel playNote={this.props.playNote} stopNote={this.props.stopNote} />
      </div>     
  	)
   }
  
  	
  }
  
}

export default MainLayout;
  