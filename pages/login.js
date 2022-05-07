import React from "react";
import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center space-y-3'>
      <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt='' />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className='bg-[#18d860] text-white py-3 px-6 rounded-full hover:bg-[#16c256] ease-in-out duration-150'
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
