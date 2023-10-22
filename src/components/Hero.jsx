const Hero = () => {
  return (
    <div className='hero min-h-full h-full pt-[12%]'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            DaisyUI <span className='text-primary'> Theme</span> Toggle Test!
          </h1>
          <p className='py-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur voluptate qui, officiis minima esse maiores eum nobis
            assumenda? Voluptas esse aspernatur quod quas, inventore
          </p>
          <div className='flex gap-2 justify-center'>
            <button className='btn btn-secondary'>Secondary Button</button>
            <button className='btn btn-primary'>Primary Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
