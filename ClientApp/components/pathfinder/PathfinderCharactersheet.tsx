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
                    <div className='col-xs-5'>
                        <input type='text' /> <br />
                        <label>Character Name</label>
                    </div>
                    <div className='col-xs-2'>
                        <input type='text' /> <br />
                        <label>Alignment</label>
                    </div>
                    <div className='col-xs-5'>
                        <input type='text' /> <br />
                        <label>Player</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-7'>
                        <input type='text' /> <br />
                        <label>Character Level</label>
                    </div>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Deity</label>
                    </div>
                    <div className='col-xs-2'>
                        <input type='text' /> <br />
                        <label>Homeland</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Race</label>
                    </div>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Size</label>
                    </div>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Gender</label>
                    </div>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Age</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Height</label>
                    </div>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Weight</label>
                    </div>
                    <div className='col-xs-3'>
                        <input type='text' /> <br />
                        <label>Hair</label>
                    </div>
                    <div className='col-xs-3'>
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
                    <div className='col-xs-4'><label>Ability Name</label></div>
                    <div className='col-xs-2'><label>Ability Score</label></div>
                    <div className='col-xs-2'><label>Ability Mod</label></div>
                    <div className='col-xs-2'><label>Temp Adjust</label></div>
                    <div className='col-xs-2'><label>Temp Mod</label></div>
                </div>
                <div key='str' className='row'>
                    <div className='col-xs-4 black-div'><h4 className='text-center'>STR</h4><label className='sub-label'>Strength</label></div>
                    <div className='col-xs-2'><input id='str-score' type='number' defaultValue='10' /></div> 
                    <div className='col-xs-2'><input id='str-mod' type='number' defaultValue='0' /></div>
                    <div className='col-xs-2'><input id='str-adj' type='number' /></div>
                    <div className='col-xs-2'><input id='str-adj-mod' type='number' /></div>
                </div>
                <div key='dex' className='row'>
                    <div className='col-xs-4 black-div'><h4 className='text-center'>DEX</h4><label className='sub-label'>Dexterity</label></div>
                    <div className='col-xs-2'><input id='dex-score' type='number' defaultValue='10' /></div> 
                    <div className='col-xs-2'><input id='dex-mod' type='number' defaultValue='0' /></div>
                    <div className='col-xs-2'><input id='dex-adj' type='number' /></div>
                    <div className='col-xs-2'><input id='dex-adj-mod' type='number' /></div>
                </div>
                <div key='con' className='row'>
                    <div className='col-xs-4 black-div'><h4 className='text-center'>CON</h4><label className='sub-label'>Constitution</label></div>
                    <div className='col-xs-2'><input id='con-score' type='number' defaultValue='10' /></div> 
                    <div className='col-xs-2'><input id='con-mod' type='number' defaultValue='0' /></div>
                    <div className='col-xs-2'><input id='con-adj' type='number' /></div>
                    <div className='col-xs-2'><input id='con-adj-mod' type='number' /></div>
                </div>
                <div key='int' className='row'>
                    <div className='col-xs-4 black-div'><h4 className='text-center'>INT</h4><label className='sub-label'>Intelligence</label></div>
                    <div className='col-xs-2'><input id='int-score' type='number' defaultValue='10' /></div> 
                    <div className='col-xs-2'><input id='int-mod' type='number' defaultValue='0' /></div>
                    <div className='col-xs-2'><input id='int-adj' type='number' /></div>
                    <div className='col-xs-2'><input id='int-adj-mod' type='number' /></div>
                </div>
                <div key='wis' className='row'>
                    <div className='col-xs-4 black-div'><h4 className='text-center'>WIS</h4><label className='sub-label'>Wisdom</label></div>
                    <div className='col-xs-2'><input id='wis-score' type='number' defaultValue='10' /></div> 
                    <div className='col-xs-2'><input id='wis-mod' type='number' defaultValue='0' /></div>
                    <div className='col-xs-2'><input id='wis-adj' type='number' /></div>
                    <div className='col-xs-2'><input id='wis-adj-mod' type='number' /></div>
                </div>
                <div key='cha' className='row'>
                    <div className='col-xs-4 black-div'><h4 className='text-center'>CHA</h4><label className='sub-label'>Charisma</label></div>
                    <div className='col-xs-2'><input id='cha-score' type='number' defaultValue='10' /></div> 
                    <div className='col-xs-2'><input id='cha-mod' type='number' defaultValue='0' /></div>
                    <div className='col-xs-2'><input id='cha-adj' type='number' /></div>
                    <div className='col-xs-2'><input id='cha-adj-mod' type='number' /></div>
                </div>
            </div>
        )
    }

    hpAndInit() {
        return (
            <div className='hp-and-init'>
                <div className='row'>
                    <div className='col-xs-4 black-div'><h4>HP</h4><label>Hit Points</label></div>
                    <div className='col-xs-4'><input type='number' /><label>Total</label></div>
                    <div className='col-xs-4'><input type='text' /><label>DR</label></div>
                </div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <label>Wounds/Current HP</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <label>Nonlethal damage</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-6 black-div'><h4>Initiative</h4><label>Modifier</label></div>
                    <div className='col-xs-2'><input id='init-total' type='number'  /><label>Total</label></div>
                    <div className='col-xs-2'><input id='init-dex' type='number'  /><label>Dex Mod</label></div> {/*consider  dex*/}
                    <div className='col-xs-2'><input id='init-misc' type='number' /><label>Misc Mod</label></div>
                </div>
            </div>
        )
    }

    armorClass() {
        return (
            <div className='armor-class'>
                <div className='row'>
                    <div className='col-xs-3 black-div'><h4>AC</h4><label>Armor Class</label></div>
                    <div className='col-xs-1'><input type='number'  /><label>Total</label></div>
                    <div className='col-xs-1'>= 10 +</div>
                    <div className='col-xs-1'><input type='number'  /><label>Armor Bonus</label></div>
                    <div className='col-xs-1'><input type='number'  /><label>Shield Bonus</label></div>
                    <div className='col-xs-1'><input type='number'  /><label>Dex Mod</label></div>
                    <div className='col-xs-1'><input type='number'  /><label>Size Mod</label></div>
                    <div className='col-xs-1'><input type='number'  /><label>Natural Armor</label></div>
                    <div className='col-xs-1'><input type='number'  /><label>Def Mod</label></div>
                    <div className='col-xs-1'><input type='number' /><label>Misc Mod</label></div>
                </div>
                <div className='row'>
                    <div className='col-xs-3 black-div'><h4>Touch</h4><label>Armor Class</label></div>
                    <div className='col-xs-1'><input type='number'  /></div>
                    <div className='col-xs-3 black-div'><h4>Flat-Footed</h4><label>Armor Class</label></div>
                    <div className='col-xs-1'><input type='number'  /></div>
                    <div className='col-xs-4'><input type='text' placeholder='modifiers'/></div>
                </div>
            </div>
        )
    }

    saves() {
        return (
            <div className='saves'>
                <div className='row'>
                    <div className='col-xs-10'>
                        <div className='row rows'>
                            <div className='col-xs-4'><label>Saving Throws</label></div>
                            <div className='col-xs-8'>
                                <div className='row'>
                                    <div className='col-xs-2'><label>Total</label></div>
                                    <div className='col-xs-2'><label>Base Save</label></div>
                                    <div className='col-xs-2'><label>Ability Mod</label></div>
                                    <div className='col-xs-2'><label>Magic Mod</label></div>
                                    <div className='col-xs-2'><label>Misc Mod</label></div>
                                    <div className='col-xs-2'><label>Temporary Mod</label></div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='row rows'>
                            <div className='col-xs-4 black-div'><h4>Fortitude</h4><label>(Constitution)</label></div>
                            <div className='col-xs-8'>
                                <div className='row'>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='row rows'>
                            <div className='col-xs-4 black-div'><h4>Reflex</h4><label>(Dexterity)</label></div>
                            <div className='col-xs-8'>
                                <div className='row'>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='row rows'>
                            <div className='col-xs-4 black-div'><h4>Will</h4><label>(Wisdom)</label></div>
                            <div className='col-xs-8'>
                                <div className='row'>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                    <div className='col-xs-2'><input type='number' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-2'>
                        <textarea placeholder='modifiers'></textarea>
                    </div>
                </div>
            </div>
        )
    }

    bab_cmb_cmd() {
        return (
            <div className='bab-cmb-cmd'>
                <div className='row'>
                    <div className='col-xs-4 black-div'><h4>Base Attack Bonus</h4></div>
                    <div className='col-xs-3'><input type='text' /></div>
                    <div className='col-xs-4 black-div'><h4>Spell Resisitance</h4></div>
                    <div className='col-xs-1'><input type='number' /></div>
                </div>
                <div className='row'>
                    <div className='col-xs-4 black-div'><h4>CMB</h4></div>
                    <div className='col-xs-1'><input type='number' /><label>Total</label></div>
                    <div className='col-xs-1'><input type='number' /><label>BAB</label></div>
                    <div className='col-xs-1'><input type='number' /><label>Strength Mod</label></div>
                    <div className='col-xs-1'><input type='number' /><label>Size Mod</label></div>
                    <div className='col-xs-4'><textarea placeholder='modifiers'></textarea></div>
                </div>
                <div className='row'>
                    <div className='col-xs-4 black-div'><h4>CMD</h4></div>
                    <div className='col-xs-1'><input type='number' /><label>Total</label></div>
                    <div className='col-xs-1'><input type='number' /><label>BAB</label></div>
                    <div className='col-xs-1'><input type='number' /><label>Strength Mod</label></div>
                    <div className='col-xs-1'><input type='number' /><label>Dexterity Mod</label></div>
                    <div className='col-xs-1'><input type='number' /><label>Size Mod</label></div>
                    <div className='col-xs-1'>+ 10</div>
                </div>
            </div>
        )
    }

    weapons() {
        return (
            <div className='weapons'>
                <div key='weapon 1'>
                    <div className='row'>
                        <div className='col-xs-7 black-div'><h4>Weapon</h4></div>
                        <div className='col-xs-3 black-div ab'><h6>Attack Bonus</h6></div>
                        <div className='col-xs-2 black-div crit'><h6>Critical</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-7 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 black-div'><h6>Type</h6></div>
                        <div className='col-xs-2 black-div'><h6>Range</h6></div>
                        <div className='col-xs-3 black-div'><h6>Ammunition</h6></div>
                        <div className='col-xs-5 black-div'><h6>Damage</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-5 input'><input type='text' /></div>
                    </div>
                </div>
                <div key='weapon 2'>
                    <div className='row'>
                        <div className='col-xs-7 black-div'><h4>Weapon</h4></div>
                        <div className='col-xs-3 black-div ab'><h6>Attack Bonus</h6></div>
                        <div className='col-xs-2 black-div crit'><h6>Critical</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-7 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 black-div'><h6>Type</h6></div>
                        <div className='col-xs-2 black-div'><h6>Range</h6></div>
                        <div className='col-xs-3 black-div'><h6>Ammunition</h6></div>
                        <div className='col-xs-5 black-div'><h6>Damage</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-5 input'><input type='text' /></div>
                    </div>
                </div>
                <div key='weapon 3'>
                    <div className='row'>
                        <div className='col-xs-7 black-div'><h4>Weapon</h4></div>
                        <div className='col-xs-3 black-div ab'><h6>Attack Bonus</h6></div>
                        <div className='col-xs-2 black-div crit'><h6>Critical</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-7 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 black-div'><h6>Type</h6></div>
                        <div className='col-xs-2 black-div'><h6>Range</h6></div>
                        <div className='col-xs-3 black-div'><h6>Ammunition</h6></div>
                        <div className='col-xs-5 black-div'><h6>Damage</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-5 input'><input type='text' /></div>
                    </div>
                </div>
                <div key='weapon 4'>
                    <div className='row'>
                        <div className='col-xs-7 black-div'><h4>Weapon</h4></div>
                        <div className='col-xs-3 black-div ab'><h6>Attack Bonus</h6></div>
                        <div className='col-xs-2 black-div crit'><h6>Critical</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-7 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 black-div'><h6>Type</h6></div>
                        <div className='col-xs-2 black-div'><h6>Range</h6></div>
                        <div className='col-xs-3 black-div'><h6>Ammunition</h6></div>
                        <div className='col-xs-5 black-div'><h6>Damage</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-5 input'><input type='text' /></div>
                    </div>
                </div>
                <div key='weapon 5'>
                    <div className='row'>
                        <div className='col-xs-7 black-div'><h4>Weapon</h4></div>
                        <div className='col-xs-3 black-div ab'><h6>Attack Bonus</h6></div>
                        <div className='col-xs-2 black-div crit'><h6>Critical</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-7 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 black-div'><h6>Type</h6></div>
                        <div className='col-xs-2 black-div'><h6>Range</h6></div>
                        <div className='col-xs-3 black-div'><h6>Ammunition</h6></div>
                        <div className='col-xs-5 black-div'><h6>Damage</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-2 input'><input type='text' /></div>
                        <div className='col-xs-3 input'><input type='text' /></div>
                        <div className='col-xs-5 input'><input type='text' /></div>
                    </div>
                </div>
            </div>
        )
    }

    speed() {
        return (
            <div className='speed'>
                <div className='row'>
                    <div className='col-xs-9'>
                        <div className='row'>
                            <div className='col-xs-2 black-div'><h4>Speed</h4><label>Land</label></div>
                            <div className='col-xs-5 double'>
                                <input type='number' /><label>ft.</label><input type='number' /><label>sq.</label>
                                <label>Base Speed</label>
                            </div>
                            <div className='col-xs-5 double'>
                                <input type='number' /><label>ft.</label><input type='number' /><label>sq.</label>
                                <label>With Armor</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-6 double'>
                                <input type='number' /><label>ft.</label><input type='text' />
                                <label id='fly-label'>Fly</label><label id='maneuverability-label'>Maneuverability</label>
                            </div>
                            <div className='col-xs-2'>
                                <input type='number' /><label>ft.</label>
                                <label>Swim</label>
                            </div>
                            <div className='col-xs-2'>
                                <input type='number' /><label>ft.</label>
                                <label>Climb</label>
                            </div>
                            <div className='col-xs-2'>
                                <input type='number' /><label>ft.</label>
                                <label>Burrow</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-3'><textarea placeholder='Temp modifiers'></textarea></div>
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
                        <div className='col-xs-5'>
                            <img id='pathfinder-logo' src='/images/Pathfinder-logo.png' />
                            <h2 className='text-center'>Character Sheet by Lasse Pedersen</h2>
                        </div>
                        <div className='col-xs-7'> {this.characterBasics()} </div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-7'>
                            <div className='row'>
                                <div className='col-xs-6'> {this.characterAbilities()} </div>
                                <div className='col-xs-6'> {this.hpAndInit()} </div>
                            </div>
                            <div className='row'>
                                <div className='col-xs-12'> {this.armorClass()} </div>
                            </div>
                            <div className='row'>
                                <div className='col-xs-12'> {this.saves()} </div>
                            </div>
                            <div className='row'>
                                <div className='col-xs-12'> {this.bab_cmb_cmd()} </div>
                            </div>
                            <div className='row'>
                                <div className='col-xs-12'> {this.weapons()} </div>
                            </div>
                        </div>
                        <div className='col-xs-5'>
                            <div className='row'>
                                <div className='col-xs-12'> {this.speed()} </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}