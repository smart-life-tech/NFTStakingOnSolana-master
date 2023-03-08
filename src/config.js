import { useState, useEffect } from "react";
var publicKey = "keys";
function MyComponent() {
    const [walletConnected, setWalletConnected] = useState(false);
    console.log("publicKey");
    useEffect(() => {
        checkIfWalletIsConnected();
    }, [walletConnected]);

    const checkIfWalletIsConnected = async () => {
        if (window.solana && window.solana.isPhantom) {
            publicKey = await window.solana.publicKey.toString();
            console.log(publicKey);
            if (publicKey) {
                console.log(publicKey);
                setWalletConnected(true);
            }
        }
    };

    checkIfWalletIsConnected(); // Call the function here
    MyComponent();
    return null; // Return null to avoid rendering any JSX
}


export const PROGRAM_ID = "Zq5BGzpnYDgcYTB7v5mgaSg4buQbXvEu9JE8gFe9NPJ";

export const PUBLISH_NETWIRK = "mainnet"; // "devnet" or "mainnet"

export const ADMIN_KEY = "Ek464DsENbDmMWTxSBNRn1S3xuxkixwiS5ceWoRLSjFw";

export const INIT_WALLETKEY = "Ek464DsENbDmMWTxSBNRn1S3xuxkixwiS5ceWoRLSjFw";

export const LOCK_TIME = 1000 * 60 * 2 // 10 is days

export const REWARD_EPOCH = 1000 * 60 * 3 // Daily

export const REWARD_UNIT = 0.02 // SOL

export const LAND_CREATOR = "4xLRwPCYRTtGjzFR7j57EZboLyBTPBMBseZfUioyVjvq";
export const FARMER_CREATOR = "9nwyX2j8o52TQChq7whMRVH3p5DDyv7wWefjrXeYASnC";
export const ANIMAL_CREATOR = "DrbC3kbP57EA1wQqjCdaEMKBUEjESGTZbNY7vrZxP5Tb";

export const LAND_MAX = 3;
export const FARMER_MAX = 3;
export const ANIMAL_MAX = 3;
export default MyComponent;

console.log(publicKey);