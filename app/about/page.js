"use client"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, PaperClipIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact us', href: '/contact' },
];
function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <div className="bg-white grid">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="text-sm font-semibold leading-6 text-gray-900">
                                    Omkar Engineering
                                </span>
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Connect with us <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <span className="text-sm font-semibold leading-6 text-gray-900">
                                        Omkar Engineering
                                    </span>
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>

                <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <svg
                            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                                <path
                                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                    strokeWidth={0}
                                />
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                        </svg>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Safe. Healthy. Quality</h1>

                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                                alt=""
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                    <p>
                                        Welcome to Omkar Engineering,{" "}


                                        Nitin M. Rathod, the visionary behind Omkar Engineering, brings over 2 years of invaluable experience in the field. Hailing from Ahmedabad, Nitin passion and expertise have driven the foundation of Omkar Engineering, dedicated to providing top-quality machinery solutions.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                            <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                                                <strong className="font-semibold text-gray-900">Our Current Products At Omkar Engineering</strong>, we take pride in our current product offerings, including the Milk Mawa (Khova) Machine and the Milk / Basundi Boiling Machine.These machines are a testament to our commitment to delivering excellence in the food processing industry.


                                            </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                                                <strong className="font-semibold text-gray-900">Future Expansion</strong> Our journey is not limited to where we are today. We have ambitious plans for future expansion, aiming to introduce innovative and cutting-edge products to cater to a wider range of needs in the food processing and machinery sector.
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                                                <strong className="font-semibold text-gray-900">Why Choose Us?</strong> Experience: With over 2 years of hands-on experience, we have a deep understanding of the industry demands and challenges. Quality: We prioritize quality in everything we do, ensuring that our products meet the highest standards. Innovation: Our commitment to innovation drives us to continuously improve and expand our product line.
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8">
                                        Join us in our quest to revolutionize the food processing industry. We look forward to serving your needs with the best machinery solutions available in the market.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card */}

                <div className="card w-96 glass place-self-center my-10">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Meet Company Owner</h2>
                        <p>Nitin M. Rathod</p>
                        <p>Director</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">+91 9909291593</button>
                        </div>
                    </div>
                </div>

                {/* why our products */}
                <div className="stats shadow sm:mx-10">

                    <div className="stat place-items-center">
                        <div className="stat-desc">WE HAVE 2 YEARS OF EXPERIENCE IN THIS FIELD</div>
                    </div>

                    <div className="stat place-items-center">

                        <div className="stat-desc text-secondary">SATISFIED AFTER SALES & SERVICES</div>
                    </div>

                    <div className="stat place-items-center">

                        <div className="stat-desc">NUMBERS OF PRODUCTS SALES ACROSS THE INDIA</div>
                    </div>

                    <div className="stat place-items-center">

                        <div className="stat-desc">WELL INFRASTRUCTURE WITH STATE-OF-THE-ART EQUIPMENTS AND LATEST TECHNOLOGY</div>
                    </div>

                    <div className="stat place-items-center">

                        <div className="stat-desc text-secondary">HIGHLY RELIABLE AND MAINTENANCE FREE PRODUCTS</div>
                    </div>

                    <div className="stat place-items-center">

                        <div className="stat-desc">STANDARD QUALITY OF THE PRODUCTS</div>
                    </div>
                    <div className="stat place-items-center">

                        <div className="stat-desc text-secondary">VERY SIMPLE AND EASY OPERATE TO USE OUR PRODUCTS</div>
                    </div>

                    <div className="stat place-items-center">

                        <div className="stat-desc">QUALITY WITH TIME, SYSTEMATIC WORKING AND DELIVERY</div>
                    </div>
                </div>

                {/* form */}
                <form className='my-20 sm:px-10'>
                    <div className="space-y-12">


                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Request Your Quotation</h2>


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full bg-white rounded-md border py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border bg-white py-1.5 text-gray-900 shadow-sm :text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full bg-white border rounded-md  py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>




                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="block w-full bg-white rounded-md border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>




                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Page