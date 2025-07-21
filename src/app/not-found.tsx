import { ImSad } from 'react-icons/im';

export default function Custom404() {

  return (
    <div
      className='w-screen h-screen bg-blue-500 text-white font-semibold flex flex-row items-center justify-center'
    >
      <div
        className='size-fit flex flex-col gap-4 justify-center items-center'
      >
        <p className='text-9xl md:text-[180px]'>404</p>
        <div
          className='flex flex-row gap-4 text-3xl sm:text-5xl md:text-7xl'
        >
          <p>Page Not Found</p><ImSad />
        </div>

      </div>
    </div>
  );
}