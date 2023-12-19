/* eslint-disable @next/next/no-img-element */
export default function Project() {
  return (
    <article
      id="card"
      className="grid shadow-xl place-items-center w-fit mt-8 bg-gradient-to-tr from-gray-700 via-gray-900 to-slate-800 p-10 rounded-2xl"
    >
      <div className="w-96 relative">
        <div className=" ">
          <img
            src="https://raw.githubusercontent.com/pedrohenrikle/ignite-call/main/.github/preview.png"
            alt=""
            className="w-full object-cover aspect-[16/9] rounded-lg"
            id="inner"
          />
        </div>
        <img
          src="https://raw.githubusercontent.com/pedrohenrikle/ignite-call/main/.github/logo.png"
          alt=""
          className="w-60 mx-auto -mt-10 inset-0 absolute"
          id="title"
        />
      </div>
    </article>
  )
}
