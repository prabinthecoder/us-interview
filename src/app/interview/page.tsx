import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getInterviewPosts } from "@/data/interview";

export const metadata = {
  title: "Interview Experience",
  description: "My thoughts on US student visa, interview, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function InterviewPage() {
  const posts = await getInterviewPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-4xl mb-8 tracking-tighter">Interview Experience</h1>
      </ BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <ProjectCard
                key={post.metadata.title}
                title={post.metadata.title}
                href={`/interview/${post.slug}`}
                dates={post.metadata.publishedAt}
                image={post.metadata.image}
                status={post.metadata.status}
                authorName={post.metadata.authorName}
                authorUrl={post.metadata.authorUrl}
                attempt={post.metadata.attempt}
                interviewDate={post.metadata.interviewDate}
                country={post.metadata.country}
              />
            </BlurFade>
          ))}
      </div>
    </section>
  );
}


