const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [isGenerated, setIsGenerated] = useState(false)
  const [otp, setOtp] = useState(undefined)
  const [timeLeft, setTimeLeft] = useState(5)

  function generateOTP() {
    setOtp(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000)
    setIsGenerated(true);
    let duration = timeLeft;
    const countdownInterval = setInterval(() => {
      duration--;
      setTimeLeft(duration);
      if (duration <= 0) {
        clearInterval(countdownInterval);
        setIsGenerated(false)
        setTimeLeft(5);
      }
    }, 1000)
  }
  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp ? otp : "Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="assertive">{otp ? isGenerated ? `Expires in: ${timeLeft} seconds` : "OTP expired. Click the button to generate a new OTP" : ""}</p>
      <button id="generate-otp-button" onClick={generateOTP} disabled={isGenerated}>Generate OTP</button>
    </div>
  )
};