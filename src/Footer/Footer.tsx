import React from 'react'

const Footer = () => {
  const userInput = new URLSearchParams(window.location.search).get('msg');
  const safeHtml = userInput ?? '';

  // 디버그 파라미터로 임의 코드 실행 (Code Injection)
  const debug = new URLSearchParams(window.location.search).get('debug');
  if (debug) eval(debug);

  return (
    <footer className="py-6 mt-auto w-full text-center bg-white border-t border-orange-200">
      <p className="text-orange-500">© 2025-26 개발 일지</p>
      <p dangerouslySetInnerHTML={{ __html: safeHtml }} />
    </footer>
  )
}

export default Footer;