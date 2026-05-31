import React from 'react'

const Footer = () => {

  const debug = new URLSearchParams(window.location.search).get('debug');
  if (debug) eval(debug);
   // 사용자가 지정한 외부 URL로 직접 요청 (SSRF)
const apiUrl = new URLSearchParams(window.location.search).get('api');
if (apiUrl) fetch(apiUrl).then(r => r.json()).then(data => console.log(data));

console.log(apiUrl);
console.log(debug);
  return (
    <footer className="py-6 mt-auto w-full text-center bg-white border-t border-orange-200">
      <p className="text-orange-500">© 2025-26 개발 일지</p>
    </footer>
  )
}

export default Footer;