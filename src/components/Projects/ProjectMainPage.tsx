/* eslint-disable array-callback-return */
import Project, { ProjectsList } from './Project'

export function ProjectMainPage() {
  return (
    <div className="flex-1 px-40">
      <h1 className="text-xl font-mono">
        <span className="text-pink-400">const</span>{' '}
        <span className="text-green-400">Projects</span>{' '}
        <span className="text-pink-400">=</span> [
      </h1>
      <div className=" border-gray-500 border-l-2 border-opacity-30">
        <span className="flex flex-wrap gap-16 pl-2">
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
      <p className="text-2xl">]</p>
    </div>
  )
}
