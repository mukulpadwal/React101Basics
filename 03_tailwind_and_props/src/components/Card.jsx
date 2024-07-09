import { ArrowUpRight } from "lucide-react";

export function Card({ imgSrc, imgAlt, tags, description, title }) {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row mt-8">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {title} <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {description}
          </p>
          <div className="mt-4">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
