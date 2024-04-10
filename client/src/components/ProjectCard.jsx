const ProjectCard = ({ title, description, image, link, githubRepo }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        ) : (
          <span className="text-gray-500">Project link coming soon!</span>
        )}
        {githubRepo && (
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-4"
          >
            GitHub Repo
          </a>
        )}
      </div>
    );
  };
  
  export default ProjectCard;