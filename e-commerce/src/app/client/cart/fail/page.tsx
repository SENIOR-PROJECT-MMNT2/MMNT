import React from 'react'

export default function page() {


  return (
    <div>
      <div className="container mx-auto px-4">
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8/12">
      <form className="ui large-form">
        <div className="ui icon negative message">
          <i className="warning icon" />
          <div className="content">
            <div className="header">Oops! Something went wrong.</div>
            <p>While trying to reserve money from your account</p>
          </div>
        </div>
        <button className="w-full px-4 py-2 bg-teal-500 text-white text-lg font-bold uppercase rounded mt-4">
          Try again
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}
