import { SVGProps } from 'react';
function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
        clipRule="evenodd"></path>
    </svg>
  );
}

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}>
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z"></path>
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"></path>
        <path fill="currentColor" d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path>
      </g>
    </svg>
  );
}

function Mastercard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="currentColor"
        d="M12.001 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.653m-.87-.582A7.783 7.783 0 0 0 8.402 12a7.783 7.783 0 0 0 2.728 5.926a6.798 6.798 0 1 1 .003-11.854m1.742 11.854A7.783 7.783 0 0 0 15.602 12a7.783 7.783 0 0 0-2.73-5.928a6.798 6.798 0 1 1 .003 11.854"></path>
    </svg>
  );
}

function Visa(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path
        d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963c-.01.85.803 1.329 1.418 1.613c.631.292.842.476.84.737c-.004.397-.504.577-.969.577c-.639 0-.988-.089-1.525-.312l-.199-.093l-.227 1.332c.389.162 1.09.301 1.814.313c1.701 0 2.813-.801 2.826-2.032c.014-.679-.426-1.192-1.352-1.616c-.563-.275-.912-.459-.912-.738c0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067l.227-1.287l-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893l2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275l.168.825l1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199a6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606l.646-1.662c-.008.018.133-.343.215-.566l.111.513l.375 1.714H18.69v.001h.001z"
        fill="currentColor"></path>
    </svg>
  );
}

export { Facebook, Instagram, Mastercard, Visa };
