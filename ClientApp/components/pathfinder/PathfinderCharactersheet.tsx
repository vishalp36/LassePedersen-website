import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import './css/pathfinder-sheet.css';

// reference https://www.wou.edu/~joles12/CS196/PATTH/PathfinderRPGCharacterSheet.pdf

export class Charactersheet extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        //this.abilityModifierHandler = this.abilityModifierHandler.bind(this);
    }

    characterBasics() {
        return (
            <div className='character-basics'>
                <div className='row'>
                    <div className='col-sm-5'>
                        <input type='text' /> <br />
                        <label>Character Name</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' /> <br />
                        <label>Alignment</label>
                    </div>
                    <div className='col-sm-5'>
                        <input type='text' /> <br />
                        <label>Player</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-7'>
                        <input type='text' /> <br />
                        <label>Character Level</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Deity</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' /> <br />
                        <label>Homeland</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Race</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Size</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Gender</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Age</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Height</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Weight</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Hair</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type='text' /> <br />
                        <label>Eyes</label>
                    </div>
                </div>
            </div>
        )
    }

    characterAbilities() {
        return (
            <div className='character-abilities'>
                <div className='row'>
                    <div className='col-sm-4'><label>Ability Name</label></div>
                    <div className='col-sm-2'><label>Ability Score</label></div>
                    <div className='col-sm-2'><label>Ability Mod</label></div>
                    <div className='col-sm-2'><label>Temp Adjust</label></div>
                    <div className='col-sm-2'><label>Temp Mod</label></div>
                </div>
                <div key='str' className='row'>
                    <div className='col-sm-4 black-div'><h4 className='text-center'>STR</h4><label className='sub-label'>Strength</label></div>
                    <div className='col-sm-2'><input id='str-score' type='number' defaultValue='10' /></div> 
                    <div className='col-sm-2'><input id='str-mod' type='number' defaultValue='0' disabled/></div>
                    <div className='col-sm-2'><input id='str-adj' type='number' /></div>
                    <div className='col-sm-2'><input id='str-adj-mod' type='number' disabled/></div>
                </div>
                <div key='dex' className='row'>
                    <div className='col-sm-4 black-div'><h4 className='text-center'>DEX</h4><label className='sub-label'>Dexterity</label></div>
                    <div className='col-sm-2'><input id='dex-score' type='number' defaultValue='10' /></div> 
                    <div className='col-sm-2'><input id='dex-mod' type='number' defaultValue='0' disabled/></div>
                    <div className='col-sm-2'><input id='dex-adj' type='number' /></div>
                    <div className='col-sm-2'><input id='dex-adj-mod' type='number' disabled/></div>
                </div>
                <div key='con' className='row'>
                    <div className='col-sm-4 black-div'><h4 className='text-center'>CON</h4><label className='sub-label'>Constitution</label></div>
                    <div className='col-sm-2'><input id='con-score' type='number' defaultValue='10' /></div> 
                    <div className='col-sm-2'><input id='con-mod' type='number' defaultValue='0' disabled/></div>
                    <div className='col-sm-2'><input id='con-adj' type='number' /></div>
                    <div className='col-sm-2'><input id='con-adj-mod' type='number' disabled/></div>
                </div>
                <div key='int' className='row'>
                    <div className='col-sm-4 black-div'><h4 className='text-center'>INT</h4><label className='sub-label'>Intelligence</label></div>
                    <div className='col-sm-2'><input id='int-score' type='number' defaultValue='10' /></div> 
                    <div className='col-sm-2'><input id='int-mod' type='number' defaultValue='0' disabled/></div>
                    <div className='col-sm-2'><input id='int-adj' type='number' /></div>
                    <div className='col-sm-2'><input id='int-adj-mod' type='number' disabled/></div>
                </div>
                <div key='wis' className='row'>
                    <div className='col-sm-4 black-div'><h4 className='text-center'>WIS</h4><label className='sub-label'>Wisdom</label></div>
                    <div className='col-sm-2'><input id='wis-score' type='number' defaultValue='10' /></div> 
                    <div className='col-sm-2'><input id='wis-mod' type='number' defaultValue='0' disabled/></div>
                    <div className='col-sm-2'><input id='wis-adj' type='number' /></div>
                    <div className='col-sm-2'><input id='wis-adj-mod' type='number' disabled/></div>
                </div>
                <div key='cha' className='row'>
                    <div className='col-sm-4 black-div'><h4 className='text-center'>CHA</h4><label className='sub-label'>Charisma</label></div>
                    <div className='col-sm-2'><input id='cha-score' type='number' defaultValue='10' /></div> 
                    <div className='col-sm-2'><input id='cha-mod' type='number' defaultValue='0' disabled/></div>
                    <div className='col-sm-2'><input id='cha-adj' type='number' /></div>
                    <div className='col-sm-2'><input id='cha-adj-mod' type='number' disabled/></div>
                </div>
            </div>
        )
    }

    hpAndInit() {
        return (
            <div className='hp-and-init'>
                <div className='row'>
                    <div className='col-sm-4 black-div'><h4>HP</h4><label>Hit Points</label></div>
                    <div className='col-sm-4'><input type='number' /><label>Total</label></div>
                    <div className='col-sm-4'><input type='text' /><label>DR</label></div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <label>Wounds/Current HP</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <label>Nonlethal damage</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 black-div'><h4>Initiative</h4><label>Modifier</label></div>
                    <div className='col-sm-2'><input id='init-total' type='number' disabled /><label>Total</label></div>
                    <div className='col-sm-2'><input id='init-dex' type='number' disabled /><label>Dex Mod</label></div> {/*consider disabled dex*/}
                    <div className='col-sm-2'><input id='init-misc' type='number' /><label>Misc Mod</label></div>
                </div>
            </div>
        )
    }

    armorClass() {
        return (
            <div className='armor-class'>
                <div className='row'>
                    <div className='col-sm-3 black-div'><h4>AC</h4><label>Armor Class</label></div>
                    <div className='col-sm-1'><input type='number' disabled /><label>Total</label></div>
                    <div className='col-sm-1'>10</div>
                    <div className='col-sm-1'><input type='number' disabled /><label>Armor Bonus</label></div>
                    <div className='col-sm-1'><input type='number' disabled /><label>Shield Bonus</label></div>
                    <div className='col-sm-1'><input type='number' disabled /><label>Dex Mod</label></div>
                    <div className='col-sm-1'><input type='number' disabled /><label>Size Mod</label></div>
                    <div className='col-sm-1'><input type='number' disabled /><label>Natural Armor</label></div>
                    <div className='col-sm-1'><input type='number' disabled /><label>Def Mod</label></div>
                    <div className='col-sm-1'><input type='number' /><label>Misc Mod</label></div>
                </div>
                <div className='row'>
                    <div className='col-sm-3 black-div'><h4>Touch</h4><label>Armor Class</label></div>
                    <div className='col-sm-1'><input type='number' disabled /></div>
                    <div className='col-sm-3 black-div'><h4>Flat-Footed</h4><label>Armor Class</label></div>
                    <div className='col-sm-1'><input type='number' disabled /></div>
                    <div className='col-sm-4'><input type='text' /><label>Modifiers</label></div>
                </div>
            </div>
        )
    }
    // Todo !
    /*abilityModifierHandler() {
    }*/

    render() {
        return (
            <div className='content'>
                <div className='charactersheet-area'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <img id='pathfinder-logo' src='/images/Pathfinder-logo.png' />
                            <h2 className='text-center'>Character Sheet by Lasse Pedersen</h2>
                        </div>
                        <div className='col-sm-7'> {this.characterBasics()} </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-7'>
                            <div className='row'>
                                <div className='col-sm-6'> {this.characterAbilities()} </div>
                                <div className='col-sm-6'> {this.hpAndInit()} </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'> {this.armorClass()} </div>
                            </div>
                        </div>
                        <div className='col-sm-5'></div>
                    </div>
                </div>
            </div>
        )
    }
}