import react, { useEffect } from "react";
import { injected } from "../components/wallet/connection";
import { useWeb3React } from "@web3-react/core";

export default function Home() {
  const { activate, active, account, library, connector, deactivate, } =
    useWeb3React();

    console.log(useWeb3React());
  useEffect(() => {
    connection();
  },[]);

  async function connection() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }

  function disconnect() {
    try {
      deactivate();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <button onClick={connection}>Connect Metamask</button>
      <div>connection Status:{active ? account : "Not Connected!"}</div>
      <button onClick={disconnect}>Disconnect with wallet</button>
    </div>
  );
}
