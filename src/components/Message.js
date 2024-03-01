import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("Message", size);
    let cname = "";
    switch (size) {
      case "s":
        cname = "small";
        break;
      case "m":
        cname = "medium";
        break;
      case "l":
        cname = "large";
        break;
      case "xl":
        cname = "xlarge";
        break;
    }
    setSizeClass(cname);
  }, [size]);

  useEffect(() => {
    if (featherCount <= 0) {
      setMessage("Naked bird moment");
    } else if (featherCount <= 4) {
      setMessage("Kinda cold tbh");
    } else {
      setMessage("v warm");
    }
  }, [featherCount]);

  return <div className={`message ${sizeClass}`}>{message}</div>;
}

export default Message;
