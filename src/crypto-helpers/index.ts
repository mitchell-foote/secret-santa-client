import CryptoJS from 'crypto-js';


export function verifyUserEmail(checkTxt: string, key: string) {
    let bytes = CryptoJS.AES.decrypt(checkTxt, key);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText === 'christmas';
}

export function decryptName(cipherTxt: string, key: string) {
    let bytes = CryptoJS.AES.decrypt(cipherTxt, key);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}

