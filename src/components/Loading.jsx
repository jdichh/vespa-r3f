import vespaLogo from "/vespa_logo.webp";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-[#5b7c99]">
      <img
        src={vespaLogo}
        alt="vespa logo"
        width={50}
        height={50}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
