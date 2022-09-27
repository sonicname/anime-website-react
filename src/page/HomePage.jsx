const HomePage = () => {
  return (
    <div className='flex items-center justify-center text-white page-container'>
      <section className='flex flex-col gap-y-3'>
        <h1 className='text-xl font-semibold text-center'>
          Project: Anime page with reactJS + Tailwindcss by SoSmoothy
        </h1>
        <div className='rounded-md'>
          <img
            src='https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt=''
            className='object-cover w-full h-full rounded-md'
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
