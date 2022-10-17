import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login({ user, banner }) {
  return (
    <div>
      <div class='mx-2 bg-pink-5'>
        <h3 class='text-2xl font-bold text-gray-700'>Sign in to Paperclip</h3>
        <div class='flex justify-between h-10 mt-5'>
          <button class='py-2 text-sm font-bold text-white bg-blue-500 rounded-md px-14 hover:bg-opacity-90'>
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              class='inline w-4 h-4 text-white fill-current'
            >
              <title>Twitter icon</title>
              <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'></path>
            </svg>
            <span class='ml-2 align-middle'>Sign in with Twitter</span>
          </button>
          <button class='px-3 ml-4 bg-gray-300 rounded-md hover:bg-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              class='w-4 h-4 text-gray-600 fill-current'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
            </svg>
          </button>
        </div>
        <div class='relative my-6'>
          <div class='absolute inset-0 flex items-center'>
            <div class='w-full border-t border-gray-300'></div>
          </div>
          <div class='relative flex justify-center text-sm'>
            <span class='px-2 text-gray-500 bg-pink-50'>Or</span>
          </div>
        </div>
        <form class=''>
          <div>
            <label for='email-signin' class='text-sm font-bold text-gray-900'>
              Username or email
            </label>
            <input
              type='email'
              id='email-signin'
              class='w-full h-10 px-3 mt-1 text-sm bg-gray-200 rounded-md  ring-pink-300 ring-opacity-50 focus:outline-none focus:bg-white focus:ring-4 shadow-sm'
              autoComplete='username'
            />
          </div>
          <div class='mt-6'>
            <div class='flex justify-between text-sm'>
              <label for='password-3' class='font-bold text-gray-900'>
                Password
              </label>
              <a href='#' class='text-pink-900 hover:text-pink-800'>
                Forgot password?
              </a>
            </div>
            <input
              type='password'
              id='password-3'
              class='w-full h-10 px-3 mt-1 text-sm bg-gray-200 rounded-md  ring-pink-300 ring-opacity-50 focus:outline-none focus:bg-white focus:ring-4 shadow-sm'
              autoComplete='current-password'
            />
          </div>
          <button class='w-full h-10 px-20 py-2 mt-6 text-sm font-bold text-white bg-pink-500 rounded-md hover:bg-opacity-90'>
            Sign in
          </button>
        </form>
        <div class='mt-3 text-xs text-center dark:text-gray-800'>
          Not a member?{' '}
          <a href='#' class='text-pink-900 hover:text-pink-800'>
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
}
