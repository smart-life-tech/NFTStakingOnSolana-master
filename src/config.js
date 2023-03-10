
import React,{ useState } from "react";
var key=""
/*const isWalletConnected = async () => {
    try {
        const { solana } = window;
        if (solana) {
            if (solana.isPhantom) {
                console.log("phantom wallet found");
                // When using this flag, Phantom will only connect and emit a connect event if the application is trusted. Therefore, this can be safely called on page load for new users, as they won't be bothered by a pop-up window even if they have never connected to Phantom before.
                // if user already connected, { onlyIfTrusted: true }
                const response = await solana.connect({ onlyIfTrusted: false });
                console.log(
                    "public key",
                    response.publicKey.toString()
                );
                //   setWalletAddress(response.publicKey.toString());
                console.log(response.publicKey.toString())
            } else {
                alert("Please install phantom wallet");
            }
        }
    } catch (error) {
        console.log(error);
    }
};*/
async function main() {
    // const isWalletConnecteds =  isWalletConnected;
    // console.log(isWalletConnecteds);
    //const [key,setKey] = useState("");
    try {
        const { solana } = window;
        if (solana) {
            if (solana.isPhantom) {
                console.log("phantom wallet found");
                // When using this flag, Phantom will only connect and emit a connect event if the application is trusted. Therefore, this can be safely called on page load for new users, as they won't be bothered by a pop-up window even if they have never connected to Phantom before.
                // if user already connected, { onlyIfTrusted: true }
                const response = await solana.connect({ onlyIfTrusted: false });
                console.log(
                    "public key",
                    response.publicKey.toString()
                );
                 key = response.publicKey.toString()
              //  setKey(keyd)
                //   setWalletAddress(response.publicKey.toString());
                console.log(response.publicKey.toString())
            } else {
                alert("Please install phantom wallet");
            }
        }
    } catch (error) {
        console.log(error);
    }
}
window.onload = function () {
    main();
}
export const PROGRAM_ID = "Zq5BGzpnYDgcYTB7v5mgaSg4buQbXvEu9JE8gFe9NPJ";

export const PUBLISH_NETWIRK = "mainnet"; // "devnet" or "mainnet"

export const ADMIN_KEY = "Ek464DsENbDmMWTxSBNRn1S3xuxkixwiS5ceWoRLSjFw";

export const INIT_WALLETKEY = "Ek464DsENbDmMWTxSBNRn1S3xuxkixwiS5ceWoRLSjFw";

export const LOCK_TIME = 1000 * 60 * 2 // 10 is days

export const REWARD_EPOCH = 1000 * 60 * 3 // Daily

export const REWARD_UNIT = 0.02 // SOL
console.log("key = ", key)
export const LAND_CREATOR = key;//"4xLRwPCYRTtGjzFR7j57EZboLyBTPBMBseZfUioyVjvq";
export const FARMER_CREATOR = "9nwyX2j8o52TQChq7whMRVH3p5DDyv7wWefjrXeYASnC";
export const ANIMAL_CREATOR = "DrbC3kbP57EA1wQqjCdaEMKBUEjESGTZbNY7vrZxP5Tb";

export const LAND_MAX = 3;
export const FARMER_MAX = 3;
export const ANIMAL_MAX = 3;