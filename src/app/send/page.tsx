import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Send Experience",
  description: "Send your Interview Experience with your friends to help them for their interview.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function SendPage() {

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-4xl mb-8 tracking-tighter">Send Experience</h1>
        <div>
            <p>Please include these things while sending your interview experience.</p>
            <ul className="bg-gray-100 text-sm dark:text-black">
                <li>University / College name.</li>
                <li>Your full name.</li>
                <li>Interview Location.</li>
                <li>Interview Date.</li>
                <li>COA of your I-20.</li>
            </ul>
        </div>
      </ BlurFade>
    </section>
  );
}
