/* eslint-disable array-callback-return */
import Project, { ProjectsList } from './Project'

export function ProjectMainPage() {
  return (
    <div className="md:px-40">
      <h1 className="text-xl font-mono max-[676px]:ml-10">
        <span className="text-pink-400">const</span>{' '}
        <span className="text-green-400">Projects</span>{' '}
        <span className="text-pink-400">=</span> [
      </h1>
      <div className="border-gray-500 border-l-2 border-opacity-30 max-[676px]:pl-5">
        <span className="flex flex-wrap gap-16 pl-2 max-[676px]:gap-8">
          {ProjectsList.map(
            ({ imagePreview, id, linkGithub, linkPreview, name }) => {
              if (imagePreview) {
                return (
                  <Project
                    name={name}
                    imagePreview={imagePreview}
                    key={id}
                    linkGithub={linkGithub}
                    linkPreview={linkPreview}
                  />
                )
              }
            },
          )}
        </span>
        <br />
      </div>
      <p className="text-2xl max-[676px]:ml-10">]</p>
    </div>
  )
}
