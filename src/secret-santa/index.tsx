import React, { useState } from 'react'
import {Flex} from '@adobe/react-spectrum'
import {useParams} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import smallJpg from './small.jpg'
import largeJpg from './large.jpg'
import { decryptName, verifyUserEmail } from '../crypto-helpers';
import Snowfall from 'react-snowfall'
import './index.css';

function SecretSanta() {
    let {key, ciphertext, checktext} : any = useParams() 
    let [verified, setVerified] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    const isPhoneSized = useMediaQuery({
        query: '(max-width: 500px)'
    });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return (
        <>
            {isTabletOrMobile && <div style={{position: 'relative', overflowY: 'hidden'}} className="total-page christmas-bell-font"> 
            <img src={smallJpg} style={{height:'100%'}} />
            <div className={"center-flex white-text " + (isPhoneSized ? "phone-sized-text" : "largest-text")} style={{position: 'absolute', zIndex: 100, width:'100%', height: '100%', top:'1px'}}>
                {!verified && <>
                    <div className="center-flex" style={{marginBottom: '3em'}}>
                        <div>{`Merry Christmas`}</div>
                        <div>{`Please enter your email below`}</div>
                            <Flex>
                                <input type={"text"} placeholder="Email address" id="email-txtfield" className="christmas-input" onChange={(e) => {
                                    e.preventDefault(); 
                                    checkEmail( decodeURIComponent(checktext), e.target.value ? e.target.value.toLowerCase() : '', setVerified)
                                }} />
                            </Flex>
                    </div>
                </>}
                {verified && <div className="center-flex white-text center-text-align" style={{marginBottom: '3em'}}> 
                    Verified!
                    <div>Your secret santa assignment is {decryptName(decodeURIComponent(ciphertext), decodeURIComponent(key))}</div>
                </div>}
            </div>
            <Snowfall />
                
            </div>}
            {isDesktopOrLaptop && <div style={{position: 'relative', overflowY: 'hidden'}} className="total-page christmas-bell-font">
            <img src={largeJpg} style={{width:'100%'}} />
            <div className="center-flex largest-text white-text" style={{position: 'absolute', zIndex: 100, width:'100%', height: '100%', top:'1px'}}>
                {!verified && <>
                    <div className="center-flex" style={{marginBottom: '3em'}}>
                        <div className="largest-text">{`Merry Christmas`}</div>
                        <div className="largest-text">{`Please enter your email below`}</div>
                            <Flex>
                                <input type={"text"} placeholder="Email address" id="email-txtfield" className="christmas-input" onChange={(e) => {
                                    e.preventDefault(); 
                                    checkEmail( decodeURIComponent(checktext), e.target.value ? e.target.value.toLowerCase() : '', setVerified)
                                }} />
                            </Flex>
                    </div>
                </>}
                {verified && <div className="center-flex white-text center-text-align" style={{marginBottom: '3em'}}> 
                    Verified!
                    <div>Your secret santa assignment is {decryptName(decodeURIComponent(ciphertext), decodeURIComponent(key))}</div>
                </div>}
            </div>
            <Snowfall />
                
            </div>} 
        </>
    )
}

function checkEmail(checkText: string, key: string, setVerified: Function) {
    setVerified(verifyUserEmail(checkText, key));
}

export default SecretSanta

