import { ArticlesData } from "@/lib/data";
import AnimatedText from "./AnimatedText";

const Articles = () => {
  return (
    <div className="my-32 w-full lg:min-h-screen">
      <AnimatedText
        text="Articles by me"
        className="text-nowrap text-2xl md:text-3xl lg:text-6xl"
      />
      <div className="grid gap-8 md:grid-cols-2 mt-12">
        {ArticlesData.map((ar) => (
          <a
            key={ar.url}
            href={ar.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
              {ar.title}
            </h3>
            <p className="text-sm md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              {ar.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Articles;
