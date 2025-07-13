function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center mt-20">
      <p className="text-3xl font-bold">
        Stay Focused with Pomofocus – The Online Pomodoro Timer
      </p>
      <p className="w-200 text-xl pt-10">
        Pomofocus is a simple, customizable Pomodoro timer built to help you
        <span className="text-red-500"> stay focused</span> and get things done.
        Whether you're studying, writing, or coding, it works right in your
        desktop or mobile browser—no installs needed.
      </p>
      <p className="text-2xl font-bold pt-10">What's the Pomodoro Technique?</p>
      <p className="w-200 text-xl pt-10">
        The Pomodoro Technique, created by Francesco Cirillo, is a proven time
        management method that breaks your work into 25-minute focus sessions,
        followed by short breaks. Each session is called a pomodoro (Italian for
        "tomato")—named after the kitchen timer Cirillo used in college. It’s
        all about working with time, not against it.
      </p>
    
      <p className="pt-10">
        <ul className="list-disc text-xl "><span className="text-2xl font-bold"> Free Features </span>
            <li className="pt-2">25-minute focus sessions</li>
            <li className="pt-2">Short breaks (5 minutes)</li>
            <li className="pt-2">Customizable timer durations</li>
        </ul>
      </p>
      <p className="text-lg font-semibold mt-9 text-gray-500">Made with ❤️ by Dastan</p>
    </footer>
  );
}

export default Footer;
