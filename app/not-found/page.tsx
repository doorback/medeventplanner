import React from 'react'
import Link from "next/link";

const Custom404 = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '50px' }}>
      <img src="/Error.png" alt="error" className="error-image mb-8" />
     <h1 className="error-text 2x1">Что-то пошло не так</h1>
      <p className="error-text2">Попробуйте еще раз</p>
      <p><Link href="/"></Link></p>
      <button className="retry">
  Повторить попытку
</button>
    </div>
  );
}

export default Custom404;