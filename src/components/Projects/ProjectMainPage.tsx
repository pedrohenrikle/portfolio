/* eslint-disable array-callback-return */
import Project, { ProjectsList } from './Project'

export function ProjectMainPage() {
  return (
    <div className="px-10 lg:px-40">
      <h1 className="text-base md:text-xl font-mono">
        <span className="text-pink-400">const</span>{' '}
        <span className="text-green-400">Projects</span>{' '}
        <span className="text-pink-400">=</span> [
      </h1>
      <div className="border-gray-500 border-l-2 border-opacity-30">
        <span className="flex flex-col flex-wrap gap-16 pl-10 max-[676px]:gap-8 max-w-[70vw]">
          {ProjectsList.map(
            ({
              imagePreview,
              id,
              linkGithub,
              linkPreview,
              name,
              technologies,
              description,
            }) => {
              if (imagePreview) {
                return (
                  <Project
                    name={name}
                    imagePreview={imagePreview}
                    key={id}
                    linkGithub={linkGithub}
                    linkPreview={linkPreview}
                    technologies={technologies}
                    description={description}
                  />
                )
              }
            },
          )}
        </span>
        <br />
      </div>
      <p className="text-base md:text-xl">]</p>
    </div>
  )
}
