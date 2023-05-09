const Spinner = () => {
  return (
    <div className='absolute inset-0 h-full w-full flex items-center justify-center'>
      <div className='inline-block h-12 w-12 border-4 rounded-full border-text border-t-accent animate-spin'></div>
    </div>
  );
};

export default Spinner;
