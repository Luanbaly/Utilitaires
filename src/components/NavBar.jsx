import { Fragment } from 'react'
import { Popover} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Disclosure, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'
import { dispatch } from 'use-bus'
import Password from './WebDev/Password'

const solutions = [
    { name: 'Password Generator', href: '/password-generator' },
    {
      name: 'MD5 Generator',
      href: '/md5-generator',
    },
    { name: 'SHA3 Generator', href: '/sha3-generator' },
    { name: 'SHA256 Generator', href: '/sha256-generator' },
    { name: 'URL Encoder-Decoder', href: '/url-encoder-decoder' },
    { name: 'Base64 Encoder-Decoder', href: '/base64-encoder-decoder' },
    { name: 'Image to Base64', href: '/image-to-base64' },
    { name: 'HTML Encoder-Decoder', href: '/html-entity-encoder-decoder' },
    { name: 'HTML to Markdown', href: '/html-to-markdown' },
    { name: 'Color Picker', href: '/color-picker' },
    { name: 'QR Code Generator', href: '/qr-code-generator' },
    { name: 'Open Graph Generator', href: '/open-graph-generator' },
    { name: 'What`s User Agent', href: '/what-my-user-agent' },
  ]
  const conversion = [
    { name: 'Data', href: '#' },
    { name: 'Numbers', href: '#' },
    { name: 'Strings', href: '#' },
  ]
  const encoders = [
    { name: 'Base64 Decode', href: '#' },
    {
      name: 'Base64 Encode',
      href: '#',
    },
    { name: 'MD5 Hash Generator', href: '#' },
    { name: 'SHA-1 Hash Generator', href: '#' },
    { name: 'SHA-256 Hash Generator', href: '#' },
    { name: 'SHA-512 Hash Generator', href: '#' },
    { name: 'URL Encode/Decode', href: '#' },
  ]
  const formatters = [
    { name: 'CSS Formatter', href: '#' },
    {
      name: 'GO Formatter',
      href: '#',
    },
    { name: 'HTML Beautifier & Formatter', href: '#' },
    { name: 'Javascript Formatter', href: '#' },
    { name: 'Javascript Obfuscate', href: '#' },
    { name: 'JSON Formatter & Beautifier', href: '#' },
    { name: 'JSON Editor', href: '#' },
    { name: 'JSON Validator', href: '#' },
    { name: 'Perl Formatter', href: '#' },
    { name: 'PHP Formatter', href: '#' },
    { name: 'Python Formatter', href: '#' },
    { name: 'Ruby Formatter', href: '#' },
    { name: 'SQL Formatter', href: '#' },
    { name: 'XML Formatter & Beautifier', href: '#' },
  ]
  const internet = [
    { name: 'Email Validator', href: '#' },
    {
      name: 'Is It Up Or Down',
      href: '#',
    },
    { name: 'Default Router Settings', href: '#' },
    { name: 'User Manuals', href: '#' },
    { name: 'What is my IP', href: '#' },
  ]
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const join = () => dispatch({ type: 'show', data: ['join']});
const login = () => dispatch({ type: 'show', data: ['login']});

const NavBar = () => {
    return ( 
      <Disclosure as="nav" className="fixed top-0 z-20 w-full bg-white shadow transition dark:bg-gray-800 dark:text-gray-100">
      {({ open }) => (
        <>
            
            <div className="border-b border-gray-200 px-4 py-3 bg-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="flex-1 min-w-0">
              <a href="/">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt="Workflow"
                      />
                    </a>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
              <div className="hidden lg:ml-6 lg:space-x-8 sm:flex">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Popover className="relative pt-2">
                {({ open }) => (
                    <>
                    <Popover.Button
                        className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                        )}
                    >
                        <span>Web Dev</span>
                        <ChevronDownIcon
                        className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                        aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 transform mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-5 bg-white px-5 py-3">
                            {solutions.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                <p className="font-medium text-sm text-gray-900">{item.name}</p>
                                </a>
                            ))}
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>
                <Popover className="relative pt-2">
                {({ open }) => (
                    <>
                    <Popover.Button
                        className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                        )}
                    >
                        <span>Conversion</span>
                        <ChevronDownIcon
                        className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                        aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-5 bg-white px-5 py-3">
                            {conversion.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="flex -m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                
                                <p className="font-medium text-gray-900">{item.name}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                </a>
                            ))}
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>
                <Popover className="relative pt-2">
                {({ open }) => (
                    <>
                    <Popover.Button
                        className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                        )}
                    >
                        <span>Encoders / Decoders</span>
                        <ChevronDownIcon
                        className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                        aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-5 bg-white px-5 py-3">
                            {encoders.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                <p className="font-medium text-gray-900">{item.name}</p>
                                </a>
                            ))}
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>
                <Popover className="relative pt-2">
                {({ open }) => (
                    <>
                    <Popover.Button
                        className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                        )}
                    >
                        <span>Formatters</span>
                        <ChevronDownIcon
                        className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                        aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-5 bg-white px-5 py-3">
                            {formatters.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                <p className="font-medium text-sm text-gray-900">{item.name}</p>
                                </a>
                            ))}
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>
                <Popover className="relative pt-2">
                {({ open }) => (
                    <>
                    <Popover.Button
                        className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                        )}
                    >
                        <span>Internet</span>
                        <ChevronDownIcon
                        className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                        aria-hidden="true"
                        />
                    </Popover.Button>
                    <button
                      type='button'
                      onClick={join}
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'pl-7 group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                        )}>
                      Join
                    </button>
                    <button
                      type='button'
                      onClick={login}
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'pl-7 group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                        )}>
                      Login
                    </button>
                      
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-5 bg-white px-5 py-3">
                            {internet.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                <p className="font-medium text-gray-900">{item.name}</p>
                                </a>
                            ))}
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>
                </div>
              </div>
            </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
     );
}
 
export default NavBar;