// WalletConnect.jsx
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractABI from '../ABI.json';

const contractAddress = '0x4302050ac4073a53f40Fe88C397f32a571cCB082';

const WalletConnect = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const handleAccountChange = (accounts) => {
      setAccount(accounts[0]);
    };

    const handleNetworkChange = () => {
      window.location.reload();
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountChange);
      window.ethereum.on('chainChanged', handleNetworkChange);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
        window.ethereum.removeListener('chainChanged', handleNetworkChange);
      }
    };
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        const contractInstance = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
        setContract(contractInstance);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="wallet-connect">
      <button onClick={connectWallet} className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold">
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
    </div>
  );
};

export default WalletConnect;
