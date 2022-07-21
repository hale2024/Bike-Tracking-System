import Head from "next/head";

export default function Edit() {
    return (
        <div>
            <Head>
                <title>Edit Profile</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-screen w-screen bg-gradient-to-b from-gray-800 to-black">
                <div className="fixed inset-0 z-30 overflow-y-auto h-screen w-screen">
                    <div className="min-h-screen px-4 text-center">
                        {/* This element is to trick the browser into centering the contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className="inline-block w-full max-w-md p-6 my-8 space-y-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg shadow-slate-300 rounded-lg">
                            <div className='flex flex-row items-center space-x-4 rounded-sm'>
                                <div className="h-12 w-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                                        preserveAspectRatio="xMidYMid meet" viewBox={"0 0 24 24"}>
                                        <path fill="currentColor" d="m18.18 10l-1.7-4.68A2.008 2.008 0 0 0 14.6 4H12v2h2.6l1.46 
                                                4h-4.81l-.36-1H12V7H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 
                                                15c0 2.8 2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 
                                                5.25-5c0-2.8-2.2-5-5-5h-.82zM7.82 16c-.4 1.17-1.49 2-2.82 2c-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 
                                                0 2.42.83 2.82 2H5v2h2.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.9 4c-1.68 
                                                0-3-1.32-3-3c0-.93.41-1.73 1.05-2.28l.96 2.64l1.88-.68l-.97-2.67c.03 0 .06-.01.09-.01c1.68 
                                                0 3 1.32 3 3s-1.33 3-3.01 3z" /></svg>
                                </div>
                                <p className='text-lg font-medium'>Find My Bike</p>
                            </div>
                            <h2 className="text-xl font-bold leading-6 text-gray-900">Edit Profile</h2>
                            <div className="flex flex-col space-y-2">
                                <p className="text-xs text-gray-500">
                                    Username / Email
                                </p>
                                <input type='text' className="w-full py-2 px-2 border-[0.1em] rounded-md bg-gray-100" disabled={true} defaultValue={"findmybike@gmail.com"}></input>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <p className="text-xs text-gray-500">
                                    Password
                                </p>
                                <input type='password' className="w-full py-2 px-2 border-[0.1em] rounded-md"></input>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <p className="text-xs text-gray-500">
                                    Name
                                </p>
                                <input type='text' className="w-full py-2 px-2 border-[0.1em] rounded-md" defaultValue={"Find My Bike"}></input>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}